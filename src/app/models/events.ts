import { Observable } from 'rxjs';

export interface FormSaveEvent<T> {
    new: T;
    old: T;
}
