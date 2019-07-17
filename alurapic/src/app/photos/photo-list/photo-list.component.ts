import { PhotoService } from './../photo/photo.service';
import { Photo } from './../photo/photo';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  photos: Photo[] = [];
  filter: String = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService ) { }

  ngOnInit() {
    this.photos = this.activatedRoute.snapshot.data['photos'];
    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.filter = filter)
  }

}
