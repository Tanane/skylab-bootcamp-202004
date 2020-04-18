function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

let usedNumbers = []

function getUniqueNumber(){
    let number = getRandomArbitrary(1, 20)
    if(usedNumbers.includes(number)){
      return getUniqueNumber()
    }
    usedNumbers.push(number)
    return number
}

let generatedNumber = []

function getNonRepeatedNumber(){
    let number = getRandomArbitrary(1, 20)
    if(generatedNumber.includes(number)){
      return getNonRepeatedNumber()
    }
    generatedNumber.push(number)
    return number
}

  let myCards = [
    [
      getUniqueNumber(),
      getUniqueNumber(),
      getUniqueNumber(),
      getUniqueNumber(),
      getUniqueNumber()
    ],
  
    [
      getUniqueNumber(),
      getUniqueNumber(),
      getUniqueNumber(),
      getUniqueNumber(),
      getUniqueNumber()
    ],
  
    [
      getUniqueNumber(),
      getUniqueNumber(),
      getUniqueNumber(),
      getUniqueNumber(),
      getUniqueNumber()
    ]
  ];
  
  let total = 0;
  
  function playGame() {
    let newNumber = getNonRepeatedNumber();
    total++;
    console.log(newNumber, "new number");
  
    myCards = myCards.map(group => {
      return group.map(number => {
        if (number === newNumber) return "X";
        return number;
      })
    });
  
    let line = 0;

    myCards.forEach((group, i) => {
      let isLine = group.every(card => {
        return card === "X";
      });
    
      if (isLine) {
        line++
        if(line === 1) console.log('LINE!!', i + 1);
    }
    });
  
    console.table(myCards);
       
    if(line === 3){
      return console.log(`Congratulations you have completed the game with a total of ${total} balls!!!`)
        }
  

  
          let keepPlaying = confirm("Quieres generar una bola?");
          if (keepPlaying) {
            return playGame();
          } else {
            alert("Game over!");
          }
  }
  
  playGame();
  