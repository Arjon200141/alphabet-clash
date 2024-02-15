function playgame(){
     console.log('Play Game Now');

     //Hide Home screen
     const homeScreen = document.getElementById('home');
     homeScreen.classList.add('hidden')

     //Add Playground
     const homeRemove = document.getElementById('playground')
     homeRemove.classList.remove('hidden')
     continueGame();
}

function continueGame(){
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber)
 

    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split(''); 


    const alphabet = alphabets[index];
    console.log(alphabet)
    return alphabet;
}
