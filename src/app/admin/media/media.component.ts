import { Component, OnInit } from "@angular/core";
import { response } from "express";
import { MediaService } from "../shared/media.service";

@Component({
  selector: "app-media",
  templateUrl: "./media.component.html",
  styleUrls: ["./media.component.scss"],
})
export class MediaComponent implements OnInit {
  constructor(private mediaService: MediaService) {}

  images: any = [];
  ngOnInit() {
    this.mediaService.getPosts().subscribe((response) => {
      this.images = response["data"]["images"];
    });
  }

  deleteImage(id) {
    this.mediaService.deleteImageById(id).subscribe((response) => {
      alert("image delete succesfully");
    });
  }
}
