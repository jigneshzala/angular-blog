import { Component, OnInit } from "@angular/core";
import { DealService } from "../shared/deal.service";

@Component({
  selector: "app-all-deal",
  templateUrl: "./all-deal.component.html",
  styleUrls: ["./all-deal.component.scss"],
})
export class AllDealComponent implements OnInit {
  constructor(private dealService: DealService) {}

  posts: any = [];
  ngOnInit() {
    this.dealService.getDeals().subscribe((response) => {
      this.posts = response["data"]["deals"];
    });
  }

  deleteDeal(id) {
    this.dealService.deleteDeal(id).subscribe((response) => {
      alert("deal deleted");
    });
  }
  updatePostStatus(event,id){
    let reqData = {
      status:event
    }
    this.dealService.updateDealStatus(id,reqData).subscribe((response) => {
      alert("Deal updated");
    });
  }

}
