import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserGuard } from './core/guards/user.guard';
import { AdminGuard } from './core/guards/admin.guard';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { NoAuthGuard } from './core/guards/no-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [NoAuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
  {
    path: 'home-screen',
    loadChildren: () =>
      import('./home-screen/home-screen.module').then(
        (m) => m.HomeScreenModule
      ),
    canActivate: [UserGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AdminGuard],
  },
  { path: 'page-not-found', component: PageNotFoundComponent, canActivate: [NoAuthGuard] },
  { path: '**', redirectTo: 'page-not-found', canActivate: [NoAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
