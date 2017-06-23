import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

// components
import { PassengerCountPassenger } from './components/passenger-count/passenger-count.component';
import { PassengerDetailPassenger } from './components/passenger-detail/passenger-detail.component';

// service
import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerCountPassenger,
        PassengerDetailPassenger,
    ],
    imports:[
        CommonModule
    ],
    exports: [
        PassengerDashboardComponent
    ],
    providers:[
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {}