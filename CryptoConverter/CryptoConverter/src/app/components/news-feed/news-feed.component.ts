import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  newsList!: any
  arrow= faUpRightFromSquare
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getNews().subscribe(res => {
      this.newsList = res
      this.newsList = this.newsList.slice(0,7)
      console.log(this.newsList)
    })
  }

}
