"use strict";(self.webpackChunktallyarbiter_docs=self.webpackChunktallyarbiter_docs||[]).push([[799],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},373:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:2},s={unversionedId:"installation/cli",id:"installation/cli",isDocsHomePage:!1,title:"CLI",description:"Installation",source:"@site/docs/installation/cli.md",sourceDirName:"installation",slug:"/installation/cli",permalink:"/TallyArbiter/docs/installation/cli",editUrl:"https://github.com/josephdadams/TallyArbiter/edit/master/docs/docs/installation/cli.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Desktop Application / Installer",permalink:"/TallyArbiter/docs/installation/desktop-app"},next:{title:"Docker",permalink:"/TallyArbiter/docs/installation/docker"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Upgrading",id:"upgrading",children:[]},{value:"Running as a service",id:"running-as-a-service",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"If you have Node.js and npm installed, you can install TallyArbiter as a CLI and run it from the command line or terminal using"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --global tallyarbiter\n")),(0,i.kt)("p",null,"or in short: ",(0,i.kt)("inlineCode",{parentName:"p"},"npm i -g tallyarbiter")),(0,i.kt)("p",null,'Depending on your OS, you may need to run the command as root using the prefix "sudo".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo npm install --global tallyarbiter\n")),(0,i.kt)("p",null,"Then, start it by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"tallyarbiter"),"."),(0,i.kt)("h2",{id:"upgrading"},"Upgrading"),(0,i.kt)("p",null,"To install the latest version, just run the same command from above (",(0,i.kt)("inlineCode",{parentName:"p"},"npm i -g tallyarbiter"),") again."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Be sure to back up or save your ",(0,i.kt)("a",{parentName:"strong",href:"/TallyArbiter/docs/usage/control-interface#configuration"},"config file"),"!")),(0,i.kt)("h2",{id:"running-as-a-service"},"Running as a service"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open a terminal window and change directory to the folder where you placed the source code."),(0,i.kt)("li",{parentName:"ol"},"Install the Node.js library, ",(0,i.kt)("inlineCode",{parentName:"li"},"pm2"),", by typing ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install -g pm2"),". This will install it globally on your system."),(0,i.kt)("li",{parentName:"ol"},"After ",(0,i.kt)("inlineCode",{parentName:"li"},"pm2")," is installed, type ",(0,i.kt)("inlineCode",{parentName:"li"},"pm2 start tallyarbiter --name TallyArbiter")," to daemonize it as a service."),(0,i.kt)("li",{parentName:"ol"},"If you would like it to start automatically upon bootup, type ",(0,i.kt)("inlineCode",{parentName:"li"},"pm2 save")," and then ",(0,i.kt)("inlineCode",{parentName:"li"},"pm2 startup")," and follow the instructions on-screen."),(0,i.kt)("li",{parentName:"ol"},"To view the console output while running the software with ",(0,i.kt)("inlineCode",{parentName:"li"},"pm2"),", type ",(0,i.kt)("inlineCode",{parentName:"li"},"pm2 logs TallyArbiter"),".")))}u.isMDXComponent=!0}}]);