import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationParamsModel } from './_components/shared/common/models/base.model';
import { Employee } from './_models/employee';
import { AuthenticationService } from './_services/authentication.service';
import { ceil } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  checkMenu: boolean = true;
  constructor(
    private router: Router,
  ) {
  }

  logout() {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }
}
