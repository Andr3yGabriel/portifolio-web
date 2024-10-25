import { SectionTitle } from "../sectionTitle/sectionTitle";
import "./information.scss";

export function Info() {
    return (
        <div className="info">
            <SectionTitle title="Languages"/>
            <div className="languages-info">
                <span>EN - Advanced</span>
                <span>PT BR - Native Speaker</span>
            </div>
            <SectionTitle title="Education"/>
            <div className="educational-info">
                <span>🎓 - Systems to Internet Associate Degree <br /> Instituto Federal de Brasília (In Course)</span>
                <span>🎓 - Telecommunications Engineering Bachelor Degree <br /> Universidade Federal do Pará (Interrupted)</span>
            </div>
        </div>
    )
}