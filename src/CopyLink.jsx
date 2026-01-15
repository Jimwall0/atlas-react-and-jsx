export function CopyLink({ link }){
    const clickbehavior = (event) => {
        event.preventDefault();
        navigator.clipboard.writeText(link);
    }
    return <a href={link} onClick={clickbehavior}><span><img className="copy" src="assets/copy.svg"></img></span></a>
}
