export class AbstractView {
    constructor() {
        this.app = document.querySelector('.container');
    }

    setTitle(title) {
        document.title = title;
    }

    render() {
        return;
    }

    destroy() {
        return;
    }
}