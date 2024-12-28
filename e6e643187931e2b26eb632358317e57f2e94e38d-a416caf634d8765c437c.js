"use strict";(self.webpackChunkmy_gatsby_blog=self.webpackChunkmy_gatsby_blog||[]).push([[876],{2532:function(e,t,a){a.d(t,{G:function(){return z},L:function(){return f},M:function(){return N},P:function(){return Y},S:function(){return W},_:function(){return l},a:function(){return i},b:function(){return u},c:function(){return c},g:function(){return m},h:function(){return o}});var n=a(6540),s=(a(5147),a(5556)),r=a.n(s);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t.indexOf(a=r[n])>=0||(s[a]=e[a]);return s}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,a){const n={};let s="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(s="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:s,"data-gatsby-image-wrapper":"",style:n}}function u(e,t,a,n,s){return void 0===s&&(s={}),i({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},s,{opacity:t?1:0})})}function m(e,t,a,n,s,r,l,o){const c={};r&&(c.backgroundColor=r,"fixed"===a?(c.width=n,c.height=s,c.backgroundColor=r,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const p=["children"],g=function(e){let{layout:t,width:a,height:s}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:s/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${s}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,a=l(e,p);return n.createElement(n.Fragment,null,n.createElement(g,i({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:s,alt:r="",shouldLoad:o}=e,c=l(e,h);return n.createElement("img",i({},c,{decoding:"async",loading:s,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:r}))},w=function(e){let{fallback:t,sources:a=[],shouldLoad:s=!0}=e,r=l(e,y);const o=r.sizes||(null==t?void 0:t.sizes),c=n.createElement(b,i({},r,t,{sizes:o,shouldLoad:s}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:r}=e;return n.createElement("source",{key:`${t}-${r}-${a}`,type:r,media:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,sizes:o})})),c):c};var v;b.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},w.displayName="Picture",w.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:s.exact({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:s.arrayOf(s.oneOfType([s.exact({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),s.exact({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};const x=["fallback"],Y=function(e){let{fallback:t}=e,a=l(e,x);return t?n.createElement(w,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},a))};Y.displayName="Placeholder",Y.propTypes={fallback:s.string,sources:null==(v=w.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const N=function(e){return n.createElement(n.Fragment,null,n.createElement(w,i({},e)),n.createElement("noscript",null,n.createElement(w,i({},e,{shouldLoad:!0}))))};N.displayName="MainImage",N.propTypes=w.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],E=["style","className"],S=e=>e.replace(/\n/g,""),L=function(e,t,a){for(var n=arguments.length,s=new Array(n>3?n-3:0),i=3;i<n;i++)s[i-3]=arguments[i];return e.alt||""===e.alt?r().string.apply(r(),[e,t,a].concat(s)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},C={image:r().object.isRequired,alt:L},$=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],_=new Set;let T,j;const O=function(e){let{as:t="div",image:s,style:r,backgroundColor:c,className:u,class:m,onStartLoad:p,onLoad:g,onError:f}=e,h=l(e,$);const{width:y,height:b,layout:w}=s,v=d(y,b,w),{style:x,className:Y}=v,N=l(v,I),k=(0,n.useRef)(),E=(0,n.useMemo)((()=>JSON.stringify(s.images)),[s.images]);m&&(u=m);const S=function(e,t,a){let n="";return"fullWidth"===e&&(n=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(n=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),n}(w,y,b);return(0,n.useEffect)((()=>{T||(T=a.e(108).then(a.bind(a,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return j=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(E);if(j&&_.has(E))return;let t,n;return T.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;k.current&&(k.current.innerHTML=a(i({isLoading:!0,isLoaded:_.has(E),image:s},h)),_.has(E)||(t=requestAnimationFrame((()=>{k.current&&(n=l(k.current,E,_,r,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[s]),(0,n.useLayoutEffect)((()=>{_.has(E)&&j&&(k.current.innerHTML=j(i({isLoading:_.has(E),isLoaded:_.has(E),image:s},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[s]),(0,n.createElement)(t,i({},N,{style:i({},x,r,{backgroundColor:c}),className:`${Y}${u?` ${u}`:""}`,ref:k,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},z=(0,n.memo)((function(e){return e.image?(0,n.createElement)(O,e):null}));z.propTypes=C,z.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function q(e){return function(t){let{src:a,__imageData:s,__error:r}=t,o=l(t,R);return r&&console.warn(r),s?n.createElement(e,i({image:s},o)):(console.warn("Image not loaded",a),null)}}const M=q((function(e){let{as:t="div",className:a,class:s,style:r,image:o,loading:c="lazy",imgClassName:p,imgStyle:g,backgroundColor:h,objectFit:y,objectPosition:b}=e,w=l(e,k);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(a=s),g=i({objectFit:y,objectPosition:b,backgroundColor:h},g);const{width:v,height:x,layout:L,images:C,placeholder:$,backgroundColor:I}=o,_=d(v,x,L),{style:T,className:j}=_,O=l(_,E),z={fallback:void 0,sources:[]};return C.fallback&&(z.fallback=i({},C.fallback,{srcSet:C.fallback.srcSet?S(C.fallback.srcSet):void 0})),C.sources&&(z.sources=C.sources.map((e=>i({},e,{srcSet:S(e.srcSet)})))),n.createElement(t,i({},O,{style:i({},T,r,{backgroundColor:h}),className:`${j}${a?` ${a}`:""}`}),n.createElement(f,{layout:L,width:v,height:x},n.createElement(Y,i({},m($,!1,L,v,x,I,y,b))),n.createElement(N,i({"data-gatsby-image-ssr":"",className:p},w,u("eager"===c,!1,z,c,g)))))})),A=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),s=2;s<a;s++)n[s-2]=arguments[s];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?r().number.apply(r(),[e,t].concat(n)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},F=new Set(["fixed","fullWidth","constrained"]),P={src:r().string.isRequired,alt:L,width:A,height:A,sizes:r().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};M.displayName="StaticImage",M.propTypes=P;const W=q(z);W.displayName="StaticImage",W.propTypes=P},5147:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,s=/([\p{Alpha}\p{N}_]|$)/u,r=/[_.\- ]+/,i=new RegExp("^"+r.source),l=new RegExp(r.source+s.source,"gu"),o=new RegExp("\\d+"+s.source,"gu"),c=(e,s)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(s={pascalCase:!1,preserveConsecutiveUppercase:!1,...s},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const r=!1===s.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(s.locale),c=!1===s.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(s.locale);if(1===e.length)return s.pascalCase?c(e):r(e);return e!==r(e)&&(e=((e,n,s)=>{let r=!1,i=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];r&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),r=!1,l=i,i=!0,o++):i&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=i,i=!1,r=!0):(r=n(c)===c&&s(c)!==c,l=i,i=s(c)===c&&n(c)!==c)}return e})(e,r,c)),e=e.replace(i,""),e=s.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,r):r(e),s.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},9938:function(e,t,a){a.d(t,{U:function(){return l}});var n=a(6462),s=a(6540),r=a(2444),i=a(7437);const l=e=>{let{description:t,lang:a,title:l,image:o,article:c,canonicalUrl:d,nonCanonical:u=!1,author:m,noindex:p=!1,children:g}=e;const{title:f,description:h,image:y,siteUrl:b}=(0,r.Q)(),{pathname:w}=(0,n.useLocation)(),v=d||`${b}${w}`,x=f||"My Gatsby Blog",Y=l,N=t||h||"",k=a||"en_US",E=m||"";return(0,i.Y)(s.Fragment,null,(0,i.Y)("title",null,Y),!u&&(0,i.Y)("link",{rel:"canonical",href:v}),(0,i.Y)("meta",{name:"description",content:N}),(0,i.Y)("meta",{property:"og:title",content:Y}),(0,i.Y)("meta",{property:"og:description",content:N}),(0,i.Y)("meta",{property:"og:type",content:c?"article":"website"}),(0,i.Y)("meta",{property:"og:url",content:v}),(0,i.Y)("meta",{property:"og:site_name",content:x}),(0,i.Y)("meta",{property:"og:locale",content:k}),(0,i.Y)("meta",{name:"twitter:creator",content:E}),(0,i.Y)("meta",{name:"twitter:site",content:E}),(0,i.Y)("meta",{name:"twitter:url",content:v}),(0,i.Y)("meta",{name:"twitter:title",content:Y}),(0,i.Y)("meta",{name:"twitter:description",content:N}),o?(0,i.Y)(s.Fragment,null,(0,i.Y)("meta",{property:"og:image",content:`${b}${o}`}),(0,i.Y)("meta",{name:"twitter:card",content:"summary_large_image"})):(0,i.Y)(s.Fragment,null,(0,i.Y)("meta",{property:"og:image",content:`${b}/${y}`}),(0,i.Y)("meta",{name:"twitter:card",content:"summary"})),p&&(0,i.Y)("meta",{name:"google",content:"noindex, nofollow"}),g)}},9470:function(e,t,a){a.d(t,{M:function(){return d}});var n=a(2532),s=a(4794),r=a(6540),i=a(2444),l=a(7437);const o=()=>{const{title:e,navigation:t}=(0,i.Q)(),{0:o,1:c}=(0,r.useState)(!1),d=()=>{c(!o)};return(0,l.Y)("header",{className:"bg-white"},(0,l.Y)("div",{className:"container mx-auto flex max-w-5xl items-center justify-between py-6"},e&&(0,l.Y)(s.Link,{to:"/",className:"flex items-center gap-2 px-4 sm:w-auto sm:pb-0 lg:px-0"},(0,l.Y)(n.S,{src:"../images/icon.png",alt:e,layout:"fixed",height:35,width:35,__imageData:a(1199)}),(0,l.Y)("span",{className:"whitespace-nowrap text-xl font-bold uppercase"},e)),(0,l.Y)("nav",{className:"hidden md:flex"},(0,l.Y)("ul",{className:"flex space-x-4"},null==t?void 0:t.map((e=>(null==e?void 0:e.path)&&(0,l.Y)("li",{key:e.path},(0,l.Y)(s.Link,{to:e.path,className:"hover:text-gray-600"},e.name)))))),(0,l.Y)("button",{className:"block focus:outline-none md:hidden",onClick:d,"aria-label":"Toggle Menu"},o?(0,l.Y)("span",{className:"text-2xl font-bold"},"x"):(0,l.Y)("span",{className:"text-2xl"},"☰"))),o&&(0,l.Y)("nav",{className:"bg-white shadow-lg md:hidden"},(0,l.Y)("ul",{className:"flex flex-col items-center space-y-4 py-4"},null==t?void 0:t.map((e=>(null==e?void 0:e.path)&&(0,l.Y)("li",{key:e.path},(0,l.Y)(s.Link,{to:e.path,className:"hover:text-gray-600",onClick:d},e.name)))))))},c=()=>{const{title:e,navigation:t}=(0,i.Q)();return(0,l.Y)("footer",{className:"bottom-0 bg-purple-200"},(0,l.Y)("div",{className:"container mx-auto flex max-w-5xl flex-col justify-evenly py-12 sm:flex-row"},(0,l.Y)("div",{className:"mb-12 sm:mb-0"},e&&(0,l.Y)("div",{className:"mb-4 flex items-center justify-center gap-4 sm:-ml-6"},(0,l.Y)(n.S,{className:"inline-block",layout:"fixed",height:20,width:20,src:"../images/icon.png",alt:e,__imageData:a(6104)}),(0,l.Y)("span",{className:"text-xl font-bold uppercase text-black"},e))),(0,l.Y)("div",{className:"text-center sm:text-left"},(0,l.Y)("ul",{className:"flex flex-col items-center gap-4 sm:flex-row"},null==t?void 0:t.map((e=>(null==e?void 0:e.path)&&(0,l.Y)("li",{key:e.path},(0,l.Y)(s.Link,{className:"underline",to:e.path},e.name))))))))},d=e=>{let{children:t,image:a,title:s}=e;const r=a?(0,n.c)(a):null;return(0,l.Y)("main",{className:"font-sans font-light"},(0,l.Y)(o,null),r&&(0,l.Y)("div",{className:"relative mb-12 h-48"},(0,l.Y)(n.G,{image:r,alt:s||"",className:"absolute inset-0 h-full w-full",objectFit:"cover",loading:"eager"}),s&&(0,l.Y)("div",{className:"absolute inset-0 flex items-center justify-center"},(0,l.Y)("div",{className:"relative z-20 mx-auto max-w-5xl"},(0,l.Y)("h1",{className:"text-4xl font-bold text-white sm:text-5xl"},s))),(0,l.Y)("div",{className:"absolute inset-0 z-10 bg-gray-900 opacity-30"})),(0,l.Y)("div",{className:"mx-auto mb-12 max-w-7xl px-4 sm:px-6 lg:px-8"},t),(0,l.Y)(c,null))}},2444:function(e,t,a){a.d(t,{Q:function(){return s}});var n=a(4794);const s=()=>(0,n.useStaticQuery)("4077089569").site.siteMetadata},1199:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#d8e8f8","images":{"fallback":{"src":"/static/503db75cfd24c653e4e7d117076013ed/83fe9/icon.png","srcSet":"/static/503db75cfd24c653e4e7d117076013ed/83fe9/icon.png 35w,\\n/static/503db75cfd24c653e4e7d117076013ed/ad998/icon.png 70w","sizes":"35px"},"sources":[{"srcSet":"/static/503db75cfd24c653e4e7d117076013ed/dbb7e/icon.webp 35w,\\n/static/503db75cfd24c653e4e7d117076013ed/299bc/icon.webp 70w","type":"image/webp","sizes":"35px"}]},"width":35,"height":35}')},6104:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#d8e8f8","images":{"fallback":{"src":"/static/503db75cfd24c653e4e7d117076013ed/ca121/icon.png","srcSet":"/static/503db75cfd24c653e4e7d117076013ed/ca121/icon.png 20w,\\n/static/503db75cfd24c653e4e7d117076013ed/f31ef/icon.png 40w","sizes":"20px"},"sources":[{"srcSet":"/static/503db75cfd24c653e4e7d117076013ed/264f2/icon.webp 20w,\\n/static/503db75cfd24c653e4e7d117076013ed/e73fe/icon.webp 40w","type":"image/webp","sizes":"20px"}]},"width":20,"height":20}')}}]);
//# sourceMappingURL=e6e643187931e2b26eb632358317e57f2e94e38d-a416caf634d8765c437c.js.map