import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { OwnersService} from '../shared/owners/owners.service'


@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.css']
})
export class OwnerEditComponent implements OnInit, OnDestroy {
  owner: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private ownersService: OwnersService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const dni = params['dni'];
      console.log("sdmfskadgnlkjsavnlkjnavlkjsnalk", dni);
      
      if (dni) {
        
        this.ownersService.get(dni).subscribe((owner: any) => {
          
          console.log("jdfhsauhfoisuhfiodhiushfisha", owner[0].name);
          
          if (owner) {
            this.owner = owner[0];
            this.owner.href = 'https://thawing-chamber-47973.herokuapp.com/owners/' + this.owner.id;          
            
            } else {
           
            console.log(`Owner with dni '${dni}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy(){}
  gotoList() {
    this.router.navigate(['/owners-list']);
  }
  save(form: NgForm){
    this.ownersService.save(form).subscribe(result => {
      this.gotoList();}, error => console.error(error));
  }

  remove(href){
    this.ownersService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => error.console(error))
  }

}
