/*const button = document.getElementById('actionBtn');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    message.textContent = "Button clicked! JavaScript is working.";
    message.style.color = "green";
    console.log("The interactive button was pressed!");
});*/
const myForm = document.getElementById('userForm');

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    console.log("Form Data Collected:", data);
    alert(`Hello ${data.username} from ${data.location}!`);
});