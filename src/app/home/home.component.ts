import { Component, OnInit } from '@angular/core';
import { GetThelistService } from '../services/getThelist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public recivedData: any = [];
  public filteredData: any = [];
  public searchedWord: string;
  // public movieId: any;
  public selectedMovieData: any;
  public dataNotFound: string;
  public containerBox = false;

  constructor(public getThedataService: GetThelistService) { }

  ngOnInit() {
    this.showData();

    console.log(this.searchedWord);
  }

  public showData() {
    this.getThedataService.getTheData()
      .subscribe((data) => {
        this.recivedData = data;
      });
    this.dataNotFound = '';
    this.filteredData = [];
  }


  public displayFilterData() {
    if (this.searchedWord && this.searchedWord !== '') {
      this.getThedataService.getTheFilterData(this.searchedWord).subscribe((data: any) => {
        console.log('I got this.', data.results);
        if (data.results.length > 0) {
          this.filteredData = data;
        } else {
          this.dataNotFound = 'No Movie found';
          this.filteredData = [];
        }
      });
    } else if (this.searchedWord === '') {
      this.dataNotFound = 'Search feild is empty';
      this.filteredData = [];
    }
  }
  public displaySelectedMovieData(movieId) {
    this.getThedataService.getSetectedmovieData(movieId).subscribe((data) => {
      this.selectedMovieData = data;
    });
    this.containerBox = true;
  }

  public showPreviousData() {
    this.dataNotFound = '';
  }
  public movieDetailsToggler() {
    this.containerBox = !this.containerBox;
  }
}
