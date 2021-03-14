import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import * as moment from 'moment';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { InOutGateService } from 'src/app/_services/in-out-gate.service';
@Component({
  selector: 'app-in-gate',
  templateUrl: './in-gate.component.html',
  styleUrls: ['./in-gate.component.scss'],
})
export class InGateComponent implements OnInit {
  @ViewChild('modal') public modal: ModalDirective;
  @Output() modalSave = new EventEmitter();

  vhcTypes = [
    {
      label: 'Ô tô',
      value: 2,
    },
  ];

  cardList = [];

  cardId;
  registerNo = '';
  vhcType;
  inDate = moment(new Date());
  location;
  employee;

  constructor() {}

  ngOnInit() {
  }

  show() {
    this.modal.show();
  }

  hide() {
    this.modal.hide();
  }
}
