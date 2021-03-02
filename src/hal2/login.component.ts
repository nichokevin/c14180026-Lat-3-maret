import { Component, OnInit } from "@angular/core";
import { GlobalvarService } from "../app/globalvar.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  dataJudul: String;
  dataIsi: String;
  dataTanggal: String;
  constructor(public globvar: GlobalvarService) {
    this.dataJudul = this.globvar.getJudul();
    this.dataIsi = this.globvar.getIsi();
    this.dataTanggal = this.globvar.getTanggal();
  }

  ngOnInit() {}
}
