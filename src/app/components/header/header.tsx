import Image from "next/image";

import "./header.scss";

export function Header() {
    return(
        <div className="header">
            <div>
                <h1>Hi, I`m Andrey!👋🏾</h1>
                <h2>Full-Stack Developer</h2>
            </div>
            <Image
                src="/perfil.jpeg"
                alt="My profile picture"
                width={325}
                height={290}
                priority
            />
        </div>
    )
}