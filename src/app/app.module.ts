import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProductZoomComponent } from './product-zoom/product-zoom.component';
import { HomeComponent } from './home/home.component';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';
//import { PopoverModule } from 'ngx-bootstrap/popover';
import { AddcartComponent } from './addcart/addcart.component';
import { UseraddressComponent } from './useraddress/useraddress.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DailogComponent } from './dailog/dailog.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MatChipsModule } from '@angular/material/chips';
import { SidenavComponent } from './header/sidenav.component';
//import { SidebarJSModule } from 'ng-sidebarjs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodaydealComponent } from './todaydeal/todaydeal.component';
import { CustomerserviceComponent } from './customerservice/customerservice.component';
import { DeliverystatusComponent } from './deliverystatus/deliverystatus.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AuthGuard } from './services/auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { SellNotificationComponent } from './sell-notification/sell-notification.component';
//import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { MatProgressSpinnerModule,} from '@angular/material/progress-spinner';
import { DisplaySearchItemComponent } from './display-search-item/display-search-item.component';
import { UploadComponent } from './upload/upload.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatButtonModule } from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    ProductZoomComponent,
    HomeComponent,
    AddcartComponent,
    UseraddressComponent,
    DailogComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    TodaydealComponent,
    CustomerserviceComponent,
    DeliverystatusComponent,
    LoginComponent,
    SignupComponent,
    AdminpanelComponent,
    LogoutComponent,
    SellNotificationComponent,
    DisplaySearchItemComponent,
    UploadComponent,
  ],

  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
    //AngularFontAwesomeModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatChipsModule,
    MatIconModule,
    MatSidenavModule,
    //SidebarJSModule.forRoot(),
    RouterModule.forRoot([
      {path:"",component:DashboardComponent},
      {path:"dashboard",component:DashboardComponent},
      {path:"home",component:HomeComponent},
      {path:"pzoom",component:ProductZoomComponent},
      {path:"addcart",component:AddcartComponent},
      {path:"useraddress",component:UseraddressComponent},
      {path: "todaydeal",component:TodaydealComponent},
      {path: "customer",component:CustomerserviceComponent},
      {path: "deliverystatus",component:DeliverystatusComponent},
      {path: "login",component:LoginComponent},
      {path: "logout",component:LogoutComponent},
      {path: "signup",component:SignupComponent},
      {path: "adminpanel",component:AdminpanelComponent, children: [
        {
          path: '',
          component: UploadComponent
        },

        {
          path: 'sell-notification',
          component: SellNotificationComponent
        }
      ],
      canActivate: [AuthGuard]},
      // {path: "adminpanel/sell-notification",component:SellNotificationComponent},
      {path: "display-item",component:DisplaySearchItemComponent},


      
    ]),
    //PopoverModule,
    //ModalModule,
    BrowserAnimationsModule
  ],
  //BsModalService
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
