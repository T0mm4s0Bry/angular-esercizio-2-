import { Component } from '@angular/core';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { FourthComponentComponent } from './fourth-component/fourth-component.component';

@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [ThirdComponentComponent, FourthComponentComponent],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css'
})
export class SecondComponentComponent {
 nome1 : string = "meme uomo che pensa"
 descrizione1: string = "questo meme è nato molto tempo fa ma è tutt'ora usato e raffigura un uomo che pensa in cui si possono inserire delle frasi "
 nome2 : string = "meme balletto drake"
 descrizione2: string = "questo meme è noto perché si trovava in una canzone di drake che raffigura quest'ultimo mentre prima rifiuta un qualcosa e dopo ne accetta un'altra"
}
