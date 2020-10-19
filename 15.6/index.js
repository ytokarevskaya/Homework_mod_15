const wsUri = "wss://echo.websocket.org/"


function pageLoaded() {
const sendBtn = document.querySelector(".btn_send")
const btnGeo = document.querySelector('.btn_geo')
const input = document.querySelector('input')
const infoOutput = document.querySelector('.info_output')
const chatOutput = document.querySelector(".chat_output")


let websocket = new WebSocket(wsUri)
  
websocket.onopen = () => {
  infoOutput.innerText = "Соединение установлено"
}

websocket.onmessage = function(evt) {
  writeToChat(evt.data, false)
  
}

websocket.onerror = () => {
  infoOutput.innerText = "При передаче данных произошла ошибка"
}


sendBtn.addEventListener("click", sendMessage)

function sendMessage() {
  if (!input.value) return
  websocket.send(input.value)
  writeToChat(input.value, true)
  input.value = ""
  }


function writeToChat(message, isRecieved) {
    let messageHTML = `<div class="${isRecieved? "recieved" : "sent"}">${message}</div>`
    chatOutput.innerHTML += messageHTML
}

btnGeo.addEventListener('click', () => {
    if (!navigator.geolocation) {
        alert('Geolocation не поддерживается вашим браузером')
      } 
    navigator.geolocation.getCurrentPosition(success, error)
})


const error = () => {
  notGeo = 'Невозможно получить ваше местоположение'
  websocket.send(notGeo)
}

const success = (position) => {
  const latitude  = position.coords.latitude
  const longitude = position.coords.longitude

  geo = `<div><a href="https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=17/${latitude}/${longitude} " target="_blank">Геолокация</a></div>`
  geo.className = "chat_output.sent"
  websocket.send(geo)
  }
}


document.addEventListener("DOMContentLoaded", pageLoaded)


// В общем застрял на этом задании, в итоге взял за основу вебинар, но не понял как присвоить 'Геолакацию' к нужному css классу
//так же есть глупый вопрос, о котором я уже непонятно какой модуль думаю)))Скажите пожалуйста, как мне присвоить Enter на кнопку???))) у меня keyCode всегда зачеркнутым получается, а в интеренете почему то мало инфы и она обычно вся датиуется до 2015)), может я не стой стороны зашел
// если я правильно понимаю то функция должна быть примерно такой

//enter = document.getElementById("myInput")
//enter.addEventListener("keyup", function(event) {
    // Число 13 в "Enter" и клавиши на клавиатуре
    //if (event.keyCode === 13) 
      //event.preventDefault();
      // Вызов элемента button одним щелчком мыши
      //document.getElementById("send").click();
    //}
//})
