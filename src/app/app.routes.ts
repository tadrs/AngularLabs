import { Routes } from '@angular/router';
import { Contact } from './components/contact/contact';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { NotFound } from './components/not-found/not-found';
import { AppLayout } from './components/app-layout/app-layout';
import { CourseDetails } from './components/course-details/course-details';


export const routes: Routes = [
    {
        path: '', component: AppLayout, children: [
            { path: '', component: Home, title: 'Home' },
            { path: 'home', component: Home, title: 'Home' },
            { path: 'contact', component: Contact, title: 'Contact Us' },
            { path: 'about-us', component: AboutUs, title: 'About Us' },
            { path: 'courses/:id', component: CourseDetails, title: 'Course Details' }
        ]
    },
    { path: '**', component: NotFound, title: 'Page Not Found' },
];
