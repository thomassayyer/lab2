export default class Toast {

    static container = 'toaster'
    static success = 0
    static info = 1
    static error = 2

    constructor(message, status) {
        this.message = message
        this.status = status
    }

    raise() {
        let toast = document.createElement('div')
        toast.className = 'toast'
        let left = document.createElement('div')
        left.className = 'left'
        let icon = document.createElement('i')
        let message = document.createElement('div')
        message.className = 'message'
        message.appendChild(document.createTextNode(this.message))

        switch (this.status) {
            case success:
                toast.className += ' toast-success'
                icon.className = 'far fa-check-circle'
                break
            case info:
                toast.className += ' toast-info'
                icon.className = 'fas fa-info-circle'
                break
            case error:
                toast.className += ' toast-error'
                icon.className = 'far fa-times-circle'
                break
        }

        left.appendChild(icon)
        toast.appendChild(left)
        toast.appendChild(message)
        
        document.getElementById(container).appendChild(toast)
        
        setTimeout(function() { toast.remove() }, 1000)
    }

}