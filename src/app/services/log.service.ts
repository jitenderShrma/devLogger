import { Injectable } from '@angular/core';
import { Log } from '../models/Log';
import {Observable, of, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[]
  private logSource = new BehaviorSubject<Log>({id:null, text:null, date:null});
  selectedLog = this.logSource.asObservable();
  constructor() {
    this.logs = [
      {
        id:'1',
        text: 'Log first ',
        date:'12/14/2017'
      },
      {
        id:'2',
        text: 'Log two ',
        date:'11/11/2012'
      },
      {
        id:'3',
        text: 'Log third ',
        date:'9/10/2012'
      },
      {
        id:'4',
        text: 'Log forth ',
        date:'12/10/2012'
      },
    ]

  }
  getLogs():Observable<Log []>{
    return of(this.logs);
  }
  setFormatLog(log:Log){
    this.logSource.next(log);
  }
  addLog(log:Log){
    this.logs.unshift(log);
  }
  updateLog(log:Log){
    this.logs.forEach((cur, index) => {
      if(cur.id == log.id){
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
  }
}
