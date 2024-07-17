import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  standalone: true,
  imports: [RouterOutlet, RouterLink,FormsModule,ReactiveFormsModule,CommonModule]
})
export class MainFormComponent implements OnInit {
  mainForm: FormGroup = new FormGroup('');

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      mainControl: [''],
      subFormA: this.fb.group({
        subFormAControl: ['']
      }),
      subFormB: this.fb.group({
        subFormBControl: ['']
      })
    });

    // Patch initial data
    const initialData = {
      mainControl: 'Initial Main Control Data',
      subFormA: { subFormAControl: 'Initial Sub Form A Data' },
      subFormB: { subFormBControl: 'Initial Sub Form B Data' }
    };
    this.mainForm.patchValue(initialData);
  }

  onSubmit(): void {
    console.log(this.mainForm?.value);
  }
}
