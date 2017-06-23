/**
 * Created by giladtakoni on 23/06/2017.
 */


import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-count',
    template: `

        <h3>Airline Passengers</h3>
        
        <div>
            Total checked in: {{ checkedInCount() }}/{{ items.length }}            
        </div>
    `
})
export class PassengerCountPassenger {

    @Input()
    items: Passenger[];

    constructor(){}

    checkedInCount(){
        if(!this.items) return;

        return this.items
                    .filter( (passenger: Passenger) => passenger.checkedIn )
                    .length;
    }
}