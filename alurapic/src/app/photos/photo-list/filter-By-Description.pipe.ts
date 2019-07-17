import { Photo } from './../photo/photo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform{

  transform(photos: Photo[], descriptionQuery: String) {
    descriptionQuery = descriptionQuery.trim().toLowerCase();
    if (descriptionQuery) {
      return photos.filter(photos => photos.description.toLowerCase().includes(descriptionQuery.toString()));
    }
    else {
      return photos;
    }
  }

}
