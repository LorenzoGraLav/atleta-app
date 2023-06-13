import { Injectable } from '@angular/core';
import { Atleta } from '../model/atleta';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  constructor() { }

  listaAtleti: Atleta[] = [
    { id: 1, nome: 'Marco', cognome: 'Verraccia', inAttivita: true, dataUltimaGara: new Date("2023-3-26"), numeroMedaglieVinte: 5 },
    { id: 2, nome: 'Lorenzo', cognome: 'Cacota', inAttivita: true, dataUltimaGara: new Date("2023-4-18"), numeroMedaglieVinte: 10 },
    { id: 3, nome: 'Filippo', cognome: 'Beretta', inAttivita: false, dataUltimaGara: new Date("2018-8-26"), numeroMedaglieVinte: 24 },
    { id: 4, nome: 'Anna', cognome: 'Magnani', inAttivita: true, dataUltimaGara: new Date("2023-5-10"), numeroMedaglieVinte: 9 },
    { id: 5, nome: 'Luca', cognome: 'Verdolini', inAttivita: true, dataUltimaGara: new Date("2023-2-15"), numeroMedaglieVinte: 18 },

  ]



  // usiamo gli Osservable perchè :
  // - gestione semplificata degli eventi asincroni 
  //   ( nell'attesa della risposta, posso fare altro mentre senza dobbiamo per forza aspettare)


  // funzione che come ritorno ottiene un observable
  // che emette un array di appartamento
  // con of ( funzione di rxjs) crea un observable
  listAll(): Observable<Atleta[]> {
    return of(this.listaAtleti);
  }


  // stessa logica
  insert(atleta: Atleta): Observable<Atleta> {
    const newId: number = Math.max.apply(Math, this.listaAtleti.map(atletaItem => atletaItem.id ? atletaItem.id : 1));
    atleta.id = newId + 1;
    this.listaAtleti.push(atleta);
    return of(atleta);
  }

}
