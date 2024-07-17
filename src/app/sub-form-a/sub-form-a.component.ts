import { Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-sub-form-a',
  templateUrl: './sub-form-a.component.html'
})
export class SubFormAComponent implements OnInit {
  mainForm: FormGroup;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    this.mainForm = <FormGroup>this.controlContainer.control;
  }
}