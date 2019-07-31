import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../shared/car/car.service';
import { OwnersService } from '../shared/owners/owners.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit, OnDestroy {
  car: any = {};
  owners: any;
  bucket: any[] = [];
  id: any[] = [];

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private carService: CarService,
              private ownersService: OwnersService,
              private giphyService: GiphyService) {
  }

  ngOnInit() {
    this.ownersService.getAll().subscribe(data =>{
      this.owners = data;
      Object.entries(data._embedded.owners).map( data => {
        this.bucket.push(data[1])
        });
        for(let owner of this.bucket){
          this.id.push(owner.dni);
        }
    });
    
    
    
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.carService.get(id).subscribe((car: any) => {
          if (car) {
            this.car = car;
            this.car.href = car._links.self.href;
            this.car.ownerDni = car.ownerDni;
                      
            this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
          } else {
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/car-list']);
  }

  save(form: NgForm) {    
    this.carService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }    
  remove(href) {
    this.carService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}

