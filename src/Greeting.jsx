export function Greeting(){
    const hour = new Date().getHours();
    let image;

    if (6 < hour && hour < 12) {
        image = <img src="./src/assets/day.svg" alt="daylight image" />;
    } else if (12 < hour && hour < 17) {
        image = <img src="./src/assets/day.svg" alt="daylight image" />;
    } else if (17 < hour && hour < 21) {
        image = <img src="./src/assets/evening.svg" alt="evening image" />;
    } else {
        image = <img src="./src/assets/night.svg" alt="night image" />;
    }

    return <h1 className="greeting">{image}</h1>
}