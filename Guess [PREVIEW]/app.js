var i = 0;
msgs = ["Hi user", "I'm Guessy", "Activating your brain...", "let me introduce the game"];
var description = "Guess è un gioco a quiz a base informatica. Metti in campo le tue conoscenze informatiche per superare i livelli.<br><br>Prima di partire con il primo match potrai scegliere i linguaggi da te conosciuti ed altre preferenze in base alle tue conoscenze.<br><br>Ogni volta che superi 10 livelli il ti verrà assegnato un rango più alto, quindi, le domande si faranno sempre più complicate.<br><br>Cerca di sopravvivere al tempo. Per ogni domanda hai dai 10 secondi fino ad 1min per rispondere.<br><br>Ti verranno assegnati all'inizio di ogni partita e ad ogni cambio rango dei life points (circa 4). Un life point si consumerà appena rispondi in modo errato ad un quesito.<br><br>Se consumi tutti i tuoi life points, beh, sappiamo entrambi come finisce no?<br><br>Adesso mettiti comodo, ripassa le tue nozioni informatiche e raggiungi il rango massimo!<br><br>Buon divertimento";


window.onload = function load() { 
    var view = setInterval(intro, 4000);
} 

function intro(msgBox){
    if(i < msgs.length){
        document.getElementById('msg').innerHTML = msgs[i];
        document.getElementById('msg').classList = 'fadeEff';
        setTimeout(fadeOut, 3950);
        i++;
        console.log(i);
    }
    if(i==4){
        var tut = setTimeout(() => {
            document.getElementById('tutorial').style.display = 'block';
            document.getElementsByName('alertTitle')[0].innerHTML = 'How to play.';
            document.getElementsByName('alertDesc')[0].innerHTML = description;
        }, 4000);
    }
}

function fadeOut(){
    document.getElementById('msg').classList = '';
}