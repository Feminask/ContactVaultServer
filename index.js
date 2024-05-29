const json_server=require('json-server');
const middleware=json_server.defaults();
const video_server=json_server.create() ;
const router=json_server.router('db.json');
const cors=require('cors')
// The above code will create a server
video_server.use(cors())
// create middleware for converting json-js
video_server.use(middleware)
video_server.use(router)

const port=9000;
video_server.listen(port,()=>{
    console.log(`The video server started at port  ${port}`);
})