import './src/components/styles/settings/colors.css'
import './src/components/styles/elements/base.css'
import AppHeader from './src/objects/AppHeader';
import AppHomePrimary from './src/objects/AppHomePrimary';
import AppCard from './src/objects/AppCard';
import AppListCard from './src/objects/AppListCard';
import AppFooter from './src/components/AppFooter';
const $root = document.querySelector("#root")


$root.insertAdjacentHTML(
    "beforeend", 
    `
    ${AppHeader()}
    ${(AppHomePrimary())}
    ${AppCard()}
    ${AppListCard()}
    ${AppFooter()}
    `
)

const $html = document.querySelector("html")
const $htmlFocoBt = document.querySelector(".app-button-foco")
const $htmlDescansoCurtoBt = document.querySelector(".app-button-descanso-curto")
const $htmlDescansoLongoBt = document.querySelector(".app-button-decanso-longo")

const $banner = document.querySelector(".app-figure")
const $text = document.querySelector(".app-text")
const $buttons = document.querySelectorAll(".app-card-button")
const $timeBt = document.querySelector("#start-pause")

let currentTime = 1500 
let intervaloId = null

const $musicPlay = document.querySelector("#alternar-musica")
const music = new Audio("./audio/luna-rise-part-one.mp3")
const musicPlay = new Audio("./audio/play.wav")
const musicPause = new Audio("./audio/pause.mp3")
const musicFinal = new Audio("./audio/beep.mp3")

const $textButtonPlay = document.querySelector("#start-pause span")
const $iconButtonPlay = document.querySelector(".app__card-primary-button-icon")

const $timer = document.querySelector("#timer")

const $taskListContainer = document.querySelector(".app-section-task-list")
const $formTask = document.querySelector(".app__form-add-task")
const $togleFormTaskBtn = document.querySelector(".app__button--add-task")
const $formLabel = document.querySelector(".app__form-label")
const $textArea = document.querySelector(".app__form-textarea")
const $cancelTask = document.querySelector(".app__form-footer__button--cancel")
const $taskActiveDescription = document.querySelector(".app-tasks-active-description")

music.loop = true
//FOCO
$htmlFocoBt.addEventListener("click", () => {
    zerar()
    currentTime = 1500
    alterContext("foco")
    $htmlFocoBt.classList.add("active")
})
//Descanso Curto
$htmlDescansoCurtoBt.addEventListener("click", () => {
    zerar()
    currentTime = 300
    alterContext("descanso-curto")
    $htmlDescansoCurtoBt.classList.add("active")
})
//Descanso Longo
$htmlDescansoLongoBt.addEventListener("click", () => {
    zerar()
    currentTime = 900
    alterContext("descanso-longo")
    $htmlDescansoLongoBt.classList.add("active")
})

$musicPlay.addEventListener("change", () => {
    if(music.paused) {
        music.play()
    } else {
        music.pause()
    }
})

const alterContext = (context) => {
    printTime()
    $buttons.forEach(function(context) {
        context.classList.remove("active")
    })
    $html.setAttribute("data-contexto", context)
    $banner.setAttribute("src", `./images/${context}.png`)
    
    switch (context) {
        case "foco":
            $text.innerHTML  = 'Otimize sua produtividade, <span style="font-weight: 700"> mergulhe no que importa </span>'
            break;
        case "descanso-curto":
            $text.innerHTML  = 'Que tal dar uma respirada? <span style="font-weight: 700"> Faça uma pausa curta </span>'
            break;
        case "descanso-longo":
            $text.innerHTML  = 'Hora de voltar à superfície, <span style="font-weight: 700"> Faça uma pausa longa </span>'
            break;
    
        default:
            break;
    }
}


const playTime = () => {
    if(currentTime <= 0) {
        musicFinal.play()
        alert("Tempo finalizado!")
        musicFinal.pause()
        zerar()
        let $context = $html.getAttribute("data-contexto")
        switch ($context) {
            case "foco":
                currentTime = 1500;
                break;
            case "descanso-curto":
                currentTime = 300;
                break;
            case "descanso-longo":
                currentTime = 900;
                break;
            default:
                break;
        }
        printTime()
        return 
    }
    currentTime-= 1
    printTime()
}

$timeBt.addEventListener("click", iniciarOuPausar)

function iniciarOuPausar() {
    if(intervaloId) {
        musicPause.play()
        zerar()
        return 
    }
    musicPlay.play()
    intervaloId = setInterval(playTime, 1000)
    $textButtonPlay.textContent = "Pausar"
    $iconButtonPlay.setAttribute("src", "./images/pause.png")
}

function zerar() {
    clearInterval(intervaloId)
    $textButtonPlay.textContent = "Começar"
    $iconButtonPlay.setAttribute("src", "./images/play_arrow.png")
    intervaloId = null
}

function printTime() {
    const time = new Date(currentTime * 1000)
    const timeFormatted = time.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    $timer.innerHTML = `${timeFormatted}`
}

printTime()


//CRUD de Tarefas:
const localStorageTasks = localStorage.getItem("tasks")
let tasks = localStorageTasks ? JSON.parse(localStorageTasks) : []

const taskIconSvg = `<svg width="18" height="14" viewBox="0 0 18 14" fill="none"
xmlns="http://www.w3.org/2000/svg">
<path
    d="M6 11.1719L16.5938 0.578125L18 1.98438L6 13.9844L0.421875 8.40625L1.82812 7L6 11.1719Z"
    fill="white" />
</svg>`

let taskSelected = null
let itemTaskSelected = null

const selectedTask = () => {
    
}

const clearForm = () => {
    $textArea.value = ''
    $formTask.classList.add("hidden")
}
function createTask(task) {
    const li = document.createElement('li') 
    li.classList.add("app-section-task-list-item")
    //o que vai ter dentro do li:
    const svgIcon = document.createElement('svg')
    svgIcon.innerHTML = taskIconSvg

    const paragraph = document.createElement('p')
    paragraph.classList.add("app-section-task-list-item-description")
    paragraph.textContent = task.description

    li.onclick = () => {
        selectedTask(task, li)
    }

    li.appendChild(svgIcon)
    li.appendChild(paragraph)

    return li
}

tasks.forEach(task => {
    const taskItem = createTask(task)
    $taskListContainer.appendChild(taskItem)
})


$togleFormTaskBtn.addEventListener("click", () => {
    $formLabel.textContent = "Adicionando tarefa"
    $formTask.classList.toggle('hidden')
})

$cancelTask.addEventListener("click", () => {
    clearForm()
})

const updateLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

$formTask.addEventListener("submit", (event) => {
    event.preventDefault()
    const task = {
        description: $textArea.value,
        done: false
    }
    tasks.push(task)
    const taskItem = createTask(task)
    $taskListContainer.appendChild(taskItem)
    updateLocalStorage()
    clearForm()
})

localStorage.setItem("quantidade", 10)
console.log(localStorage.getItem("quantidade"))