import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {
  private judul : [];
  constructor() { }

  public getJudul() {
    return this.judul
  }

  public setJudul() {
    
  }
}