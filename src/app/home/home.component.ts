import { Component, OnInit } from '@angular/core';
import { GetThelistService } from '../services/getThelist.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public recivedData: any;

  constructor(public getThedataService: GetThelistService) { }

  ngOnInit() {
    this.showData();
  }

  public showData() {
    this.getThedataService.getTheData()
      .subscribe((d) => {
        this.recivedData = d;
        console.log(this.recivedData);
      });
  }
}
