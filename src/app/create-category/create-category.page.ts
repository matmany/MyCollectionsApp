import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { CategoryCrudService } from '../service/category-crud.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.page.html',
  styleUrls: ['./create-category.page.scss'],
})
export class CreateCategoryPage implements OnInit {

  categoryForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private categoryCrudService: CategoryCrudService

  ) { 
    this.categoryForm = this.formBuilder.group({
      name: [''],
      user_id: [''],
      // active: ['']
    })
  }

  ngOnInit() {
  }

  onSubmit(){
    if(!this.categoryForm.valid){
      return false.valueOf;
    } else {
      this.categoryCrudService.createCategory(this.categoryForm.value)
        .subscribe((reponse)=>{
          this.zone.run(()=>{
            this.categoryForm.reset();
            this.router.navigate(['/list'])
          })
        })
    }
  }

}
