import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';

import { PlayersModule } from './components/players/players.module';
import { AuthenticationModule } from '../app/components/authentication/authentication.module';

import { AuthGuard } from './core/guards/auth/auth.guard';
import { HomeComponent } from './components/landing/home/home.component';
import { BannedComponent } from './components/landing/banned/banned.component';
import { NotFoundComponent } from './components/landing/not-found/not-found.component';

const routes : Routes = [ 
       {path: '', component: HomeComponent },
       {path: 'banned', component: BannedComponent },	   
       {path: 'auth', loadChildren: '../app/components/authentication/authentication.module#AuthenticationModule'},
       {path: 'players', loadChildren: '../app/components/players/players.module#PlayersModule'},
       {path: 'users', loadChildren: '../app/components/users/users.module#UsersModule'},
       {path: '**', component: NotFoundComponent },
   ];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class AppRouting { }
