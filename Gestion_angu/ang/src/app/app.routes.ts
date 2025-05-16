import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { QuartierComponent } from './Components/quartier/quartier.component';
import { MaisonComponent } from './Components/maison/maison.component';
import { CategorieComponent } from './Components/categorie/categorie.component';
import { QuartierlistComponent } from './Components/quartierlist/quartierlist.component';
import { MaisonlistComponent } from './Components/maisonlist/maisonlist.component';
import { MaisondetailComponent } from './Components/maisondetail/maisondetail.component';
import { DebutComponent } from './Components/debut/debut.component';
import { CategoriedetailComponent } from './Components/categoriedetail/categoriedetail.component';
import { CategorielistComponent } from './Components/categorielist/categorielist.component';
import { QuartierdetailComponent } from './Components/quartierdetail/quartierdetail.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'Dashboard', component:DashboardComponent},
    {path:'quartier', component:QuartierComponent},
    {path:'maison', component:MaisonComponent},
    {path:'maison/edit/:id', component:MaisonComponent},
    {path:'categorie', component:CategorieComponent},
    {path:'quartierlist', component:QuartierlistComponent},
    {path:'maisonlist', component:MaisonlistComponent},
    {path:'maisondetail', component:MaisondetailComponent},
    {path:'', component:DebutComponent},
    {path:'categoriedetail', component:CategoriedetailComponent},
    {path:'categorielist', component:CategorielistComponent},
    {path:'quartierdetail', component:QuartierdetailComponent}
    
];
