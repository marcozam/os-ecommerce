import { Injectable } from '@angular/core';

class Storage {
  constructor(public userID: number, public date: number, public data: any) { }
}

@Injectable()
export class OSStorageService {

  constructor() {}

  private minutesOld(time): number {
    const today = new Date();
    const _time = new Date(time);
    return (_time.getTime() - today.getTime()) / 60000;
}

  clearStorage() {
    sessionStorage.clear();
  }

  setStorage(storageName: string, data: any, userID: number) {
    const _storage = new Storage(userID, new Date().getTime(), data);
    sessionStorage.setItem(storageName, JSON.stringify(_storage));
  }

  removeStorage(storageName: string) {
    sessionStorage.removeItem(storageName);
  }

  getStorage(storageName: string) {
    const dataSaved = sessionStorage.getItem(storageName);
    if (dataSaved) {
        const _storage: Storage = JSON.parse(dataSaved);
        if (this.minutesOld(_storage.date) <= 30) {
          return _storage.data;
        } else {
          this.removeStorage(storageName);
        }
    }
    return null;
  }
}
