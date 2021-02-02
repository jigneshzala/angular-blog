import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { DealService } from "../shared/deal.service";

@Component({
  selector: "app-add-deal",
  templateUrl: "./add-deal.component.html",
  styleUrls: ["./add-deal.component.scss"],
})
export class AddDealComponent implements OnInit {
  constructor(private dealService: DealService) {}

  newPost: any = {
    featureImage: {
      _id: "",
    },
  };
  categoriesList: any = [
    {
      key: "hosting",
      value: "hosting",
    },
    {
      key: "services",
      value: "services",
    },
    {
      key: "seo-tools",
      value: "SEO Tools",
    },
    {
      key: "email",
      value: "email",
    },
  ];

  ngOnInit(): void {
    this.newPost.featureImage["_id"] = "";
  }

  createPost(postForm: NgForm, data) {
    //   validateInputs(postForm);
    if (postForm.invalid) {
      return;
    }

    let reqData = JSON.parse(JSON.stringify(data));

    // this.errors = [];
    this.dealService.createDeal(reqData).subscribe(
      (data) => alert("Deal Creted"),
      (errors) => console.log(errors)
    );
  }

  attachImageToPost(imageId: string) {
    this.newPost["featureImage"]["_id"] = imageId;
  }
}
