import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-info-jugadoras",
  templateUrl: "./info-jugadoras.page.html",
  styleUrls: ["./info-jugadoras.page.scss"],
})
export class InfoJugadorasPage implements OnInit {
  nombre: any;
  posicion: any;
  bio: any;
  img: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.nombre = this.route.snapshot.paramMap.get("nombre");
    this.posicion = this.route.snapshot.paramMap.getAll("posicion");
    this.bio = this.route.snapshot.paramMap.getAll("bio");
    this.img = this.route.snapshot.paramMap.getAll("img");
  }
}
