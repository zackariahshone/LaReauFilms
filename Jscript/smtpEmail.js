$(document).ready(function () {  
    $('#send').click(function(){
        const userEmail = $('#email').val();
        const emailContent = $('#content').val();
        const name = $('#name').val();
console.log('Email: ' + userEmail);
console.log('emailContent: ' + emailContent);

    Email.send({
        SecureToken : "d3ed9c5d-7d09-4951-80ed-7b25cdd4fb32",
            To : "lareaufilms@gmail.com",
            From : 'lareaufilms@gmail.com',
            Subject :name + " is intrested in working together",
            Body : emailContent + "\n" + userEmail + ' was provided to reach back out on'
    }).then(
        message => alert(message)
            );
            $('#email').text("You should hear from us soon!")
            $('#content').text('');
            $('#name').text('Thanks for reaching out');
        });
    });