pipeline {
    agent any

    tools {
        git 'Git-Installation' // Référence à l'installation de Git configurée précédemment
    }

    stages {
        stage('Checkout') {
            steps {
                // Vérifie et récupère le code depuis le dépôt Git
                checkout scm
            }
        }
    }
}
