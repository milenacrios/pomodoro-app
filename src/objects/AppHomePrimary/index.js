import AppText from "../../components/AppText"
import AppFigure from "../../components/AppFigure"
import "./style.css"
const AppHomePrimary = () => {
    return /*html*/`
        <section class="app-home-primary">
            ${AppText()}
            ${AppFigure()}
        </section>
    `
}
export default AppHomePrimary;