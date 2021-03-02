import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GlobalvarService } from "../app/globalvar.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, public globvar: GlobalvarService) {}
  nama = "";
  isi = "";
  tanggal = "";
  ngOnInit() {}

  OPENHAL() {
    this.globvar.setJudul(this.nama);
    this.globvar.setIsi(this.isi);
    this.globvar.setTanggal(this.tanggal);
    this.router.navigate(["/login"]);
  }
}
