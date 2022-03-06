"use strict";(self.webpackChunkmelody_docs=self.webpackChunkmelody_docs||[]).push([[65],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return d}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||a;return r?t.createElement(f,s(s({ref:n},u),{},{components:r})):t.createElement(f,s({ref:n},u))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6255:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return u},toc:function(){return l},default:function(){return d}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],i={sidebar_position:8},c="Performance",p={unversionedId:"performance",id:"performance",title:"Performance",description:"Last measured on V0.12.4",source:"@site/docs/performance.md",sourceDirName:".",slug:"/performance",permalink:"/melody/docs/performance",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"sidebar",previous:{title:"Extensions",permalink:"/melody/docs/extensions"}},u={},l=[],m={toc:l};function d(e){var n=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"performance"},"Performance"),(0,a.kt)("p",null,"Last measured on V0.12.4"),(0,a.kt)("p",null,"Measured on an 8 core 2021 MacBook Pro 14-inch, Apple M1 Pro using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bheisler/criterion.rs"},"criterion"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"8 lines:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"compiler/normal (8 lines)                                                                               \n                        time:   [4.1423 us 4.1555 us 4.1699 us]\nslope  [4.1423 us 4.1699 us] R^2            [0.9994903 0.9994576]\nmean   [4.1412 us 4.1608 us] std. dev.      [7.9841 ns 21.816 ns]\nmedian [4.1370 us 4.1633 us] med. abs. dev. [3.2990 ns 29.024 ns]\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"1M lines:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"compiler/long input (1M lines)                                                                          \n                        time:   [386.65 ms 388.91 ms 391.28 ms]\nmean   [386.65 ms 391.28 ms] std. dev.      [2.2683 ms 4.7309 ms]\nmedian [384.62 ms 393.30 ms] med. abs. dev. [158.47 us 6.5765 ms]\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Deeply nested:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"compiler/deeply nested  \n                        time:   [4.7804 us 4.7903 us 4.8036 us]                                      \nslope  [4.7804 us 4.8036 us] R^2            [0.9997212 0.9996534]\nmean   [4.7856 us 4.8075 us] std. dev.      [9.2709 ns 23.911 ns]\nmedian [4.7801 us 4.8113 us] med. abs. dev. [3.5263 ns 30.781 ns]\n")))),(0,a.kt)("p",null,"To reproduce, run ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo benchmark")))}d.isMDXComponent=!0}}]);