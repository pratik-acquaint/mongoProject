Migration step 

(1) . creating migration file 
 - mingrate-mongo create <name>

(2) . for Run mingration 
 - migrate-mongo up


--------------------------------------------------------------Docker ---------------------------------------------


 (1) Create a Docker Image 
 ---------- sudo docker build -t test-image .
   - -t is tag
   - test-image is a docker image name 

 (2) Command for Listing Images 
   -------- sudo docker image ls

 (3) Command to start server on diff PORT 
  -------- sudo docker run -p 5000:4005 test-image:latest
  - 4500 is default PORT , i m mapping this to 5000

 (4) Command to Expose run container on Multiple PORTS
   -- docker run -p 5000:4005 -p 6000:4005 test-image:latest

 (5)Stop running  Docker Image
   -- docker stop test-image/64475c20cc2a
   -- we can set container name OR ID

   