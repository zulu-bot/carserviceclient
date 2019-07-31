import { Component, OnInit } from '@angular/core';
import { OwnersService } from '../shared/owners/owners.service';
import { CarService } from '../shared/car/car.service'
import { ActivatedRoute, Router } from '@angular/router';
import { StickyDirection } from '@angular/cdk/table';

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.css']
})
export class OwnersListComponent implements OnInit {
  cars: any[] = [];
  cars2: Array<any>;
  owners: any;
  bucket: any[] = [];
  aEliminar: any[] = [];

  constructor(private ownersService: OwnersService, private carService: CarService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.ownersService.getAll().subscribe(data =>{
      this.owners = data;
      Object.entries(data._embedded.owners).map( data => {
        this.bucket.push(data[1])
        
        });
    })
  }
 
  add(dni){
    for (let index = 0; index < this.aEliminar.length; index++) {
      if (dni == this.aEliminar[index]) {
        this.aEliminar.splice(index, 1);
        return; 
      }
    }
    this.aEliminar.push(dni);
  }
  
  delete(lista){
    
    for(let toRemove of lista){
      for(let owner of this.bucket){
        if(toRemove == owner.dni){
          this.ownersService.remove(owner._links.self.href).subscribe(result => {
            window.location.reload();
          }, error => console.error(error));
          this.carService.getAll().subscribe(data => {
            this.cars = data;
            this.cars2 = data;
            for(let car of this.cars){
              
              if(car.ownerDni == owner.dni){
                car.ownerDni = "";
                this.carService.save(car).subscribe(result => {
                  console.log("carro modif", car);
                }, error => console.error(error));
              }
            }
            
          });
          
        }
      }
      

    }

  }
  

}
