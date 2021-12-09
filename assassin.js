class Assassin extends Character {
    constructor(
        name = `Carl`, 
        hp = 6, 
        dmg = 6, 
        mana = 20, 
        status = `playing`
    ){
        super(name, hp, dmg, mana, status);
    };
};