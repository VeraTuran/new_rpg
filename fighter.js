class Fighter extends Character {
    constructor(
        name = `Grace`, 
        hp = 14, 
        dmg = 4, 
        mana = 40, 
        status = `playing`
    ){
        super(name, hp, dmg, mana, status); 
    };
};