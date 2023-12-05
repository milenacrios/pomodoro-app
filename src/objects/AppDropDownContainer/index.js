import AppButtonAddTasks from "../../components/AppButtonAddTasks";
import AppButtonClearDone from "../../components/AppButtonClearDone";
import AppClearAllTasks from "../../components/AppClearAllTasks";
import './style.css'
const AppDropDownContainer = () => {
    return /*html*/ `
        <div class="dropdown-container"> 
            ${AppButtonAddTasks()}
            <ul class="app-section-task-header-ul">
                <li class="app-section-task-header-li"> 
                    ${AppButtonClearDone()}
                </li>
                <li class="app_-section-task-header-li">
                    ${AppClearAllTasks()}
                </li>
            </ul>
        </div>
    `
}
export default AppDropDownContainer;