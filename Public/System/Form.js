import { loadStepOne, loadStepTwo, loadStepThree, loadFinalStep } from "./GetForm.js"

let steps = 0;

async function Save(data) {
    console.log("Steps: ", steps);
    const response = await fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        console.log(`[${steps}] => Success ✨`);
    } else {
        console.log(`[${steps}] => Failed ❌`);
    }
}

async function Steps() {
    steps++;
    if (steps === 1) {
        await loadStepOne();
        document.getElementById('section').value = 'A';
    } else if (steps === 2) {
        await loadStepTwo();
        document.getElementById('section').value = 'B';
    } else if (steps === 3) {
        await loadStepThree();
        document.getElementById('section').value = 'C';
    } else {
        steps = 0;
        await loadFinalStep('../Web/formulary.html', '../Web/checkup.html');
        document.getElementById('section').value = 'A';
        console.warn(`[${steps}] => Reset ⚠️`);
    }

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        birth: document.getElementById('birthdate').value,
        age: document.getElementById('age').value,
        phone: document.getElementById('phone').value,
        gender: document.getElementById('gender').value,
        section: document.getElementById('section').value
    };

    await Save(formData);
}

export async function SaveData() {
    await Steps();
}
