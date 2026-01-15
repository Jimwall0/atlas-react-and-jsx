import picture from "./assets/open.svg"


export default function OpenLink(link){
    return <a href={link} alt="Link"><img src={picture}/></a>
}