import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public scroll: number = 0;
  public imagen2: string = "https://media.vandal.net/master/45493/hollow-knight-201861820039_3.jpg";
  public imagen: string = "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/h/hollow-knight-switch/hero";
  public alto : number = 735;
  public ancho: number = 1150;
  cosa: boolean = false;
  public eventoBoton1(event: Event): void {
    console.log(event);
    alert('Hola');
  }
  public scrollEn(event: Event): void {
    this.scroll = (event.target as Element).scrollTop;
  }
  public capturarAlto(event: Event): void {
    const valor = Number.parseInt((event.target as HTMLInputElement).value)
    this.alto = valor;
  }
  public capturarAncho(event: Event): void {
    const valor = Number.parseInt((event.target as HTMLInputElement).value)
    this.ancho = valor;
  }

}
