document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Loaded");

    // Selecting all the required Input fields, form and Submit button 
    const form = document.getElementById('registration-form');
    const userName = document.getElementById('username'); // username input field stored in userName
    const email = document.getElementById('email'); // email input field stored in email
    const password = document.getElementById('password'); // password input field stored in password
    const confirmPassword = document.getElementById('confirm-Password'); // confirm password input field stored in confirmPassword
    const submitButton = document.getElementById('submit-btn'); // submit button field stored in submitButton

    // Adding event listener on submitting the form
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Preventing default reload on submit

        validateInputs(); // Calling the function to validate inputs
    });

    const validateInputs = () => {
        // Fetching values from input fields
        const userNameValue = userName.value.trim(); // trim() to remove whitespaces back and forth
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const confirmPasswordValue = confirmPassword.value.trim();

        // Validation Rules

        // 1. Username Validation
        if (userNameValue === '') {
            setError(userName, 'Username is required');
        } else if (!/^[a-zA-Z0-9]+$/.test(userNameValue)) {
            setError(userName, 'Username must be alphanumeric');
        } else if (userNameValue.length < 3 || userNameValue.length > 15) {
            setError(userName, 'Username must be 3-15 characters long');
        } else {
            setPassed(userName);
        }

        // 2. Email Validation
        if (emailValue === '') {
            setError(email, 'Email is required');
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailValue)) {
            setError(email, 'Enter a valid email address');
        } else {
            setPassed(email);
        }

        // 3. Password Validation
        if (passwordValue === '') {
            setError(password, 'Password is required');
        } else if (passwordValue.length < 8) {
            setError(password, 'Password must be at least 8 characters long');
        } else if (!/[A-Z]/.test(passwordValue)) {
            setError(password, 'Password must contain at least one uppercase letter');
        } else if (!/[a-z]/.test(passwordValue)) {
            setError(password, 'Password must contain at least one lowercase letter');
        } else if (!/\d/.test(passwordValue)) {
            setError(password, 'Password must contain at least one digit');
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(passwordValue)) {
            setError(password, 'Password must contain at least one special character');
        } else {
            setPassed(password);
        }

        // 4. Confirm Password Validation
        if (confirmPasswordValue === '') {
            setError(confirmPassword, 'Confirm Password is required');
        } else if (confirmPasswordValue !== passwordValue) {
            setError(confirmPassword, 'Passwords do not match');
        } else {
            setPassed(confirmPassword);
        }

    }

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorField = inputControl.querySelector('.error-message');
        errorField.innerText = message;
    };

    const setPassed = (element) => {
        const inputControl = element.parentElement;
        const errorField = inputControl.querySelector('.error-message');
        errorField.innerText = ''; // Clear any existing error message
    };
})

