import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contant',
  templateUrl: './contant.component.html',
  styleUrls: ['./contant.component.css']
})
export class ContantComponent implements OnInit {

  constructor(private api:ApiService){}

  getUsers:any=[]
  randomUser:any=[]

  ngOnInit(): void {
    this.api.getUsers().subscribe({
      next:(response:any)=>{
        // console.log(response.users)
        this.getUsers=response.users
        this.randomIndex(this.getUsers)
      }
    })
  }
  randomIndex(index:any){
    this.randomUser = index[(Math.random() * index.length) | 0]
  }
  

}
