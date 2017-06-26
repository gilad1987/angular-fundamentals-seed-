import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


// components
import { PassengerCountPassenger } from './components/passenger-count/passenger-count.component';
import { PassengerDetailPassenger } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

// containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

// service
import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerCountPassenger,
        PassengerDetailPassenger,
        PassengerViewerComponent,
        PassengerFormComponent
    ],
    imports:[
        CommonModule,
        HttpModule,
        FormsModule
    ],
    exports: [
        PassengerViewerComponent
    ],
    providers:[
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {}