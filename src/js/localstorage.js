/* Універсальний клас-прототип для інстансів роботи з LocalStarage */

class LocalStorageInstance {
  constructor(listName) {
    this.listName = listName;
    this.items = this.getItems() || [];
    // console.log(this.items);
  }
  // Отримати масив об'єктів списку
  getItems() {
    try {
      return JSON.parse(localStorage.getItem(`${this.listName}`)) || false;
    } catch {
      console.log('error read from LS');
      return false;
    }
  }
  // Додати об'єкт до списку
  addItem(obj) {
    this.items.push(obj);

    try {
      localStorage.setItem(`${this.listName}`, JSON.stringify(this.items));
      return true;
    } catch {
      console.log('error save to LS');
      return false;
    }
  }
  // Видалити об'єкт зі списку по id
  deleteItem(id) {
    this.items.splice(
      this.items.findIndex(item => item.id === id),
      1
    );
    try {
      localStorage.setItem(`${this.listName}`, JSON.stringify(this.items));
      return true;
    } catch {
      console.log('error delete from LS');
      return false;
    }
  }
  // Перевірити наявність об'єкта у списку по id
  isIncluded(id) {
    return this.items.find(item => item.id === id) ? true : false;
  }
}
// Створюємо і одночасно експортуємо інстанс для керування списком "Переглянуті". В аргумент передаємо ім'я властивості в Local Storage.
export const LsWatched = new LocalStorageInstance('watchedList');

/* Tests */

const obj1 = {
  adult: false,
  backdrop_path: '/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg',
  id: 507086,
  title: 'Jurassic World Dominion',
  original_language: 'en',
  original_title: 'Jurassic World Dominion',
  overview:
    'Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.',
  poster_path: '/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg',
  media_type: 'movie',
  genre_ids: [12, 28, 878],
  popularity: 8753.914,
  release_date: '2022-06-01',
  video: false,
  vote_average: 6.945,
  vote_count: 1586,
};

const obj2 = {
  adult: false,
  backdrop_path: '/qTkJ6kbTeSjqfHCFCmWnfWZJOtm.jpg',
  id: 438148,
  title: 'Minions: The Rise of Gru',
  original_language: 'en',
  original_title: 'Minions: The Rise of Gru',
  overview:
    'A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.',
  poster_path: '/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
  media_type: 'movie',
  genre_ids: [10751, 16, 12, 35, 14],
  popularity: 13207.201,
  release_date: '2022-06-29',
  video: false,
  vote_average: 7.588,
  vote_count: 387,
};

//console.log(LsWatched);
// console.log(LsWatched.items);
// console.log(LsWatched.getItems());
//console.log(LsWatched.getItems());
// console.log(LsWatched.addItem(obj1));
// console.log(LsWatched.getItems());
// console.log(LsWatched.getItems());
// console.log(LsWatched.addItem(obj2));
// console.log(LsWatched.getItems());
// console.log(LsWatched.deleteItem(507086));
// console.log(LsWatched.isIncluded(438148));

//obj1 id507086
//obj2 id438148
