console.log('Ready for coding');


function noNr(inputString: string): boolean {
    const regex = /\d/; 
    return !regex.test(inputString);
}

function validmail(email: string): boolean {
    const e = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return e.test(email);
}

if (document.getElementById('log-in') as HTMLFormElement !== null){

    const form = document.getElementById('log-in') as HTMLFormElement;
    const usernameInput = document.getElementById('username') as HTMLInputElement; // Cast to HTMLInputElement
    const passwordInput = document.getElementById('password') as HTMLInputElement; // Cast to HTMLInputElement
    
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting
    
        const username = usernameInput.value;
        const password = passwordInput.value;
    
        if (username.length < 5) {
            alert('Username must be at least 5 characters long.');
            return;
        }
    
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }
    
        form.submit();
    });
}


function creditCard(cardNumber: string): boolean {
    cardNumber = cardNumber.replace(/\D/g, '');
    if (cardNumber.length < 13 || cardNumber.length > 19) {
        return false;
    }
    const cardDigits = cardNumber.split('').reverse().map(Number);
    let sum = 0;
    for (let i = 0; i < cardDigits.length; i++) {
        let digit = cardDigits[i];
        if (i % 2 === 1) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }
    return sum % 10 === 0;
}



if (document.getElementById('contact') as HTMLFormElement !== null){
    const contact = document.getElementById('contact') as HTMLFormElement;
    const fnameInp = document.getElementById('fname') as HTMLInputElement; 
    const lnameInp = document.getElementById('lname') as HTMLInputElement;
    const nrInput = document.getElementById('pnr') as HTMLInputElement; 
    const emailInput = document.getElementById('email') as HTMLInputElement; 


    
    contact.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting
    
        const name = fnameInp.value;
        const last = lnameInp.value;
        const nr = nrInput.value;
        const email = emailInput.value;


    
        if (!noNr(name) || name.length < 3) {
            alert("Invalid First Name sorry");
            return;
        }
    
        if (!noNr(last) || last.length < 3) {
            alert("Invalid Last Name");
            return;
        }

        if (!/^[2-9]\d{2}[2-9]\d{6}$/.test(nr.replace(/[^\w]/g,"").replace(/^1/, ""))) {
            alert("Invalid Phone Number");
            return;
        }

        if (!validmail(email)){
            alert(`Invalid email: [${email}]`)
        }


    
        contact.submit();
    });
}

if (document.getElementById('contact2') as HTMLFormElement !== null){
    const contact = document.getElementById('contact2') as HTMLFormElement;
    const fnameInp = document.getElementById('fname') as HTMLInputElement; 
    const lnameInp = document.getElementById('lname') as HTMLInputElement;
    const nrInput = document.getElementById('pnr') as HTMLInputElement; 
    const emailInput = document.getElementById('email') as HTMLInputElement; 


    
    contact.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting
    
        const name = fnameInp.value;
        const last = lnameInp.value;
        const nr = nrInput.value;
        const email = emailInput.value;


    
        if (!noNr(name) || name.length < 3) {
            alert("Invalid First Name sorry");
            return;
        }
    
        if (!noNr(last) || last.length < 3) {
            alert("Invalid Last Name");
            return;
        }

        if (!/^[2-9]\d{2}[2-9]\d{6}$/.test(nr.replace(/[^\w]/g,"").replace(/^1/, ""))) {
            alert("Invalid Phone Number");
            return;
        }

        if (!validmail(email)){
            alert(`Invalid email: [${email}]`)
        }


    
        contact.submit();
    });
}



if (document.getElementById('check') as HTMLFormElement !== null){

    const check = document.getElementById('check') as HTMLFormElement;
    const nrInp = document.getElementById('credit-nr') as HTMLInputElement; 
    const dateInp = document.getElementById('ex-date') as HTMLInputElement;
    const cvcInp = document.getElementById('cvc') as HTMLInputElement; 



    
    check.addEventListener('submit', function (event) {
        event.preventDefault();
    
        const number = nrInp.value;
        const date = dateInp.value;
        const cvc = cvcInp.value;

        if (creditCard(number) == false) {
            alert("Invalid Card Number");
            return;
        }
    
        if (noNr(cvc) || cvc.length < 3 || cvc.length > 3) {
            alert("Invalid Cvc");
            return;
        }

        console.log(date)
        if (date !== ""){
            alert("Invalid Expiration Date");
            return;
        }


    
        check.submit();
    });
}