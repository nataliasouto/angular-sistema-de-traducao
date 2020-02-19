import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public jogoEmAndamento: boolean = true
  public encerramento: string

  public encerrarJogo(tipo: string) : void {
    console.log(tipo);
    this.jogoEmAndamento = false
    this.encerramento = tipo
  }

}
