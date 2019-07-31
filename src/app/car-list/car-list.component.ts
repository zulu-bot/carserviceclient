import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/car/car.service';
import { OwnersService } from '../shared/owners/owners.service';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Array<any>;
  owners: any;
  bucket: any[] = [];
  names: string[] = [];

  constructor(private carService: CarService, private giphyService: GiphyService, private ownersService: OwnersService) { }

  ngOnInit() {
    this.ownersService.getAll().subscribe(data =>{
      this.owners = data;
      console.log("asdfsag", this.owners);
      Object.entries(data._embedded.owners).map( data => {
        this.bucket.push(data[1])
        });
    })
    console.log(this.bucket);
    
    this.carService.getAll().subscribe(data => {
      this.cars = data;
      console.log("mdmsadmf", this.cars);
            
      for (let i = 0; i <  this.cars.length; i++) {
        let car = this.cars[i];
        console.log("carro ", i, car.ownerDni);
        if(car.ownerDni == null){this.names[i] = "";
      }else{
        this.ownersService.get(car.ownerDni).subscribe((dueño:any) => {
          this.names[i] = dueño[0].name;
        });}
        
        console.log("array name", this.names);
        
        this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
        
      }
      
    });
  }

}
