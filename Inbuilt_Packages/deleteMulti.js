
const fs = require("fs")

fs.readdir("./backup",(err,data)=>{
    data.forEach((fileName)=>{
        fs.unlink(`./backup/${fileName}`,(err)=>{
            console.log("Deleted successfully",fileName);
        })
    })
})