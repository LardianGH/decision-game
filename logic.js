function Entity(type, name, condition, limbCondition, guard, brawn, weapon) {
this.type = type;
this.name = name;
this.condition = condition;
this.limbCondition = limbCondition;
this.guard = guard;
this.brawn = brawn;
this.weapon = weapon;

this.printStats = function() {
    console.log("Type: " + this.type + "\nName: " + this.name +
     "\nCondition: " + this.condition + 
     "\nLimbs: " + this.limbCondition +
     "\nGuard: " + this.guard + 
     "\nBrawn: " + this.brawn +
     "\nWeapon " + this.weapon)
    console.log(this.limbCondition)
    console.log(this.weapon)
}

this.attack = function(foe, targetedLimb, combatColor) {
    //console.log("Attack target: " + "General")
    // var targetedLimb = "leftArm"
    var attack = Math.floor((this.brawn * (this.weapon.damage / 100)) * (this.limbCondition.rightArm / 100)) //May equip swords in both left or right hand
    var foeDefense = Math.ceil((foe.guard * Math.random()) * (foe.limbCondition[targetedLimb] / 100)) < 0 ? 0 : Math.ceil((foe.guard * Math.random()) * (foe.limbCondition[targetedLimb] / 100))
    var damage = (attack - foeDefense) < 0 ? 0 : (attack - foeDefense)

    foe.condition -= damage ;
    foe.limbCondition[targetedLimb] -= damage ;

    var outcome = damage === 0 ? this.name + "'s attack glances off of " + foe.name + "'s armour" : this.name + " attacks " + foe.name + "'s " + targetedLimb + " for " + damage + " damage."
    console.log("%c" + outcome,"color:" + combatColor + ";")
    console.log("%c" + foe.name + "'s " + targetedLimb +" condition: " + foe.limbCondition[targetedLimb],"color:" + combatColor + ";")
    console.log("%c" + foe.name + " has " + foe.condition + " health left","color:" + combatColor + ";")
    console.log("----------------------------")
   // console.log(foe.name + "'s arm has " + foe.limbCondition.rightArm + " health left")
};

}

var player = new Entity("Player", "Human", 100, {head: 100, torso: 100, leftArm: 100, rightArm: 100, leftLeg: 100, rightLeg: 100}, 15, 20, {name: "Shortsword", damage: 120, condition: 20});
var skeleton1 = new Entity("Enemy", "Skeleton1", 300, {head: 100, torso: 100, leftArm: 100, rightArm: 100, leftLeg: 100, rightLeg: 100}, 5, 14, {name: "Broadsword", damage: 140, condition: 10});
var skeleton2 = new Entity("Enemy", "Skeleton2", 50, {head: 80, torso: 100, leftArm: 100, rightArm: 70, leftLeg: 100, rightLeg: 100}, 5, 14, {name: "Lance", damage: 180, condition: 10});
var skeleton3 = new Entity("Enemy", "Skeleton3", 50, {head: 100, torso: 100, leftArm: 100, rightArm: 100, leftLeg: 100, rightLeg: 100}, 5, 14, {name: "Dagger", damage: 100, condition: 10});

//player.printStats();
//skeleton.printStats();

foeChooseTarget = function() {
    var limbNum = Math.floor(Math.random() * 6 + 1)
    console.log(limbNum)
    switch(limbNum) {
        case 1:
          return "head"
        case 2:
            return "torso"
          case 3:
            return "leftArm"
        case 4:
            return "rightArm"
          case 5:
            return "leftArm"
        case 6:
            return "rightArm"
        default:
          return console.error("no work");
      }
}

combatRound = function(foe, targetedLimb) {

    //console.log(foe)

    player.attack(foe, targetedLimb, "green");

    skeleton1.attack(player, foeChooseTarget(), "red");

}


//player.printStats();
skeleton1.printStats();
//skeleton2.printStats();
//skeleton3.printStats();