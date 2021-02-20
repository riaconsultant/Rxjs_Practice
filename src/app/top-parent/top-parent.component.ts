import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-top-parent',
  templateUrl: './top-parent.component.html',
  styleUrls: ['./top-parent.component.scss']
})
export class TopParentComponent implements OnInit, AfterViewInit {

  @ViewChild(ParentComponent) parent: ParentComponent;
  pData:any;
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    console.log(this.parent.input);
    this.pData = this.parent.input;
  }

}
