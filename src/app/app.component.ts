import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{
  title = 'rxjs';
  list$: Observable<any>;
  constructor(private serv: AppService, private http:HttpClient){

  }

  ngOnInit(): void{
    this.list$ = this.serv.getData();
  }

  ngOnChanges(): void {

  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {

  }
  /** SwitchMap, ConcatMap, ForkJoin Operator */

}
