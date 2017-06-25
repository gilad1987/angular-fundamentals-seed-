import { Http }         from '@angular/http';
import { Injectable }   from '@angular/core';

import { Passenger }    from './models/passenger.interface';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const PASSENGER_API = '/api/passengers';

@Injectable()
export class PassengerDashboardService{

    constructor( private http: Http ){}

    getPassengers(): Observable<Passenger[]>{
        return this.http
            .get( PASSENGER_API )
            .map( (response: Response) => response.json() );
    }

    updatePassengers( passenger: Passenger ): Observable<Passenger>{
        return this.http
            .put(`${PASSENGER_API}/${passenger.id}`, passenger)
            .map( (response: Response) => response.json() );
    }

    removePassengers( passenger: Passenger ): Observable<Passenger>{
        return this.http
            .delete(`${PASSENGER_API}/${passenger.id}`)
            .map( (response: Response) => response.json() );
    }
}