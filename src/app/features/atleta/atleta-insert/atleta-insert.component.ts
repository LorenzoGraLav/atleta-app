import { Component } from '@angular/core';
import { Atleta } from 'src/app/model/atleta';
import { AtletaService } from '../../atleta.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-atleta-insert',
  templateUrl: './atleta-insert.component.html',
  styleUrls: ['./atleta-insert.component.css']
})
export class AtletaInsertComponent {
  atleta: Atleta = {
    id:0,
    nome:'',
    cognome:'',
    inAttivita:false,
    dataUltimaGara:new Date(),
    numeroMedaglieVinte:0
  }
  errorMessage: string = '';

  constructor(private atletaService: AtletaService, private router: Router) { }

  ngOnInit(): void {
  }

  save(atletaForm: NgForm): void {
    console.log('sub ' + JSON.stringify(this.atleta));
    if (atletaForm.valid) {
      this.atletaService.insert(this.atleta).subscribe({
        next: atletaItem => this.atleta = atletaItem,
        complete: () => this.router.navigate([`atleta/list`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
      });
    } else
      this.errorMessage = 'Attenzione! Operazione fallita! Il form non è stato validato';
  }

}
