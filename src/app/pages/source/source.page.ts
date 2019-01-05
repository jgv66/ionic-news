import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.page.html',
  styleUrls: ['./source.page.scss'],
})
export class SourcePage implements OnInit {

  newsId: string;
  news: any;

  constructor(private newsService: NewsService,
              private route: ActivatedRoute,
              public  sharedService: SharedService ) { }

  ngOnInit() {
    this.newsId = this.route.snapshot.paramMap.get('id');
    console.log(this.newsId, this.sharedService.currentArticle );
    this.news = this.newsService.getData( 'everything?sources=' + this.newsId );

  }

}
