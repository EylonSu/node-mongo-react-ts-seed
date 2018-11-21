start mongod
set DB_CONN_STRING=mongodb://localhost:27017/fss
cd server
start npm run dev
cd ../client
start npm start
exit