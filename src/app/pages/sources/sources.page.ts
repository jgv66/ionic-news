import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { SharedService } from 'src/app/services/shared.service';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.page.html',
  styleUrls: ['./sources.page.scss'],
})
export class SourcesPage implements OnInit {

  sources: any;
  fakeSources = new Array(20);
  term = '';

  constructor( private newsService: NewsService,
               public  sharedService: SharedService,
               private storage: Storage,
               private toastCtrl: ToastController  ) { }

  ngOnInit() {
    /* this.sources = this.newsService.getData( 'sources' ); */
    this.newsService.getData( 'sources' )
        .subscribe( sources => { this.sources = sources['sources'];
        });
  }

  saveArticle( source: any ) {
    this.sharedService.currentArticle = source;
  }

  favorite( source: any ) {
    /* console.log(source); */
    this.storage.get( 'favorite' )
      .then( valor => {
        let items = [];
        if ( valor != null ) {
          items = JSON.parse( valor );
        }
        items.push( source );
        this.storage.set( 'favorite', JSON.stringify( items ) );
        this.presentToast();
      });
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Item se agregó a favoritos',
      duration: 2000,
      position: 'middle',
      translucent: true,
      color: 'warning'
    });
    toast.present();
  }


}
