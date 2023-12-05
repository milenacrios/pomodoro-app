import AppLogo from "../../components/AppLogo";
import './style.css'
const AppHeader = () => {
    return /*html*/`
        <header class="app-header">
            ${AppLogo()}
        </header>
    `
}

export default AppHeader;