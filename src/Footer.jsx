import links from "./assets/links.json"


export default function Footer(){
    return (
        <footer>
            <ul>
                {links.map((item) => (
                    <li key={item.id}>{item.label}</li>
                ))}
            </ul>
            <p>© {new Date().getFullYear()} Atlas School</p>
        </footer>
    );
}