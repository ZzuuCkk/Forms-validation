const form = document.querySelector("form"),
nameInput = document.querySelector("#name"),
emailInput = document.querySelector("#email"),
passInput = document.querySelector("#password"),
repeatPassInput = document.querySelector("#repeat"),
phoneINput = document.querySelector("#number");
function checkEmail(){
    if(emailInput.validaty.valueMissing){
        emailInput.parentElement.querySelector(".message").innerText =
			"email is required";
		return false;
    }
}


function checkEmail() {
	console.log(emailInput.validity);
	if (emailInput.validity.valueMissing) {
		emailInput.parentElement.querySelector(".message").innerText =
			"email is required";
            emailInput.classList.remove("green");
            emailInput.classList.add("red");
            return false;
        } else if (emailInput.validity.typeMismatch) {
            emailInput.parentElement.querySelector(".message").innerText =
			"incorrect format";
            emailInput.classList.remove("green");
            emailInput.classList.add("red");
            return false;
        } else {
            emailInput.parentElement.querySelector(".message").innerText = "";
            emailInput.classList.remove("red");
            emailInput.classList.add("green");
            return true;
	}



}

function checkPhone(){
    const phoneValue = phoneINput.value;
    if(phoneValue.length !=9 ){
        phoneINput.classList.add("red");
        phoneINput.parentElement.querySelector(".message").innerText =
        "incorrect length";
        return false;
    } else if(phoneValue.length = 9 && !/^5/.test(phoneValue)){
        phoneINput.classList.add("red");
        phoneINput.parentElement.querySelector(".message").innerText =
        "Phone number must start with 5";
        return false;
    }else   {
        phoneINput.parentElement.querySelector(".message").innerText = "";
        phoneINput.classList.remove("red");
        phoneINput.classList.add("green");
        return true;
    }
}



function checkPassword(){
    const passValue = passInput.value;
	if (passValue.length < 8) {
		passInput.parentElement.querySelector(".message").innerText =
			"password must contain minimum 8 characters";
            passInput.classList.remove("normal");
            passInput.classList.remove("strong");
            passInput.classList.remove("weak");
		return false;
	} else if (passValue.length >= 8)
         { 
            if(!/[A-Za-z0-9\d@$!%*?&]/.test(passValue)){

            
		passInput.parentElement.querySelector(".message").innerText =
			"weak password , password must contain at least one capital letter and one special character ";
            passInput.classList.remove("green");
            passInput.classList.remove("yellow");
            passInput.classList.add("red");
            return false;
            }else if(!/[A-Z]/.test(passValue) || !/[\@$!%*?&]/.test(passValue) || !/[0-9]/.test(passValue)){
                passInput.parentElement.querySelector(".message").innerText =
                "normal password , password must contain at least one capital letter,one number and one special character ";
                passInput.classList.remove("green");
                passInput.classList.remove("red");
                passInput.classList.add("yellow");
                return false;
            }else {
                passInput.parentElement.querySelector(".message").innerText =
                "";
                passInput.classList.remove("red");
                passInput.classList.remove("yellow");
                passInput.classList.add("green");
                
                return true;
            }
}
}


function repeatPAssword (){
    const passInput = document.querySelector("#password");
    const repeatPassInput = document.querySelector("#repeat");
    const passValue = passInput.value;
    const repeatValue = repeatPassInput.value;
    if(passValue !== repeatValue){
        repeatPassInput.parentElement.querySelector(".message").innerText =
        "Passwords do not match";
        repeatPassInput.classList.add("red");
        return false;
    }else {
        repeatPassInput.parentElement.querySelector(".message").innerText = "";
        repeatPassInput.classList.remove("red");
        repeatPassInput.classList.add("green");
        return true;
        
}
}



form.addEventListener("submit", (event)=> {
    if (!checkEmail() || !checkPhone() || !checkPassword() || !repeatPAssword()) {
      event.preventDefault();
    } else {
      console.log("Form submitted successfully");
    }
  });