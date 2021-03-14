import { ModalModule } from 'ngx-bootstrap/modal';
import { AppBsModalModule } from './_components/shared/common/appBsModal/app-bs-modal.module';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { LoginComponent } from './_components/login/login.component';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TmssDatepickerComponent } from './_components/shared/common/input-types/tmss-datepicker/tmss-datepicker.component';
import { TmssComboboxComponent } from './_components/shared/common/input-types/tmss-combobox/tmss-combobox.component';
import { TmssTextInputComponent } from './_components/shared/common/input-types/tmss-text-input/tmss-text-input.component';
import { GridTableComponent } from './_components/shared/common/grid/grid-table/grid-table.component';
import { GridPaginationComponent } from './_components/shared/common/grid/grid-pagination/grid-pagination.component';
import { AgCellButtonRendererComponent } from './_components/ag-cell-button-renderer/ag-cell-button-renderer.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { InOutGateComponent } from './pages/in-out-gate/in-out-gate.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    InOutGateComponent,
    TmssDatepickerComponent,
    TmssComboboxComponent,
    TmssTextInputComponent,
    GridTableComponent,
    GridPaginationComponent,
    AgCellButtonRendererComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    AppBsModalModule,
    ModalModule.forRoot(),
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
