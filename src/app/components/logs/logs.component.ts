import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {LogService} from '../../services/log.service';

import {Log} from '../../models/Log';
@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  logs: Log[];
  loaded: boolean = false;
  @Output() logClicked:EventEmitter<Log> = new EventEmitter();
  @Output() eventLog: EventEmitter<any> = new EventEmitter();
  @Output() clickedLog: EventEmitter<any> = new EventEmitter();
  constructor(private logService:LogService) {
    this.logService.getLogs().subscribe(logs => {this.logs = logs; this.loaded=true;});
  }

  ngOnInit() {
  }
  onClickedLog(log:Log){
    this.clickedLog.emit(log);
    this.logClicked.emit(log);
  }
  onRemoveLog(log:Log){
    // call service for remove log
    this.logService.removeLog(log);
  }

}
