document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let emailAddress = document.getElementById('email_address').value;
    let department = document.getElementById('department').value;
    let title = document.querySelector('input[name="title"]:checked') ? document.querySelector('input[name="title"]:checked').value : '';
    let website = document.getElementById('website').value;
    let phoneNumber = document.getElementById('phone_number').value;
    let drTitle = document.getElementById('dr_title').checked;

    // Validation for phone number
    let phonePattern = /^\d{10}$/;
    if (phoneNumber && !phonePattern.test(phoneNumber)) {
        alert('Invalid phone number. Please enter a 10-digit number.');
        return;
    }

    // Add 'Dr.' title if checked
    if (drTitle) {
        title = 'Dr. ' + title;
    }

    // Display the results
    let result = `<h2>Submitted Information</h2>`;
    result += `<p><strong>Full Name:</strong> ${title} ${firstName} ${lastName}</p>`;
    result += `<p><strong>Department:</strong> ${department}</p>`;
    result += `<p><strong>Email:</strong> <a href="mailto:${emailAddress}">${emailAddress}</a></p>`;

    if (website) {
        result += `<p><strong>Website:</strong> <a href="${website}" target="_blank">${website}</a></p>`;
    }

    if (phoneNumber) {
        result += `<p><strong>Phone Number:</strong> ${phoneNumber}</p>`;
    }

    document.getElementById('result').innerHTML = result;
});
