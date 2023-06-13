import { Component, OnInit } from '@angular/core';
import { AtletaService } from '../../atleta.service';
import { Subscription } from 'rxjs';
import { Atleta } from 'src/app/model/atleta';

@Component({
  selector: 'app-atleta-list',
  templateUrl: './atleta-list.component.html',
  styleUrls: ['./atleta-list.component.css']
})
export class AtletaListComponent implements OnInit {

  constructor(private atletaService: AtletaService) { }

  subscription?: Subscription;

  confirmMessage: string = '';

  listaAtleti: Atleta[] = [];



  ngOnInit(): void {
    this.subscription = this.atletaService.listAll()
    .subscribe(listaAtleti => { this.listaAtleti = listaAtleti })
  }

  ngOnDestroy(): void {
    // Annulla la sottoscrizione per evitare memory leak
    this.subscription?.unsubscribe();
  }

}
