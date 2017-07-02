import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';


// components
import { PassengerCountPassenger } from './components/passenger-count/passenger-count.component';
import { PassengerDetailPassenger } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

// containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

// service
import { PassengerDashboardService } from './passenger-dashboard.service';

const routes: Routes = [
    {
        path: 'passengers',
        children:[
            {
                path:'',
                component: PassengerDashboardComponent
            },
            {
                path: ':id',
                component: PassengerViewerComponent
            }
        ],

    }
];


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
        FormsModule,
        RouterModule.forChild(routes)
    ],
    providers:[
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {}