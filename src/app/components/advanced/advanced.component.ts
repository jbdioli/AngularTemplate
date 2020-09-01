import { Component, OnInit, Input } from '@angular/core';
import { InfoModel } from 'src/app/Models/info.model';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss'],
})
export class AdvancedComponent implements OnInit {
  @Input() infoDetails: InfoModel;

  constructor() { }

  ngOnInit() { }

}
