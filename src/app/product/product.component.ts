import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  allProduct: any = [];
  constructor(private ds: DataService) {}

  ngOnInit(): void {
    this.ds.getProduct().subscribe((res) => {
      this.allProduct = res;
    });
  }
}
