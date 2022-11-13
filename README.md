Simple api to get books and request borrow books

npm start or pm2 start server.js 

get books
http://localhost:3003
method : get

request borrowing book
http://localhost:3003/borrow
method : post
body :
{"pickup_schedule" :"2022-12-17"}


or with docker 
docker build . -t singledeveloper/books
docker images
docker run -it -p 3003:3003 singledeveloper/books
docker ps