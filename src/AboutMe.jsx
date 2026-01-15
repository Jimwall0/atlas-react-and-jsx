import selfie from "./assets/selfie.svg"


export default function AboutMe(){
    return (
        <div className="about-me">
            <span><img src={selfie} alt="Portrait"/></span>
            <p>Hello my Name is Tsimmuaj Yang. I'm a software dev enrolled in the Fullstack development course here at Atlas school. I enjoy playing games on my off time like factorio. Becuase of my shared interest in the industry, One of my goals in life is to make a successfull game.</p>
        </div>
    );
}