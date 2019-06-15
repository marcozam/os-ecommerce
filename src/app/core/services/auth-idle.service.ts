import { Injectable } from '@angular/core';
// RxJs
import { timer, Observable, Subject, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const cookie = { count: 0 };

@Injectable()
export class AuthIdleService {

    private requiresRefreshToken = false;
    private expirationTime: number;
    private expirationWarning: number;
    private reset$ = new Subject();
    private timer$: Observable<number>;
    private get timer() { return this.expirationTime / 2; }
    private get time() { return new Date().getTime(); }

    userActivity$ = new BehaviorSubject<number>(this.time);
    refreshToken$ = new Subject();

    constructor() {
        // this.initialize(5, 1);
        this.userActivity$.subscribe(lastActivity => {
            if (this.requiresRefreshToken) {
                this.refreshToken$.next();
            }
        });
    }

    initialize(expirationTime: number, expirationWarning: number) {
        console.log('Idle Initiliazed');
        const timeMultiplier = 1000 * 60;
        this.expirationTime = expirationTime * timeMultiplier;
        this.expirationWarning = expirationWarning * timeMultiplier;

        this.timer$ = this.reset$.pipe(
            switchMap(() => {
                console.log('Timer reset');
                return timer(this.timer);
            })
        );
        this.timer$.subscribe(() => {
            const elapsedTime = this.time - this.userActivity$.value;
            console.log('Timeout', elapsedTime);
            console.log('Requires refresh', elapsedTime > this.timer);
            this.requiresRefreshToken = elapsedTime > this.timer;

            if (!this.requiresRefreshToken) {
                this.refreshToken$.next();
            }
            this.reset();
        });
        // If has cookie set it
        if (cookie.count > 0) { this.setCookie(); }
    }

    private reset() { this.reset$.next(0); }

    setCookie() {
        // Set cookie
        cookie.count += 1;
        console.log('Cookie set', cookie);
        // Reset timer
        this.reset();
    }

    // Remove later
    setUserActivity() {
        this.userActivity$.next(this.time);
    }
}
