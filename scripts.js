

let firstTime = true;
//display cake after button click
document.getElementById('bottom-center-button').addEventListener('click', () =>{
     document.getElementById('container').style.display = 'block';
    //console.log("anything");
    if(firstTime){
     let audioCtx = new AudioContext();
     let audio = new Audio("music/Bongo Cat - Birthday Song (TRAP REMIX).mp3");
     console.log(audioCtx);
     console.log(audioCtx.state);
     console.log(audio)
     audio.volume =.25;
     audio.play()
     firstTime = false;
    } 
    
});

//display conf
document.getElementById("bottom-center-button").addEventListener("click", () =>{
     //alert("buttonclicked")
    //TODO: Confetti after cake animation finish
    //confetti();

     // let canvas = document.createElement("canvas");
     // canvas.width = 600;
     // canvas.height = 600;
     // let container = document.getElementsByClassName("button-wrapper")[0];
     // container.appendChild(canvas);
 
    //let confetti_button = confetti.create();
     
     //confetti_button({
     // do this for 30 seconds


  // launch a few confetti from the left edge
 // for(let i=0; i< 5; i++ ){
     if(firstTime){
          setTimeout(function (){
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
     
  //}
  // keep going until we are out of time
    
});
