$(document).ready(function () {
//const userEmail = document.getElementById('email').value; 
// const userEmail = $('#email').text();
// const emailContent = $('#content').val();


    $('#send').click(function(){
        const userEmail = $('#email').val();
        const emailContent = $('#content').val();
    console.log('Email: ' + userEmail);
    console.log('emailContent: ' + emailContent);

        Email.send({
                SecureToken : "d3ed9c5d-7d09-4951-80ed-7b25cdd4fb32",
                To : "lareaufilms@gmail.com",
                From : userEmail,
                Subject : "Intrested in working together",
                Body : emailContent
        }).then(
                message => alert(message)
                );
        });
        
        });