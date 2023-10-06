import { logo } from "../../assets";

export default function Header() {
    function handleGithub(){
        window.location.href = "https://github.com/57hemanth";    
    }
    return(
        <div className="w-full flex flex-row justify-between items-center py-4 mb-6">
            <img src={logo}></img>
            <button className="border-2 border-orange-500 px-2 py-1 rounded font-semibold" onClick={handleGithub}>GitHub</button>
        </div>
    )
}