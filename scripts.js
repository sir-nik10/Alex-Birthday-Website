let firstTime = true;
//create new audio context (For Chrome)
let audioCtx = new AudioContext();
let button = document.getElementById('bottom-center-button');
//on click 
button.addEventListener('click', () =>{
    //display cake animation
    document.getElementById('container').style.display = 'block';
    //play music on click first time 
    //play confetti after cake animation
    if(firstTime){
      playAudio();
      confettiAnimation(firstTime);
      firstTime=false;
    }else{
      confettiAnimation(firstTime);
    }
     
});

function playAudio(){
  let audio = new Audio("music/Bongo Cat - Birthday Song (TRAP REMIX).mp3");
  audio.volume =.15;
  //wait for cake
  setTimeout(function(){
    audio.play()
  },4000);
  setTimeout(function(){
    audio.pause();
  },24000);
}

function confettiAnimation(firstTime){
   //launch confetti at end of cake animation
   if(firstTime){
    setTimeout(function (){
        //launch from left edge
         confetti({
              particleCount: 200,
              angle: 60,
              spread: 55,
              origin: { x: 0 }
            });
            // and launch a few from the right edge
            confetti({
              particleCount: 200,
              angle: 120,
              spread: 55,
              origin: { x: 1 }
            });
     }, 6000)
     firstTime = false;
    }else{
      //launch from left edge
      confetti({
        particleCount: 100,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
       });
       // and launch a few from the right edge
       confetti({
          particleCount: 100,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
  }
}