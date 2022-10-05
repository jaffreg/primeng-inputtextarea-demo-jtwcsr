import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  texte: string =
    'ABCD\nDDD\n1234ABCDF\nEEE\n123456' + 'AZRRRFD\n12365\n344R4\nPOIUY';

  public form: FormControl = this._formBuilder.control(
    this.texte,
    Validators.maxLength(255)
  );
  public formGroup: FormGroup = this._formBuilder.group({
    texte: this.form,
  });

  constructor(private _formBuilder: FormBuilder) {}

  init() {
    //this.formGroup.get('texte').setValue(this.texte);
  }

  ngOnInit(): void {
    setTimeout(() => this.init(), 1000);
  }

  modifier() {
    this.texte = this.texte + this.texte;
    //this.formGroup.get('texte').setValue(this.texte);
    this.formGroup.patchValue({ texte: this.texte });
  }
}
