function createGame (player1, hour, player2) {
    return `
    <li> 
    <img src="./assets/images/icon-${player1}.svg" alt="${player1} flag"/> 
    <strong> ${hour} </strong>
    <img src="./assets/images/icon-${player2}.svg" alt="${player2} flag"/> 
</li>
    `
}
let delay=-1; 
function createCard(date, day, group, games) {
delay = delay + 1; 
return `<div class="card" style="animation-delay: ${delay}s" >
    <h2> ${date} <span>${day}</span> </h2>
    <ul> 
    <h3> ${group} </h3> 
    ${games}
        </ul> 
        </div> 
`
}


document.querySelector('#cards').innerHTML =
   createCard('20/11', 'domingo', 'Grupo A', createGame('qatar', '13:00', 'ecuador') +
     '<h2> 21/11 <span> segunda </span> </h2>' + 
     '<h3> Grupo A </h3>' + 
     createGame('senegal', '13:00', 'netherlands') +
    ' <h3> Grupo B </h3>' +
    createGame('england', '10:00', 'iran') +
    createGame('united-states', '16:00', 'wales')  ) +

    createCard('22/11', 'terça', 'Grupo C',  createGame('argentina', '07:00', 'saudi-arabia') + 
    createGame('mexico', '13:00', 'poland') + 
    ' <h3> Grupo D </h3>' +
    createGame('denmark', '10:00', 'tunisia') +
    createGame('france', '16:00', 'australia')
     ) +

    createCard('23/11', 'quarta', 'Grupo F',  createGame('morocco', '07:00', 'croatia') + 
     createGame('belgium', '16:00', 'canada') + 
     ' <h3> Grupo E </h3>' +
     createGame('germany', '10:00', 'japan') +
     createGame('spain', '13:00', 'costa-rica')
      ) +
      createCard('24/11', 'quinta', 'Grupo G',  createGame('switzerland', '07:00', 'camaroes') + 
     createGame('brazil', '16:00', 'serbia') + 
     ' <h3> Grupo H </h3>' +
     createGame('uruguay', '10:00', 'south-korea') +
     createGame('portugal', '13:00', 'ghana')
      ) 
     

