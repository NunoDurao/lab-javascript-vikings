// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = (this.health - damage);
    }
}



// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    };
    receiveDamage(damage) {
        this.health = (this.health - damage);
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        }
        return `${this.name} has received ${damage} points of damage`;
    }
    battleCry() {
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = (this.health - damage);
        if (this.health <= 0) {
            return `A Saxon has died in combat`;
        }
        return `A Saxon has received ${damage} points of damage`;
    };
}


// War
class War {
    constructor() {
        this.vikingArmy = [],
            this.saxonArmy = []

    }

    addViking(viking) {
        this.vikingArmy.push(viking)

    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        let randomViking = this.vikingArmy[Math.floor(Math.random()) * this.vikingArmy.length];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()) * this.saxonArmy.length];

        let attack = (randomSaxon.receiveDamage(randomViking.attack()));

        if (randomSaxon.health <= 0) {
            this.saxonArmy.pop(randomSaxon)
        }

        return attack;
    };
    saxonAttack() {
        let randomViking = this.vikingArmy[Math.floor(Math.random()) * this.vikingArmy.length];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random()) * this.saxonArmy.length];

        let attack = (randomViking.receiveDamage(randomSaxon.attack()));

        if (randomViking.health <= 0) {
            this.vikingArmy.pop(randomViking)
        }

        return attack;
    };
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    };

}

