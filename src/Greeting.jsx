import day from "./assets/day.svg"
import afternoon from "./assets/evening.svg"
import night from "./assets/night.svg"


export function Greeting(){
    const hour = new Date().getHours();
    let image;
    let message;

    if (6 < hour && hour < 12) {
        image = <img src={day} alt="daylight image" />;
        message = "Good Morning!";
    } else if (12 < hour && hour < 17) {
        image = <img src={day} alt="daylight image" />;
        message = "Good Afternoon!";
    } else if (17 < hour && hour < 21) {
        image = <img src={afternoon} alt="evening image" />;
        message = "Good Evening!";
    } else {
        image = <img src={night} alt="night image" />;
        message = "Good Night!";
    }

    return <h1 className="greeting">{image}{message}</h1>
}
