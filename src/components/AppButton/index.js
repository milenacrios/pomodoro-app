import "./style.css"
const AppButton = (text) => {
    return /*html*/ `
    <button data-contexto="foco" class="app-button">
        ${text}
    </button>
    `
}

export default AppButton;