pipeline {
    agent any

    environment {
        NODE_HOME = tool name: 'NODEJS' // Utilisation de Node.js configuré dans Jenkins
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Récupérer le code source depuis GitHub
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    // Installer les dépendances avec npm
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Lancer le build de l'application Angular
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Lancer les tests unitaires (modifier ou commenter si non applicable)
                    sh 'npm test'
                }
            }
        }

       
    }

    post {
        always {
            // Nettoyer le workspace à la fin
            cleanWs()
        }
        success {
            echo 'Pipeline exécutée avec succès !'
        }
        failure {
            echo 'La pipeline a échoué.'
        }
    }
}
