import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPageComponent } from './admin-page.component';

const routes: Routes = [
    {
        path:"",
        component: AdminPageComponent,
        children: [
            { path: "dashboard", component: DashboardComponent },
            { path: "", redirectTo: "dashboard", pathMatch: "full" }
        ]
    }
]
export const AdminRoutingModule = RouterModule.forChild(routes) 