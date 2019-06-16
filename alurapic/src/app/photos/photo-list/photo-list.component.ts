import { Photo } from './../photo/photo';
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];

  constructor(private photoservice: PhotoService) { }

  ngOnInit() {
    this.photoservice.listFromUser('flavio').subscribe(photos => this.photos = photos);
  }

}
