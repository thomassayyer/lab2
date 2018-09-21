let container = null

class Toast {

    constructor(message, status) {
        this.message = message
        this.status = status
    }

    static set container(value) { container = value }
    static get success() { return 0 }
    static get info() { return 1 }
    static get error() { return 2 }

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
            case Toast.success:
                toast.className += ' toast-success'
                icon.className = 'far fa-check-circle'
                break
            case Toast.info:
                toast.className += ' toast-info'
                icon.className = 'fas fa-info-circle'
                break
            case Toast.error:
                toast.className += ' toast-error'
                icon.className = 'far fa-times-circle'
                break
        }

        left.appendChild(icon)
        toast.appendChild(left)
        toast.appendChild(message)
        
        container.appendChild(toast)
        
        setTimeout(function() { toast.remove() }, 3000)
    }

}