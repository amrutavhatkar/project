import { Component, Input, OnInit } from '@angular/core';
import { SendDataService } from '../service/send-data.service';
import { Slot } from '../slot';

@Component({
  selector: 'app-slotbooking',
  templateUrl: './slotbooking.component.html',
  styleUrls: ['./slotbooking.component.css']
})
export class SlotbookingComponent implements OnInit {

  slots : Slot[]=[];
  @Input()  slot:Slot={
    name:"",
    email:"",
    phone:0,
    time:""
  };
  constructor(public service:SendDataService) { }


  ngOnInit(): void {
    this.getAllslots();
  }

  getAllslots():void{
    this.service.getAll().subscribe(slots=>this.slots=slots);
  }

  save(slot : Slot):void{
    console.log(slot);
    // this.slot = slot;
    // console.log(this.slot);
    this.service.add(this.slot).subscribe(data=>console.log(data));
  }
}
