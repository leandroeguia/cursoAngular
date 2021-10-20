import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {


  miFormulario : FormGroup = this.fb.group({
    nombre:['', [Validators.required, Validators.pattern(this.vsz.nombreApellidoPattern)]],
    email:['', [Validators.required, Validators.pattern(this.vsz.emailPattern)], [this.evz]],
    username:['', [Validators.required, this.vsz.noPuedeSerStrider]],
    password:['', [Validators.required, Validators.minLength(6)]],
    password2:['', [Validators.required]],
  }, 
  {
    Validators:[this.vsz.camposIguales('password','password2')]
  });

  

  get emailErrorMsg() : string{
    const errors = this.miFormulario.get('email')?.errors;

    if(errors?.required){
      return 'El email es obligatorio';
    }else if (errors?.pattern){
      return 'El valor no es formato de correo';
    }else if (errors?.emailTomado){
      return 'El mail ya fue tomado';

    }

    return '';

  }

  constructor( private fb : FormBuilder, 
               private vsz : ValidatorService,
               private evz : EmailValidatorService) { }

  ngOnInit() : void{

    this.miFormulario.reset({
      nombre: 'Leandro Eguia',
      email: 'test1@test.com',
      username: 'legui123',
      password: '123456',
      password2: '123456'
    });

  }

  campoNoValido( campo: string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  
  }

  submitFormulario(){
    this.miFormulario.markAllAsTouched();
  }

  // emailRequired (){
  //   return this.miFormulario.get('email')?.errors?.required && this.miFormulario.get('email')?.touched;
  // }

  // emailFormato (){
  //   return this.miFormulario.get('email')?.errors?.pattern && this.miFormulario.get('email')?.touched;
  // }
  
  // emailTomado (){
  //   return this.miFormulario.get('email')?.errors?.emailTomado && this.miFormulario.get('email')?.touched;
  // }






}
