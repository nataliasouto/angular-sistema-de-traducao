import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES  } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES

  constructor() { console.log(this.frases) } 

  ngOnInit() {
  }

}
