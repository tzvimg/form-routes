import { Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sub-form-a',
  templateUrl: './sub-form-a.component.html',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule]
})
export class SubFormAComponent implements OnInit {
  mainForm: FormGroup = new FormGroup('');

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.mainForm = this.controlContainer.control?.get('subFormA') as FormGroup;
  }
}