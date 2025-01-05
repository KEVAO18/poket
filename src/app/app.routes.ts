import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from '@components/home/home.component';
import { PerTypeComponent } from '@components/per-type/per-type.component';
import { MorePokiInfoComponent } from '@components/more-poki-info/more-poki-info.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'home/1/0', 
        pathMatch: 'full' 
    },
    {
        path: 'home/:offset/:shy',
        component: HomeComponent
    },
    {
        path: 'poki/:id',
        component: MorePokiInfoComponent
    }
];
