import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'Antony-Rojas-Medina';
  numExp = 100;

  arrString = ['Antony', 'Rojas', 'Medina'];

  constructor() { }

  ngOnInit(): void {
  }

  openItems(length: number): void {
    this.arrString.push('Antony');
  }

  deleteItem(item: number): void {
    this.arrString.splice(item, 1);
  }

}
