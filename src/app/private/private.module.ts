import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicModule} from '../public/public.module';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule} from '@angular/router';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatRadioModule,
  MatOptionModule,
  MatSelectModule,
  MatDialogModule, MatExpansionModule, MatDatepickerModule, MatCardModule
} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {UserService} from './services/user.service';
import {UpdateUserComponent} from './update-user/update-user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetailAccountComponent } from './detail-account/detail-account.component';
import {AccountService} from './services/account.service';
import {SharedService} from './services/shared.service';




@NgModule({
  declarations: [LayoutComponent, UsersComponent, DashboardComponent, AccountsComponent, UpdateUserComponent, DetailAccountComponent],
  imports: [
    CommonModule,
    PublicModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    NgxSpinnerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatCardModule,
    FormsModule
  ],
  providers:  [UserService, AccountService, SharedService]
})
export class PrivateModule { }
