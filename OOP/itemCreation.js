function Item(id, name) {
    this.id = id;
    this.name = name;
    this.itemInfo = 'item ' + this.id + ' ' + this.name;
}

Item.prototype.getItemInfo = function () {
    return this.itemInfo;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function Weapon(attack, damageType, twoHanded, id, name) {
    Item.apply(this, id, name);
    this.itemInfo = 'item ' + this.id + ' ' + this.name + ' has ' + this.attack + ' of ' + this.damageType + ' damage';
    if (attack < 1 || attack > 30000) {
        throw 'Attack is not valid!';
    }
    this.attack = attack;

    let validInput = ['physical', 'poison', 'fire', 'water', 'air', 'earth'];
    if (!validInput.includes(damageType)) {
        throw 'damageType is not valid!';
    }
    this.damageType = damageType;

    if (typeof twoHanded != Boolean) {
        throw 'twoHanded is not valid!';
    }
    this.twoHanded = twoHanded;

    this.chance = getRandomInt(5, 50);
    this.getItemInfo = function () {
        return 'item ' + this.id + ' ' + this.name;
    }
}

console.log(pushka.getItemInfo());
console.log(shmushka.getItemInfo());

let item1 = new Item();
