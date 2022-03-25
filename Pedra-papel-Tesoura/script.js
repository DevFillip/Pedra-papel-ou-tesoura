var options = document.querySelectorAll('.player-options div > img');

var playeropt = "";
var inimigoOpt = "";

function validarVitoria(){

    let vencedor = document.querySelector('.vencedor');

    if(playeropt == "papel"){

        if(inimigoOpt == "papel"){
           
            vencedor.innerHTML = "Empate!"; 

        }else if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = "Você perdeu! F no chat :("
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "Você ganhou! :)"
        }

    }

    if(playeropt == "pedra"){

        if(inimigoOpt == "papel"){
            vencedor.innerHTML = "Você perdeu! F no chat :("
        }else if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = "Você ganhou! :)"
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "Empate! :)"
        }

    }

    if(playeropt == "tesoura"){

        if(inimigoOpt == "papel"){
            vencedor.innerHTML = "Você ganhou! :)"
        }else if(inimigoOpt == "tesoura"){
            vencedor.innerHTML = "Empate! :)"
        }else if(inimigoOpt == "pedra"){
            vencedor.innerHTML = "Você perdeu! F no chat :("
        }

    }
}
function resetInimigo(){
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    for(var i = 0; i < enemyOptions.length; i++){
            enemyOptions[i].childNodes[0].style.opacity = 0.4;
          
        
}


}
function inimigoJogar(){
     let random = Math.floor(Math.random()*3);

    // alert(random)

    const enemyOptions = document.querySelectorAll('.enemy-options div');
    resetInimigo();
    for(var i = 0; i < enemyOptions.length; i++){
          if(i == random){
              enemyOptions[i].childNodes[0].style.opacity = 1;
              inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt')
          }

        
}
validarVitoria();
}


function resetOpacityPlayer(){
    for(var i = 0; i < options.length; i++){
        options[i].style.opacity = 0.4;
    }
}

for(var i = 0; i < options.length; i++){
    options[i].addEventListener('click', function(t){
        resetOpacityPlayer();
        t.target.style.opacity = 1.5;
        playeropt = t.target.getAttribute('opt');
     
        inimigoJogar();
       
    })
}