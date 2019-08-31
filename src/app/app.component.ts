import { Component } from '@angular/core';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  peso = 60;
  pesot = 'Peso: ';
  altura = 1.70;
  alturat = 'Altura: ';
  foto = 'favicon.ico';
  cal = this.peso / (this.altura * this.altura)
  exibir(): void{
    alert(`IMC: ` + this.cal.toFixed(2))
  }
}


