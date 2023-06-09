require("dotenv").config();
const nodemailer = require("nodemailer");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

module.exports =  ((sendMailToArg,fileNameArg)=>{
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"dhruvsalehittal6977@gmail.com",
            pass:process.env.pass
        }
    });

    const mailOptions = {
        from:"dhruvsalehittal6977@gmail.com",
        to:sendMailToArg,
        subject:"Word To Pdf Converter",
        text:"Your word file is successfully converted to "+fileNameArg+" and you can download it from attachment.",
        attachments:{
            filename:fileNameArg,
            path:__dirname+"/downloads/"+fileNameArg,
        }
    }
   transporter.sendMail(mailOptions,(err,info)=>{
        if(err){console.log(err);}
        else{
            console.log("Email sent!" + info.response);
        }
    });  

});
