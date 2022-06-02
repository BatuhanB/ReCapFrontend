import { Color } from './../../models/color';
import { ColorService } from './../../services/color.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  dataLoaded: boolean = false;
  currentColor: Color;
  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getColors();
  }

  setCurrentColor(color: Color) {
    this.currentColor = color;
  }

  setCurrentColorClass(color: Color) {
    return this.currentColor == color
      ? 'list-group-item active'
      : 'list-group-item';
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

  reset() {
    this.currentColor = { id: -1, name: '' };
  }
}
