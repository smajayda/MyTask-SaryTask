import { NgModule } from '@angular/core';
import { HeroesListComponent } from './heroes-list.component';
import { HeroesDetailComponent } from './heroes-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { HeroesDetaillGuard } from './heroes-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeroesListComponent,
    HeroesDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'heroes', component: HeroesListComponent },
      {
        path: 'heroes/:id',
        canActivate: [HeroesDetaillGuard],
        component: HeroesDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class HeroesModule { }
