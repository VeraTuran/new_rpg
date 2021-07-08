class Paladin extends Character {
    constructor (
        name = `Ulder`, 
        hp = 16, 
        dmg = 3, 
        mana = 160, 
        status = `playing`
    ){
        super(name, hp, dmg, mana, status)
    };
}