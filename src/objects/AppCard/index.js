import AppButton from "../../components/AppButton";
import AppButtonMusicTimer from "../AppButtonMusicTimer";
import "./style.css"
const AppCard = () => {
    return /*html*/ `
        <section class="app-card">
            <ul class="app-card-list">
                <li data-contexto="foco" class="app-card-button active app-button-foco"> ${AppButton("Foco")} </li>
                <li data-contexto="short" class="app-card-button app-button-descanso-curto" > ${AppButton("Descanso curto")} </li>
                <li data-context="long" class="app-card-button app-button-decanso-longo" > ${AppButton("Descanso longo")} </li>
            </ul>
            
            <!--aqui vai o timer de acordo com cada modo -->
            <div id="timer" class="app-card-timer"></div>
            ${AppButtonMusicTimer()}
        </section>
    
    `
}

export default AppCard;