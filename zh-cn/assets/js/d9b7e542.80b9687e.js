(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2171],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return b}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=i(r),b=a,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||c;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var i=2;i<c;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3066:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s},default:function(){return l}});var n=r(2122),a=r(9756),c=(r(7294),r(3905)),o={id:"custom-subject-creator",title:"\u81ea\u5b9a\u4e49subject creator",sidebar_label:"\u81ea\u5b9a\u4e49subject creator"},u={unversionedId:"advanced/custom-subject-creator",id:"advanced/custom-subject-creator",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49subject creator",description:"\u81ea\u5b9a\u4e49subject creator\u662f\u6211\u4eec\u4f7f\u7528\u9891\u7387\u6700\u9ad8\u7684\u6269\u5c55\uff0c\u5f53\u8bf7\u6c42\u4f53\u5bf9\u8c61\u5e76\u4e0d\u662fservlet\u6216\u8005jax-rs\u6807\u51c6api\u65f6\uff0c",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/advanced/custom-subject-creator.md",sourceDirName:"advanced",slug:"/advanced/custom-subject-creator",permalink:"/sureness/zh-cn/docs/advanced/custom-subject-creator",editUrl:"https://github.com/dromara/sureness/edit/master/home/docs/advanced/custom-subject-creator.md",version:"current",sidebar_label:"\u81ea\u5b9a\u4e49subject creator",frontMatter:{id:"custom-subject-creator",title:"\u81ea\u5b9a\u4e49subject creator",sidebar_label:"\u81ea\u5b9a\u4e49subject creator"},sidebar:"docs",previous:{title:"\u81ea\u5b9a\u4e49subject",permalink:"/sureness/zh-cn/docs/advanced/custom-subject"},next:{title:"\u81ea\u5b9a\u4e49processor",permalink:"/sureness/zh-cn/docs/advanced/custom-processor"}},s=[],i={toc:s};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u81ea\u5b9a\u4e49",(0,c.kt)("inlineCode",{parentName:"p"},"subject creator"),"\u662f\u6211\u4eec\u4f7f\u7528\u9891\u7387\u6700\u9ad8\u7684\u6269\u5c55\uff0c\u5f53\u8bf7\u6c42\u4f53\u5bf9\u8c61\u5e76\u4e0d\u662f",(0,c.kt)("inlineCode",{parentName:"p"},"servlet"),"\u6216\u8005",(0,c.kt)("inlineCode",{parentName:"p"},"jax-rs"),"\u6807\u51c6",(0,c.kt)("inlineCode",{parentName:"p"},"api"),"\u65f6\uff0c\n\u6216\u8005\u6211\u4eec\u4ecerequest\u8bf7\u6c42\u7684\u4e0d\u540c\u5730\u65b9\u83b7\u53d6\u8d26\u6237\u4fe1\u606f\u65f6\uff0c\u6211\u4eec\u5c31\u9700\u8981\u81ea\u5b9a\u4e49",(0,c.kt)("inlineCode",{parentName:"p"},"subject creator"),",\n\u4f7f\u5176\u901a\u8fc7\u8bf7\u6c42\u5bf9\u8c61\u83b7\u53d6\u6211\u4eec\u9700\u8981\u7684\u8bf7\u6c42\u4fe1\u606f(\u8bf7\u6c42\u8def\u5f84\uff0c\u8bf7\u6c42\u65b9\u6cd5\uff0c\u8ba4\u8bc1\u4fe1\u606f\u7b49), \u4ece\u800c\u521b\u5efa\u51fa\u5bf9\u5e94\u7684",(0,c.kt)("inlineCode",{parentName:"p"},"subject"),"."),(0,c.kt)("p",null,"sureness\u5df2\u7ecf\u5185\u7f6e\u80fd\u521b\u5efa\u51fa\u57fa\u4e8e\u8d26\u6237\u5bc6\u7801\u7684PasswordSubject\u7684BasicSubjectServletCreator\uff0c\n\u548c\u521b\u5efa\u51fajwt\u7c7b\u578bJwtSubject\u7684JwtSubjectServletCreator\u7b49\uff0c\u5f53\u7136\u6211\u4eec\u53ef\u4ee5\u81ea\u5b9a\u4e49\u81ea\u5df1\u9700\u8981\u7684subjectCreator\u6765\u521b\u5efasubject"),(0,c.kt)("p",null,"\u81ea\u5b9a\u4e49\u524d\u5efa\u8bae\u4e86\u89e3",(0,c.kt)("inlineCode",{parentName:"p"},"sureness"),"\u5904\u7406\u6d41\u7a0b\u548c\u63d0\u4f9b\u7684\u6269\u5c55\u63a5\u53e3,\u8be6\u89c1 ",(0,c.kt)("a",{parentName:"p",href:"/docs/advanced/extend-point"},"\u8fdb\u9636\u6269\u5c55")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"SubjectCreate"),": \u521b\u5efa",(0,c.kt)("inlineCode",{parentName:"li"},"Subject"),"\u63a5\u53e3,\u6839\u636e\u8bf7\u6c42\u5185\u5bb9\u521b\u5efa\u4e0d\u540c\u7c7b\u578b\u7684",(0,c.kt)("inlineCode",{parentName:"li"},"Subject"),"\u5bf9\u8c61")),(0,c.kt)("p",null,"\u5b9e\u73b0",(0,c.kt)("inlineCode",{parentName:"p"},"SubjectCreate"),"\u63a5\u53e3\u65b9\u6cd5,\u6839\u636erequest\u8bf7\u6c42\u7684\u5185\u5bb9\u521b\u5efa\u51fa\u5bf9\u5e94\u9700\u8981\u7684\u7684",(0,c.kt)("inlineCode",{parentName:"p"},"subject")),(0,c.kt)("p",null,"\u5177\u4f53\u6269\u5c55\u5b9e\u8df5\u8bf7\u53c2\u8003 ",(0,c.kt)("a",{parentName:"p",href:"/docs/integrate/sample-spring-webflux"},"sample-spring-webflux\u9879\u76ee\u96c6\u6210\u6848\u4f8b")))}l.isMDXComponent=!0}}]);