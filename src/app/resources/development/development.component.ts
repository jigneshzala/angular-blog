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
        {
          title: "BundlePhobia",
          desc: "find the cost of adding a npm package to your bundle.",
          link: "https://bundlephobia.com",
        },
  
      ],
    },
    {
      title: "Design",
      data: [
        {
          title: "Mockuper",
          desc: "The free mockups generator",
          link: "https://mockuper.net",
        }
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
        {
          title: "Meta Tags",
          desc: "Meta Tags generator, preview how your webpage will look on Google, Facebook, Twitter, and more!",
          link: "https://metatags.io",
        },
        {
          title: "Headline Analyzer",
          desc: "Free Headline Analyzer",
          link: "https://coschedule.com/headline-analyzer",
        },
        {
          title: "SEOptimer",
          desc: "SEO Audit & Reporting Tool",
          link: "https://www.seoptimer.com",
        },
        {
          title: "FREE SEO Tools",
          desc: "Collection of free SEO ",
          link: "https://www.seoptimer.com/free-tools",
        },
        {
          title: "Sitechecker",
          desc: "Collection of free SEO ",
          link: "https://sitechecker.pro",
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
        {
          title: "Compressor",
          desc: "Fast & efficient image compression",
          link: "https://compressor.io",
        },
        {
          title: "Tinypng",
          desc: "Smart PNG and JPEG compression",
          link: "https://tinypng.com",
        },
        {
          title: "Extract Pics",
          desc: "EXTRACT IMAGES From any public website by using a virtual browser",
          link: "https://extract.pics/",
        },
        {
          title: "Undesign",
          desc: "Collection of free design tools and resources for makers, developers and designers",
          link: "https://undesign.learn.uno",
        },
        {
          title: "Whatfontis",
          desc: "Find any font from any image",
          link: "https://www.whatfontis.com",
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
        {
          title: "Css generator",
          desc: "Css Code generator",
          link: "https://css3generator.com",
        },
        {
          title: "Ultimate CSS Generator",
          desc: "The Ultimate CSS Generators",
          link: "https://webcode.tools/generators/css",
        },
        {
          title: "Css Gradient Generator",
          desc: "Free css gradient generator tool",
          link: "https://cssgradient.io",
        },
        {
          title: "Css Grid",
          desc: "Learn the CSS Grid",
          link: "https://griddy.io",
        },
      ],
    },
    {
      title: "API's",
      data: [
        {
          title: "Public Apis",
          desc: " Directory of free public APIs collection",
          link: "https://public-apis.io",
        },
        {
          title: "JSON Placeholder",
          desc: " Free to use fake Online REST API for testing and prototyping",
          link: "https://jsonplaceholder.typicode.com",
        },
      ],
    },
    {
      title: "ILLUSTRATIONS",
      data: [
        {
          title: "unDraw",
          desc: " Browse to find the images that fit your needs and click to download",
          link: "https://undraw.co/illustrations",
        },
        {
          title: "Drawkit",
          desc: "Beautiful, free illustrations",
          link: "https://www.drawkit.io",
        },
      ],
    },
    {
      title: "GENERATORS",
      data: [
        {
          title: "Lorem Ipsum",
          desc: " Lorem Ipsum generator",
          link: "https://loremipsum.io",
        },
        {
          title: "RealFaviconGenerator",
          desc: "Favicon generator",
          link: "https://realfavicongenerator.net",
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
    {
      title: "Javascript",
      data: [
        {
          title: "Keycode",
          desc: "Press any key to get the javascript event keycode",
          link: "https://keycode.info",
        }
      ],
    },
    {
      title: "Code",
      data: [
        {
          title: "This vs That",
          desc: "The difference between frontend terms",
          link: "https://thisthat.dev",
        },
        {
          title: "Htmldom",
          desc: "Manage HTML DOM with vanilla JavaScript",
          link: "https://htmldom.dev",
        },
      ],
    },

    {
      title: "Automation",
      data: [
        {
          title: "Zapier",
          desc: "Connect your apps and automate workflows",
          link: "https://zapier.com",
        },
      ],
    },
    {
      title: "Email Marketing",
      data: [
        {
          title: "Mailerlite",
          desc: "Take email marketing beyond the inbox with advanced tools made easy.",
          link: "https://www.mailerlite.com",
        },
      ],
    },
    {
      title: "Tools",
      data: [
        {
          title: "REGEX101",
          desc: "Regular expression tester with syntax highlighting, explanation",
          link: "https://regex101.com",
        },
        {
          title: "iHateRegex",
          desc: "The Regex Cheat Sheet",
          link: "https://ihateregex.io",
        },

        {
          title: "JSON Editor Online",
          desc: "JSON Editor Online is a web-based tool to view, edit, format, transform, and diff JSON documents.",
          link: "https://jsoneditoronline.org",
        },
        {
          title: "JSON Diff",
          desc: "The semantic JSON compare tool",
          link: "http://www.jsondiff.com",
        },
        {
          title: "Diagrams",
          desc: "Diagrams.net is free online diagram software for making flowcharts, process diagrams, org charts, UML, ER and network diagrams",
          link: "https://app.diagrams.net",
        },
        {
          title: "Cloudcraft",
          desc: "Visualize your cloud architecture like a pro, Create smart AWS diagrams",
          link: "https://www.cloudcraft.co",
        },
        {
          title: "Ray.so",
          desc: "Turn your code into beautiful images.",
          link: "https://ray.so",
        },
      ],
    },
    
  ];

  ngOnInit(): void {
  }


}
