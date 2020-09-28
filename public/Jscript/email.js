$(document).ready(function () {  


    $('#send').click(function(e){
        
        const userEmail = $('#email').val();
        const emailContent = $('#content').val();
        const name = $('#name').val();
console.log('Email: ' + userEmail);
console.log('emailContent: ' + emailContent);
        
        const userInfo = {
            email : userEmail,
            emailBody: emailContent, 
            userName: name 
        }
        console.log('from front end', userInfo);
        $.ajax({
            type:"POST",
            url: "/sendmail",
            data: userInfo,
            dataType: "dataType",
            success: function (response) {
               userEmail.text("")
               emailContent.text('')
               name.text('');
            }
        });
  
        });
    });
    // $('#email').val("You should hear from us soon!")
    // $('#business').val('#######')
    // $('#content').val('########');
    // $('#name').val('Thanks for reaching out');
    // $('#content').val('#######')