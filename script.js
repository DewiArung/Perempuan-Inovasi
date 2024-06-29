function handleGetFormData() {
    return {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        city: document.getElementById('city').value,
        zipCode: document.getElementById('zip-code').value,
        status: document.getElementById('status').checked
    };
}

function isNumber(str) {
    return !isNaN(str) && str.trim() !== '';
}

function checkboxIsChecked() {
    const formData = handleGetFormData();
    return formData.status;
}

function validateFormData(data) {
    return data !== null &&
           isNumber(data.zipCode) &&
           checkboxIsChecked();
}

function submit(event) {
    event.preventDefault();

    const formData = handleGetFormData();
    const isValid = validateFormData(formData);

    const warningDiv = document.getElementById('warning');
    if (isValid) {
        warningDiv.textContent = '';
    } else {
        warningDiv.textContent = 'Periksa form anda sekali lagi';
    }
}

document.getElementById('form-register-login').addEventListener('submit', submit);