#NODE VERSION
FROM node:20-alpine   

#create a app directory
WORKDIR /app

#INSTALLED THE DEPENDENCY
COPY package.json ./

#Run npm install 
RUN npm install 

#bundle app source 
COPY . .

EXPOSE 4005

CMD [ "npm" ,"start"]