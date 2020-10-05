import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-tienda",
  templateUrl: "./tienda.component.html",
  styleUrls: ["./tienda.component.css"],
})
export class TiendaComponent implements OnInit {
  //nom: string = "cewsars";
  itemsPerPage: number = 8;
  //p:number=1;
  productos = [
    {
      code: 1,
      nombre: "Mouse",
      categoria: "periféricos",
      precio: 10.5,
      img: "/assets/img/noimg.png",
      img2: "/assets/img/noimg2.png",
    },

    {
      code: 2,
      nombre: "Mouse",
      categoria: "periféricos",
      precio: 10.5,
      img: "/assets/img/noimg.png",
      img2: "/assets/img/noimg2.png",
    },

    {
      code: 3,
      nombre: "Mouse",
      categoria: "periféricos",
      precio: 10.5,
      img: "/assets/img/noimg.png",
      img2: "/assets/img/noimg2.png",
    },

    {
      code: 4,
      nombre: "Mouse",
      categoria: "periféricos",
      precio: 10.5,
      img: "/assets/img/noimg.png",
      img2: "/assets/img/noimg2.png",
    },

    {
      code: 5,
      nombre: "Mouse",
      categoria: "periféricos",
      precio: 10.5,
      img: "/assets/img/noimg.png",
      img2: "/assets/img/noimg2.png",
    },

    {
      code: 6,
      nombre: "Mouse",
      categoria: "periféricos",
      precio: 10.5,
      img: "/assets/img/noimg.png",
      img2: "/assets/img/noimg2.png",
    },

    {
      code: 7,
      nombre: "Mouse",
      categoria: "periféricos",
      precio: 10.5,
      img: "/assets/img/noimg.png",
      img2: "/assets/img/noimg2.png",
    },

    {
      code: 8,
      nombre: "Mouse",
      categoria: "periféricos",
      precio: 10.5,
      img: "/assets/img/noimg.png",
      img2: "/assets/img/noimg2.png",
    },

    {
      code: 9,
      nombre: "Mouse",
      categoria: "periféricos",
      precio: 10.5,
      img: "/assets/img/noimg.png",
      img2: "/assets/img/noimg2.png",
    },

    {
      code: 10,
      nombre: "Mouse",
      categoria: "periféricos",
      precio: 10.5,
      img: "/assets/img/noimg.png",
      img2: "/assets/img/noimg2.png",
    },

    {
      code: 11,
      nombre: "Mouse",
      categoria: "periféricos",
      precio: 10.5,
      img: "/assets/img/noimg.png",
      img2: "/assets/img/noimg2.png",
    },

    {
      code: 12,
      nombre: "Mouse",
      categoria: "periféricos",
      precio: 10.5,
      img: "/assets/img/noimg.png",
      img2: "/assets/img/noimg2.png",
    },

    {
      code: 13,
      nombre: "Mouse",
      categoria: "periféricos",
      precio: 10.5,
      img: "/assets/img/noimg.png",
      img2: "/assets/img/noimg2.png",
    },

    {
      code: 14,
      nombre: "Mouse",
      categoria: "periféricos",
      precio: 10.5,
      img: "/assets/img/noimg.png",
      img2: "/assets/img/noimg2.png",
    },

    {
      code: 15,
      nombre: "Mouse",
      categoria: "periféricos",
      precio: 10.5,
      img: "/assets/img/noimg.png",
      img2: "/assets/img/noimg2.png",
    },

    {
      code: 16,
      nombre: "Mouse",
      categoria: "periféricos",
      precio: 10.5,
      img: "/assets/img/noimg.png",
      img2: "/assets/img/noimg2.png",
    },
  ];

  p: number = 1;
  constructor(private router: Router) {}

  goToproducto(code) {
    //console.log(nombre);
    this.router.navigateByUrl("/tienda/" + code);
  }

  ngOnInit(): void {
    //console.log(this.productos);
  }
}
