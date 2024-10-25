import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./socialButtons.scss"

export function SocialBtns() {
    return (
        <div className="social">
            <a href="https://www.instagram.com/_andreyzy_/" target="blank">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/andrey-gabriel-ferreira-gon%C3%A7alves-1a2085251/" target="blank">
                <LinkedinIcon/>
            </a>
            <a href="https://github.com/Andr3yGabriel" target="blank">
                <GitHubIcon/>
            </a>
            <a href="https://x.com/home?lang=pt-br" target="blank">
                <TwitterIcon/>
            </a>
        </div>
    )
}