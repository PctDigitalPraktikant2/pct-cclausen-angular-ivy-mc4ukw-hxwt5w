import { Component, OnInit } from '@angular/core';
import { crown } from '../../../images';
@Component({
  selector: 'app-scores-display',
  templateUrl: './scores-display.component.html',
  styleUrls: ['./scores-display.component.css']
})
export class ScoresDisplayComponent implements OnInit {

  constructor() { }
  crown=crown
  ngOnInit() {
  }

}
