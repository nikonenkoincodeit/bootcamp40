// todo Нотатки

/*
 * Напиши клас Notes, який управляє колекцією нотаток у властивості items. Нотатка -  це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якій зберігатиметься об'єкт із пріоритетами.
{
  LOW: 'low',
  NORMAL: 'normal',
  HIGH: 'high'
}

 * Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).
 */

class Notes {
  static Priority = {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high',
  };

  constructor(items = []) {
    this.items = items;
  }

  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    const index = this.items.findIndex(note => note.text === text);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  updatePriority(text, newPriority) {
    for (const note of this.items) {
      if (note.text === text) {
        note.priority = newPriority;
      }
    }
  }
}

const myNotes = new Notes();

myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });

myNotes.addNote({
  text: 'Моя вторая заметка',
  priority: Notes.Priority.NORMAL,
});

myNotes.removeNote('Моя первая заметка');
myNotes.removeNote('hahaha');

myNotes.updatePriority('Моя вторая заметка', Notes.Priority.HIGH);

myNotes.updatePriority('Моя четвертая заметка', Notes.Priority.HIGH);
console.table(myNotes.items);

const a = {
  c: 444,
  // __proto__:[[kfvkf]]
};
