import { Component, OnInit } from '@angular/core';
import { Fazendeiro } from '../model/fazendeiro.model';
import { FazendeiroService } from '../fazendeiro.service';

@Component({
  selector: 'app-visualizar-fazendeiros',
  templateUrl: './visualizar-fazendeiros.component.html',
  styleUrls: ['./visualizar-fazendeiros.component.css'],
  providers:[FazendeiroService]
})
export class VisualizarFazendeirosComponent implements OnInit {
public fazendeiros: Array<Fazendeiro>;
zoom: number = 7;
  constructor(private service : FazendeiroService) { }

  ngOnInit() {
    this.getFazendeiros();

  }
  getFazendeiros(){
this.service.getFazendeiros().subscribe((response:any)=>{
  console.log(response)
  this.fazendeiros=response
});
  }

}
