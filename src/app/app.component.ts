import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  tabNumber = 2;

  changeTab1() {
    this.tabNumber = 1;
  }

  changeTab2() {
    this.tabNumber = 2;
  }

  changeTab3() {
    this.tabNumber = 3;
  }

  changeTab4() {
    this.tabNumber = 4;
  }
}
