import { Toast } from './Toast.js';

document.getElementById('succes').onclick = function() {
	Toast.container = document.getElementById('notifications');
    let text = document.getElementById('text').value;
    document.getElementById('text').value = '';
    let toast = new Toast(text, Toast.sucess);
    toast.raise();
}

document.getElementById('error').onclick = function() {
	Toast.container = document.getElementById('notifications');
    let text = document.getElementById('text').value;
    document.getElementById('text').value = '';
    let toast = new Toast(text, Toast.error);
    toast.raise();
}

document.getElementById('info').onclick = function() {
	Toast.container = document.getElementById('notifications');
    let text = document.getElementById('text').value;
    document.getElementById('text').value = '';
    let toast = new Toast(text, Toast.info);
    toast.raise();
}