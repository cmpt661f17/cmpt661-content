import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-landmarks-editor',
  templateUrl: './landmarks-editor.component.html'
})
export class LandmarksEditorComponent implements OnInit {

    @Input() landmarks;
    @Output() landmarksChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() landmarksAdd: EventEmitter<Number> = new EventEmitter();
    @Output() landmarksDelete: EventEmitter<Number> = new EventEmitter<Number>();
    @Output() landmarksStatusChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild(NgForm) landmarksForm;

    ngOnInit() {
        //Listen to landmarks form status changes and inform the parent
        this.landmarksForm.statusChanges.subscribe(statusChange => {
            console.log(statusChange, this.landmarksForm.valid);
            this.landmarksStatusChange.emit(this.landmarksForm.valid);
            //console.log(this.landmarksForm.form.controls[0]?.invalid);
        });
    }

    onAddLandmark() {
        this.landmarksAdd.emit();
    }

    onDeleteLandmark(index) {
        this.landmarksDelete.emit(index);
    }
}