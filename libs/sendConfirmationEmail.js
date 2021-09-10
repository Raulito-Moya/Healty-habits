const sendEmail = require('../config/nodemailer') ;

const sendConfirmationEmail = async (url,email) =>{

try{

  const emailOptions = {

     from: `Healty Blog " <${process.env.OAUTH_USER}> `, 
    to: email, 
    subject: "Confirmación de cuenta de Email", 
    html: `
    <div style= "max-width:600px; margin: 0 auto;">
      <h1 style="text-align: center;
    color: #5f6368;
        padding-bottom: 20px;
   ">Bienvenido/a!</h1>


    <p style="
        margin: 0;
        font-size: 16px;
        ">
        ✌✌ Almost you will have you new password only press the next botom 👇👇 and We redirect you to the password form  

        
        </p>
     <div  style="width: fit-content;
margin: 40px auto;
    " ><a href="${url}" target="_blank" style=" font-size: 16px;
    font-family: Helvetica,Arial,sans-serif;
    color: #222;
    cursor:pointer;
    text-decoration: none;
    padding: 10px 20px;
  border: 2px solid #202124;
    background: #fcba1c;
    font-weight: 600;
    display: inline-block;">CONFIRMAR CUENTA</a></div>

           <p style="  margin-bottom:0;   font-size: 16px;">If this now work please type the next link in the browser </p>
    
      <p style="text-align:center; margin:10px 0;  font-size: 16px;"><a href="#" target="_blank" style="color: black;">${url}</a></p>

  <p style="  font-size: 16px;">If you have any question please contact us </p>
  <div>
      <p style="    font-size: 16px;
    padding: 30px 0;
    background: #ffd5a1;
        color: #5f6368;
    text-align: center;">Greetings, of Healty Habits</p>
`,
  }

 await  sendEmail(emailOptions)
  
}catch(err){
console.log(err)
  
}

}

module.exports = sendConfirmationEmail