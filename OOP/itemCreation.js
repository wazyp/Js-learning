function Item(id, name) {
    this.id = id;
    this.name = name;
}

Item.prototype.getItemInfo = function () {
    return 'item ' + this.id + ' ' + this.name;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function Weapon(attack, damageType, twoHanded, id, name) {
    Item.apply(this, id, name);
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

// class Item {
//     constructor() {
//         this.id = 0;
//         this.name = '';
//     }

//     getItemInfo() {
//         return 'item ' + this.id + this.name;
//     }


// }

let item1 = new Item();
