const check = () => {
    if(!('serviceWorker' in navigator)) {
        throw new Error('No Service Worker Support')
    }
    if(!('PushManager' in window)){
        throw new Error('No Service Worker Support')
    }
}

const registerServiceWorker = async () => {
    const swRegistration = await navigator.serviceWorker.register('service.js')
    return swRegistration;
}

const requestNotificationPermission = async () => {
    const permission = await window.Notification.requestPermission();
    if(permission !== 'granted') throw new Error ('permission not granted for notification');
}

const showLocalNotification = ( title, body, swRegistration) => {
    const options = {
        body,
    };
    swRegistration.showNotification(title, options);
}

const main = async () => {
    check();
    const swRegistration = await registerServiceWorker();
    const permission = await requestNotificationPermission();
    // showLocalNotification("Notification", "Hi There,", swRegistration);

}

// main();