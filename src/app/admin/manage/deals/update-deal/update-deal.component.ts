import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { DealService } from "../shared/deal.service";

@Component({
  selector: "app-update-deal",
  templateUrl: "./update-deal.component.html",
  styleUrls: ["./update-deal.component.scss"],
})
export class UpdateDealComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private dealService: DealService
  ) {}
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
    this.route.params.subscribe((params) => {
      this.newPost.featureImage["_id"] = "";
      this.dealService.getDealById(params["id"]).subscribe((data) => {
        this.newPost = data;
      });
    });
  }

  updatePost(postForm: NgForm, data) {
    let reqData = JSON.parse(JSON.stringify(data));

    this.dealService.updateDeal(this.newPost._id, reqData).subscribe(
      (updatedPost) => {
        this.newPost = updatedPost;
        alert("Post Updated");
      },
      (error) => {
        alert("Update Error!");
      }
    );
  }

  attachImageToPost(postEvent: any) {
    delete this.newPost["featureImage"];
    this.newPost.featureImage = {};
    this.newPost["featureImage"]["_id"] = postEvent.data.featureImage;
  }
  transformImage = (image: any): string => {
    return image.url;
  };
}
