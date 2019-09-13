import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'has-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  exibeParagrafo : boolean = true;

  constructor() { }

  ngOnInit() {
  }

  exibir(){
    this.exibeParagrafo = !this.exibeParagrafo;
  }

}


