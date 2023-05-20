import { DivComponent } from "../../common/div-component";
import "./header.css";

export class Header extends DivComponent {
    constructor() {
        super();
    }

    render() {
        this.el.innerHTML = '';
        this.el.classList.add('header')
        this.el.innerHTML = `
            <div class="header__home-icon">
                <img width="20px" src="./static/icons/home-button_icon.svg" alt="">
            </div>
            <nav class="header__menu">
                <ul class="menu__list">
                    <li class="list__item">Resume</li>
                    <li class="list__item">Portfolio</li>
                    <li class="list__item">Blog</li>
                    <li class="list__item">Contact</li>
                </ul>
            </nav>
            <ul class="social__icons">
                <li class="icon" id="facebook">F</li>
                <li class="icon" id="github">G</li>
                <li class="icon" id="instagram">I</li>
                <li class="icon" id="telegram">T</li>
            </ul>
        `;
        return this.el;
    }
}
