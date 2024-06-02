import { loadStepOne, loadStepTwo, loadStepThree, loadFinalStep } from "./GetForm.js";

let steps = 1; // Variable pour vérifier si c'est le premier clic

async function Save(data) {
    console.log("Steps: ", steps - 1);
    const response = await fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        console.log(`[${steps - 1}] => Success ✨`);
    } else {
        console.log(`[${steps - 1}] => Failed ❌`);
    }
}

async function Send() {
    const formData_A = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        birth: document.getElementById('birthdate').value,
        age: document.getElementById('age').value,
        phone: document.getElementById('phone').value,
        gender: document.getElementById('gender').value,
        section: document.getElementById('section').value
    };

    await Save(formData_A);
}

async function Steps(){

    steps++;
    if (steps === 1) {
        document.getElementById("-style").remove();
        document.getElementById("nav-form-style").innerHTML = "<link rel='stylesheet' href='..//Style/Run/Style_Form_New.css'>";
        console.log("Starting");
        await loadStepOne();
    } else if (steps === 2) {
        document.getElementById('section').value = 'A';
        await Send();
    } else if (steps === 3) {
        await loadStepTwo();
        document.getElementById('section').value = 'B';
        await Send();
    } else if (steps === 4) {
        await loadStepThree();
        document.getElementById('section').value = 'C';
        await Send();
    } else {
        steps = 0;
        await loadFinalStep('../Web/checkup.html');
        document.getElementById('section').value = 'A';
        console.warn(`[${steps}] => Reset ⚠️`);
    }
}

export async function SaveData() {
    await Steps();
}
