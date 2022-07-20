import Notiflix from "notiflix"

class UpcomingViewings {
    #storageName

    constructor(storageName) {
        this.#storageName = storageName
    }

    #newStorage(obj) {
        const objArray = []
        objArray.push(obj)
        localStorage.setItem(this.#storageName, JSON.stringify(objArray))
        Notiflix.Notify.success(`The film ${obj.title} is added to the list of upcoming viewings`)          
    }

    #save(savedToWatch, obj) {
        savedToWatch.push(obj)
        localStorage.setItem(this.#storageName, JSON.stringify(savedToWatch))
        Notiflix.Notify.success(`The film ${obj.title} is added to the list of upcoming viewings`)          
    }

    #existing(savedToWatchLocal,obj) {
        const savedToWatch = JSON.parse(savedToWatchLocal)
        if (savedToWatch.find(film => film.id === obj.id) != undefined) {
            Notiflix.Notify.warning('This film already added to the list of upcoming viewings')
        }
        else {
            this.#save(savedToWatch,obj)  
        }           
    }

    #storageProcess(savedToWatchLocal,obj) {
        if (savedToWatchLocal === null) {
            this.#newStorage(obj)
        }
        else {
            this.#existing(savedToWatchLocal,obj)
        }           
    }

    set(obj) {
        const savedToWatchLocal = localStorage.getItem(this.#storageName)
        this.#storageProcess(savedToWatchLocal,obj)    
    }

    get() {
        return JSON.parse(localStorage.getItem(this.#storageName))        
    }
}

export const upcomingViewings = new UpcomingViewings('filmoteka-saved-to-watch')

export const obj1 = {
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

export const obj2 = {
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