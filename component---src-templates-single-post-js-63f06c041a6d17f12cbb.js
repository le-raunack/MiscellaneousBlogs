(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{KshT:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),c=a("b+5I");t.a=function(e){var t=e.author,a=e.date;return r.a.createElement("p",{className:"info"},"By ",r.a.createElement(l.Link,{to:"/authors/"+Object(c.slugify)(t),className:"link"},t),", on ",a,".")}},"b+5I":function(e,t){e.exports={slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},dTHj:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("pD7v"),c=a("Wbzz"),s="2855661546";t.a=function(){return r.a.createElement(c.StaticQuery,{query:s,render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Latest Blogs"),r.a.createElement("section",{className:"posts-container"},e.allMarkdownRemark.edges.map((function(e){var t=e.node;return r.a.createElement(l.a,{key:t.id,title:t.frontmatter.title,author:t.frontmatter.author,date:t.frontmatter.date,slug:t.fields.slug,tags:t.frontmatter.tags,imgSrc:t.frontmatter.image[0].childImageSharp.fluid.src})})),r.a.createElement(c.Link,{to:"/articles"},r.a.createElement("button",{className:"tag"},"More blogs →"))))}})}},desn:function(e,t,a){"use strict";a.r(t),a.d(t,"postQuery",(function(){return m}));var n=a("q1tI"),r=a.n(n),l=a("Bl7J"),c=a("vrFN"),s=(a("CyK1"),a("pOn1")),o=a("KshT"),i=a("dTHj"),m="27079647";t.default=function(e){var t=e.data,a=t.markdownRemark.frontmatter;return r.a.createElement(l.a,null,r.a.createElement(c.a,{title:a.title}),r.a.createElement("section",null,r.a.createElement("p",{id:"single-blog-title"},a.title),r.a.createElement("img",{src:"./"+a.image[0].childImageSharp.fluid.src,alt:"Blog Cover"}),r.a.createElement("section",{className:"single-blog-container"},r.a.createElement(o.a,{author:a.author,date:a.date}),r.a.createElement(s.a,{tagsList:a.tags}),r.a.createElement("section",{dangerouslySetInnerHTML:{__html:t.markdownRemark.html},className:"single-blog-matter"})),r.a.createElement(i.a,null)))}},pD7v:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),c=(a("CyK1"),a("pOn1")),s=a("KshT");t.a=function(e){var t=e.title,a=e.slug,n=e.author,o=e.date,i=e.imgSrc,m=e.tags,u=e.clName,g=void 0===u?"":u;return r.a.createElement(l.Link,{to:"/"+a},r.a.createElement("section",{className:"post "+g},r.a.createElement("img",{src:"./"+i,alt:"Blog Cover",width:"128px",height:"128px",id:"blog-img"})," ",r.a.createElement("section",{className:"blog-info"},r.a.createElement("h3",null,t),r.a.createElement(s.a,{author:n,date:o}),r.a.createElement(c.a,{tagsList:m}))))}},pOn1:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),c=a("b+5I");t.a=function(e){var t=e.tagsList;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(l.Link,{key:e,to:"/tags/"+Object(c.slugify)(e)},r.a.createElement("button",{className:"tag-btn"},e))})))}}}]);
//# sourceMappingURL=component---src-templates-single-post-js-63f06c041a6d17f12cbb.js.map