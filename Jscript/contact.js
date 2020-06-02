const Fname = document.getElementById("Fname");
const Lname = document.getElementById("Lname");
const phone = document.getElementById("Phone");
const email = document.getElementById("email");
const form  = document.getElementById('form');
const error = document.getElementById('error');
form.addEventListener('submit', (e)=>{
let messages = [];

if(Fname.value === ''|| Fname.value==null){
    messages.push('Name is required');
}
if(Lname.value ===''|| Lname.value==null){
    messages.push('Last name required');
}
if(email.value ===''|| email.value == null){
    messages.push('Valid email required');
}
if(messages.length > 0){
    e.preventDefault();
    error.innerText = messages.join(', ');    
}
});

function sendEmail() {
	Email.send({
	Host: "smtp.elascticemail.com",
	Username : "stachesites@gmail.com",
	Password : "8F22D19A79A028D567AB803E88CE050F3B00",
	To : 'shonezack@yahoo.com',
	From : "stachesites@gmail.com",
	Subject : "<test>",
	Body : "<testing the function>",
	}).then(
		message => alert("mail sent successfully")
	);
}