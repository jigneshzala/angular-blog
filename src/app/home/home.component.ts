import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { CategoryService } from "../categories/shared/category.service";
import { PostService } from "../posts/shared/post.service";
import { Meta, Title } from "@angular/platform-browser";
import { UserService } from "../admin/manage/users/shared/user.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { SeoService } from "../shared/services/seo.service";
declare const $: any;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit, AfterViewInit {
  modalRef: BsModalRef;
  constructor(
    private postService: PostService,
    private categoryService: CategoryService,
    private meta: Meta,
    private title: Title,
    private userService: UserService,
    private modalService: BsModalService,
    private ngxService: NgxUiLoaderService,
    private seoService: SeoService,
  ) {
    this.seoService.setMetaTags({
      title: `TutsCoder - Programming Blog & Web Development Tutorials`,
      description: `Learn Web Development, NodeJs, Angular, JavaScript, jQuery ,Ajax,ReactJs, WordPress with TutsCoder tutorials`,
    });
    this.meta.addTag({
      name: "keywords",
      content: `Web Development, NodeJs, Angular, JavaScript, jQuery ,Ajax,ReactJs, WordPress, tutorials`,
    });
  }
  latestPosts: any = [];
  angularPosts: any = [];
  jsPosts: any = [];
  wordpressPosts: any = [];
  cssPosts: any = [];
  angularPostsFirst: any = {};
  nodePosts: any = [];
  categories: any = [];
  tagsList: any = [];

  @ViewChild("subscriberModal") elementView: ElementRef;

  ngOnInit() {
    this.ngxService.start();
    this.getLatestPosts();
    this.getPostByCategory("angular");
    this.getPostByCategory("nodejs");
    this.getPostByCategory("javascript");
    this.getPostByCategory("wordpress");
    this.getPostByCategory("css");
    this.getAllCategory();
    this.getAllTags();
  }

  private getAllCategory() {
    this.categoryService.getAllCateogry().subscribe((data) => {
      this.categories = data;
    });
  }

  private getAllTags() {
    this.categoryService.getAllTags().subscribe((response) => {
      this.tagsList = response["data"]["tags"];
    });
  }
  private getLatestPosts() {
    let reqData = {
      limit: 4,
    };
    this.postService.getPosts(reqData).subscribe((response) => {
      this.latestPosts = response["data"]["posts"];
    });
  }
  private getPostByCategory(category) {
    let reqData = {
      limit: 5,
      category: category,
    };

    this.categoryService.getPostByCateogry(reqData).subscribe((response) => {
      if (category == "angular") {
        this.angularPosts = response["posts"];
        this.angularPostsFirst = this.angularPosts[0];
      }
      if (category == "nodejs") {
        this.nodePosts = response["posts"];
      }
      if (category == "javascript") {
        this.jsPosts = response["posts"];
      }
      if (category == "wordpress") {
        this.wordpressPosts = response["posts"];
      }
      if (category == "css") {
        this.cssPosts = response["posts"];
      }

      this.ngxService.stop();
    });
  }

  addSubscribe(email) {
    console.log(email);
    let reqData = {
      email: email,
    };
    this.userService.addSubscribe(reqData).subscribe((response) => {
      console.log(response);
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      //this.modalRef = this.modalService.show(this.elementView);
    }, 5000);

    $(".nav.navbar-nav li a").on("click", function () {
      $(this).parent("li").find(".dropdown-menu").slideToggle();
      $(this).find("li i").toggleClass("fa-angle-down fa-angle-up");
    });

    /* ----------------------------------------------------------- */
    /*  Site search
	/* ----------------------------------------------------------- */

    $("#search").on("click", function () {
      $(".site-search").addClass("visible");
      $("#searchInput").focus();
    });
    $(".search-close").on("click", function () {
      $(".site-search").removeClass("visible");
    });

    /* ----------------------------------------------------------- */
    /*  Scroll To Top
	/* ----------------------------------------------------------- */
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        $(".scroll-to-top").fadeIn();
      } else {
        $(".scroll-to-top").fadeOut();
      }
    });

    // scroll body to 0px on click
    $(".scroll-to-top").on("click", function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        500
      );
      return false;
    });
  }
}
