// src/app/service/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root', // Bu şekilde service'i kök modülde sağlayabiliriz
})
export class AuthService {
    private apiUrl = 'http://localhost:5000/api/auth'; // API URL'sini buraya ekleyin

    constructor(private http: HttpClient) { }

    login(kullaniciAdi: string, sifre: string): Observable<any> {
        const body = { kullaniciAdi, sifre };
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(`${this.apiUrl}/login`, body, { headers });
    }

    register(kullaniciAdi: string, sifre: string, email: string, telefon: string, kvkk: boolean, paketBilgisi: string): Observable<any> {
        const body = { kullaniciAdi, sifre, email, telefon, kvkk, paketBilgisi };
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(`${this.apiUrl}/register`, body, { headers });
    }

}
