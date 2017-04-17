import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component';
import { PlusComponent } from './plus.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { TutorialComponent } from './tutorial.component';
import { EmployeeOverViewComponent } from './employee-overview.component';
import { EmployeeProjectComponent } from './employee-project.component';
import { NotFoundComponent } from './notfound.component';

const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'plus', component: PlusComponent },
    { path: 'tutorial', component: TutorialComponent },
    {
        path: 'employee-detail/:id', component: EmployeeDetailComponent,
        children: [

            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: EmployeeOverViewComponent },
            { path: 'projects', component: EmployeeProjectComponent }
        ]
    },
    { path: '**', component: NotFoundComponent },

]

export const appRoutes = RouterModule.forRoot(routing);