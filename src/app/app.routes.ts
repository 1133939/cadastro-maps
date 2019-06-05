import {Routes} from '@angular/router'

import {HomeComponent} from '../app/home/home.component'
import { VisualizarFazendeirosComponent } from './visualizar-fazendeiros/visualizar-fazendeiros.component';

export const ROUTES: Routes = [
    {path:'', component: HomeComponent},
    {path:'visualizar', component: VisualizarFazendeirosComponent}
]
