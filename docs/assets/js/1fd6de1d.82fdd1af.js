"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[40],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(u,".").concat(m)]||p[m]||f[m]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3244:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:100},u="Share aqua configuration for teams and organizations",c={unversionedId:"tutorial-extras/team-config",id:"tutorial-extras/team-config",isDocsHomePage:!1,title:"Share aqua configuration for teams and organizations",description:"aqua reads configuration from the environment variable AQUAGLOBALCONFIG.",source:"@site/docs/tutorial-extras/team-config.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/team-config",permalink:"/docs/tutorial-extras/team-config",editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/tutorial-extras/team-config.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Install tools globally",permalink:"/docs/tutorial-extras/global-config"},next:{title:"Split the list of packages",permalink:"/docs/tutorial-extras/split-config"}},s=[{value:"How to share aqua configuration for teams and organizations",id:"how-to-share-aqua-configuration-for-teams-and-organizations",children:[],level:2}],f={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"share-aqua-configuration-for-teams-and-organizations"},"Share aqua configuration for teams and organizations"),(0,o.kt)("p",null,"aqua reads configuration from the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"AQUA_GLOBAL_CONFIG"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"AQUA_GLOBAL_CONFIG")," is configuration file paths separated with semicolons ",(0,o.kt)("inlineCode",{parentName:"p"},":"),"."),(0,o.kt)("p",null,"e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export AQUA_GLOBAL_CONFIG=/home/foo/aqua-config/sre.yaml:/home/foo/aqua-config/all.yaml\n")),(0,o.kt)("p",null,"About the priority of configuration, plase see ",(0,o.kt)("a",{parentName:"p",href:"../reference/config/#configuration-file-path"},"Configuration File Path"),"."),(0,o.kt)("p",null,"By default ",(0,o.kt)("inlineCode",{parentName:"p"},"aqua i")," ignores Global Configuration.\nIf ",(0,o.kt)("inlineCode",{parentName:"p"},"--all (-a)")," is set, aqua installs all packages including Global Configuration."),(0,o.kt)("h2",{id:"how-to-share-aqua-configuration-for-teams-and-organizations"},"How to share aqua configuration for teams and organizations"),(0,o.kt)("p",null,"Let's create the repository in your GitHub Organization,\nand add aqua configuration files for your teams and organization into the repository."),(0,o.kt)("p",null,"e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"aqua-config/\n  all.yaml # aqua configuration for all developers in your organization\n  sre.yaml # aqua configuration for your SRE team\n")),(0,o.kt)("p",null,"Then checkout the repository and set the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"AQUA_GLOBAL_CONFIG"),".\nIf you belong to SRE team,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export AQUA_GLOBAL_CONFIG=/home/foo/aqua-config/sre.yaml:/home/foo/aqua-config/all.yaml\n")),(0,o.kt)("p",null,"Otherwise"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export AQUA_GLOBAL_CONFIG=/home/foo/aqua-config/all.yaml\n")))}p.isMDXComponent=!0}}]);