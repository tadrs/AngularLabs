import { Routes } from '@angular/router';
import { Contact } from './components/contact/contact';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { NotFound } from './components/not-found/not-found';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'contact', component: Contact },
    { path: 'home', component: Home },
    { path: 'about-us', component: AboutUs },
    { path: '**', component: NotFound },
];
