import { Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sub-form-b',
  templateUrl: './sub-form-b.component.html',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule]
})
export class SubFormBComponent implements OnInit {
  mainForm: FormGroup = new FormGroup('');

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.mainForm = this.controlContainer.control?.get('subFormB') as FormGroup;
  }
}