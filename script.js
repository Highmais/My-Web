/*const button = document.getElementById('actionBtn');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    message.textContent = "Button clicked! JavaScript is working.";
    message.style.color = "green";
    console.log("The interactive button was pressed!");
});*/
var answers = []
var locations = ["Backstretch","Barley Hopsters","Buns","Hamburger Inn","Oak and Brazen","Old Dog","Opa","Restoration","Roops","Solar Saloon","Son of Thurmans","Staas Brewing"]
const myForm = document.getElementById('userForm');

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    //Send to google spreadsheet
    console.log("Form Data Collected:", data);
    //alerts browser window
    alert(`Hello ${data.username} from ${data.location}!`);
});
function doTheMath()
{
    //Splice string to just have number, based on what number location check if list[location] == answer
    for(var i = 0;i < locations.length; i++)
    {
        if(i == Number(data.location.slice(8)))    
        {
            
        }
    }
}