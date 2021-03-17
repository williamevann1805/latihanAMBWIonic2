import { Component } from '@angular/core';
import { FotoService } from '../foto.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public fotoservice: FotoService) {}

  tambahfoto(){
    this.fotoservice.tambahfoto();
  }

  async ngOnInit(){
    await this.fotoservice.loadFoto();
  }
}
