## To run the tests locally in a non-containerised mode, do the following:

1) git clone https://github.com/vasuniac/qantas_qa_challenge.git
2) cd qantas_qa_challenge
3) To run the api tests >> npm run api_tests
4) To run the ui tests >> npm run ui_tests


## To run the tests locally in a containerised mode using docker-compose, do the following:

1) git clone https://github.com/vasuniac/qantas_qa_challenge.git
2) cd qantas_qa_challenge
3) Make sure the docker is installed and the daemon is running on your local machine
4) docker-compose build cypress
5) To run the api tests >> docker-compose run cypress npm run api_tests
6) To run the ui tests >> docker-compose run cypress npm run ui_tests


## To automatically run the tests on AWS CodeBuild:
1) git clone https://github.com/vasuniac/qantas_qa_challenge.git
2) Modify something in the repository, code or Readme, etc..
3) git add . (or provide the exact filename instead of .)
4) git commit -m 'message'
5) git push origin main
6) Once pushed, the AWS CodeBuild job should automatically get triggered. The test report can then be seen as per below.


## Test Results / Report
Once the tests are completed the results / report will be available on https://dashboard.cypress.io/projects/nv5sz7/runs
You will have to login with your existing google or github account or any other signed up email