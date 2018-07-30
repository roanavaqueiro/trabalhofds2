import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()

export class TrainerService {

	trainerUrl: string = 'http://localhost:8000/api/trainers/';
	private httpHeaders = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json'})
	};

	constructor(private http: HttpClient) {}


criarTrainer (nome:string,pokemon:string,codigo:number):Observable<any>{
	return this.http.post(this.trainerUrl, {
		'nome': nome,
		'pokemon': pokemon,
		'codigo':codigo
	}).pipe(map(res=>res));
}

getTrainer():Observable<any>{
	return this.http.get(this.trainerUrl).pipe(map(res=>res));
}

deleteTrainer (id):Observable<any>{
	return this.http. delete(this.trainerUrl + id).pipe(map(res=>res));
}
}

