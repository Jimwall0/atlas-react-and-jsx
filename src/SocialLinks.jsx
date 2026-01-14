import linkedIn from "./assets/linkedin.svg"
import github from "./assets/github.svg"


export function SocialLinks(){
    return <div className="social-links">
        <a href="https://www.linkedin.com/in/tsimmuaj/"><span><img src={linkedIn} alt="LinkedIN"/></span></a>
        <a href="https://github.com/Jimwall0/atlas-react-and-jsx"><span><img src={github} alt="Github"/></span></a>
    </div>;
}