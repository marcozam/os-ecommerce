import * as moment from 'moment';
import { AJAX_RESULT_CODE } from '../enums';

export class AjaxRequestResult {
    data: any;
    error: any;
    constructor(public code: AJAX_RESULT_CODE, info: any) {
        switch (code) {
            case AJAX_RESULT_CODE.success:
                this.data = info;
                break;
            case AJAX_RESULT_CODE.authError:
                this.error = info.Auth;
                break;
            default:
                this.error = info;
                break;
        }
    }
}

export class AjaxLocalStorage<T> {
    minutesOld(time): number {
        const today = moment(new Date());
        const _time = moment(time);
        const duration = moment.duration(today.diff(_time));
        return duration.asMinutes();
    }

    constructor(public storageName: string, public storageDuration: number) { }

    cleanStorage() { sessionStorage.removeItem(this.storageName); }

    setStorage(data: any, userID: number, storageName?: string) {
        storageName = storageName ? storageName : this.storageName;
        const _storage = new Storage(userID, new Date().getTime(), data);
        sessionStorage.setItem(storageName, JSON.stringify(_storage));
    }

    getStorage(storageName?: string): T[] {
        storageName = storageName ? storageName : this.storageName;
        const dataSaved = sessionStorage.getItem(storageName);
        if (dataSaved) {
            const _storage: Storage = JSON.parse(dataSaved);
            if (this.minutesOld(_storage.date) <= this.storageDuration || this.storageDuration === 0) {
                return _storage.data;
            } else {
                this.cleanStorage();
            }
        }
        return null;
    }
}

export class Storage {
    constructor(public userID: number, public date: number, public data: any) { }
}
