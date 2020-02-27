/**
 * @fileoverview gRPC-Web generated client stub for sample
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  OwnerMessage,
  ProductOwnerRequest} from './sample_pb';

export class ProductOwnerClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoSayName = new grpcWeb.AbstractClientBase.MethodInfo(
    OwnerMessage,
    (request: ProductOwnerRequest) => {
      return request.serializeBinary();
    },
    OwnerMessage.deserializeBinary
  );

  sayName(
    request: ProductOwnerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: OwnerMessage) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/sample.ProductOwner/SayName',
      request,
      metadata || {},
      this.methodInfoSayName,
      callback);
  }

}

