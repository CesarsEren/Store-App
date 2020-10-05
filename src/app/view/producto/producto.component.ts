import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-producto",
  templateUrl: "./producto.component.html",
  styleUrls: ["./producto.component.css"],
})
export class ProductoComponent implements OnInit {
  producto: any;
  itemcode: number;
  constructor(private router: Router, private rutaActiva: ActivatedRoute) {
    this.itemcode = parseInt(rutaActiva.snapshot.params.id);
    //console.log(parseInt(rutaActiva.snapshot.params.id));
    this.producto = this.productos.find((x) => x.code == this.itemcode);
  }

  /*findProduct(x) {
    return (x.code = this.itemcode);
  }*/

  goback() {
    this.router.navigateByUrl("/tienda");
  }
  ngOnInit(): void {}

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
}
