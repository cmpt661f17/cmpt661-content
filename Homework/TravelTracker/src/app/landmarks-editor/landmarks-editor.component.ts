import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-landmarks-editor',
  templateUrl: './landmarks-editor.component.html'
})
export class LandmarksEditorComponent implements OnInit {

    @Input() landmarks
    @Output() landmarksChange: EventEmitter<Number> = new EventEmitter<Number>();
    @Output() landmarksAdd: EventEmitter<Number> = new EventEmitter();
    @Output() landmarksDelete: EventEmitter<Number> = new EventEmitter<Number>();

    @ViewChild(NgForm) form;

    ngOnInit() {
    }

    onAddLandmark() {
        this.landmarksAdd.emit();
    }

    onDeleteLandmark(index) {
        this.landmarksDelete.emit(index);
    }
}
