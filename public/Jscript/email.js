$(document).ready(function () {  


    $('#send').click(function(e){
        
        const userEmail = $('#email').val();
        const emailContent = $('#content').val();
        const name = $('#name').val();

        $('#email').val(" ");
        $('#content').val('')
        $('#name').val('');

        if(userEmail === ''|| name === ''){
            alert('User Name or Email is Empty');
        }

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
            success: function (res) {
                console.log('resssss ', res);
                console.log('success!')
                alert('Your email has been recieved, we should be in contact shortly! \n Ragards, ')
            }
              
        });
       
        });
    });
    // $('#email').val("You should hear from us soon!")
    // $('#business').val('#######')
    // $('#content').val('########');
    // $('#name').val('Thanks for reaching out');
    // $('#content').val('#######')