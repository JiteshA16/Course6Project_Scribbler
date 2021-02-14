var signInModal = document.getElementById('signin-modal');
var signUpModal = document.getElementById('signup-modal');

function showSignInModal() {
    signInModal.style.display = 'block';
}

function showSignUpModal() {
    signUpModal.style.display = 'block';
}

function navigateToSignUp() {
    signInModal.style.display = 'none';
    signUpModal.style.display = 'block';
}