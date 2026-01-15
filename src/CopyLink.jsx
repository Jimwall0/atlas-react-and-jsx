import picture from "./assets/open.svg"


export default function CopyLink({ link }){
    const clickbehavior = (event) => {
        event.preventDefault();
        navigator.clipboard.writeText(link);
    }
    return <a href={link} onClick={clickbehavior}><span><img className="copy" src={picture}></img></span></a>
}
