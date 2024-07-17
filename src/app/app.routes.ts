import { Routes } from '@angular/router';
import { MainFormComponent } from './main-form/main-form.component';
import { SubFormAComponent } from './sub-form-a/sub-form-a.component';
import { SubFormBComponent } from './sub-form-b/sub-form-b.component';

export const routes: Routes = [
    { path: '', component: MainFormComponent, children: [
        { path: 'sub-form-a', component: SubFormAComponent },
        { path: 'sub-form-b', component: SubFormBComponent },
      ] },
];
