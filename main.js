document.getElementById('booking-form').addEventListener('submit', function (e) {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let service = document.getElementById('service').value;
  let appointment = document.getElementById('appointment').value;

  if (name && email && service && appointment) {
    alert('Booking Successful!');
    // Logic to send data to backend could be implemented here.
    this.reset();
  } else {
    alert('Please fill all the fields.');
  }
});


function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
}
