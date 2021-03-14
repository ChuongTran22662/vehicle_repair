import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InGateComponent } from './in-gate/in-gate.component';
import { OutGateComponent } from './out-gate/out-gate.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { InOutGateRoutingModule } from './in-out-gate-routing.module';
import { AppBsModalModule } from 'src/app/_components/shared/common/appBsModal/app-bs-modal.module';

@NgModule({
  declarations: [
    InGateComponent,
    OutGateComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    InOutGateRoutingModule,
    AppBsModalModule,
    ModalModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InOutGateModule { }
