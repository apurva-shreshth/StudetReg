function validateForm(){ // Prevent the form from submitting the traditional way

    // Get the email and password values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can add more complex validation as needed)
    if (email === '' || password === '') {
        displayError('Please fill in all fields.');
        return;
    }

    // Simulate a login process (replace this with actual authentication logic)
    /*if (email === 'student@example.com' && password === 'password123') {
        alert('Login successful!');
        // Redirect to another page or perform other actions
        window.location.href = 'welcome.html'; // Redirect to a welcome page
    } else {
        displayError('Invalid email or password.');
    }*/
}

// Function to display error messages
function displayError(message) {
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = message;
}