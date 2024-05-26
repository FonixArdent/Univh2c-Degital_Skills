function typeText(element, text, delay) {
    return new Promise((resolve) => {
        let i = 0;
        console.info("[#] Loaded : ", text," - title")
        const interval = setInterval(() => {
            element.innerHTML = text.slice(0, i + 1);
            i++;
            console.warn(`[${i}] Set Title : ${element.innerHTML}`);
            if (i === text.length) {
                clearInterval(interval);
                resolve();
            }
        }, delay);
    });
}

function fadeIn(element) {
    return new Promise((resolve) => {
        element.classList.add('show');
        setTimeout(() => {
            resolve();
            console.log("[&] Fading in show");
        }, 900);
    });
}

function fadeOut(element) {
    return new Promise((resolve) => {
        element.classList.remove('show');
        setTimeout(() => {
            resolve();
            console.log("[&] Fading in hide");
        }, 900); 
    });
}

async function Title() {
    const titleElement = document.getElementById('title');
    const titles = [
        { text: "Welcome", delay: 90 },
        { text: "-------", delay: 90 },
        { text: "Accueil ✔️", delay: 90 },
        { text: "🏠| Add Your CV", delay: 90.6 }
    ];

    for (const title of titles) {
        await fadeOut(titleElement);
        await typeText(titleElement, title.text, title.delay);
        await fadeIn(titleElement);
    }
    setTimeout (() => {
        console.clear();
        console.info("[✨] Title Loaded : ", titleElement.innerHTML);
    }, 900);
}

Title();