/*const button = document.getElementById('actionBtn');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    message.textContent = "Button clicked! JavaScript is working.";
    message.style.color = "green";
    console.log("The interactive button was pressed!");
});*/
const answers = [[1,13,15,7,9,10,2,8,14,11],[]]
var locations = ["Backstretch","Barley Hopsters","Buns","Hamburger Inn","Oak and Brazen","Old Dog","Opa","Restoration","Roops","Solar Saloon","Son of Thurmans","Staas Brewing"]
var myForm = document.getElementById('userForm');
var formData;
var data;
var inputValues = []

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    formData = new FormData(this);
    const inputElements = document.querySelectorAll('.input-field');
    inputValues = Array.from(inputElements).map(input => input.value);
    data = Object.fromEntries(formData.entries());

    //Send to google spreadsheet
    console.log("Form Data Collected:", data);
    //alerts browser window
    doTheMath();
});
function doTheMath()
{
    //Splice string to just have number, based on what number location check if list[location] == answer
    for(var i = 0;i < locations.length; i++)
    {
        //for()
        if(i == Number(data.location.slice(8)))    
        {
            console.log(Number(data.location.slice(8)));
            //change to numbers in any order
            /*
            if(data.answer.length == answer[i].length){
                var amt = 0;
                for(var o=0; 0 < data.answer[i].length;o++)
                {
                    for(var p=0; p < answer[])
                    {01

                    }
                }
            }else
            */
            if(data.answer == answers[i])
            {
                alert("Guess was correct!")
            }else
            {
                alert("Answer was incorrect")
            }
        }
    }
}