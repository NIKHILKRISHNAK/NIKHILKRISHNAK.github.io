function Validation() {
    let EmailInput = document.getElementById("email").value;
    if (!isValidEmail(EmailInput)) {
        document.getElementById("messagep").innerHTML = "Please enter a valid email !";
        let form = document.querySelector('#myform');
        event.preventDefault();
    }
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}