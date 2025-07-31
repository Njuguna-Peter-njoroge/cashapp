  import { Routes } from '@angular/router';
import { PaymentConfirmationComponent} from './cash/cash';


  export const routes: Routes = [


    { path: '', redirectTo: '/app', pathMatch: 'full' },
    { path: 'app', component: PaymentConfirmationComponent },
  ];
