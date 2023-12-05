import AppMusic from "../../components/AppMusic"
import AppPlay from "../../components/AppPlay"
import "./style.css"
const AppButtonMusicTimer = () => {
    return /*html*/`
       <div class="app-button-music-timer"> 
            ${AppMusic()}
            ${AppPlay()}
       </div>
    
    `
}
export default AppButtonMusicTimer