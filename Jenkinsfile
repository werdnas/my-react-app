pipeline {
  
    agent any 




    stage('Deploy to Kubernetes') {

      steps {

        kubernetesDeploy(

          configs: 'deployment.yaml,service.yaml',

          //kubeconfigId: 'my-kubeconfig'
	  kubeconfigId: 'KUBERNETES_CLUSTER_CONFIG'
		

        )
        

      }

    }

}
