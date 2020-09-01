import { Component, OnInit, Input } from '@angular/core';
import { InfoModel } from 'src/app/Models/info.model';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent implements OnInit {
  @Input() infoDetails: InfoModel;

  constructor() { }

  ngOnInit() {}

}
