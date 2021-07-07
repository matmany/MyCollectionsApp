import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemCrudService } from '../service/item-crud.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  Itens: any = [];
  id:any;

  constructor(
    private route: ActivatedRoute,
    private itemCrudService: ItemCrudService,
    private router:Router
  ) { 
    this.id=this.route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
  }

  goToItem(id:number){
    console.log("Going");
  }

  ionViewDidEnter(){
    console.log(this.id);
    this.itemCrudService.getItens(this.id).subscribe((response)=>{
      this.Itens = response;
    })
  }



}
