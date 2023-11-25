const heroesList = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']


const functionsValidation = {
    validateName: (name) => {
        if (name.length < 2 || name.length > 10) {
            return false;
        }
        return true;
    },
    
    validateType: (type) => {
        if (heroesList.includes(type)) {
            return true;
        }
        return false;
    }

}


// function validateName(name) {
//     if (name.length < 2 || name.length > 10) {
//         return false;
//     }
//     return true;
// }

// function validateType(type) {
//     if (heroesList.includes(type)) {
//         return true;
//     }
//     return false;
// }

class Character {
    /**
     * This is a class for Heroes Types
     * Added validation for name field. Health and Level must be the same for all childs classes
     * */

    constructor(name) {
        this.name = name
        this.health = 100
        this.level = 1

        if (!functionsValidation.validateName(this.name)) {
            console.log(name)
            console.log('Check the name field!')
            throw new Error('Invalid date - name')
        }
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('You are dead! No chance you can levelUP :D')
        }
        this.level += 1;
        this.attack += (this.attack * 20) / 100;
        this.defence += (this.attack * 20) / 100;
        this.health = 100
    }
}

class Bowerman extends Character {
    constructor(name) {
        super(name)
        this.attack = 25
        this.defence = 25
        this.type = 'Bowman'

        if (!functionsValidation.validateType(this.type)) {
            console.log('Check the type. It is incorrect')
            throw new Error('Invalid date - type')
        }
    }
}

class Swordsman extends Character {
    constructor(name) {
        super(name)
        this.attack = 40
        this.defence = 10
        this.type = 'Swordsman'

        if (!functionsValidation.validateType(this.type)) {
            console.log('Check the type. It is incorrect')
            throw new Error('Invalid date - type')
        }
    }
}

class Magician extends Character {
    constructor(name) {
        super(name)
        this.attack = 10
        this.defence = 40
        this.type = 'Magician'

        if (!functionsValidation.validateType(this.type)) {
            console.log('Check the type. It is incorrect')
            throw new Error('Invalid date - type')
        }
    }
}

class Daemon extends Character {
    constructor(name) {
        super(name)
        this.attack = 10
        this.defence = 40
        this.type = 'Daemon'

        if (!functionsValidation.validateType(this.type)) {
            console.log('Check the type. It is incorrect')
            throw new Error('Invalid date - type')
        }
    }
}

class Undead extends Character {
    constructor(name) {
        super(name)
        this.attack = 25
        this.defence = 25
        this.type = 'Undead'

        if (!functionsValidation.validateType(this.type)) {
            console.log('Check the type. It is incorrect')
            throw new Error('Invalid date - type')
        }
    }
}

class Zombie extends Character {
    constructor(name) {
        super(name)
        this.attack = 40
        this.defence = 10
        this.type = 'Zombie'

        if (!functionsValidation.validateType(this.type)) {
            console.log('Check the type. It is incorrect')
            throw new Error('Invalid date - type')
        }
    }
}

// const user1 = new Zombie('Sammi')
// console.log(user1)

// user1.levelUp()
// console.log(user1)

module.exports = Character;
module.exports = Zombie;
module.exports = Undead;
