1) git clone this repository
2) cd qantas_qa_challenge
3) Make sure the docker daemon is installed and running on your local machine
4) docker-compose build cypress
5) To run the api tests >> docker-compose run cypress npm run api_tests
6) To run the ui tests >> docker-compose run cypress npm run ui_tests