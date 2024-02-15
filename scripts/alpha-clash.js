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

document.addEventListener('keyup' , function keyboardButton(event){
    const playerPressed = event.key;
    console.log(playerPressed);

    const currentAlphabet = document.getElementById('current-alphabet');
    const currentAlphabetValue = currentAlphabet.innerText;
    const expectedAlphabet = currentAlphabetValue.toLowerCase();

    if(playerPressed === expectedAlphabet)
    {
        const removeBackground = document.getElementById(expectedAlphabet)
        removeBackground.classList.remove('bg-orange-400');
        continueGame();
        console.log('Matched');
    }
    else{
        console.log('You Missed a chance');
    }
    
})

function continueGame(){
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber)
 

    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split(''); 


    const alphabet = alphabets[index];
    console.log(alphabet)
    

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    const setBackground = document.getElementById(alphabet)
    setBackground.classList.add('bg-orange-400');
}
