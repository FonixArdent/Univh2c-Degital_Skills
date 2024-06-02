export async function OpenTab(url) {
    
    async function close() {
        window.location.replace(`${url}`);
        setTimeout(() => {
            widow.location.reload();
        }, 2*10**3);
    }

    await close();

};