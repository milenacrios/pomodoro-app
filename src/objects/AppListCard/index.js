import './style.css'
import AppTasksHeader from '../AppTasksHeader';
import AppTitleListTasks from '../../components/AppTitleListTasks';
import AppDropDownContainer from '../AppDropDownContainer';
import AppFormAddTask from '../../components/AppFormAddTask';
import AppAddNewTask from '../../components/AppAddNewTask';
const AppListCard = () => {
    return /*html*/ `
        <section class="app-list-card">
            <div class="app-tasks-header-content">
                ${AppTasksHeader()}
                <div class="app-tasks-header-home"> 
                    ${AppTitleListTasks()}
                    ${AppDropDownContainer()}
                </div>
                <ul class="app-section-task-list">
                    <!--é aqui dentro, que adicionamos a lista de tarefas-->
                </ul>
                ${AppFormAddTask()}
                ${AppAddNewTask()}
            </div>
        </section>
    
    `
}

export default AppListCard;