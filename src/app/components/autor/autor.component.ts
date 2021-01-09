import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { Autor } from '../../autor.model';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss']
})
export class AutorComponent implements OnInit, OnChanges {

  @Input() autor: Autor;

  @Output() autorClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
  }

  addSesto(): void {
    // console.log('Añadir al cesto...');
    this.autorClicked.emit(this.autor.id);
  }
}
