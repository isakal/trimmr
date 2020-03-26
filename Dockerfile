# copy from docker hub node 12.16.1 image
FROM node:12.16.1

# set the /usr/src/app directory to be target directory for mounting
WORKDIR /usr/src/app

# make sure both package.json and package-lock.json are copied
COPY package*.json ./

# install all the dependencies
RUN npm install

# expose port 5000 for portforwarding
EXPOSE 5000

# start the server
CMD npm start