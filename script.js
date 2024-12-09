document.addEventListener("DOMContentLoaded", function(){

    const sendbutton = document.getElementById("send-button");
    const buttondiv = document.getElementById("button-container");
    let confirmation = document.createElement('p');
    let invalid = document.createElement('p');
    invalid.textContent = "Please enter a valid mail ID.";
    invalid.style.cssText = "color: red; padding-top: 7px;";
    confirmation.textContent = "You have successfully subscribed to our newsletter.";
    confirmation.style.cssText = "color: green; padding-top: 7px;";

    function checkvalidity(inputvalue){
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(inputvalue);
    }

    sendbutton.addEventListener('click', function(){
        const input = document.querySelector('#input-field');
        const inputvalue = input.value;
        console.log(`Entered Mail ID : ${inputvalue}`);

        if(checkvalidity(inputvalue)){
            buttondiv.removeChild(invalid);
            sendbutton.style.cssText = "background-color: grey; border-radius: 5px;";
            buttondiv.appendChild(confirmation);
            sendbutton.disabled = true;
        }else{
            sendbutton.disabled=false;
            buttondiv.appendChild(invalid);
        }
    })
})