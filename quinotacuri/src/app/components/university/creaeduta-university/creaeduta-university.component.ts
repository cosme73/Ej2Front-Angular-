import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { University } from 'src/app/models/University';
import { UniversityService } from 'src/app/services/university.service';

@Component({
  selector: 'app-creaeduta-university',
  templateUrl: './creaeduta-university.component.html',
  styleUrls: ['./creaeduta-university.component.css']
})
export class CreaedutaUniversityComponent  implements OnInit{


  form: FormGroup = new FormGroup({});
  university: University = new University();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private uS: UniversityService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

ngOnInit(): void {
   
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
    });
    this.form = this.formBuilder.group({
      ycqtId:[''],
      ycqtName:  ['', Validators.required],
      ycqtAddress: ['', Validators.required],
      ycqtEmail:  ['', Validators.required],
     

    });
  }

  
  aceptar(): void {
    if (this.form.valid) {
      this.university.ycqtId = this.form.value.ycqtId;
      this.university.ycqtName = this.form.value.ycqtName;
      this.university.ycqtAddress = this.form.value.ycqtAddress;
      this.university.ycqtEmail = this.form.value.ycqtEmail;
      if (this.edicion) {
        this.uS.update(this.university).subscribe(() => {
          this.uS.list().subscribe((data) => {
            this.uS.setList(data);
           // this.nuevobtn();
          });
        });
      } else {
        this.uS.insert(this.university).subscribe((data) => {
          this.uS.list().subscribe((data) => {
            this.uS.setList(data);
            //this.nuevobtn();
          });
        });
      }
      this.router.navigate(['components/university']);
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
    }
  }

  nuevobtn() {
    //refresca la página
    location.reload();
  }


  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }
  /*
  init() {
    
    this.form = new FormGroup({
      ycqtId: new FormControl(data.ycqtId),
      ycqtName: new FormControl(data.ycqtName),
      ycqtAddress: new FormControl(data.ycqtAddress),
      ycqtEmail:new FormControl(data.ycqtEmail),
    });
  }*/
  
}
