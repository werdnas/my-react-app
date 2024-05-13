pipeline {

environment {
    dockerimagename = "a3-auth-frontend"
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



    stage('Deploy to Kubernetes') {

      steps {

        kubernetesDeploy(

          configs: 'deployment.yaml,service.yaml',

          kubeconfigId: 'my-kubeconfig'

        )
        

      }

    }

  }

}
