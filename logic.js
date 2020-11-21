document.getElementsByTagName("body")[0].innerHTML = "hi"
console.log("working")

console.log(document.getElementsByTagName("body"))

function Entity(type, name, condition, guard, brawn) {
this.type = type;
this.name = name;
this.condition = condition;
this.guard = guard;
this.brawn = brawn

this.printStats = function() {
    console.log("Type: " + this.type + "\nName: " + this.name +
     "\nContition: " + this.condition + "\nGuard: " + this.guard + 
     "\nBrawn: " + this.brawn)
}

this.attack = function(foe) {
    foe.condition -= this.brawn;
    console.log(this.type + " attacks " + foe.name + " for " + this.brawn + " damage.")
    console.log(foe.name + " has " + foe.condition + " health left")
};

}

var player = new Entity("Player", "Human", 100, 100, 10);
var skeleton = new Entity("Enemy", "Skeleton", 50, 50, 5);

player.printStats();
skeleton.printStats();

player.attack(skeleton);
player.attack(skeleton);
player.attack(skeleton);

skeleton.printStats();