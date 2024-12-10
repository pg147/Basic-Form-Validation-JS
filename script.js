// Selecting all the required Input fields, form and Submit button 
const form = document.getElementById('registration-form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const submitButton = document.getElementById('submit-btn');

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

    // 1. For User Name
    if (userNameValue === '') {
        setError(userName, 'Username is required');
    } else {
        setPassed();
    }
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorField = inputControl.querySelector('.error-message');
    errorField.textContent = message;
}

