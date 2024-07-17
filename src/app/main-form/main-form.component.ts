import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html'
})
export class MainFormComponent implements OnInit {
  mainForm: FormGroup;

  constructor(private fb: FormBuilder) {}

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
    console.log(this.mainForm.value);
  }
}
