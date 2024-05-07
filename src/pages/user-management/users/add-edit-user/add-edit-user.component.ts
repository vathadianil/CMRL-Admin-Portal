import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DropDownComponent } from '../../../../components/drop-down/drop-down.component';
import { PagetitleComponent } from '../../../../components/pageTitle/page-title.component';
import { InputTextComponent } from '../../../../components/input-text/input-text.component';
import { ButtonFieldComponent } from '../../../../components/button-field/button-field.component';
import { GET_STATUS_OPTIONS } from '../../../../constants/dropdowns';

@Component({
  selector: 'app-add-edit-user',
  standalone: true,
  imports: [
    DropDownComponent,
    PagetitleComponent,
    InputTextComponent,
    ButtonFieldComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-edit-user.component.html',
  styleUrl: './add-edit-user.component.scss',
})
export class AddEditUserComponent {
  userForm!: FormGroup;
  isEdit: boolean = false;
  roleData = [];
  status = GET_STATUS_OPTIONS;
  statusDefaultValue = this.status[0].value;
  roleDefaultValue = null;
  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddEditUserComponent>
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      status: ['', Validators.required],
    });
    if (this.data) {
      this.isEdit = this.data.action === 'update';
      let userData = this.data.value;
      this.userForm.setValue({
        name: userData['Name'],
        role: userData['Role'],
        status: userData['Status'],
      });
      this.roleDefaultValue = userData['Role'];
      this.statusDefaultValue = userData['Status'];
    }
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.userForm.valid) {
      if (this.isEdit) {
        this.updateUser();
      } else {
        this.addUser();
      }
    }
  }

  updateUser() {}

  addUser() {}

  roleValue(data: any) {
    this.userForm.patchValue({ role: data });
  }

  statusValue(data: any) {
    this.userForm.patchValue({ activeStatus: data });
  }

  close() {
    this.dialogRef.close('');
  }
}
