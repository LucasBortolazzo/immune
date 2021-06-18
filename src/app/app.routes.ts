import {Routes} from '@angular/router';

// aplicacao
import { HomeComponent } from './home/home.component';
import { PreCadastroComponent } from './pre-cadastro/pre-cadastro.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'pre-cadastro', component: PreCadastroComponent}
]