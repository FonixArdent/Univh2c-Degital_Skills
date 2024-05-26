export async function OpenTab(current, url) {

    window.open(`${url}`)

    setTimeout(() => {
        window.close(`${current}`)
    }, 0.2*10**3);
};