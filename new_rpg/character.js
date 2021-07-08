class Character {
    constructor (name, hp, dmg, mana, status = "playing"){
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.status = status;
    }

    printStats () {
        console.log(`Player ${this.name} has ${this.hp} health left and is ${this.status}`)
        console.log(`You deal ${this.dmg} damage and have ${this.mana} mana available for attacks.`)
    }

    takeDmg(takenDmg) {
        this.hp -= takenDmg;
        if (this.hp <= 0) this.hp = 0;  
    }
    
    dealDamage (victim){
        victim.takeDmg(takenDmg)
    }

    /*
    modifyStatus ( ){
        if this.hp -= 0 
        this.status = dead
        else 
    }
    */
}