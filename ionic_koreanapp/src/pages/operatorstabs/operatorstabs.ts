import { Component } from '@angular/core';

import { OperatorhomePage } from '../operatorhome/operatorhome';
import{ OperatorjobPage } from '../operatorjob/operatorjob';
import { BasePage } from '../base-page/basepage';

@Component({
  templateUrl: 'operatorstabs.html'
})
export class OperatorstabsPage{

  tab1Operator = OperatorhomePage;
  tab2Operator = OperatorjobPage;

  constructor() {

  }
}
