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
  }
  getLogs():Observable<Log []>{
    if(JSON.parse(localStorage.getItem('logs')) === null){
      this.logs = [];
    } else {
      this.logs = JSON.parse(localStorage.getItem('logs'));
    }
    return of(this.logs);
  }
 
  setFormatLog(log:Log){
    this.logSource.next(log);
  }
  addLog(log:Log){
    this.logs.unshift(log);
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }
  updateLog(log:Log){
    this.logs.forEach((cur, index) => {
      if(cur.id == log.id){
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }
  removeLog(log:Log){
    this.logs.forEach((cu, index) => {
      if(cu.id == log.id){
        console.log('log for remove finded')
        this.logs.splice(index, 1);
      }
    });
    localStorage.setItem('logs', JSON.stringify(this.logs));

  }
}
