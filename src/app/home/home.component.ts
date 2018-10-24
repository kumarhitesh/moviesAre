import { Component, OnInit } from '@angular/core';
import { GetThelistService } from '../services/getThelist.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public recivedData: any;
  public filteredData: any;
  public searchedWord: any;
  // public movieId: any;
  public selectedMovieData: any;

  constructor(public getThedataService: GetThelistService, private http: HttpClient) { }

  ngOnInit() {
    this.showData();
    this.displayFilterData();
  }

  public showData() {
    this.getThedataService.getTheData()
      .subscribe((data) => {
        this.recivedData = data;
        console.log(this.recivedData.results);
      });
  }


  public displayFilterData() {
    this.getThedataService.getTheFilterData(this.searchedWord).subscribe((data) => {
      this.filteredData = data;
      console.log(this.filteredData.results);
    });
  }
  public displaySelectedMovieData(movieId) {
    this.getThedataService.getSetectedmovieData(movieId).subscribe((data) => {
      this.selectedMovieData = data;
      console.log(this.selectedMovieData);
    });
  }

}
