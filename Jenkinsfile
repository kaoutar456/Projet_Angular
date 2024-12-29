pipeline {
    agent any

    environment {
        // Utilisation de NodeJS installé dans Jenkins
        NODE_HOME = tool name: 'NODEJS' // Nom de l'installation de Node.js dans Jenkins
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }

    stages {
        // Etape de récupération du code source depuis GitHub
        stage('Checkout') {
            steps {
                // Vérifie et récupère le code depuis le dépôt Git
                checkout scm
            }
        }

        // Etape d'installation des dépendances (npm install)
        stage('Install Dependencies') {
            steps {
                // Installation des dépendances du projet Angular via npm
                script {
                    // Vérifie si `npm` est installé et puis exécute l'installation
                    sh 'npm install'
                }
            }
        }

        // Etape de build (construction du projet Angular)
        stage('Build') {
            steps {
                // Exécute la commande de build pour l'application Angular
                script {
                    sh 'npm run build'
                }
            }
        }

        // Etape de test (exécution des tests unitaires)
        stage('Test') {
            steps {
                // Exécution des tests unitaires avec Angular
                script {
                    sh 'npm test -- --watch=false --browsers=ChromeHeadless'
                }
            }
        }

    }

    // Etapes après la fin du pipeline (succès ou échec)
    post {
        always {
            // Nettoyage du workspace après chaque exécution du pipeline
            cleanWs()
        }

        success {
            // Message en cas de succès
            echo 'Pipeline exécutée avec succès !'
        }

        failure {
            // Message en cas d'échec
            echo 'La pipeline a échoué.'
        }
    }
}
