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

Please build the app image before deploy.
`git clone https://github.com/y-harashima/platform-sample.git`  
`cd platform-sample`  
`docker-compose -f docker-compose.app.yml build`  
  
And hit these commands to deploy.    
`kubectl apply -f kube/platform-sample.yaml`  
`kubectl apply -f kube/platform-gateway.yaml`  

Deploy is complete.  
<br>
  
## Usage
You can try gRPC routing from react app.
  
Please hit these commands to run React app container, and open your browser.  
`docker-compose build`  
`docker-compose up -d`  
`open http://localhost:3000`  

If you input the top of textarea and click buttons, message will display below.
  
<br>  

## Author
Yui Harashima