import { Component, OnInit, Input } from '@angular/core';
import { InfoModel } from 'src/app/Models/info.model';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss'],
})
export class FullComponent implements OnInit {
  @Input() infoDetails: InfoModel;

  constructor() { }

  ngOnInit() {}

}
