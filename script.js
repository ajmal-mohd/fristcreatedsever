
const http= require("http")

const server=http.createServer((req,res)=>{

  res.write("hello WORLD")
  res.end()

}).listen(3001,()=>{

    console.log("server runnin on");
})

