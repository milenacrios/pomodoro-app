import "./style.css"
const AppMusic = () => {
    return /*html*/ `
        <ul class="app-music"> 
            <li class="app-card-list-item">
                <label class="toggle">
                    <input class="toggle-checkbox" type="checkbox" id="alternar-musica">
                    <div class="toggle-switch"></div>
                </label>
            </li>
            <li class="app__card-list-item">
                <label class="app__card-list-label" for="alternar-musica">
                    Música
                </label>
            </li>
        </ul>
    `
}
export default AppMusic;
//app__card-list-item