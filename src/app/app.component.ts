import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Avery Watts';
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'dark-footer');
  }
}
