import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { ConnectedComponent } from './connected/connected.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  { path: 'connection', component: ConnectionComponent, children: [
    { path: 'register', redirectTo: 'register', pathMatch: 'full'}
  ] },
  { path: 'connected', component: ConnectedComponent},
  {path: 'register', component: RegisterComponent}

]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 

}
