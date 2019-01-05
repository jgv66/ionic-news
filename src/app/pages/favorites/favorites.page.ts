import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  sources: [];
  constructor( private storage: Storage ) { }

  ngOnInit() {
    this.getFavorites();
  }

  onRefresh() {
    this.getFavorites();
  }

  getFavorites() {
    this.storage.get( 'favorite' )
      .then( valor => {
        if ( valor != null ) {
          this.sources = JSON.parse( valor );
        }
        console.log( this.sources );
      });
  }

  unFavorite( source: never ) {
    const index = this.sources.indexOf( source ) ;
    this.sources.splice( index, 1 );
    this.storage.set( 'favorites', JSON.stringify( this.sources ) );
  }
}
