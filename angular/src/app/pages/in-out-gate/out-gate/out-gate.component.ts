import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { InOutGateService } from 'src/app/_services/in-out-gate.service';
declare let alertify: any;
@Component({
  selector: 'app-out-gate',
  templateUrl: './out-gate.component.html',
  styleUrls: ['./out-gate.component.scss'],
})
export class OutGateComponent implements OnInit {
  @ViewChild('modal') public modal: ModalDirective;
  @Output() modalSave = new EventEmitter();
  cardId;
  registerNo = '';
  employee;

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.modal.show();
  }

  hide() {
    this.modal.hide();
  }
}
