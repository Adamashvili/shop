import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { ProfileComponent } from './profile/profile.component';
import { profileBlockGuard } from './profile-block.guard';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "login", component: SigninComponent},
    {path: "profile", component: ProfileComponent, canActivate: [profileBlockGuard]}
];
