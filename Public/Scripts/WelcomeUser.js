document.addEventListener('DOMContentLoaded', (event) => {
    
    function CheckTime() {


//

        // ================= Constant Values {*Basic*} ================= //

        const Now = new Date();
        const Hours = Now.getHours();
        const Line = document.getElementById('title');

//

//

        // ================ Constant Values {*To Str*} ================ //

        const LnMinutes = `${Now.getMinutes()}`;
        const LnMonth = `${Now.getMonth()}`;

//

//

        // ======= Checking The Length of Minutes {* n -> 0n *} ======= //


        if (LnMinutes.length === 1) {

            var Minutes = '0'+LnMinutes
        }
        else {

            var Minutes = `${Now.getMinutes()}`
        };

//



//

        // ======== Checking The Length of Month {* a -> 0a *} ======== //

        if (LnMonth.length === 1) {

            var Mounth = '0'+LnMonth
        }
        else {

            var Mounth = `${Now.getMounth()}`
        };

//


//
        // ================= Constant Values {*Date*} ================= //

        const Days = ["null", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        const Time = `[${Days[Now.getDay()]} | ${Now.getDate()}/${Mounth}/${Now.getFullYear()}] - ${Now.getHours()}:${Minutes}:${Now.getSeconds()}`;
//


//

        // ============= Check if it's morning or evening ============= //
        setTimeout(() => {

            if (Hours >= 5 && Hours < 12) {

                console.log(`[§] Timelab : ${Time}\n\n[#] : "title" has been transformed to match with the morning time successfully`);
                Line.textContent = 'Bonjour! veuillez remplir les informations demandées';
    
            
            } else if (Hours >= 12 && Hours < 22){
    
                console.log(`[§] Timelab : ${Time}\n\n[#] : "title" has been transformed to match with the evenings time successfully`);
                Line.textContent = 'Bonsoir ! veuillez remplir les informations demandées';
    
    
            } else {
    
                console.log(`[§] Timelab : ${Time}\n\n[#] : "title" has been transformed to match with the night time successfully`);
                Line.textContent = 'Bien le bonsoir ! veuillez remplir les informations demandées';
    
            };

        }, 1*10**3);
        

        // -------------------- And edit the title -------------------- //
    }

//


    // Calling the function
    CheckTime();

});