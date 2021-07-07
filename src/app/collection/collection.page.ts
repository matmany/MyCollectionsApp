import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionCrudService } from '../service/collection-crud.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.page.html',
  styleUrls: ['./collection.page.scss'],
})
export class CollectionPage implements OnInit {

  Collections: any = [];

  constructor(
    private collectionCrudService: CollectionCrudService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.collectionCrudService.getCollections().subscribe((response)=>{
      this.Collections = response;
    })
  }

}
