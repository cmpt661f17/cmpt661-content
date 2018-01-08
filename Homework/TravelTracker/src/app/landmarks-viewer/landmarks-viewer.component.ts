import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-landmarks-viewer',
  templateUrl: './landmarks-viewer.component.html'
})
export class LandmarksViewerComponent implements OnInit {
   @Input() landmarks

  ngOnInit() {
  }
}