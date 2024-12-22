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

}