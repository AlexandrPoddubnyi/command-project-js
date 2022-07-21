import Notiflix from "notiflix"

class Viewings {
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

    #remove(savedToWatch, obj) {
        savedToWatch.splice(savedToWatch.findIndex(film => film.id === obj.id), 1)
        localStorage.setItem(this.#storageName, JSON.stringify(savedToWatch))
        Notiflix.Notify.warning(`The film ${obj.title} was successfully removed from the list of ${(this.#storageName).replaceAll('-',' ').replace(this.#storageName.split('-')[0],'')}`) //
    }

    #existing(savedToWatchLocal,obj) {
        const savedToWatch = JSON.parse(savedToWatchLocal)
        if (savedToWatch.find(film => film.id === obj.id) != undefined) {
            this.#remove(savedToWatch,obj)
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

    #checkSaved(storageList,id) {
        if (storageList.find(film => film.id === id) === undefined)
            return false
        else 
            return true            
    }

    check(id) {
        const storageList = JSON.parse(localStorage.getItem(this.#storageName))
        if (storageList === null)
            return false
        else
            return this.#checkSaved(storageList, id) 
    }

    set(obj) {
        const savedToWatchLocal = localStorage.getItem(this.#storageName)
        this.#storageProcess(savedToWatchLocal,obj)    
    }

    get() {
        return JSON.parse(localStorage.getItem(this.#storageName))        
    }
}

export const localToWatch = new Viewings('filmoteka-saved-to-watch')
export const localToQueue = new Viewings('filmoteka-queque-films')
