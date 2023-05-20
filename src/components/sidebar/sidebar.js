import { DivComponent } from "../../common/div-component";
import './sidebar.css'

export class Sidebar extends DivComponent {
    constructor() {
        super();
    }

    render() {
        this.el.innerHTML = '';
        this.el.classList.add('sidebar-info')
        this.el.innerHTML = `
            <div class="profile">
                <div class="profile__name">
                    <span class="user-name">Muhammad Zhebarov</span>
                    <br>
                    <span class="user-job">React.js Developer</span>
                </div>
                <figure class="profile-image">
                    <img src="./static/img/my_photo.jpg" alt="">
                </figure>
                <ul class="profile-information">
                    <li>
                        <p><span>Name:</span> Muhammad Zhebarov</p>
                    </li>
                    <li>
                        <p><span>Birthday:</span> 27 October 1999</p>
                    </li>
                    <li>
                        <p><span>Job:</span> Web-teacher</p>
                    </li>
                    <li>
                        <p><span>E-mail:</span> xarcho.ev@gmail.com</p>
                    </li>
                    <li>
                        <p><span>Telegram:</span> @JE_M1</p>
                    </li>
                </ul>
                <div class="side-btn">
                    <button id="btn">Download Cv
                        <span><img src="#" alt=""></span>
                    </button>
                </div>
            </div>
        `;
        return this.el;
    }
}
