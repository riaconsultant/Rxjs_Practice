import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rxjs';
  list$: Observable<any>;
  constructor(private serv: AppService){

  }

  ngOnInit(){
    this.list$ = this.serv.getData();
  }
}
