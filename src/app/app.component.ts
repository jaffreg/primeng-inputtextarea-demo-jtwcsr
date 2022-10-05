import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  texte: string =
    'ABCD\nDDD\n1234ABCDF\nEEE\n123456' + 'AZRRRFD\n12365\n344R4\nPOIUY';

  public form!: FormControl;

  constructor(private _formBuilder: FormBuilder) {}

  init() {
    //this.form.setValue(this.texte);
    this.form = this._formBuilder.control(
      this.texte,
      Validators.maxLength(255)
    );
  }

  ngOnInit(): void {
    setTimeout(() => this.init(), 1500);
  }

  modifier() {
    this.texte = this.texte + this.texte;
    //this.formGroup.get('texte').setValue(this.texte);
    this.form.patchValue(this.texte);
    //this.form.setValue(this.texte);
  }
}
