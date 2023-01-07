import React from 'react'
import './Faixa.scss'

function updateTime() {
  // Pega os elementos span
  let daysSpan = document.querySelector("#time-day");
  let hoursSpan = document.querySelector("#time-hrs");
  let minutesSpan = document.querySelector("#time-mins");
  let secondsSpan = document.querySelector("#time-secs");

  // Pega a data atual
  var currentDate = new Date();

  // Define a data do evento
  var eventDate = new Date("March 3, 2023");

  // Calcula a diferença entre as duas datas, em milissegundos
  var timeDifference = eventDate - currentDate;

  // Converte a diferença para segundos
  timeDifference = timeDifference / 1000;

  // Calcula o número de dias, horas, minutos e segundos restantes
  var days = Math.floor(timeDifference / (60 * 60 * 24));
  var hours = Math.floor((timeDifference % (60 * 60 * 24)) / (60 * 60));
  var minutes = Math.floor((timeDifference % (60 * 60)) / (60));
  var seconds = Math.floor((timeDifference % (60)) / 1);

  // Atualiza o conteúdo do elemento span com o tempo restante
  // timeSpan.textContent = `${days} ${hours}:${minutes}:${seconds}`;
  daysSpan.textContent = days
  hoursSpan.textContent = hours
  minutesSpan.textContent = minutes
  secondsSpan.textContent = seconds
}

// Atualiza a hora a cada segundo
setInterval(updateTime, 1000);

function Faixa() {
  return (
    <div className='faixa-container'>
            
          <div className='faixa-time'>

              <div className='time-field'>
                <span id='time-day' className='time-value'></span>
                <span className='time-label'>Dias</span>
              </div>

              <div className='time-field'>
                <span id='time-hrs' className='time-value'></span>
                <span className='time-label'>Hrs</span>
              </div>

              <div className='time-field'>
                <span id='time-mins' className='time-value'></span>
                <span className='time-label'>Mins</span>
              </div>

              <div className='time-field'>
                <span id='time-secs' className='time-value'></span>
                <span className='time-label'>Secs</span>
              </div>

          </div>

          <div className='faixa-text'>
            As inscrições irão começar em breve, não perca a chance de lutar pelo seu lugar na universidade!
          </div>

    </div>
  )
}

export default Faixa