pipeline {

environment {
    dockerimagename = "andrewsk8s/a3-auth-frontend"
    dockerImage = ""
  }
  
    agent any 



  stages {

    stage('Clone repository') {

      steps {

        git 'https://github.com/werdnas/my-react-app.git'

      }

    }
    
    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build dockerimagename
        }
      }
    }
	
	
    stage('Pushing Image') {
      environment {
               //registryCredential = 'docker-hub-andrews.gs'
               registryCredential = 'dockerhub-andrews.kubernetes'
           }
      steps{
        script {
            docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
            dockerImage.push("latest")
          }
        }
      }
    }




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

}
