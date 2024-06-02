import { OpenTab } from "../../System/OpenWindow.js";

var timer = 10*10**3;
// var timer = 10**3;

setTimeout(() => {

    document.getElementsByClassName('PartTwo')[0].hidden = false;
    console.warn('[✓] : Class {PartTwo} Visible');


    document.getElementById('nav-style').innerHTML = '<link rel="stylesheet" href=".//Style/Style_First.css">';
    console.warn('[✓] : New Background Image loaded')

    document.getElementById('Div_1').remove();
    document.getElementById('BG_P1').remove();
    console.warn('[✓] : {BG_P1, Div_1} Removed');

    document.getElementById('nav-add-style').classList = 'd-flex justify-content-center align-items-center';
    console.warn('[✓] : new body change');

    document.getElementById('ScriptA').remove();
    console.warn('[✓] : {ScriptA, ScriptB} Removed');
    document.getElementById('ScriptB').remove();

}, timer);

setTimeout(() => {

    document.getElementById('Div_3').hidden = false;

    var nav_s = document.querySelector('#nav-style');
    var nav_add_s = document.createElement('link');
    nav_add_s.setAttribute('rel', 'stylesheet');
    nav_add_s.setAttribute('href', './/Style/Style_Second.css');
    nav_s.appendChild(nav_add_s);

    document.getElementById('TextB').classList = "text-center mb-4 rotate opa";

    
}, timer*2);

setTimeout(() => {
    async function FCT(){

        await OpenTab('../../Web/formulary.html');
        document.getElementById("ScriptC").remove();
    }
    FCT();
}, timer*3);