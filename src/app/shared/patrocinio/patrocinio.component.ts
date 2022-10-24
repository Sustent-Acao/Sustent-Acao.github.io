import { Component, OnInit } from '@angular/core';
import { PhotoService } from './../../services/photo.service'

@Component({
  selector: 'app-patrocinio',
  templateUrl: './patrocinio.component.html',
  styleUrls: ['./patrocinio.component.scss']
})
export class PatrocinioComponent implements OnInit {

  images: any[] = [];

  constructor(private PhotoService: PhotoService) { }

  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
ngOnInit() {
    this.PhotoService.getImages().then(images => this.images = images);
}


}
