package main

import (
	"context"
	"log"
	"net"

	"google.golang.org/grpc"

	api "github.com/envoyproxy/go-control-plane/envoy/api/v2"
	core "github.com/envoyproxy/go-control-plane/envoy/api/v2/core"
	endpoint "github.com/envoyproxy/go-control-plane/envoy/api/v2/endpoint"
	discovery "github.com/envoyproxy/go-control-plane/envoy/service/discovery/v2"
	"github.com/envoyproxy/go-control-plane/pkg/cache"
	xds "github.com/envoyproxy/go-control-plane/pkg/server"
)

type UpStream struct {
	Address string
	Port    uint32
}

func (ups *UpStream) setEndpoint() *endpoint.Endpoint {
	return &endpoint.Endpoint{
		Address: &core.Address{
			Address: &core.Address_SocketAddress{
				SocketAddress: &core.SocketAddress{
					Address:       ups.Address,
					PortSpecifier: &core.SocketAddress_PortValue{PortValue: ups.Port},
				},
			},
		},
	}
}

func setCluster(name string, ep *endpoint.Endpoint) *api.ClusterLoadAssignment {
	return &api.ClusterLoadAssignment{
		ClusterName: name,
		Endpoints: []*endpoint.LocalityLbEndpoints{
			&endpoint.LocalityLbEndpoints{
				LbEndpoints: []*endpoint.LbEndpoint{
					&endpoint.LbEndpoint{
						HostIdentifier: &endpoint.LbEndpoint_Endpoint{
							Endpoint: ep,
						},
					},
				},
			},
		},
	}
}

func main() {
	// Define Server configuration
	var endpoints []cache.Resource
	u1 := &UpStream{"10.0.2.1", 8011}
	ep1 := u1.setEndpoint()
	endpoints = append(endpoints, setCluster("customer", ep1))
	u2 := &UpStream{"10.0.2.2", 8013}
	ep2 := u2.setEndpoint()
	endpoints = append(endpoints, setCluster("product_owner", ep2))

	snapshotCache := cache.NewSnapshotCache(false, cache.IDHash{}, nil)
	snapshot := cache.NewSnapshot("1.0", endpoints, nil, nil, nil, nil)
	_ = snapshotCache.SetSnapshot("node1", snapshot)

	server := xds.NewServer(context.Background(), snapshotCache, nil)
	grpcServer := grpc.NewServer()
	lis, err := net.Listen("tcp", ":8001")
	if err != nil {
		log.Fatalf("Control-plane failed to listen. reason: %s", err)
	}

	// Server registration and serve.
	discovery.RegisterAggregatedDiscoveryServiceServer(grpcServer, server)
	api.RegisterEndpointDiscoveryServiceServer(grpcServer, server)
	//api.RegisterClusterDiscoveryServiceServer(grpcServer, server)
	//api.RegisterRouteDiscoveryServiceServer(grpcServer, server)
	//api.RegisterListenerDiscoveryServiceServer(grpcServer, server)
	go func() {
		if err := grpcServer.Serve(lis); err != nil {
			log.Fatalf("Control-plane failed to serve. reason: %s", err)
		}
	}()
}
