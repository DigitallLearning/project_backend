const conn=require("./connection")
const pschema=require("./schema")
const express=require("express")

const app=express()
app.use(express.static("public"))
app.use(express.json())
const cors=require("cors")
app.use(cors())
const multer=require("multer")
const storage=multer.diskStorage({
      destination:(req,file,cb)=>{
         cb(null,"public/uploads/")
      },
      filename:(req,file,cb)=>{
         cb(null,file.originalname)
      }
})
const upload=multer({storage:storage}).single("image")
app.post("/",(req,resp)=>{
   upload(req,resp,(err)=>{
      if(err)
      {
        resp.send(err)
      }
      else{
          const data=new pschema({
            id:req.body.id,
            title:req.body.title,
            price:req.body.price,
            description:req.body.description,
            category:req.body.category,
            image:"http://localhost:4000/uploads/"+req.file.filename
          })
          data.save()
          resp.send("Bahut bahut bhdhai ho")
      }
   })
})
app.get("/",async (req,resp)=>{
  const data=  await pschema.find()
  resp.send(data)
})
app.listen(4000)
