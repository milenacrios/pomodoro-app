import './style.css'
const AppFormAddTask = () => {
    return /*html*/ `
        <form class="app__form-add-task hidden" aria-hidden="true">
            <div class="app__form-field">
                <label class="app__form-label">
                    Adicionando tarefa
                </label>
                <textarea required rows="4" class="app__form-textarea" placeholder="No que você está trabalhando?"></textarea>
            </div>
            <footer class="app__form-footer">
                <button type="button" class="app__form-footer__button app__form-footer__button--delete">
                    <img src="./images/delete.png" alt=""> Deletar
                </button>
                <div class="splitter"></div>
                <button type="button" class="app__form-footer__button app__form-footer__button--cancel">
                    <img src="./images/close.png" alt=""> Cancelar
                </button>
                <button class="app__form-footer__button app__form-footer__button--confirm">
                    <img src="./images/save.png" alt=""> Salvar
                </button>
            </footer>
        </form>
    
    `
}

export default AppFormAddTask;