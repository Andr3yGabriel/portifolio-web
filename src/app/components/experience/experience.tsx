import { SectionTitle } from "../sectionTitle/sectionTitle"
import { Skill } from "../skills/skills";

import "./experience.scss";

export function Experience() {
    return (
        <div className="experience">
            <SectionTitle title="Experience"/>
            <p>
                7 months of experience in the information technology area, working with development for 4 months at NewM and with data analysis for 3 months at Pecista.
            </p>
            <div className="experienceTime">
                <Skill image="/react.svg" measure={1} months="4 months"/>	
                <Skill image="/javascript.svg" measure={1} months="4 months"/>	
                <Skill image="/typescript.svg" measure={1} months="4 months"/>	
                <Skill image="/docker.svg" measure={1} months="4 months"/>	
                <Skill image="/git.svg" measure={1} months="4 months"/>	
                <Skill image="/dotnet.svg" measure={1} months="4 months"/>	
            </div>
      </div>
    )
}