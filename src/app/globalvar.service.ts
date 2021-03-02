import { Injectable } from "@angular/core";

@Injectable()
export class GlobalvarService {
  private _judul: String = "";
  private _isi: String = "";
  private _tanggal: String = "";
  constructor() {}

  public getJudul() {
    return this._judul;
  }

  public setJudul(judul: String) {
    this._judul = judul;
  }

  public getIsi() {
    return this._isi;
  }

  public setIsi(isi: String) {
    this._isi = isi;
  }

  public getTanggal() {
    return this._tanggal;
  }

  public setTanggal(tanggal: String) {
    this._tanggal = tanggal;
  }
}
