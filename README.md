# Platform Sample ( gRPC Service Mesh )
Sample project for Service Mesh on gRPC.

<br>

## How to install

At first, prepare in advance:  
- `kubectl` (kubernetes command-line tool)  
- `kubernetes for docker desktop` or `minikube`
   
  
### 1. Install istio

Hit the commands below:  
`curl -L https://istio.io/downloadIstio | sh -`  
`cd istio-*`  
`export PATH=$PWD/bin:$PATH`  
You can use `istioctl` command.

### 2. Deploy istio-system on your local kubernetes.

On the terminal that used at first step, continue typing this command.  
`istioctl manifest apply --set profile=demo`  
  
istio-system will deploy.  
When you type this command, you can check to system is running if you want.  
`kubectl get svc -n istio-system`  
`kubectl get po -n istio-system`  

### 3. Deploy platform sample on your local kubernetes.
  
Hit these commands to deploy.  
`git clone https://github.com/y-harashima/platform-sample.git`  
`cd platform-sample`  
`kubectl apply -f kube/platform-sample.yaml`  
`kubectl apply -f kube/platform-gateway.yaml`  

Deploy is complete.  
<br>
  
## Usage
Sorry, this section is work in progress.
  
<br>  

## Author
Yui Harashima