// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  };
  receiveDamage(damage) {
    this.health -= damage;
  }
};

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  };
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else (this.health < 1); {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
};

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else (this.heatlh < 1); {
      return `A Saxon has died in combat`;
    }
  }
};

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  };
  addViking(viking) {
    let viking1 = new Viking("Ragnar Blodtann", 180, 30);
    let viking2 = new Viking("Knut den staute", 175, 28);
    let viking3 = new Viking("Roald den sterke", 165, 26);
    let viking4 = new Viking("Harald Hårfagre", 155, 24);
    let viking5 = new Viking("Einar Sølvtunge", 145, 25);
    this.vikingArmy.push(viking);
  };
  addSaxon(saxon) {  
    let saxon1 = new Saxon(150, 26);
    let saxon2 = new Saxon(145, 23);
    let saxon3 = new Saxon(135, 21);
    let saxon4 = new Saxon(160, 24);
    let saxon5 = new Saxon(155, 22);
    this.saxonArmy.push(saxon);
  };
  vikingAttack() {
    const randomSaxonSoldier = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomVikingSoldier = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    const randomSaxonSoldierDamage = randomSaxonSoldier.receiveDamage(randomVikingSoldier.strength);
    if (randomSaxonSoldier.health <= 0) {
      this.saxonArmy.splice(randomSaxonSoldier, 1);
      return randomSaxonSoldierDamage;
    }
  };
  saxonAttack() {
    // I can't figure out why this doesn't work with the test. What am I missing?
    const randomVikingSoldier = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const randomSaxonSoldier = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    const randomVikingSoldierDamage = randomVikingSoldier.receiveDamage(randomSaxonSoldier.strength);
    if (randomVikingSoldier.health <= 0) {
      this.vikingArmy.splice(randomVikingSoldier, 1);
      return randomVikingSoldierDamage;
    }
  };
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  };
};

const war = new War();
console.log(war.saxonArmy);

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
