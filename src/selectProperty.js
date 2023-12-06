const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
  }


  export default function selectAttack(character) {
    const arr = [];
  
    const specialAttack = character.special;
    specialAttack.forEach((item) => {
      const {
        id, name, icon, description = 'Описание недоступно',
      } = item;
      arr.push({
        id, name, icon, description,
      });
    });
  
    return arr;
  }


