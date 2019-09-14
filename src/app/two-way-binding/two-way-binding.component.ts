import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'has-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  nome :  string = 'Horácio';
    
  constructor() { }

  ngOnInit() {
  }

}
