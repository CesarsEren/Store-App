import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.css"],
})
export class EditorComponent implements OnInit {
  color2: string;
  constructor() {}

  ngOnInit(): void {}
  cambiarcolor() {
    document.documentElement.style.setProperty("--color-assets", this.color2);
  }
}
