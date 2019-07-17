import { Input, OnChanges } from '@angular/core';
import { Photo } from './../../photo/photo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit, OnChanges {

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if(changes.photos)
      this.rows = this.groupColumns(this.photos);
  }

  @Input() photos: Photo[] = [];
  rows = [];

  constructor() { }

  ngOnInit() {

  }

  groupColumns(photos: Photo[]){
    const newRows = [];

    for(let index = 0; index < photos.length; index+=3){
      newRows.push(photos.slice(index, index + 3));
    }

    return newRows;
  }
}
