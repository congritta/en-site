"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[103],{5203:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var n=a(7294),o=a(6010),r=a(1944),l=a(5281),i=a(9460),s=a(9058),c=a(756),m=a(7462),p=a(5999),g=a(2244);function d(e){const{nextItem:t,prevItem:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a&&n.createElement(g.Z,(0,m.Z)({},a,{subLabel:n.createElement(p.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&n.createElement(g.Z,(0,m.Z)({},t,{subLabel:n.createElement(p.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function b(){const{assets:e,metadata:t}=(0,i.C)(),{title:a,description:o,date:l,tags:s,authors:c,frontMatter:m}=t,{keywords:p}=m,g=e.image??m.image;return n.createElement(r.d,{title:a,description:o,keywords:p,image:g},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:l}),c.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&n.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}var u=a(9407);function h(e){let{sidebar:t,children:a}=e;const{metadata:o,toc:r}=(0,i.C)(),{nextItem:l,prevItem:m,frontMatter:p}=o,{hide_table_of_contents:g,toc_min_heading_level:b,toc_max_heading_level:h}=p;return n.createElement(s.Z,{sidebar:t,toc:!g&&r.length>0?n.createElement(u.Z,{toc:r,minHeadingLevel:b,maxHeadingLevel:h}):void 0},n.createElement(c.Z,null,a),(l||m)&&n.createElement(d,{nextItem:l,prevItem:m}))}function E(e){const t=e.content;return n.createElement(i.n,{content:e.content,isBlogPostPage:!0},n.createElement(r.FG,{className:(0,o.Z)(l.k.wrapper.blogPages,l.k.page.blogPostPage)},n.createElement(b,null),n.createElement(h,{sidebar:e.sidebar},n.createElement(t,null))))}}}]);