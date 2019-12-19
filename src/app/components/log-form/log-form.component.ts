import { Component, OnInit } from '@angular/core';

import { LogService } from '../../services/log.service';

import { Log } from '../../models/Log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.scss']
})
export class LogFormComponent implements OnInit {
  text: string;
  id: string;
  date: any;
  isNew: boolean = true;
  constructor(private logService: LogService) { }
  ngOnInit() {
    this.logService.selectedLog.subscribe(log => {
      if (log.id !== null) {
        this.text = log.text;
        this.id = log.id;
        this.date = log.date;
      }
    })
  }
  onSubmit() {
    if (this.isNew) {
      // add new log
      const newLog = {
        id: Math.random().toString(),
        text: this.text,
        date: new Date()
      }
      this.logService.addLog(newLog);
    } else {
      // update log
      this.logService.updateLog({ id: this.id, text: this.text, date: new Date() } as Log);
    }
    this.setInitialState();
  }
  onClickedLogEvent(log) {
    this.text = log.text;
    this.id = log.id;
    this.date = new Date();
    this.isNew = false;
  }
  onClear(){
    this.setInitialState();
  }
  setInitialState(){
    this.id = null;
    this.text = null;
    this.date = null;
    this.isNew = true;
  }
}
