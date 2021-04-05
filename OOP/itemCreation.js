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
    Item.call(this, id, name);

    if (attack < 1 || attack > 30000) {
        throw 'Attack is not valid!';
    }
    this.attack = attack;

    let validInput = ['physical', 'poison', 'fire', 'water', 'air', 'earth'];

    if (!validInput.includes(damageType)) {
        throw 'damageType is not valid!';
    }
    this.damageType = damageType;

    if (typeof twoHanded !== 'boolean') {
        throw 'twoHanded is not valid!';
    }
    this.twoHanded = twoHanded;
    this.chance = getRandomInt(5, 50);
    this.itemInfo = this.itemInfo + this.name + ' has ' + this.attack + ' of ' + this.damageType + ' damage';
}

function Sword(attack, damageType, twoHanded, id, name) {
    Weapon.call(this, attack, damageType, twoHanded, id, name);

    this.cripple = false;
    this.bleed = false;

    if (twoHanded) {
        this.cripple = true;
        this.bleed = true;
    }

    this.itemInfo = this.itemInfo + ' and has ' + this.chance + '% to' + (this.cripple ? 'cripple ' : ' ') +  (this.bleed ? 'bleed ' : ' ');
}

function Bow(attack, damageType, twoHanded, id, name, arrowType) {
    if (twoHanded != true) {
        throw 'Bows can only be two handed';
    }
    Weapon.call(this, attack, damageType, twoHanded, id, name);

    let validInput = ['normal', 'special'];

    if (!validInput.includes(arrowType)) {
        throw 'arrowType is not valid!';
    }
    this.arrowType = arrowType;

    if (arrowType === 'normal') {
        this.pierce = true;
    } else {
        this.pierce = false;
    }

    if (arrowType === 'special') {
        this.critical = true;
    } else {
        this.critical = false;
    }

    this.itemInfo = this.itemInfo + ' and has ' + this.chance + '% to apply ' + (this.pierce ? 'pierce ' : '') +  (this.critical ? 'critical ' : '');
}

function Staff(attack, damageType, twoHanded, id, name, arrowType) {
    if (damageType == 'physical') {
        throw 'Staff can not have physical type damage';
    }

    if (twoHanded != true) {
        throw 'Staff can only be two handed';
    }

    Weapon.call(this, attack, damageType, twoHanded, id, name);
}

Weapon.prototype = Object.create(Item.prototype);
Sword.prototype = Object.create(Weapon.prototype);
Bow.prototype = Object.create(Weapon.prototype);

let pushka = new Weapon(20, 'fire', true, 1, 'pushkaa');
let shmushka = new Weapon(1000, 'poison', false, 2, 'shmushkaaa');
let pruchka = new Sword(50, 'physical', true, 69, 'pruchka');
let prashka = new Bow(50, 'physical', true, 29, 'prashka', 'special');

console.log(pushka.getItemInfo());
console.log(shmushka.getItemInfo());
console.log(pruchka.getItemInfo());
console.log(prashka.getItemInfo());
