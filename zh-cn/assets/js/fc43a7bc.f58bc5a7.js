(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5e3],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return h}});var s=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=s.createContext({}),l=function(e){var t=s.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return s.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(r),h=n,b=m["".concat(a,".").concat(h)]||m[h]||c[h]||i;return r?s.createElement(b,o(o({ref:t},p),{},{components:r})):s.createElement(b,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var l=2;l<i;l++)o[l]=r[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4601:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return u},toc:function(){return a},default:function(){return p}});var s=r(2122),n=r(9756),i=(r(7294),r(3905)),o={id:"contributing",title:"\u53c2\u4e0e\u8d21\u732e",sidebar_label:"\u53c2\u4e0e\u8d21\u732e"},u={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"Contributing to Sureness",description:"Very welcome to Contribute this project, go further and better with sureness.",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/sureness/zh-cn/docs/contributing",editUrl:"https://github.com/dromara/sureness/edit/master/home/docs/contributing.md",version:"current",sidebar_label:"\u53c2\u4e0e\u8d21\u732e",frontMatter:{id:"contributing",title:"\u53c2\u4e0e\u8d21\u732e",sidebar_label:"\u53c2\u4e0e\u8d21\u732e"},sidebar:"docs",previous:{title:"\u8bbe\u8ba1\u6587\u6863",permalink:"/sureness/zh-cn/docs/design"},next:{title:"\u8d5e\u52a9",permalink:"/sureness/zh-cn/docs/sponsor"}},a=[{value:"How to contribute?",id:"how-to-contribute",children:[]},{value:"Join discussion",id:"join-discussion",children:[]},{value:"\u5982\u4f55\u8d21\u732e?",id:"\u5982\u4f55\u8d21\u732e",children:[]},{value:"\u52a0\u5165\u4ea4\u6d41",id:"\u52a0\u5165\u4ea4\u6d41",children:[]}],l={toc:a};function p(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,s.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Very welcome to Contribute this project, go further and better with sureness.\nFirstly, thanks for your interest in contributing! I hope that this will be a pleasant first experience for you, and that you will return to continue contributing."),(0,i.kt)("p",null,"Components of Repository:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/usthe/sureness/tree/master/core"},"sureness's kernel code--sureness-core")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/usthe/sureness/tree/master/sample-bootstrap"},"sureness integration springboot sample(configuration file scheme)--sample-bootstrap")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/usthe/sureness/tree/master/sample-tom"},"sureness integration springboot sample(database scheme)-sample-tom")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/usthe/sureness/tree/master/samples"},"sample projects using sureness in each framework(javalin,ktor,quarkus)--samples"))),(0,i.kt)("h2",{id:"how-to-contribute"},"How to contribute?"),(0,i.kt)("p",null,"Most of the contributions that we receive are code contributions, but you can\nalso contribute to the documentation or simply report solid bugs\nfor us to fix."),(0,i.kt)("p",null,"For new contributors, please take a look at issues or pull requests with a tag called below."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/usthe/sureness/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"Good first issue"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/usthe/sureness/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22"},"Help wanted"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/usthe/sureness/issues?q=label%3A%22good+first+pull+request%22+"},"Good first pull request")),(0,i.kt)("h2",{id:"join-discussion"},"Join discussion"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/usthe/sureness/discussions"},"Github Discussion"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://gitter.im/usthe/sureness"},"Gitter Channel")),(0,i.kt)("hr",null),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"\u53c2\u4e0e\u8d21\u732e"},"\u53c2\u4e0e\u8d21\u732e"),(0,i.kt)("p",null,"\u975e\u5e38\u6b22\u8fce\u53c2\u4e0e\u9879\u76ee\u8d21\u732e\uff0c\u6211\u4eec\u81f4\u529b\u4e8e\u7ef4\u62a4\u4e00\u4e2a\u4e92\u76f8\u5e2e\u52a9\u7684\u5feb\u4e50\u793e\u533a\u3002"),(0,i.kt)("p",null,"\u4ed3\u5e93\u7684\u7ec4\u6210\u90e8\u5206:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/usthe/sureness/tree/master/core"},"sureness\u7684\u6838\u5fc3\u4ee3\u7801--sureness-core")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/usthe/sureness/tree/master/sample-bootstrap"},"\u4f7f\u7528sureness\u96c6\u6210springboot\u642d\u5efa\u6743\u9650\u9879\u76ee(\u914d\u7f6e\u6587\u4ef6\u65b9\u6848)--sample-bootstrap")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/usthe/sureness/tree/master/sample-tom"},"\u4f7f\u7528sureness\u96c6\u6210springboot\u642d\u5efa\u6743\u9650\u9879\u76ee(\u6570\u636e\u5e93\u65b9\u6848)--sample-tom")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/usthe/sureness/tree/master/samples"},"\u5404\u4e2a\u6846\u67b6\u4f7f\u7528sureness\u7684\u6837\u4f8b\u9879\u76ee(javalin,ktor,quarkus)--samples"))),(0,i.kt)("h2",{id:"\u5982\u4f55\u8d21\u732e"},"\u5982\u4f55\u8d21\u732e?"),(0,i.kt)("p",null,"\u6211\u4eec\u4e0d\u4ec5\u4ec5\u63a5\u6536\u4ee3\u7801\u7684\u8d21\u732e\u63d0\u4ea4\uff0c\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u63d0\u4ea4\u6587\u6863\u7684\u66f4\u65b0\u6216\u8005BUG\u7684\u62a5\u544a\u6765\u53c2\u4e0e\u793e\u533a\u8d21\u732e\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u662f\u65b0\u7684\u8d21\u732e\u8005\uff0c\u8bf7\u9996\u5148\u4e86\u89e3\u53c2\u8003\u5982\u4e0b\u6837\u4f8b\u7684\u63d0\u4ea4Issues,\u63d0\u4ea4Pull Requests\u5982\u679c\u5de5\u4f5c\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/usthe/sureness/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"Good first issue"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/usthe/sureness/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22"},"Help wanted"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/usthe/sureness/issues?q=label%3A%22good+first+pull+request%22+"},"Good first pull request")),(0,i.kt)("h2",{id:"\u52a0\u5165\u4ea4\u6d41"},"\u52a0\u5165\u4ea4\u6d41"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/usthe/sureness/discussions"},"Github Discussion"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://gitter.im/usthe/sureness"},"Gitter Channel"),(0,i.kt)("br",{parentName:"p"}),"\n","QQ\u4ea4\u6d41\u7fa4\uff1a390083213",(0,i.kt)("br",{parentName:"p"}),"\n","\u5fae\u4fe1\u516c\u4f17\u53f7\uff1asureness"))}p.isMDXComponent=!0}}]);