pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Installer les dépendances
                    sh 'npm install'
                }
            }
        }
        stage('Build Project') {
            steps {
                script {
                    // Exécuter la construction du projet Angular
                    sh 'npm run build --prod'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    // Exécuter les tests
                    sh 'npm test'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Déployer le projet (exemple avec scp)
                    sh 'scp -r dist/* user@server:/path/to/deployment'
                }
            }
        }
    }
    post {
        always {
            // Actions à effectuer après le pipeline, même en cas d'échec
            echo 'Pipeline terminé.'
        }
    }
}
