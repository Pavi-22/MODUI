import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/Models/training';
import { TrainingService } from 'src/app/Services/training.service';

@Component({
  selector: 'app-admintraining',
  templateUrl: './admintraining.component.html',
  styleUrls: ['./admintraining.component.css']
})
export class AdmintrainingComponent implements OnInit {
  item:Training;
  list:Training[];
  msg:string;
  constructor(private _service:TrainingService) {
    this.item = new Training();
    this._service.GetAllTraining().subscribe(k=>this.list=k);
  }

  ngOnInit() {
  }

}
