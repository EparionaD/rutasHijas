import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software',
  template: `
    <div class="container">
      <img src="assets/img/software.png" alt="diseño" width="100%">
    </div>
  `,
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
