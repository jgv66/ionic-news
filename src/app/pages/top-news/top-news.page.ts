import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.page.html',
  styleUrls: ['./top-news.page.scss'],
})
export class TopNewsPage implements OnInit {

  public news: any;

  constructor( private newsService: NewsService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.news = this.newsService.getData( '/top-headlines?country=us' );
    // this.newsService.getData( '/top-headlines?country=us&' ).subscribe( data => { this.news = data; console.log( data ); });
  }

  onRefresh( event ) {
    this.getData();
    console.log(event);
    setTimeout( () => {
      event.target.complete();
    }, 2000 );
  }
}
