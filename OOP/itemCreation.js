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
    this.itemInfo = this.itemInfo + ' has ' + this.attack + ' of ' + this.damageType + ' damage';
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

    this.burn = false;
    if (damageType == 'fire') {
        this.burn = true;
    }

    this.poison = false;
    if (damageType == 'poison') {
        this.poison = true;
    }

    this.cold = false;
    if (damageType == 'water') {
        this.cold = true;
    }

    this.electrify = false;
    if (damageType == 'air') {
        this.electrify = true;
    }

    this.tremor = false;
    if (damageType == 'earth') {
        this.tremor = true;
    }

    this.itemInfo = this.itemInfo + ' and has ' + this.chance + '% to apply ' + (this.burn ? 'burn ' : '') +  (this.poison ? 'poison ' : '') +  (this.cold ? 'cold ' : '') +  (this.electrify ? 'electrify ' : '') +  (this.tremor ? 'tremor ' : '');
}

function Armor(defense, resistance, id, name) {
    Item.call(this, id, name);

    if (defense < 1 || defense > 50000) {
        throw 'Item defense is invalid';
    }
    this.defense = defense;

    let validInput = ['physical', 'poison', 'fire', 'water', 'air', 'earth'];

    if (!validInput.includes(resistance)) {
        throw 'damageType is not valid!';
    }
    this.resistance = resistance;

    this.chance = getRandomInt(10, 100);

    this.itemInfo = this.itemInfo + ' has ' + this.defense + ' defense and ' +  this.chance + '% ' + this.resistance + ' resistance ';
}

function Helm(defense, resistance, id, name, attractivness) {
    Armor.call(this, defense, resistance, id, name);

    if (attractivness < -5 || attractivness > 5) {
        throw 'Item attractivness is invalid';
    }
    this.attractivness = attractivness;

    this.itemInfo = this.itemInfo + 'and adds ' + this.attractivness + ' attractivness ';
}

function Boots(defense, resistance, id, name, speed) {
    Armor.call(this, defense, resistance, id, name);

    if (speed < 1 || speed > 10) {
        throw 'Item speed is invalid';
    }
    this.speed = speed;

    this.itemInfo = this.itemInfo + 'and adds ' + this.speed + ' speed ' ;
}

function Gloves(defense, resistance, id, name, crafting) {
    Armor.call(this, defense, resistance, id, name);

    if (crafting < 1 || crafting > 10) {
        throw 'Item crafting is invalid';
    }
    this.crafting = crafting;

    this.itemInfo = this.itemInfo + 'and adds ' + this.crafting + ' crafting ';
}

function Robe(defense, resistance, id, name, repotation) {
    Armor.call(this, defense, resistance, id, name);

    if (repotation < 1 || repotation > 10) {
        throw 'Item repotation is invalid';
    }
    this.repotation = repotation;

    this.itemInfo = this.itemInfo + 'and adds ' + this.repotation + ' repotation ';
}

function Consumable(heals, type, id, name) {
    Item.call(this, id, name);

    if (typeof heals !== 'boolean') {
        throw 'heals is not valid!';
    }
    this.heals = heals;

    let validInput = ['minor', 'medium', 'big'];

    if (!validInput.includes(type)) {
        throw 'type is not valid!';
    }
    this.type = type;

    this.effect = 0;
    switch(this.type) {
        case "minor":
            this.effect = getRandomInt(1, 10);
            break;
        case "medium":
            this.effect = getRandomInt(11, 20);
            break;
        case "big":
            this.effect = getRandomInt(20, 30);
            break;
        default:
            throw 'effect is not valid!';
    }

    this.itemInfo = this.itemInfo + ' it is ' + this.type + ' potion and ' + (this.heals ? 'heals' : 'damages')  + ' for ' + this.effect;

}

Weapon.prototype = Object.create(Item.prototype);
Sword.prototype = Object.create(Weapon.prototype);
Bow.prototype = Object.create(Weapon.prototype);
Staff.prototype = Object.create(Weapon.prototype);
Armor.prototype = Object.create(Item.prototype);
Helm.prototype = Object.create(Armor.prototype);
Boots.prototype = Object.create(Armor.prototype);
Gloves.prototype = Object.create(Armor.prototype);
Robe.prototype = Object.create(Armor.prototype);
Consumable.prototype = Object.create(Item.prototype);

let pushka = new Weapon(20, 'fire', true, 1, 'pushkaa');
let shmushka = new Weapon(1000, 'poison', false, 2, 'shmushkaaa');
let pruchka = new Sword(50, 'physical', true, 69, 'pruchka');
let prashka = new Bow(69, 'physical', true, 29, 'prashka', 'special');
let bubble = new Staff(80, 'fire', true, 31, 'bubble', 'special');
let shmaska = new Helm(80, 'water', 35, 'shmaska', 5);
let gucciCheili = new Boots(20000, 'poison', 36, 'gucci cheili', 5);
let hendurs = new Gloves(200, 'earth', 37, 'hendurs', 10);
let halat = new Robe(100, 'air', 38, 'halat', 4);
let helche = new Consumable(true, 'big', 39, 'helche');

console.log(pushka.getItemInfo());
console.log(shmushka.getItemInfo());
console.log(pruchka.getItemInfo());
console.log(prashka.getItemInfo());
console.log(bubble.getItemInfo());
console.log(shmaska.getItemInfo());
console.log(gucciCheili.getItemInfo());
console.log(hendurs.getItemInfo());
console.log(halat.getItemInfo());
console.log(helche.getItemInfo());
