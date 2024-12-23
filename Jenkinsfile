pipeline {
    agent any

    stages {
        // Étape 1 : Cloner le projet
        stage('Cloner le projet') {
            steps {
                git 'https://github.com/kaoutar456/Projet_Angular.git'
            }
        }
}

stage('Analyse SonarQube') {
    steps {
        withSonarQubeEnv('SonarQube') {
            sh 'npm install'
            sh 'npm run sonar'
        }
    }
}

stage('Build') {
    steps {
        sh 'npm install'
        sh 'ng build --prod'
    }
}

stage('Build Docker Image') {
    steps {
        sh 'docker build -t kaoutar2khat/my-angular-project .'
    }
}


stage('Push Docker Image') {
    steps {
        sh 'docker tag kaoutar2khat/my-angular-project kaoutar2khat/my-angular-project:latest'
        sh 'docker push kaoutar2khat/my-angular-project:latest'
    }
}

stage('Deploy and Run') {
    steps {
        sh 'docker run -d -p 5000:5000 kaoutar2khat/my-angular-project:latest'
    }
}

}