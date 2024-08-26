
//  1st model serverCREATEtype

// const http= require("http")

// const server=http.createServer((req,res)=>{

//   res.write("hello WORLD")
//   res.end()

// }).listen(3001,()=>{

//     console.log("server runnin on");
// })



// standerdtype

const http= require("http")

const server= http.createServer((req,res)=>{

    res.write("hello my guys")
    res.end();
     
})

const port= process.env.PORT||3001

server.listen(port,()=>{
    console.log("sever running on");
})







 
