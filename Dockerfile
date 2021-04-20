FROM cypress/browsers:node14.16.0-chrome89-ff77
RUN node --version
RUN npm --version
WORKDIR ./
# copy cypress content
COPY cypress ./cypress
COPY cypress.json ./
COPY package.json ./
COPY package-lock.json ./

RUN npm ci
RUN $(npm bin)/cypress verify
