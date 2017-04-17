import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeListComponent } from './employee.component';
import { PlusComponent } from './plus.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { TutorialComponent } from './tutorial.component';
import { EmployeeOverViewComponent } from './employee-overview.component';
import { EmployeeProjectComponent } from './employee-project.component';
import { NotFoundComponent } from './notfound.component';
import { LoginComponent } from './login.component';
import { CheckLoginGuard } from './guard/check-login.guard';
import { CheckSaveFormGuard } from './guard/check-save-form.guard';


const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent, canActivate: [CheckLoginGuard] },
    { path: 'plus', component: PlusComponent },
    { path: 'tutorial', component: TutorialComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'employee-detail/:id', component: EmployeeDetailComponent, canDeactivate: [CheckSaveFormGuard],
        children: [

            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: EmployeeOverViewComponent },
            { path: 'projects', component: EmployeeProjectComponent }
        ]
    },
    { path: '**', component: NotFoundComponent },

]

export const appRoutes = RouterModule.forRoot(routing);