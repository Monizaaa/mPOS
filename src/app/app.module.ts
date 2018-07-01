import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartBestSalesComponent } from './dashboard/chart-best-sales/chart-best-sales.component';
import { ChartSalesSummaryComponent } from './dashboard/chart-sales-summary/chart-sales-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ChartBestSalesComponent,
    ChartSalesSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
