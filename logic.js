document.getElementsByTagName("body")[0].innerHTML = "hi"
console.log("working")

console.log(document.getElementsByTagName("body"))

function Entity(type, name, condition, guard) {
this.type = type;
this.name = name;
this.condition = condition;
this.guard = guard;

this.printStats = function() {
    console.log("Type: " + this.type + "\nName: " +
    this.name + "\nContition: " + this.condition + "\nGuard: " + this.guard)
}
}

var player = new Entity("Player", "Human", 100, 100);

player.printStats();