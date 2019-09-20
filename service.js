const urlB64ToUint8Array = base64String => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length)
    for(let i = 0; i < rawData.length; ++i){
        outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray;
}

self.addEventListener('activate', async () => {
    console.log('Activated');
    try{
        const applicationServerKey = urlB64ToUint8Array('BHmQx8vEvKlKXcA2PN66TDa4CyMKxYElKh10uM4QPKSCjo2UzsT2DoOKXwyhhS2XJomtjf0RsHgnlDpmLHmXF9w')
        const options = {applicationServerKey, userVisibleOnly: true};
        const subscription = await self.registration.pushManager.subscribe(options)
        console.log(JSON.stringify(subscription));    
    } catch (err) {
        console.log('Error', err);
    }
})