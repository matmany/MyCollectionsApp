import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CategoryCrudService } from '../service/category-crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage implements OnInit {
  Categories: any =[];

  constructor(
    private categoryCrudService: CategoryCrudService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToCollection(id:number){
    this.router.navigate(['/list',id])
    // let navigationExtras: NavigationExtras = {
    //   state: {
    //     id: id
    //   }
    // };
    // this.router.navigate(['/collection'],navigationExtras)
  }

  ionViewDidEnter(){
    this.categoryCrudService.getCategories().subscribe((response)=>{
      this.Categories = response;
    })
  }

}
