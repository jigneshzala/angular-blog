(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{nZJs:function(t,e,o){"use strict";o.r(e),o.d(e,"QuestionsModule",function(){return P});var i=o("ofXK"),n=o("fXoL"),s=o("tyNb");let r=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Mb({type:t,selectors:[["app-questions"]],decls:1,vars:0,template:function(t,e){1&t&&n.Tb(0,"router-outlet")},directives:[s.j],encapsulation:2}),t})();var c=o("AytR"),a=o("tk/3");let l=(()=>{class t{constructor(t){this.http=t,this.API_URL="",this.API_URL=c.a.apiUrl}getQuestions(){return this.http.get(`${this.API_URL}questions`)}createQuestion(t){return this.http.post(`${this.API_URL}questions`,t)}updateQuestion(t,e){return this.http.patch(`${this.API_URL}questions/${t}`,e)}getQuestionBySlug(t){return this.http.get(`${this.API_URL}questions/by_slug/${t}`)}getQuestionByCategory(t){return this.http.get(`${this.API_URL}questions/by_category/${t}`)}deleteQuestion(t){return this.http.delete(`${this.API_URL}questions/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(n.cc(a.b))},t.\u0275prov=n.Ob({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=o("7aS5"),b=o("2f20"),h=o("ngAm"),p=o("GQ31");function d(t,e){if(1&t&&(n.Yb(0,"div",10),n.Yb(1,"h2",11),n.Cc(2),n.Xb(),n.Tb(3,"p",12),n.Xb()),2&t){const t=n.hc();n.Gb(2),n.Dc(t.post.title),n.Gb(1),n.oc("innerHtml",t.post.html,n.wc)}}let u=(()=>{class t{constructor(t,e,o,i,n){this.route=t,this.questionService=e,this.highlightService=o,this.categoryService=i,this.seoService=n,this.highlighted=!1}ngAfterViewChecked(){this.post&&!this.highlighted&&(this.highlightService.highlightAll(),this.highlighted=!0)}ngOnInit(){this.route.params.subscribe(t=>{this.questionService.getQuestionBySlug(t.slug).subscribe(t=>{this.post=t,this.seoService.setMetaTags({title:`${this.post.title} | TutsCoder`,description:`${this.post.metaDescription}`}),this.getAllCategory(),this.getAllTags()})})}getAllCategory(){this.categoryService.getAllCateogry().subscribe(t=>{this.categories=t})}getAllTags(){this.categoryService.getAllTags().subscribe(t=>{this.tagsList=t.data.tags})}}return t.\u0275fac=function(e){return new(e||t)(n.Sb(s.a),n.Sb(l),n.Sb(g.a),n.Sb(b.a),n.Sb(h.a))},t.\u0275cmp=n.Mb({type:t,selectors:[["app-question-detail"]],decls:13,vars:1,consts:[[1,"block-wrapper"],[1,"container"],[1,"row"],[1,"col-xs-12","col-sm-12","col-md-8"],[1,"content"],[1,"col-xs-12","col-sm-12","posts"],["class","blog-post",4,"ngIf"],[1,"col-sm-12","col-xs-12"],[1,"col-xs-12","col-sm-12","col-xs-12"],[1,"col-xs-12","col-sm-12","col-md-4"],[1,"blog-post"],[1,"blog-post-title"],[3,"innerHtml"]],template:function(t,e){1&t&&(n.Yb(0,"section",0),n.Yb(1,"div",1),n.Yb(2,"div",2),n.Yb(3,"div",3),n.Yb(4,"div",4),n.Yb(5,"div",5),n.Yb(6,"div",2),n.Ac(7,d,4,2,"div",6),n.Tb(8,"div",7),n.Xb(),n.Xb(),n.Yb(9,"div",8),n.Tb(10,"div",2),n.Xb(),n.Xb(),n.Xb(),n.Yb(11,"div",9),n.Tb(12,"app-sidebar"),n.Xb(),n.Xb(),n.Xb(),n.Xb()),2&t&&(n.Gb(7),n.oc("ngIf",e.post))},directives:[i.m,p.a],styles:[".blog-header[_ngcontent-%COMP%]{line-height:1;border-bottom:1px solid #e5e5e5}.blog-header-logo[_ngcontent-%COMP%]{font-family:Playfair Display,Georgia,Times New Roman,serif;font-size:2.25rem}.blog-header-logo[_ngcontent-%COMP%]:hover{text-decoration:none}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Playfair Display,Georgia,Times New Roman,serif}.display-4[_ngcontent-%COMP%]{font-size:2.5rem}@media (min-width:768px){.display-4[_ngcontent-%COMP%]{font-size:3rem}}.nav-scroller[_ngcontent-%COMP%]{position:relative;z-index:2;height:2.75rem;overflow-y:hidden}.nav-scroller[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;padding-bottom:1rem;margin-top:-1px;overflow-x:auto;text-align:center;white-space:nowrap;-webkit-overflow-scrolling:touch}.nav-scroller[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{padding-top:.75rem;padding-bottom:.75rem;font-size:.875rem}.card-img-right[_ngcontent-%COMP%]{height:100%;border-radius:0 3px 3px 0}.flex-auto[_ngcontent-%COMP%]{flex:0 0 auto}.h-250[_ngcontent-%COMP%]{height:250px}@media (min-width:768px){.h-md-250[_ngcontent-%COMP%]{height:250px}}.blog-pagination[_ngcontent-%COMP%]{margin-bottom:4rem}.blog-pagination[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%]{border-radius:2rem}.blog-post[_ngcontent-%COMP%]{margin-bottom:4rem}.blog-post-title[_ngcontent-%COMP%]{margin-bottom:.25rem;font-size:2.5rem}.blog-post-meta[_ngcontent-%COMP%]{margin-bottom:1.25rem;color:#999}.blog-footer[_ngcontent-%COMP%]{padding:2.5rem 0;color:#999;text-align:center;background-color:#f9f9f9;border-top:.05rem solid #e5e5e5}.blog-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}"]}),t})();var m=o("RfpP");function v(t,e){if(1&t&&(n.Yb(0,"article"),n.Yb(1,"div",11),n.Yb(2,"div",12),n.Yb(3,"div",13),n.Tb(4,"div",14),n.Yb(5,"h5",15),n.Yb(6,"a",16),n.Cc(7),n.Xb(),n.Xb(),n.Yb(8,"div",17),n.Yb(9,"span",18),n.Cc(10),n.Xb(),n.Xb(),n.Xb(),n.Xb(),n.Xb(),n.Xb()),2&t){const t=e.$implicit,o=n.hc();n.Gb(6),n.qc("routerLink","/interview-questions/",o.category,"/",t.slug,""),n.Gb(1),n.Dc(t.title),n.Gb(3),n.Dc(t.excerpt)}}let f=(()=>{class t{constructor(t,e,o,i){this.route=t,this.questionService=e,this.categoryService=o,this.seoService=i,this.tagsList=[]}ngOnInit(){this.route.params.subscribe(t=>{this.category=t.category,this.getQuestionByCategory(),this.getAllCategory(),this.getAllTags()})}getQuestionByCategory(){this.questionService.getQuestionByCategory(this.category).subscribe(t=>{this.posts=t})}getAllCategory(){this.categoryService.getAllCateogry().subscribe(t=>{this.categories=t})}getAllTags(){this.categoryService.getAllTags().subscribe(t=>{this.tagsList=t.data.tags})}}return t.\u0275fac=function(e){return new(e||t)(n.Sb(s.a),n.Sb(l),n.Sb(b.a),n.Sb(h.a))},t.\u0275cmp=n.Mb({type:t,selectors:[["app-question-listing"]],decls:18,vars:1,consts:[[1,"block-wrapper"],[1,"container"],[1,"row"],[1,"col-xs-12","col-sm-12","col-md-8"],[1,"content"],[1,"col-xs-12","col-sm-12","posts"],[1,"loop-list","loop-list-style-1"],[4,"ngFor","ngForOf"],[1,"col-sm-12","col-xs-12"],[1,"col-xs-12","col-sm-12","col-xs-12"],[1,"col-lg-4","col-md-12","sidebars","s_right",2,"padding-right","0px"],[1,"row","mb-40","list-style-2"],[1,"col-md-12","align-self-center"],[1,"post-content"],[1,"entry-meta","meta-0","font-small","mb-10"],[1,"post-title","font-weight-900","mb-20"],[3,"routerLink"],[1,"entry-meta","meta-1","float-left","font-x-small","text-uppercase","mb-3"],[1,"post-on"]],template:function(t,e){1&t&&(n.Yb(0,"section",0),n.Yb(1,"div",1),n.Yb(2,"div",2),n.Yb(3,"div",3),n.Yb(4,"div",4),n.Yb(5,"div",5),n.Yb(6,"div",2),n.Yb(7,"div",6),n.Ac(8,v,11,4,"article",7),n.Xb(),n.Tb(9,"div",8),n.Tb(10,"div",8),n.Tb(11,"div",8),n.Tb(12,"div",8),n.Tb(13,"div",8),n.Xb(),n.Xb(),n.Yb(14,"div",9),n.Tb(15,"div",2),n.Xb(),n.Xb(),n.Xb(),n.Yb(16,"aside",10),n.Tb(17,"app-sidebar"),n.Xb(),n.Xb(),n.Xb(),n.Xb()),2&t&&(n.Gb(8),n.oc("ngForOf",e.posts))},directives:[i.l,p.a,s.h],styles:[""]}),t})();var y=o("2oBQ");const C=[{path:"",component:r,children:[{path:":category",component:f},{path:":category/:slug",component:u}]}];let P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.Qb({type:t}),t.\u0275inj=n.Pb({imports:[[i.c,m.a,y.a,s.i.forChild(C)]]}),t})()}}]);