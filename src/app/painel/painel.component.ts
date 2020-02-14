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
  public resposta: string



  constructor() { console.log(this.frases) } 

  ngOnInit() {
  }

    atualizaResposta(resposta: Event):void{
     this.resposta = ((<HTMLInputElement>resposta.target).value)
      console.log(this.resposta)
    }
}
