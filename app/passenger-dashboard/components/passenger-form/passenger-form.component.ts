import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Passenger } from "../../models/passenger.interface";
import { Baggage } from "../../models/baggage.interface";


@Component({
    selector    : 'passenger-form',
    styleUrls   : ['passenger-form.component.scss'],
    template    : `
        <form (ngSubmit)="handelSubmit(form.value, form.valid)" #form="ngForm" novalidate>
            Form!

            <div>
                Passenger name:
                <input
                        type="text"
                        name="fullname"
                        required
                        #fullname="ngModel"
                        [ngModel]="detail?.fullname"
                />
                
                <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
                    Passenger name is required
                </div>
            </div>
            
            <div>
                Passenger ID:
                <input
                        type="text"
                        name="id"
                        required
                        #id="ngModel"
                        [ngModel]="detail?.id"
                />

                <div *ngIf="id.errors?.required && id.dirty" class="error">
                    Passenger ID is required
                </div>
            </div>
            
            <div>
                <label>
                    <input
                            type="checkbox"
                            name="checkedIn"
                            [ngModel]="detail?.checkedIn"
                            (ngModelChange)="toggleCheckIn($event)"
                    />
                    Yes
                </label>
                
                
                <div *ngIf="form.value.checkedIn">
                    Check in date:
                    <input
                            type="number"
                            name="checkedInDate"
                            [ngModel]="detail?.checkInDate"
                    />
                </div>
                
            </div>
            
            <div>
                Luggage:
                <select 
                        name="baggage"
                        [ngModel]="detail?.baggage">
                    <option
                            *ngFor="let item of baggage"
                            [value]="item.key"
                            [selected]="item.key === detail?.baggage"
                    >
                        {{ item.value }}
                    </option>
                </select>

                <select
                        name="baggage"
                        [ngModel]="detail?.baggage">
                    <option
                            *ngFor="let item of baggage"
                            [ngValue]="item.key"
                    >
                        {{ item.value }}
                    </option>
                </select>
                
            </div>
           
            <button 
                    type="submit"
                    [disabled]="form.invalid">
                Update passenger
            </button>
            
            
        </form>
    `

})
export class PassengerFormComponent {

    @Input()
    detail: Passenger;

    @Output()
    update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    baggage: Baggage[] = [{
        key:'none',
        value:'No baggage'
    },{
        key:'hand-only',
        value:'Hand baggage'
    },{
        key:'hold-only',
        value:'Hold baggage'
    },{
        key:'none',
        value:'No baggage'
    }];

    toggleCheckIn(checkedIn: boolean){
        if(checkedIn){
            this.detail.checkInDate = Date.now();
        }
    }

    handelSubmit(passenger: Passenger, isValid: boolean){
        if(isValid) {
            this.update.emit(passenger);
        }
    }

}
