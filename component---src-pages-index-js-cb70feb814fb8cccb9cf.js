(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(e,a,t){"use strict";t.r(a);var n=t(7),r=t.n(n),l=t(0),i=t.n(l),c=t(165),o=t.n(c),s=t(164),u=t.n(s),m=(t(276),t(162)),p=t.n(m),d=t(178),f=t.n(d),E=function(e){var a=e.data;return i.a.createElement("div",{className:f.a.hero},i.a.createElement(p.a,{className:f.a.heroImage,alt:a.name,fluid:a.heroImage.fluid}),i.a.createElement("div",{className:f.a.heroDetails},i.a.createElement("h3",{className:f.a.heroHeadline},a.name),i.a.createElement("p",{className:f.a.heroTitle},a.title),i.a.createElement("p",null,a.shortBio.shortBio)))},h=t(158),g=t(172);t.d(a,"pageQuery",function(){return y});var v=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=o()(this,"props.data.site.siteMetadata.title"),a=o()(this,"props.data.allContentfulBlogPost.edges"),t=o()(this,"props.data.allContentfulPerson.edges")[0];return i.a.createElement(h.a,{location:this.props.location},i.a.createElement("div",{style:{background:"#fff"}},i.a.createElement(u.a,{title:e}),i.a.createElement(E,{data:t.node}),i.a.createElement("div",{className:"wrapper"},i.a.createElement("h2",{className:"section-headline"},"Recent articles"),i.a.createElement("ul",{className:"article-list"},a.map(function(e){var a=e.node;return console.log(a),i.a.createElement("li",{key:a.slug},i.a.createElement(g.a,{article:a}))})))))},a}(i.a.Component),y=(a.default=v,"1610896838")},153:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(5),i=t.n(l),c=t(35),o=t.n(c);t.d(a,"a",function(){return o.a});t(156),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},156:function(e,a,t){var n;e.exports=(n=t(157))&&n.default||n},157:function(e,a,t){"use strict";t.r(a);t(36);var n=t(0),r=t.n(n),l=t(5),i=t.n(l),c=t(60),o=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=o},158:function(e,a,t){"use strict";var n=t(7),r=t.n(n),l=t(0),i=t.n(l),c=t(153),o=(t(170),function(e){var a=e.children;return i.a.createElement("div",{style:{maxWidth:1180,margin:"0 auto"}},a)}),s=t(171),u=t.n(s),m=function(){return i.a.createElement("nav",{role:"navigation"},i.a.createElement("ul",{className:u.a.navigation},i.a.createElement("li",{className:u.a.navigationItem},i.a.createElement(c.a,{to:"/"},"Home")),i.a.createElement("li",{className:u.a.navigationItem},i.a.createElement(c.a,{to:"/blog/"},"Blog"))))},p=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props,a=(e.location,e.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/",i.a.createElement(o,null,i.a.createElement(m,null),a)},a}(i.a.Component);a.a=p},172:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(153),i=t(162),c=t.n(i),o=t(294),s=t(293),u=t(292),m=t(184),p=t.n(m);a.a=function(e){var a=e.article;return r.a.createElement("div",{className:p.a.preview},r.a.createElement(c.a,{alt:"",fluid:a.heroImage.fluid}),r.a.createElement(o.a,null,r.a.createElement(l.a,{to:"/blog/"+a.slug},a.title)),r.a.createElement(s.a,null,a.publishDate),r.a.createElement(u.a,null,a.description.description),a.tags&&a.tags.map(function(e){return r.a.createElement("p",{className:p.a.tag,key:e},e)}))}},276:function(e,a,t){var n=t(10).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||t(11)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-index-js-cb70feb814fb8cccb9cf.js.map