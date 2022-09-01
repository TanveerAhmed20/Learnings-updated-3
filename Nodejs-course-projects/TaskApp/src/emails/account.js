//yarn add @sendgrid/mail
const sgMail = require('@sendgrid/mail');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname,`../../${process.env.NODE_ENV}.env`) });
sgMail.setApiKey(process.env.SENDGRID_APIKEY);
// sgMail.send({
//     to:'outsider000000@gmail.com',
//     from :'tnvrahmed98@gmail.com',
//     subject: "this is my first creation",
//     text : "i hope this one actually get to"
// })


const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from :'tnvrahmed98@gmail.com',
        subject: "Thanks for joining in!",
        text : `Welcome to the app , ${name} Let me know how you get along with the app`
    })    
}

// Goal : send email to user on cancellation 
// 1. setup a new funtion for sending an email on cancellation 
// 2. include their name in the email and ask why tyhey cancelled 
// 3. call it just afte rthe account is removed 
// 4. Run the request and check your inbox!

const sendCancellationEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from :'tnvrahmed98@gmail.com',
        subject: "Will see you soon in the future",
        text : `Thanks for using the app , ${name} HOpe you enjoyed the experience`
    })    
}

const sendForgotPassword = (email,password) => {
    sgMail.send({
        to:email,
        from :'tnvrahmed98@gmail.com',
        subject: "Password Retreived",
        text : `Your password is ${password}`
    }) 
}
module.exports = {
    sendForgotPassword , 
    sendWelcomeEmail,
    sendCancellationEmail
}

