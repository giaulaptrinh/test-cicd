pipeline {
    agent any

    environment {
        SERVER = '157.230.253.196'
        USER = 'root'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'Github-Token-Lab3.06',
                    url: 'https://github.com/giaulaptrinh/test-cicd.git'
            }
        }

        stage('Test SSH') {
            steps {
                sshagent(credentials: ['SSH-key-giaulee1']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ${USER}@${SERVER} \
                        "echo '✅ SSH OK'"
                    """
                }
            }
        }

        stage('Deploy') {
            steps {
                sshagent(credentials: ['SSH-key-giaulee1']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ${USER}@${SERVER} '
                            cd /root/test-cicd &&
                            git pull origin main &&

                            docker-compose down || true

                            docker rm -f nest-docker mongodb || true

                            docker-compose up --build -d
                        '
                    """
                }
            }
        }
    }

    post {
        success {
            echo '✅ Deploy thành công'
        }

        failure {
            echo '❌ Deploy thất bại'
        }
    }
}
