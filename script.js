document.getElementById('serviceRequestForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;

    if (!name || !email || !date) {
        alert('Please fill out all fields.');
        event.preventDefault();
    }
});