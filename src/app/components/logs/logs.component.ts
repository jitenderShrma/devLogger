import { Component, OnInit } from '@angular/core';
import {LogService} from '../../services/log.service';

import {Log} from '../../models/Log';
@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  logs: Log[];

  constructor(private logService:LogService) {
    this.logService.getLogs().subscribe(logs => this.logs = logs);
  }

  ngOnInit() {
  }
  onSelectLog(log:Log){
    this.logService.setFormatLog(log);
  }

}
