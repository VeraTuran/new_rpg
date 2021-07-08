class Game {
    constructor (turnLeft = 10, characters = new Array()){
        this.turnLeft = turnLeft;
        this.characters = characters;
        this.initCharacters();
    }
    
    initCharacters = () => {
        let assassin = new Assassin();
        let fighter = new Fighter();
        let monk = new Monk();
        let berzerker = new Berzerker();
        let paladin = new Paladin();
        console.log("Our players have been created!")
        this.characters.push(assassin, fighter, monk, berzerker, paladin)
    }

    startGame = () => {
        console.log("Lets start testing");
    }
}


// instantier personnages
// appeller Turn
// decrementer
// stats, etc.