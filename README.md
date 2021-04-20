1) git clone https://github.com/vasuniac/qantas_qa_challenge.git
2) cd qantas_qa_challenge
3) Make sure the docker is installed and the daemon is running on your local machine
4) docker-compose build cypress
5) To run the api tests >> docker-compose run cypress npm run api_tests
6) To run the ui tests >> docker-compose run cypress npm run ui_tests
7) Once the tests are completed (5 or 6 or both), navigate to https://dashboard.cypress.io/projects/nv5sz7/runs to view the test results on Cypress Dashboard. You will have to login with your existing google or github account or any other signed up email