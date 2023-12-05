import './style.css'
import AppTaskActiveLabel from '../../components/AppTaskActiveLabel';
import AppTasksActiveDescription from '../../components/AppTasksActiveDescription';
const AppTasksHeader = () => {
    return /*html*/ `
                <header class="app-tasks-header-active">
                    ${AppTaskActiveLabel()}
                    ${AppTasksActiveDescription()}
                </header>
    `
}

export default AppTasksHeader;