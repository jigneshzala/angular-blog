import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {

  constructor() { }


  toolbox: any = [
    {
      title: "OPTIMIZATION",
      data: [
        {
          title: "HTML Validator by W3C",
          desc: "Check if your HTML markup is valid and contains no errors. Official W3C tool.",
          link: "https://validator.w3.org",
        },
        {
          title: "CSS Validator by W3C",
          desc: "Check if your CSS code is valid and contains no errors. Official W3C tool.",
          link: "https://jigsaw.w3.org/css-validator",
        },
  
      ],
    },
    {
      title: "SEO",
      data: [
        {
          title: "Woorank",
          desc: "Get a review of your website to address issues and identify opportunities to get ahead of competition.",
          link: "https://www.woorank.com",
        },
        {
          title: "Slugify",
          desc: "Smart, fast and easy to use online tool built to generate search engine friendly and user friendly URL slugs",
          link: "https://slugify.online",
        },
      ],
    },
    {
      title: "Images and Video",
      data: [
        {
          title: "Caesium",
          desc: "Compress your pictures up to 90% without visible quality loss",
          link: "https://saerasoft.com/caesium",
        },
        {
          title: "Screenshot",
          desc: "Create beautiful mobile & browser screenshots in seconds",
          link: "https://screenshot.rocks",
        },
      ],
    },
    {
      title: "CSS",
      data: [
        {
          title: "CSS Layout",
          desc: "collection of popular layouts and patterns made with CSS",
          link: "https://csslayout.io",
        },
        {
          title: "Neumorphism",
          desc: "Generate Soft-UI CSS code",
          link: "https://neumorphism.io",
        },
        {
          title: "Css separator",
          desc: "Generate Css separator",
          link: "https://wweb.dev/resources/css-separator-generator",
        },
      ],
    },
    {
      title: "API's",
      data: [
        {
          title: "Public Apis",
          desc: " Directory of free public APIs collection",
          link: "https://public-apis.io/",
        },
      ],
    },
    {
      title: "Learning",
      data: [
        {
          title: "HTTP-headers",
          desc: "learn about HTTP headers in a really cool and interactive way",
          link: "https://schepp.github.io/HTTP-headers",
        },
      ],
    },
    
  ];

  ngOnInit(): void {
  }


}
