
function validateName(name) {
    if (name.length < 2 || name.length > 10) {
        return false;
    } else {
        return true;
    }
}

function validateType(type) {
    if (heroesList.includes(type)) {
        return true;
    } else {    
        return false;
    }
}

const heroesList = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']

class Character {
    /**
     * This is a class for Heroes Types
     * Added validation for name field. Health and Level must be the same for all childs classes
     **/

    constructor(name, type) {
        this.name = name,
        this.type = type,
        this.health = 100,
        this.level = 1

        if (!validateName(this.name)) {
            console.log('Check the name field!')
            throw new Error ('Invalida date - name')
        }
    }
}


class Bowerman extends Character {
    constructor(name) {
        super(name)
        this.attack = 25
        this.defence = 25
        this.type = 'Bowman'

        if (!validateType(this.type)) {
            console.log('Check the type. It is incorrect')
            throw new Error ('Invalida date - type')
        }
    }
}

class Swordsman extends Character {
    constructor(name) {
        super(name)
        this.attack = 40
        this.defence = 10
        this.type = 'Swordsman'

        if (!validateType(this.type)) {
            console.log('Check the type. It is incorrect')
            throw new Error ('Invalida date - type')
        }
    }
}

class Magician extends Character {
    constructor(name) {
        super(name)
        this.attack = 10
        this.defence = 40
        this.type = 'Swordsman'

        if (!validateType(this.type)) {
            console.log('Check the type. It is incorrect')
            throw new Error ('Invalida date - type')
        }
    }
}

class Daemon extends Character {
    constructor(name) {
        super(name)
        this.attack = 10
        this.defence = 40
        this.type = 'Swordsman'

        if (!validateType(this.type)) {
            console.log('Check the type. It is incorrect')
            throw new Error ('Invalida date - type')
        }
    }
}

class Undead extends Character {
    constructor(name) {
        super(name)
        this.attack = 25
        this.defence = 25
        this.type = 'Swordsman'

        if (!validateType(this.type)) {
            console.log('Check the type. It is incorrect')
            throw new Error ('Invalida date - type')
        }
    }
}

class Zombie extends Character {
    constructor(name) {
        super(name)
        this.attack = 40
        this.defence = 10
        this.type = 'Swordsman'

        if (!validateType(this.type)) {
            console.log('Check the type. It is incorrect')
            throw new Error ('Invalida date - type')
        }
    }
}


const user1 = new Swordsman('Sammi')

console.log(user1)