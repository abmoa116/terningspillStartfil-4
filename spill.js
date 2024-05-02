var poengsum, rundePoeng, aktivSpiller;
 
var gameIsOn = false;
 
const startSpill = () => {
    poengsum = [0, 0];
    aktivSpiller = 0;
    rundePoeng = 0;
    gameIsOn = true;
 
    document.querySelector('.terning').style.display ='none';
    document.getElementById('poeng-0').textContent = '0';
    document.getElementById('poeng-1').textContent = '0';
 
    document.getElementById('sum-0').textContent = '0';
    document.getElementById('sum-1').textContent = '0';
 
}
 
const kastTerning = () => {
    let terning = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.terning').style.display ='block';
    console.log('terning:',terning);
    document.querySelector('.terning').src = 'img/terning-' + terning + '.png';
    rundePoeng = rundePoeng + terning;
    console.log('rundePoeng:',rundePoeng);
    document.getElementById('poeng-' + aktivSpiller).textContent = rundePoeng;
    if(terning === 1) {
        console.log('Du fikk 1');
        rundePoeng = 0;
        document.getElementById('poeng-' + aktivSpiller).textContent = rundePoeng;
        byttSpiller();
    } else {
 
    }
 
}
const byttSpiller = () => {
    console.log('byttSpiller func');
    if(gameIsOn){
        aktivSpiller === 0 ? aktivSpiller = 1 : aktivSpiller = 0;
        rundePoeng = 0;
        document.getElementById('poeng-' + aktivSpiller).textContent = '0';
        document.getElementById('sum-' + aktivSpiller).textContent = poengsum[aktivSpiller];
        //Endre på aktiv spiller i CSS
        document.querySelector('.spiller-0-panel').classList.toggle('aktiv');
        document.querySelector('.spiller-1-panel').classList.toggle('aktiv');
        
 
 
 
    }
 
}
 
const byttAktivSpiller = () => {
    console.log('byttAktivSpiller har startet')
}
 
const holdFunction = () => {
    // beholde poengene
    poengsum[aktivSpiller] += rundePoeng;
    // Oppdaere gui
    document.getElementById('poeng-' + aktivSpiller).textContent = '0';
    document.getElementById('sum-' + aktivSpiller).textContent = poengsum[aktivSpiller];
    // Neste spiller sin tur
    byttSpiller();
 
}
 
 
 
// Knappene
const nyttSpillKnapp = document.querySelector('.btn-ny');
nyttSpillKnapp.addEventListener('click', startSpill);
 
const kastTerningKnapp = document.querySelector('.btn-kast');
kastTerningKnapp.addEventListener('click', kastTerning);
 
const holdKnapp = document.querySelector(".btn-hold");
holdKnapp.addEventListener("click", holdFunction);

startSpill();
 