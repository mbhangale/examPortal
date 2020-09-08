import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpdataService } from './httpdata.service';

import { AdminpageComponentDialog } from './Admin/adminpage.component'
import {AdminpageComponentDialogForExam} from './Admin/adminpage.component'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';

import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { AdminpageComponent } from './Admin/adminpage.component';
import {AdminpageComponentAreyousure} from'./Admin/adminpage.component';
import { UserComponent } from './user/user.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { UserlandingPageComponent } from './userlanding-page/userlanding-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    AdminpageComponent,
    AdminpageComponentDialog,
    AdminpageComponentAreyousure,
    AdminpageComponentDialogForExam,
    UserComponent,
    UserPageComponent,
    AdminLandingPageComponent,
    UserlandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
     MatFormFieldModule,
     MatInputModule,
     FormsModule, 
     ReactiveFormsModule,
     MatSliderModule,
     MatCardModule,
     MatToolbarModule,
     MatRadioModule,
     MatButtonModule,
     MatListModule,
     MatIconModule,
     MatExpansionModule,
     MatGridListModule,
     MatDialogModule,
     MatMenuModule,
     MatSelectModule,
     MatSidenavModule,
     MatDividerModule
  ],
  
  providers: [
    HttpdataService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
