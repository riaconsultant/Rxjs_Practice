import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,AfterViewInit {

  @Input('input')inputValue:string;
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit():void{
    console.log(this.inputValue);
    
  }


}
