import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminGuard } from './guards/admin.guard';
import { SubscriberGuard } from './guards/subscriber.guard';
import { HomePageComponent } from './front-page/home-page/home-page.component';


const routes: Routes = [
    { path: 'home', loadChildren: () => import('./front-page/front-page.module').then(m => m.FrontPageModule)},
    { path: 'login', component: LoginPageComponent },
    { path: 'admin', loadChildren: () => import('./admin-page/admin-page.module').then(m => m.AdminPageModule), canActivate: [AdminGuard] },
    { path: '**', redirectTo: 'home' }  
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)  
    ],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule { }