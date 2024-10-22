const form = document.getElementById('formContainer') as HTMLFormElement;
const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    submitButton.disabled = true;
    submitButton.classList.add('opacity-50', 'cursor-not-allowed');

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const subject = (document.getElementById('subject') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;

    if (!name || !email || !phone || !subject || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    const formData = {
        name,
        email,
        phone,
        subject,
        message
    };

    console.log('Form Data Submitted:', formData);

    fetch('https://671782c7b910c6a6e0289ae8.mockapi.io/risshabsingla/submitForm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Your message has been sent successfully!');
        form.reset(); 

        submitButton.disabled = false;
        submitButton.classList.remove('opacity-50', 'cursor-not-allowed');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again later.');

        submitButton.disabled = false;
        submitButton.classList.remove('opacity-50', 'cursor-not-allowed');
    })
});
