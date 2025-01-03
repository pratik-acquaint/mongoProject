#NODE VERSION
FROM node:20-alpine   

#Define a build argument
# ARG ENVIRONMENT=development

#Set environment variables conditionally
# ENV DB_URL=${ENVIRONMENT}-db-url

#create a app directory
WORKDIR /app

#INSTALLED THE DEPENDENCY
COPY package.json ./

#Run npm install 
RUN npm install 

#bundle app source 
COPY . .

#run on this PORT
EXPOSE 4005

CMD [ "npm" ,"start"]