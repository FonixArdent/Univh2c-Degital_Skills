import { OpenTab  } from "../System/OpenWindow.js";

const formElements = document.getElementsByClassName('NewFormulary');

export async function loadFormTemplate(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to load form template from ${url}`);
        }
        const content = await response.text();

        if (!formElements || !formElements.length) {
            throw new Error('No form elements found to load template into');
        }

        for (const element of formElements) {
            if (!element) {
                throw new Error('One or more form elements are null');
            }
            element.innerHTML = content;
        }
    } catch (error) {
        console.error('Error loading form template', error);
    }
};

export async function loadStepOne() {
    try {
        await loadFormTemplate('../cache/Step1.set');
    } catch (error) {
        console.error('Error loading Step 1 form template', error);
    }
};

export async function loadStepTwo() {
    try {
        await loadFormTemplate('../cache/Step2.set');
    } catch (error) {
        console.error('Error loading Step 2 form template', error);
    }
};

export async function loadStepThree() {
    try {
        await loadFormTemplate('../cache/Step3.set');
    } catch (error) {
        console.error('Error loading Step 3 form template', error);
    }
};

export async function loadFinalStep(current, url) {
   await OpenTab(current, url);
}