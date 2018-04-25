import {RouterModule, Routes} from '@angular/router';
import {PickerStandComponent} from './stands/picker-stand/picker-stand.component';
import {ButtonStandComponent} from './stands/button-stand/button-stand.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'picker',
    pathMatch: 'full'
  },
  {
    path: 'picker',
    component: PickerStandComponent
  },
  {
    path: 'button',
    component: ButtonStandComponent
  }
];

export const AppRouting = RouterModule.forRoot(routes);
