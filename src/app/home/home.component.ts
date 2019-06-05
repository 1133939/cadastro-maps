import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Fazendeiro } from '../model/fazendeiro.model';
import { FazendeiroService } from '../fazendeiro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[FazendeiroService]
})
export class HomeComponent implements OnInit {

  lat: number = -12.8779431;
  lng: number = -44.8046873;
  zoom: number = 7;
  public formCadastro : FormGroup = new FormGroup({
    'nome': new FormControl(null,[Validators.minLength(5)]),
    'produtos': new FormControl(null,[Validators.minLength(5)]),
    'telefone': new FormControl(null,[Validators.minLength(8)]),
    'whatsapp' : new FormControl(null,[Validators.minLength(8)]),
    'email' : new FormControl (null,[Validators.minLength(5)])
  })
  constructor(private service: FazendeiroService) { }

  ngOnInit() {
  }
  placeMarker($event){
    console.log($event.coords.lat);
    console.log($event.coords.lng);
    this.lat = $event.coords.lat
    this.lng = $event.coords.lng 
  }
  cadastrarFazendeiro(){
    let fazendeiro : Fazendeiro = new Fazendeiro(
      null,
      this.formCadastro.value.nome,
      this.formCadastro.value.produtos,
      this.formCadastro.value.telefone,
      this.formCadastro.value.whatsapp,
      this.formCadastro.value.email,
      this.lat,
      this.lng
      );
      console.log('cadastrando Fazendeiro')
      console.log(fazendeiro)
      this.service.cadastrarFazendeiro(fazendeiro).subscribe((response:any)=>{
        console.log(response)
        alert('Fazendeiro Cadastrado com Sucesso')
      })

  }
}
