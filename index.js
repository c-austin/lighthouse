const DESKTOP_BODY_START = `
<div id="top-logo-container" class="transparent">
    <img id="top-logo" src="./assets/svg/logo.svg" alt="Lighthouse Capital Logo">
</div>
<div id="navigation" class="transparent">
    <div id="nav-wwd-button" class="nav-button">What We Do</div>
    <div id="nav-about-button" class="nav-button">About</div>
    <div id="nav-contact-button" class="nav-button">Contact</div>
</div>
<div id="section-one">
    <div id="section-one-content-container">
        <div id="large-logo-container">
            <img id="left-logo" src="./assets/svg/logo.svg" alt="Lighthouse Capital Logo">
        </div>
    </div>
</div>
<div id="section-two">
    <div id="section-two-content-container" class="transparent"></div>
</div>
<div id="copyright" class="transparent">
    Copyright © 2024 - Lighthouse Capital
</div>
`;

const MOBILE_BODY_START = `
<div id="mobile-bg">
    <div id="mobile-dropdown">
        <div id="mobile-exit-container" class="mobile-menu-icon">
                <svg fill="#fff" viewBox="0 0 100 100">
                    <rect y="45" width="100" height="10" transform="rotate( 45,50,50)"></rect>
                    <rect y="45" width="100" height="10" transform="rotate(135,50,50)"></rect>
                </svg>
        </div>
        <div id="mobile-dropdown-home-button" class="mobile-dropdown-button"><a href="#home">Home</a></div>
        <div id="mobile-dropdown-wwd-button" class="mobile-dropdown-button"><a href="#what-we-do">What We Do</a></div>
        <div id="mobile-dropdown-about-button" class="mobile-dropdown-button"><a href="#about">About</a></div>
        <div id="mobile-dropdown-contact-button" class="mobile-dropdown-button"><a href="#contact">Contact</a></div>
    </div>
    <a href="#home" id="mobile-logo-container" class="landing">
        <img id="mobile-logo" src="./assets/svg/logo.svg" alt="Lighthouse Capital Logo" class="landing">
    </a>
    <div id="mobile-nav" class="transparent" class="transparent">
        <a href="#contact">
            <div id="mobile-mail-icon-container" class="mobile-menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.506 24.039">
                    <path id="CONTACT_ICON" data-name="CONTACT ICON"
                        d="M193.942,27.462l10.251,8.621L193.942,44.7V27.469Zm30.092-1.232-14.1,11.843s-.06.015-.083,0L195.76,26.23h28.267Zm1.69,18.466-10.251-8.621,10.251-8.621V44.689ZM213.9,37.4l10.882,9.147h-29.9L205.763,37.4l3.515,2.959a.88.88,0,0,0,1.1,0ZM193.5,24.36h32.667a1.423,1.423,0,0,1,1.419,1.419v21.2a1.423,1.423,0,0,1-1.419,1.419H193.5a1.423,1.423,0,0,1-1.419-1.419v-21.2A1.423,1.423,0,0,1,193.5,24.36Z"
                        transform="translate(-192.08 -24.36)" fill="#fff" fill-rule="evenodd" />
                </svg>
            </div>
        </a>
        <div id="mobile-hamburger-container" class="mobile-menu-icon">
            <svg fill="#fff" viewBox="0 0 105 105">
                <rect y="15" width="105" height="15" rx="8"></rect>
                <rect y="45" width="105" height="15" rx="8"></rect>
                <rect y="75" width="105" height="15" rx="8"></rect>
            </svg>
        </div>
    </div>
    <div id="mobile-content-holder" class="transparent">
        <div id="home" class="mobile-page">
            <div id="cell-1" class="left-cell cell">
                <h1 class="mobile-heading">Creating value through <span>innovative</span> financing solutions.</h1>
                <p class="mobile-text">At Lighthouse Capital, we support the strategic personal and business growth of our clients. By providing innovative real estate based financing solutions, funded by proprietary capital, we are able to meet our clients' unique needs both quickly and efficiently.</p>
                <div id="mobile-learn-button-container">
                    <button id="mobile-learn-more" class="mobile-button">
                        <a href="#what-we-do">LEARN MORE</a>
                    </button>
                </div>
            </div>
        </div>
        <div id="what-we-do" class="mobile-page">
            <div id="cell-2" class="left-cell cell">
                <h1 class="mobile-heading">Let us help <span>guide</span> your financial direction.</h1>
                <p class="mobile-text">With our innovative and dynamic approach to real estate lending, Lighthouse Capital is the right partner to help you achieve personal and business financial success.</p>
            </div>
            <div id="cell-3" class="right-cell cell">
                <div id="mobile-list">
                    <div class="mobile-icon">
                        <img src="./assets/svg/progressive-icon.svg">
                    </div>
                    <div class="mobile-text">Progressive real estate based financing solutions</div>
                    <div class="mobile-icon">
                        <img src="./assets/svg/inhouse-icon.svg">
                    </div>
                    <div class="mobile-text">In-house underwriting</div>
                    <div class="mobile-icon">
                        <img src="./assets/svg/proprietary-icon.svg">
                    </div>
                    <div class="mobile-text">Proprietary capital sources</div>
                    <div class="mobile-icon">
                        <img src="./assets/svg/senior-icon.svg">
                    </div>
                    <div class="mobile-text">Senior debt and subordinated mezzanine financing</div>
                    <div class="mobile-icon">
                        <img src="./assets/svg/residential-icon.svg">
                    </div>
                    <div class="mobile-text">Residential single family and multi-family construction</div>
                </div>
            </div>
        </div>
        <div id="about" class="mobile-page">
            <div id="cell-4" class="left-cell cell">
                <div id="mobile-headshot-container">
                    <img id="mobile-headshot" src="assets/img/exports/headshot-400.jpg" alt="Headshot of Inde Sumal">
                </div>
                <h1 class="mobile-heading">Backed by <span>experience.</span></h1>
                <p class="mobile-text">Inde Sumal is President & CEO of Lighthouse Capital. Prior to founding the firm he was the Royal Bank's head of Private Banking, Wealth Management for British Columbia. He has held various senior leadership roles within the Financial Services industry over his 25 year career including Vice President and head Residential Mortgages.</p>
                <p class="mobile-text">Inde's commitment to his community is demonstrated by the various initiatives he has worked with. He has served as a Board Member for the Fraser Health Authority where he was also the Board committee chair for HR and Governance. Inde has also served as a Board Member with the Insurance Corporation of British Columbia (ICBC) where he also participated on the crown corporations Investments Board and held expanded responsibility as chair for human resources and corporate compensation. He has served as a Board member with the B.C. Chamber of Commerce. He also participated in the United Way's grant review Board and served as a member of Simon Fraser University's Community Advisory Board.</p>
                <p class="mobile-text">Inde holds an MBA from Royal Roads University.</p>
            </div>
        </div>
        <div id="contact" class="mobile-page">
            <div id="cell-5" class="bottom-cell cell">
                <div id="mobile-final-logo-container">
                    <img id="mobile-final-logo" src="./assets/svg/logo.svg" alt="Lighthouse Capital Logo" class="landing">
                </div>
                <div id="mobile-contact-form-container">
                    <form action="https://formkeep.com/f/65ffe62a4999" accept-charset="UTF-8" enctype="multipart/form-data" method="POST">
                        <ul>
                            <li>
                                <input type="text" id="first-name" name="first-name" placeholder="First Name*" />
                            </li>
                            <li>
                                <input type="text" id="last-name" name="last-name" placeholder="Last Name*" />
                            </li>
                            <li>
                                <input type="email" id="email" name="email" placeholder="Email*" />
                            </li>
                            <li>
                                <input type="text" id="phone" name="phone" placeholder="Phone" />
                            </li>
                            <label for="msg">Message</label>
                            <li>
                                <textarea id="msg" name="user_message"></textarea>
                            </li>
                            <li>
                                <div id="foofoo">
                                    <button id="mobile-submit" class="mobile-button">
                                        SUBMIT
                                    </button>
                                    <div id="contact-info">
                                        680-1500 West Georgia St,<br>
                                        Vancouver, BC V6G 2Z6<br>
                                        info@lighthousecapital.com<br>
                                        604 685 0970
                                    </div>
                                </div>
                
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div id="mobile-copyright">
        Copyright © 2024 - Lighthouse Capital
    </div>
</div>
`;

const HOME_SECTION_ONE = `
<div id="large-logo-container">
    <img id="left-logo" src="./assets/svg/logo.svg" alt="Lighthouse Capital Logo">
</div>
`;

const HOME_SECTION_TWO = `
<h1>Creating value through <span>innovative</span> financing solutions.</h1>
<p id="home-text">At Lighthouse Capital, we support the strategic personal and business growth of our clients. By providing innovative real estate based financing solutions, funded by proprietary capital, we are able to meet our clients' unique needs both quickly and efficiently.</p>
<div id="home-button-container">
    <div id="home-contact-button" class="home-button">
        <svg id="WHITE_CONTACT" data-name="WHITE CONTACT" xmlns="http://www.w3.org/2000/svg" width="256" height="80.74" viewBox="0 0 256 80.74">
            <g id="Group_2" data-name="Group 2">
                <rect id="Rectangle_4" data-name="Rectangle 4" width="249" height="44" rx="16.05" transform="translate(0.5 18.58)" fill="#fff"/>
                <path id="Path_20" data-name="Path 20" d="M233.45,19.08A15.573,15.573,0,0,1,249,34.63v11.9a15.573,15.573,0,0,1-15.55,15.55H16.55A15.573,15.573,0,0,1,1,46.53V34.63A15.573,15.573,0,0,1,16.55,19.08h216.9m0-1H16.55A16.55,16.55,0,0,0,0,34.63v11.9A16.55,16.55,0,0,0,16.55,63.08h216.9A16.55,16.55,0,0,0,250,46.53V34.63a16.55,16.55,0,0,0-16.55-16.55h0Z"/>
            </g>
            <path id="Path_21" data-name="Path 21" d="M215.72,0A40.39,40.39,0,0,1,244.2,68.92a40.326,40.326,0,0,1-56.96-57.1A40.071,40.071,0,0,1,215.72,0"/>
            <path id="Path_22" data-name="Path 22" d="M194.56,28.49l13.65,11.48L194.56,51.45V28.5Zm40.07-1.64L215.86,42.62s-.08.02-.11,0L196.98,26.85h37.64Zm2.25,24.59L223.23,39.96l13.65-11.48V51.43Zm-15.75-9.72L235.62,53.9H195.81L210.3,41.72l4.68,3.94a1.172,1.172,0,0,0,1.46,0l4.69-3.94ZM193.97,24.36h43.5a1.9,1.9,0,0,1,1.89,1.89V54.48a1.9,1.9,0,0,1-1.89,1.89h-43.5a1.9,1.9,0,0,1-1.89-1.89V26.25A1.9,1.9,0,0,1,193.97,24.36Z" fill="#fff" fill-rule="evenodd"/>
            <text id="CONTACT_US" data-name="CONTACT US" transform="translate(22.68 48.57)" font-size="20" font-family="Rubik-Regular, Rubik, Arial"><tspan x="0" y="0">CON</tspan><tspan y="0" letter-spacing="-0.07em">T</tspan><tspan y="0" letter-spacing="-0.01em">A</tspan><tspan y="0">C</tspan><tspan y="0" letter-spacing="-0.03em">T</tspan><tspan y="0" xml:space="preserve"> US</tspan></text>
        </svg>
    </div>
    <div id="home-learn-button" class="home-button">
        <svg id="WHITE_LEARN_MORE" data-name="WHITE LEARN MORE" xmlns="http://www.w3.org/2000/svg" width="256" height="80.74" viewBox="0 0 256 80.74">
            <g id="Group_4" data-name="Group 4">
                <rect id="Rectangle_6" data-name="Rectangle 6" width="249" height="44" rx="16.05" transform="translate(0.5 18.58)" fill="#fff"/>
                <path id="Path_26" data-name="Path 26" d="M233.45,19.08A15.573,15.573,0,0,1,249,34.63v11.9a15.573,15.573,0,0,1-15.55,15.55H16.55A15.573,15.573,0,0,1,1,46.53V34.63A15.573,15.573,0,0,1,16.55,19.08h216.9m0-1H16.55A16.55,16.55,0,0,0,0,34.63v11.9A16.55,16.55,0,0,0,16.55,63.08h216.9A16.55,16.55,0,0,0,250,46.53V34.63a16.55,16.55,0,0,0-16.55-16.55h0Z"/>
            </g>
            <path id="Path_27" data-name="Path 27" d="M215.72,0A40.39,40.39,0,0,1,244.2,68.92a40.326,40.326,0,0,1-56.96-57.1A40.071,40.071,0,0,1,215.72,0"/>
            <text id="LEARN_MORE" data-name="LEARN MORE" transform="translate(17.68 48.57)" font-size="20" font-family="Rubik-Regular, Rubik, Arial"><tspan x="0" y="0">LEARN MORE</tspan></text>
            <g id="Group_5" data-name="Group 5">
                <path id="Path_28" data-name="Path 28" d="M217.47,73.99c-9.17.01-16.37-2.42-22.62-7.23A33.4,33.4,0,0,1,181.92,45.7a32.74,32.74,0,0,1,2.26-18.88,33.206,33.206,0,0,1,8.83-12.16,32.554,32.554,0,0,1,16.56-7.99,38.058,38.058,0,0,1,7.19-.74,35.037,35.037,0,0,1,20.69,7.26,32.893,32.893,0,0,1,11.99,17.44,49.881,49.881,0,0,1,1.27,7.31,29.149,29.149,0,0,1-3.4,16.99,34.082,34.082,0,0,1-18.72,16.73,36.109,36.109,0,0,1-11.12,2.33Zm-9.24-31.46c.02.08.04.17.06.25-1.41.93-2.79,1.9-4.22,2.79a2.987,2.987,0,0,0-1.28,3.74,2.771,2.771,0,0,0,3.9,1.12c4.23-2.72,8.41-5.52,12.59-8.32a2.575,2.575,0,0,0,.05-4.08q-3.75-2.595-7.55-5.15c-1.72-1.16-3.42-2.36-5.2-3.4a2.832,2.832,0,0,0-3.72.92,2.74,2.74,0,0,0,1.06,3.77c1.41.97,2.8,1.94,4.2,2.92-.03.08-.05.16-.08.24H189.16a2.8,2.8,0,0,0-2.84,2.54,2.6,2.6,0,0,0,2.76,2.65h19.16Zm19.74-21.44h-9.13a3.149,3.149,0,0,0-3.41,2.84,3.237,3.237,0,0,0,3.13,3.64c6.22.07,12.44.11,18.65-.02,2.17-.04,3.36-1.14,3.19-3.81-.1-1.62-1.38-2.65-3.42-2.65h-9Zm.07,37.67h9.4c1.91,0,2.95-1.1,2.95-3.09,0-2.02-1.02-3.15-2.88-3.16H218.58a2.917,2.917,0,0,0-3.16,3.09,2.96,2.96,0,0,0,3.21,3.16h9.4Zm3.27-10.73c2.19,0,4.38.06,6.57-.04a2.687,2.687,0,0,0,1.86-.83,4.237,4.237,0,0,0,.36-4.18,2.166,2.166,0,0,0-2.28-1.48c-4.38.04-8.76.08-13.13-.02a2.925,2.925,0,0,0-2.77,3.19c.05,2.1,1.05,3.44,2.84,3.37,2.19-.09,4.38-.02,6.57-.02Zm.08-16.72c-2.19,0-4.38.11-6.56-.04a2.874,2.874,0,0,0-2.93,3.16c.03,2.09,1.02,3.46,2.93,3.41,4.07-.09,8.15-.03,12.22-.03,2.68,0,4.09-1.97,3.28-4.58a2.4,2.4,0,0,0-2.64-1.93h-6.3Z"/>
                <path id="Path_29" data-name="Path 29" d="M208.23,42.53H189.07a2.6,2.6,0,0,1-2.76-2.65,2.812,2.812,0,0,1,2.84-2.54h18.88a2.252,2.252,0,0,0,.08-.24c-1.4-.97-2.8-1.95-4.2-2.92a2.748,2.748,0,0,1-1.06-3.77,2.835,2.835,0,0,1,3.72-.92c1.79,1.04,3.49,2.24,5.2,3.4q3.795,2.55,7.55,5.15a2.575,2.575,0,0,1-.05,4.08c-4.18,2.8-8.36,5.6-12.59,8.32a2.771,2.771,0,0,1-3.9-1.12,2.987,2.987,0,0,1,1.28-3.74c1.43-.89,2.82-1.86,4.22-2.79-.02-.08-.04-.17-.06-.25Z" fill="#fff"/>
                <path id="Path_30" data-name="Path 30" d="M227.97,21.09h9c2.04,0,3.32,1.03,3.42,2.65.17,2.67-1.02,3.77-3.19,3.81-6.21.13-12.43.09-18.65.02a3.232,3.232,0,0,1-3.13-3.64,3.148,3.148,0,0,1,3.41-2.84h9.13Z" fill="#fff"/>
                <path id="Path_31" data-name="Path 31" d="M228.04,58.76h-9.4a3.126,3.126,0,1,1-.05-6.25h18.93c1.86,0,2.88,1.14,2.88,3.16,0,1.99-1.04,3.08-2.95,3.09h-9.4Z" fill="#fff"/>
                <path id="Path_32" data-name="Path 32" d="M231.31,48.03c-2.19,0-4.38-.06-6.57.02-1.78.07-2.78-1.27-2.84-3.37a2.919,2.919,0,0,1,2.77-3.19c4.38.1,8.76.06,13.13.02a2.177,2.177,0,0,1,2.28,1.48,4.188,4.188,0,0,1-.36,4.18,2.668,2.668,0,0,1-1.86.83c-2.18.1-4.38.04-6.57.04Z" fill="#fff"/>
                <path id="Path_33" data-name="Path 33" d="M231.39,31.31h6.3a2.4,2.4,0,0,1,2.64,1.93c.81,2.61-.6,4.58-3.28,4.58-4.07,0-8.15-.06-12.22.03-1.91.04-2.9-1.32-2.93-3.41a2.864,2.864,0,0,1,2.93-3.16c2.18.14,4.37.04,6.56.04Z" fill="#fff"/>
            </g>
        </svg>
    </div>
</div>
`;

const WWD_SECTION_ONE = `
<div id="wwd-text-container">
    <h1>Let us help <span>guide</span> your financial direction.</h1>
    <p>With our innovative and dynamic approach to real estate lending, Lighthouse Capital is the right partner to help you achieve personal and business financial success.</p>
</div>
`;

const WWD_SECTION_TWO = `
<div id="wwd-list">
    <div class="wwd-icon">
        <img src="./assets/svg/progressive-icon.svg">
    </div>
    <div class="wwd-text">Progressive real estate based financing solutions</div>
    <div class="wwd-icon">
        <img src="./assets/svg/inhouse-icon.svg">
    </div>
    <div class="wwd-text">In-house underwriting</div>
    <div class="wwd-icon">
        <img src="./assets/svg/proprietary-icon.svg">
    </div>
    <div class="wwd-text">Proprietary capital sources</div>
    <div class="wwd-icon">
        <img src="./assets/svg/senior-icon.svg">
    </div>
    <div class="wwd-text">Senior debt and subordinated mezzanine financing</div>
    <div class="wwd-icon">
        <img src="./assets/svg/residential-icon.svg">
    </div>
    <div class="wwd-text">Residential single family and multi-family construction</div>
</div>
`;

const ABOUT_SECTION_ONE = `
<div id="headshot-container">
    <img id="headshot" src="assets/img/exports/headshot-400.jpg" alt="Headshot of Inde Sumal">
</div>
<div id="bio-container">
    <h1>Backed by <span>experience.</span></h1>
    <p>Inde Sumal is President & CEO of Lighthouse Capital. Prior to founding the firm he was the Royal Bank's head of Private Banking, Wealth Management for British Columbia. He has held various senior leadership roles within the Financial Services industry over his 25 year career including Vice President and head Residential Mortgages.</p>
    <p>Inde's commitment to his community is demonstrated by the various initiatives he has worked with. He has served as a Board Member for the Fraser Health Authority where he was also the Board committee chair for HR and Governance. Inde has also served as a Board Member with the Insurance Corporation of British Columbia (ICBC) where he also participated on the crown corporations Investments Board and held expanded responsibility as chair for human resources and corporate compensation. He has served as a Board member with the B.C. Chamber of Commerce. He also participated in the United Way's grant review Board and served as a member of Simon Fraser University's Community Advisory Board.</p>
    <p>Inde holds an MBA from Royal Roads University.</p>
</div>
`;

const CONTACT_SECTION_ONE = `
<div id="contact-form-container" class="transparent">
    <form action="https://formkeep.com/f/65ffe62a4999" accept-charset="UTF-8" enctype="multipart/form-data" method="POST">
        <ul>
            <li>
                <input type="text" id="first-name" name="first-name" placeholder="First Name*" />
            </li>
            <li>
                <input type="text" id="last-name" name="last-name" placeholder="Last Name*" />
            </li>
            <li>
                <input type="email" id="email" name="email" placeholder="Email*" />
            </li>
            <li>
                <input type="text" id="phone" name="phone" placeholder="Phone" />
            </li>
            <label for="msg">Message</label>
            <li>
                <textarea id="msg" name="user_message"></textarea>
            </li>
            <li>
                <div id="foofoo">
                    <button id="submit-button" type="submit">Submit</button>
                    <div id="contact-info">
                        680-1500 West Georgia St,<br>
                        Vancouver, BC V6G 2Z6<br>
                        info@lighthousecapital.com<br>
                        604 685 0970
                    </div>
                </div>

            </li>
        </ul>
    </form>
</div>
`;

const showMobile = window.matchMedia("(max-width: 1000px)").matches;
const MOBILE_LANDING_DURATION = 1500;
const LANDING_DURATION = 2000;
var loaded = false;

start();

function start() {
    if (showMobile) {
        document.querySelector('body').innerHTML = MOBILE_BODY_START;

        var loc = window.location.href.split('#')[1];
        location.hash = '';
        if (loc !== undefined) {
            location.hash = loc;
        }

        document.getElementById('mobile-hamburger-container').addEventListener('click', () => {
            document.getElementById("mobile-dropdown").classList.add('active');
        });

        document.getElementById('mobile-exit-container').addEventListener('click', () => {
            document.getElementById("mobile-dropdown").classList.remove('active');
        });

        document.querySelectorAll('.mobile-dropdown-button').forEach(el => {
            el.addEventListener('click', () => {
                document.getElementById("mobile-dropdown").classList.remove('active');
            });
        });

        document.getElementById('mobile-logo-container').addEventListener('click', () => {
            document.getElementById("mobile-dropdown").classList.remove('active');
        });
            
        document.getElementById('mobile-submit').addEventListener('click', async(e) => {
            e.preventDefault();

            const formData = new FormData();
            formData.append("first-name", document.getElementById('first-name').value);
            formData.append("last-name", document.getElementById('last-name').value);
            formData.append("email", document.getElementById('email').value);
            formData.append("phone", document.getElementById('phone').value);
            formData.append("message", document.getElementById('msg').value);

            const formCont = document.getElementById('mobile-contact-form-container');
            try {
                await fetch("https://formkeep.com/f/65ffe62a4999", {
                    method: "POST",
                    body: formData,
                });
                formCont.classList.add('transparent');
                setTimeout(() => {
                    formCont.innerHTML = `
                    <div id="mobile-submission-message-cont">
                        <div id="mobile-submission-message">
                            Thank you for contacting us.<br><br>
                            <a href="#home">Return Home</a>
                        </div>
                    </div>
                    `;
                    formCont.classList.add('submitted');
                    formCont.classList.remove('transparent');

                }, 1000);
            } catch (e) {
                formCont.classList.add('transparent');
                setTimeout(() => {
                    formCont.innerHTML = `
                    <div id="submission-message-cont">
                        <div id="submission-message">
                            Unfortunately there has been a problem submitting your message. Please contact us directly via email<br><br>
                            <a href="mailto:info@lighthousecapital.com">info@lighthousecapital.com</a>
                        </div>
                    </div>
                    `;
                    formCont.classList.add('submitted');
                    formCont.classList.remove('transparent');
                }, 1000);
            }
        });

        setTimeout(() => {
            document.getElementById('mobile-logo-container').classList.remove('landing');
            document.getElementById('mobile-logo').classList.remove('landing');
        }, MOBILE_LANDING_DURATION);

        setTimeout(() => {
            document.getElementById('mobile-nav').classList.remove('transparent');
            document.getElementById('mobile-content-holder').classList.remove('transparent');
        }, MOBILE_LANDING_DURATION + 500);
    } else {
        document.querySelector('body').innerHTML = DESKTOP_BODY_START;

        const ROOT = location.href.split('#')[0];

        const SECTION_ONE = document.getElementById('section-one');
        const SECTION_TWO = document.getElementById('section-two');
        const SECTION_ONE_CONTAINER = document.getElementById('section-one-content-container');
        const SECTION_TWO_CONTAINER = document.getElementById('section-two-content-container');

        const TOP_LOGO = document.getElementById('top-logo-container');
        const NAVIGATION = document.getElementById('navigation');
        const COPYRIGHT = document.getElementById('copyright');

        const NAV_WWD = document.getElementById('nav-wwd-button');
        const NAV_ABOUT = document.getElementById('nav-about-button');
        const NAV_CONTACT = document.getElementById('nav-contact-button');

        TOP_LOGO.addEventListener('click', () => {
            routePage(master_loc, 'home');
        });

        NAV_WWD.addEventListener('click', () => {
            routePage(master_loc, 'what-we-do');
        });

        NAV_ABOUT.addEventListener('click', () => {
            routePage(master_loc, 'about');
        });

        NAV_CONTACT.addEventListener('click', () => {
            routePage(master_loc, 'contact');
        });

        function landingStateToSplitState() {
            SECTION_ONE.classList.add('split');
            SECTION_TWO.classList.add('split');

        }

        function splitStateToLandingState() {
            SECTION_ONE.classList.remove('split');
            SECTION_TWO.classList.remove('split');
        }

        function getLocation() {
            var loc = window.location.href.split('#')[1];
            switch (loc) {
                case 'about': return 'about';
                case 'contact': return 'contact';
                case 'what-we-do': return 'what-we-do';
                default: return 'home';
            }
        }

        var master_loc = getLocation();

        setTimeout(() => {
            switch (master_loc) {
                case 'about': firstLoadAbout(); break;
                case 'contact': firstLoadContact(); break;
                case 'what-we-do': firstLoadWWD(); break;
                default: firstLoadHome();
            }
        }, LANDING_DURATION);

        function firstLoadHome() {
            landingStateToSplitState();
            setTimeout(loadHomeContent, 1000);
        }

        function firstLoadWWD() {
            landingStateToSplitState();
            SECTION_ONE_CONTAINER.classList.add('transparent');
            setTimeout(() => {
                SECTION_ONE_CONTAINER.innerHTML = '';
                SECTION_ONE_CONTAINER.classList.add('wwd')
            }, 1000);
            setTimeout(loadWWDContent, 1000);
        }

        function firstLoadAbout() {
            SECTION_ONE_CONTAINER.classList.add('transparent');
            setTimeout(() => {
                SECTION_ONE_CONTAINER.innerHTML = '';
            }, 1000);
            setTimeout(loadAboutContent, 1000);
        }

        function firstLoadContact() {
            var temp = document.createElement('div');
            temp.innerHTML = CONTACT_SECTION_ONE.trim();
            var needed = temp.firstChild
            SECTION_ONE_CONTAINER.appendChild(needed);
            addListenerToSubmitButton();


            setTimeout(() => {
                document.getElementById('large-logo-container').classList.add('contact');
                addListenerToLargeLogo();
                NAV_CONTACT.classList.add('selected');
                NAVIGATION.classList.add('contact');
                NAVIGATION.classList.remove('transparent');
                COPYRIGHT.classList.remove('transparent');
            }, 50);
            setTimeout(() => {
                SECTION_ONE_CONTAINER.classList.add('contact');
                needed.classList.remove('transparent');
            }, 500);

        }

        function loadHomeContent() {
            SECTION_TWO_CONTAINER.innerHTML = HOME_SECTION_TWO;
            addListenerToHomeButtons();
            SECTION_TWO_CONTAINER.classList.remove('transparent');
            NAVIGATION.classList.remove('transparent');
            COPYRIGHT.classList.remove('transparent');
        }

        function loadWWDContent() {
            SECTION_ONE_CONTAINER.innerHTML = WWD_SECTION_ONE;
            SECTION_TWO_CONTAINER.innerHTML = WWD_SECTION_TWO;

            NAV_WWD.classList.add('selected');
            NAVIGATION.classList.remove('transparent');
            COPYRIGHT.classList.remove('transparent');
            TOP_LOGO.classList.remove('transparent');
            SECTION_ONE_CONTAINER.classList.remove('transparent');
            SECTION_TWO_CONTAINER.classList.remove('transparent');
        }

        function loadAboutContent() {
            SECTION_ONE_CONTAINER.innerHTML = ABOUT_SECTION_ONE;

            NAV_ABOUT.classList.add('selected');
            NAVIGATION.classList.remove('transparent');
            COPYRIGHT.classList.remove('transparent');
            TOP_LOGO.classList.remove('transparent');
            SECTION_ONE.classList.add('about');
            SECTION_ONE_CONTAINER.classList.add('about');
            SECTION_ONE_CONTAINER.classList.remove('transparent');
        }

        function addListenerToLargeLogo() {
            document.getElementById('large-logo-container').addEventListener('click', () => {
                routePage(master_loc, 'home');
            });
        }

        function addListenerToHomeButtons() {
            document.getElementById('home-contact-button').addEventListener('click', () => {
                routePage(master_loc, 'contact');
            });
            document.getElementById('home-learn-button').addEventListener('click', () => {
                routePage(master_loc, 'what-we-do');
            });
        }

        function addListenerToSubmitButton() {
            document.getElementById('submit-button').addEventListener('click', async(e) => {
                e.preventDefault();

                const formData = new FormData();
                formData.append("first-name", document.getElementById('first-name').value);
                formData.append("last-name", document.getElementById('last-name').value);
                formData.append("email", document.getElementById('email').value);
                formData.append("phone", document.getElementById('phone').value);
                formData.append("message", document.getElementById('msg').value);

                const formCont = document.getElementById('contact-form-container');
                try {
                    await fetch("https://formkeep.com/f/65ffe62a4999", {
                      method: "POST",
                      body: formData,
                    });
                    formCont.classList.add('transparent');
                    setTimeout(() => {
                        formCont.innerHTML = `
                        <div id="submission-message">
                            Thank you for contacting us.<br><br>
                            <a href="#home">Return Home</a>
                        </div>
                        `;
                        formCont.classList.add('submitted');
                        formCont.classList.remove('transparent');

                    }, 1000);
                } catch (e) {
                    formCont.classList.add('transparent');
                    setTimeout(() => {
                        formCont.innerHTML = `
                        <div id="submission-message">
                            Unfortunately there has been a problem submitting your message. Please contact us directly via email<br><br>
                            <a href="mailto:info@lighthousecapital.com">info@lighthousecapital.com</a>
                        </div>
                        `;
                        formCont.classList.add('submitted');
                        formCont.classList.remove('transparent');
                    }, 1000);
                }
            });
        }

        function routePage(from, to) {
            if (from === to) return;

            master_loc = to;

            switch (from) {
                case 'home': {
                    switch (to) {
                        case 'what-we-do': {
                            window.history.pushState('', '', `${ROOT}#what-we-do`);
                            homeToWWD();
                        }; break;
                        case 'about': {
                            window.history.pushState('', '', `${ROOT}#about`);
                            homeToAbout();
                        }; break;
                        case 'contact': {
                            window.history.pushState('', '', `${ROOT}#contact`);
                            homeToContact();
                        }; break;
                    }
                }; break;
                case 'what-we-do': {
                    switch (to) {
                        case 'home': {
                            window.history.pushState('', '', `${ROOT}`);
                            WWDToHome();
                        }; break;
                        case 'about': {
                            window.history.pushState('', '', `${ROOT}#about`);
                            WWDToAbout();
                        }; break;
                        case 'contact': {
                            window.history.pushState('', '', `${ROOT}#contact`);
                            WWDToContact();
                        }; break;
                    }
                }; break;
                case 'about': {
                    switch (to) {
                        case 'home': {
                            window.history.pushState('', '', `${ROOT}`);
                            aboutToHome();
                        }; break;
                        case 'what-we-do': {
                            window.history.pushState('', '', `${ROOT}#what-we-do`);
                            aboutToWWD();
                        }; break;
                        case 'contact': {
                            window.history.pushState('', '', `${ROOT}#contact`);
                            aboutToContact();
                        }; break;
                    }
                }; break;
                case 'contact': {
                    switch (to) {
                        case 'home': {
                            window.history.pushState('', '', `${ROOT}`);
                            contactToHome();
                        }; break;
                        case 'what-we-do': {
                            window.history.pushState('', '', `${ROOT}#what-we-do`);
                            contactToWWD();
                        }; break;
                        case 'about': {
                            window.history.pushState('', '', `${ROOT}#about`);
                            contactToAbout();
                        }; break;
                    }
                }; break;
            }
        }

        window.addEventListener("popstate", (e) => {
            routePage(master_loc, getLocation());
        });

        /* TRANSITION FUNCTIONS */

        function homeToWWD() {
            SECTION_ONE_CONTAINER.classList.add('transparent');
            SECTION_TWO_CONTAINER.classList.add('transparent');
            NAV_WWD.classList.add('selected');

            setTimeout(() => {
                TOP_LOGO.classList.remove('transparent');
                SECTION_ONE_CONTAINER.innerHTML = WWD_SECTION_ONE;
                SECTION_TWO_CONTAINER.innerHTML = WWD_SECTION_TWO;
                SECTION_ONE_CONTAINER.classList.add('wwd')
                SECTION_ONE_CONTAINER.classList.remove('transparent');
                SECTION_TWO_CONTAINER.classList.remove('transparent');
            }, 1000);
        }

        function homeToAbout() {
            SECTION_ONE_CONTAINER.classList.add('transparent');
            SECTION_TWO_CONTAINER.classList.add('transparent');
            NAV_ABOUT.classList.add('selected');

            setTimeout(() => {
                SECTION_ONE.classList.add('about');
                SECTION_ONE_CONTAINER.classList.add('about');
                SECTION_TWO_CONTAINER.innerHTML = '';
                splitStateToLandingState();
            }, 500);

            setTimeout(() => {
                SECTION_ONE_CONTAINER.innerHTML = ABOUT_SECTION_ONE;
                TOP_LOGO.classList.remove('transparent');
                SECTION_ONE_CONTAINER.classList.remove('transparent');
            }, 1250);
        }

        function homeToContact() {
            SECTION_TWO_CONTAINER.classList.add('transparent');
            NAV_CONTACT.classList.add('selected');

            var temp = document.createElement('div');
            temp.innerHTML = CONTACT_SECTION_ONE.trim();
            var needed = temp.firstChild


            SECTION_ONE_CONTAINER.appendChild(needed);
            addListenerToSubmitButton();

            setTimeout(() => {
                SECTION_TWO_CONTAINER.innerHTML = '';
                splitStateToLandingState();
            }, 500);

            setTimeout(() => {
                document.getElementById('large-logo-container').classList.add('contact');
                addListenerToLargeLogo();
                NAVIGATION.classList.add('contact');
            }, 1250);

            setTimeout(() => {
                SECTION_ONE_CONTAINER.classList.add('contact');
                needed.classList.remove('transparent');
            }, 1500);


        }

        function WWDToHome() {
            SECTION_ONE_CONTAINER.classList.add('transparent');
            SECTION_TWO_CONTAINER.classList.add('transparent');
            TOP_LOGO.classList.add('transparent');
            NAV_WWD.classList.remove('selected');

            setTimeout(() => {
                SECTION_ONE_CONTAINER.innerHTML = HOME_SECTION_ONE;
                SECTION_TWO_CONTAINER.innerHTML = HOME_SECTION_TWO;
                addListenerToHomeButtons();
                SECTION_ONE_CONTAINER.classList.remove('wwd')
                SECTION_ONE_CONTAINER.classList.remove('transparent');
                SECTION_TWO_CONTAINER.classList.remove('transparent');
            }, 1000);
        }

        function WWDToAbout() {
            SECTION_ONE_CONTAINER.classList.add('transparent');
            SECTION_TWO_CONTAINER.classList.add('transparent');
            NAV_WWD.classList.remove('selected');
            NAV_ABOUT.classList.add('selected');

            setTimeout(() => {
                SECTION_ONE_CONTAINER.classList.remove('wwd')
                SECTION_ONE.classList.add('about');
                SECTION_ONE_CONTAINER.classList.add('about');
                SECTION_TWO_CONTAINER.innerHTML = '';
                splitStateToLandingState();
            }, 500);

            setTimeout(() => {
                SECTION_ONE_CONTAINER.classList.remove('transparent');
                SECTION_ONE_CONTAINER.innerHTML = ABOUT_SECTION_ONE;
            }, 1250);

        }

        function WWDToContact() {
            SECTION_ONE_CONTAINER.classList.add('transparent');
            SECTION_TWO_CONTAINER.classList.add('transparent');
            NAV_WWD.classList.remove('selected');
            NAV_CONTACT.classList.add('selected');
            var needed;

            setTimeout(() => {
                TOP_LOGO.classList.add('transparent');
            }, 500);

            setTimeout(() => {

                SECTION_ONE_CONTAINER.innerHTML = HOME_SECTION_ONE;
                SECTION_TWO_CONTAINER.innerHTML = '';
                addListenerToLargeLogo();
                SECTION_ONE_CONTAINER.classList.remove('transparent');

                var temp = document.createElement('div');
                temp.innerHTML = CONTACT_SECTION_ONE.trim();
                needed = temp.firstChild
                SECTION_ONE_CONTAINER.classList.remove('wwd');
                SECTION_ONE_CONTAINER.appendChild(needed);
                addListenerToSubmitButton();

                splitStateToLandingState();
            }, 750);

            setTimeout(() => {
                document.getElementById('large-logo-container').classList.add('contact');
                NAVIGATION.classList.add('contact');
            }, 1750);
            setTimeout(() => {
                SECTION_ONE_CONTAINER.classList.add('contact');
                needed.classList.remove('transparent');
            }, 2000);

        }

        function aboutToHome() {
            SECTION_ONE_CONTAINER.classList.add('transparent');
            TOP_LOGO.classList.add('transparent');
            NAV_ABOUT.classList.remove('selected');

            setTimeout(landingStateToSplitState, 500)

            setTimeout(() => {
                SECTION_ONE_CONTAINER.innerHTML = HOME_SECTION_ONE;
                SECTION_TWO_CONTAINER.innerHTML = HOME_SECTION_TWO;
                addListenerToHomeButtons();
                SECTION_ONE.classList.remove('about');
                SECTION_ONE_CONTAINER.classList.remove('about');
                SECTION_ONE_CONTAINER.classList.remove('transparent');
                SECTION_TWO_CONTAINER.classList.remove('transparent');
            }, 1250);

        }

        function aboutToWWD() {
            SECTION_ONE_CONTAINER.classList.add('transparent');
            NAV_ABOUT.classList.remove('selected');
            NAV_WWD.classList.add('selected');

            setTimeout(landingStateToSplitState, 500)

            setTimeout(() => {
                SECTION_ONE_CONTAINER.innerHTML = WWD_SECTION_ONE;
                SECTION_TWO_CONTAINER.innerHTML = WWD_SECTION_TWO;
                SECTION_ONE.classList.remove('about');
                SECTION_ONE_CONTAINER.classList.remove('about');
                SECTION_ONE_CONTAINER.classList.add('wwd')
                SECTION_ONE_CONTAINER.classList.remove('transparent');
                SECTION_TWO_CONTAINER.classList.remove('transparent');
            }, 1250);
        }

        function aboutToContact() {
            SECTION_ONE_CONTAINER.classList.add('transparent');
            NAV_ABOUT.classList.remove('selected');
            NAV_CONTACT.classList.add('selected');

            TOP_LOGO.classList.add('transparent');
            setTimeout(() => {
                SECTION_ONE.classList.remove('about');
                SECTION_ONE_CONTAINER.classList.remove('about');
                SECTION_ONE_CONTAINER.innerHTML = HOME_SECTION_ONE + CONTACT_SECTION_ONE;
                SECTION_TWO_CONTAINER.innerHTML = '';
                addListenerToLargeLogo();
                addListenerToSubmitButton();
                SECTION_ONE_CONTAINER.classList.remove('transparent');
            }, 1000);

            setTimeout(() => {
                NAVIGATION.classList.add('contact');
                SECTION_ONE_CONTAINER.classList.add('contact');
                document.getElementById('large-logo-container').classList.add('contact');
                document.getElementById('contact-form-container').classList.remove('transparent');
            }, 1500);
        }

        function contactToHome() {
            document.getElementById('contact-form-container').classList.add('transparent');
            SECTION_ONE_CONTAINER.classList.remove('contact');
            document.getElementById('large-logo-container').classList.remove('contact');
            NAV_CONTACT.classList.remove('selected');
            NAVIGATION.classList.remove('contact');

            setTimeout(() => {
                SECTION_ONE_CONTAINER.lastChild.remove();
                landingStateToSplitState();
            }, 1000);

            setTimeout(() => {
                SECTION_TWO_CONTAINER.innerHTML = HOME_SECTION_TWO;
                addListenerToHomeButtons();
                SECTION_TWO_CONTAINER.classList.remove('transparent');
            }, 1750);
        }

        function contactToWWD() {
            document.getElementById('contact-form-container').classList.add('transparent');
            SECTION_ONE_CONTAINER.classList.remove('contact');
            document.getElementById('large-logo-container').classList.remove('contact');
            NAV_CONTACT.classList.remove('selected');
            NAVIGATION.classList.remove('contact');

            setTimeout(() => {
                SECTION_ONE_CONTAINER.lastChild.remove();
                SECTION_ONE_CONTAINER.classList.add('transparent');
                landingStateToSplitState();
            }, 1000);

            setTimeout(() => {
                TOP_LOGO.classList.remove('transparent');
                SECTION_ONE_CONTAINER.innerHTML = WWD_SECTION_ONE;
                SECTION_TWO_CONTAINER.innerHTML = WWD_SECTION_TWO;
                SECTION_ONE_CONTAINER.classList.add('wwd')
                SECTION_ONE_CONTAINER.classList.remove('transparent');
                SECTION_TWO_CONTAINER.classList.remove('transparent');
            }, 1750);
        }

        function contactToAbout() {
            document.getElementById('contact-form-container').classList.add('transparent');
            SECTION_ONE_CONTAINER.classList.remove('contact');
            document.getElementById('large-logo-container').classList.remove('contact');
            NAV_CONTACT.classList.remove('selected');
            NAV_ABOUT.classList.add('selected');
            NAVIGATION.classList.remove('contact');

            setTimeout(() => {
                SECTION_ONE_CONTAINER.lastChild.remove();
                SECTION_ONE_CONTAINER.classList.add('transparent');
            }, 1000);

            setTimeout(() => {
                SECTION_ONE_CONTAINER.innerHTML = ABOUT_SECTION_ONE;
                SECTION_ONE.classList.add('about');
                SECTION_ONE_CONTAINER.classList.add('about');
                SECTION_ONE_CONTAINER.classList.remove('transparent');
                TOP_LOGO.classList.remove('transparent');
            }, 2000);
        }
    }
}