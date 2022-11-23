import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Defibrillateur } from '../models/defibrillateurs.model';
import { catchError, tap, Subject, of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class DefibrillateursService {

    defibrillateurs$ = new Subject<Defibrillateur[]>();

    constructor(private http: HttpClient) {}

    getAlldefibrillateurs(): any {
        this.http.get<Defibrillateur[]>('http://localhost:3000/api/defibrillateurs').pipe(
            tap(defibrillateurs => this.defibrillateurs$.next(defibrillateurs)),
            catchError(error => {
                console.log(error);
                console.error(error.error.message);
                return of([]);
            })
        ).subscribe();
    }
}