import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CollectionCrudService } from '../service/collection-crud.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.page.html',
  styleUrls: ['./collection.page.scss'],
})
export class CollectionPage implements OnInit {

  Collections: any = [];
  id:any;

  constructor(
    private route: ActivatedRoute,
    private collectionCrudService: CollectionCrudService,
    private router:Router
  ) { 
    this.id=this.route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
  }

  goToItens(id:number){
    this.router.navigate(['/itens',id])
  }

  ionViewDidEnter(){
    console.log(this.id);
    this.collectionCrudService.getCollections(this.id).subscribe((response)=>{
      this.Collections = response;
    })
  }

}
