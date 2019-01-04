import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.page.html',
  styleUrls: ['./headlines.page.scss'],
})
export class HeadlinesPage implements OnInit {

  private news: any;
  private categories = ['Chile', 'World', 'Business', 'India', 'Technology', 'Entertainments', 'Sports', 'Science'];

  constructor( private newsService: NewsService) { }

  ngOnInit() {
    this.getCategoriData( this.categories[0].toLowerCase() );
  }

  onGetCategoryData( category ) {
    console.log( category.toLowerCase() );
    this.getCategoriData( category );
  }

  getCategoriData( category ) {
    this.news = this.newsService.getData( 'everything?q=' + category.toLowerCase() );
  }

}
