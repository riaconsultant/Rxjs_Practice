import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }
  @Input() input: string="My Name Manoj";
  @Output() Output = new EventEmitter();
  ngOnInit(): void {

  }

}
