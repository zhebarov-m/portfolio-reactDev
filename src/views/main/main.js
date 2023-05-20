import { AbstractView } from "../../common/view.js"
import { Header } from "../../components/header/header.js";
import { Sidebar } from "../../components/sidebar/sidebar.js";

export class MainView extends AbstractView {
    constructor() {
        super();
        this.setTitle('Home');
    }

    render() {
        const main = document.createElement('div');
        this.app.innerHTML = ''
        this.app.append(main)
        this.renderSidebar();
        this.renderHeader();
    }

    renderSidebar() {
        const sidebar = new Sidebar().render();
        this.app.prepend(sidebar)
    }

    renderHeader() {
        const header = new Header().render();
        this.app.append(header)
    }
}