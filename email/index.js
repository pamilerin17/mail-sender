(function() {
    emailjs.init('service_z7jugq8'); // Replace with your EmailJS user ID
})();

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const status = document.getElementById('status');

    // Prepare the email parameters
    const templateParams = {
        from_name: userName,
        from_email: userEmail,
        to_name: 'bashirtaiwo59@gmail.com', // Replace with the recipient's name
        subject: subject,
        message_html: message
    };

    // Send the email using EmailJS
    emailjs.send('service_z7jugq8', 'template_5v7m2vl', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            status.innerHTML = 'Email sent successfully!';
            status.style.color = 'green';
        }, function(error) {
            console.error('FAILED...', error);
            status.innerHTML = 'Failed to send email.';
            status.style.color = 'red';
        });

    // Clear the form
    document.getElementById('emailForm').reset();
});
