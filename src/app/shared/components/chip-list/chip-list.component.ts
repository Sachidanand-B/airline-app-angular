import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { MatChipInputEvent } from '@angular/material/chips';

/**
 * @title Chips with input
 */
@Component({
    selector: 'app-chip-list',
    templateUrl: 'chip-list.component.html',
    styleUrls: ['chip-list.component.scss'],
})
export class ChipListComponent implements OnInit {
    @Input() listProvided;
    @Input() placeHolder;
    @Input() controlName;
    @Input() parentForm;
    @Input() currentValues;
    @Input() disableAutoComple;
    chipListArr = [];
    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    constructor() { }

    ngOnInit() {
        this.chipListArr = Object.assign([], this.currentValues);
        this.parentForm.addControl(this.controlName, new FormControl(this.currentValues));
    }

    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim() && !this.chipListArr.includes(value)) {
            this.chipListArr.push(value);
            this.parentForm.get(this.controlName).setValue(this.chipListArr);
            this.parentForm.get(this.controlName).markAsDirty();
        }
        if (input) {
            input.value = '';
        }
    }

    remove(item): void {
        const index = this.chipListArr.indexOf(item);
        if (index >= 0) {
            this.chipListArr.splice(index, 1);
            this.parentForm.get(this.controlName).setValue(this.chipListArr);
            this.parentForm.get(this.controlName).markAsDirty();
        }
    }

    selected(event: MatAutocompleteSelectedEvent): void {
        if ((event.option.viewValue || '').trim() && !this.chipListArr.includes(event.option.viewValue)) {
            this.chipListArr.push(event.option.viewValue);
            this.parentForm.get(this.controlName).setValue(this.chipListArr);
            this.parentForm.get(this.controlName).markAsDirty();
        }
    }
}