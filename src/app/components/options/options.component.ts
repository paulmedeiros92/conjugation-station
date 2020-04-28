import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() title: string;
  controlNames: string[];
  constructor() { }

  ngOnInit(): void {
    this.controlNames = Object.keys(this.formGroup.controls);
  }

}
