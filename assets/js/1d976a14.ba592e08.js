"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9045],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?i.createElement(m,s(s({ref:t},c),{},{components:n})):i.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var p=2;p<o;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var i=n(83117),a=(n(67294),n(3905));const o={title:"Aspect Versioning",slug:"/advanced/aspect-versioning",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/aspect-versioning.md"},s="Aspect Versioning",r={unversionedId:"docs/advanced/aspect-versioning",id:"docs/advanced/aspect-versioning",title:"Aspect Versioning",description:"As each version of metadata aspect is immutable, any update to an existing aspect results in the creation of a new version. Typically one would expect the version number increases sequentially with the largest version number being the latest version, i.e. v1 (oldest), v2 (second oldest), ..., vN (latest). However, this approach results in major challenges in both rest.li modeling & transaction isolation and therefore requires a rethinking.",source:"@site/genDocs/docs/advanced/aspect-versioning.md",sourceDirName:"docs/advanced",slug:"/advanced/aspect-versioning",permalink:"/docs/advanced/aspect-versioning",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/aspect-versioning.md",tags:[],version:"current",frontMatter:{title:"Aspect Versioning",slug:"/advanced/aspect-versioning",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/advanced/aspect-versioning.md"},sidebar:"overviewSidebar",previous:{title:"Restore Indices Endpoint",permalink:"/docs/api/restli/restore-indices"},next:{title:"Modifying Tags on Datasets",permalink:"/docs/api/tutorials/modifying-dataset-tags"}},l={},p=[{value:"Rest.li Modeling",id:"restli-modeling",level:2},{value:"Transaction Isolation",id:"transaction-isolation",level:2},{value:"Solution: Version 0",id:"solution-version-0",level:2},{value:"Rest.li Modeling",id:"restli-modeling-1",level:3},{value:"Transaction Isolation",id:"transaction-isolation-1",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aspect-versioning"},"Aspect Versioning"),(0,a.kt)("p",null,"As each version of ",(0,a.kt)("a",{parentName:"p",href:"/docs/what/aspect"},"metadata aspect")," is immutable, any update to an existing aspect results in the creation of a new version. Typically one would expect the version number increases sequentially with the largest version number being the latest version, i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"v1")," (oldest), ",(0,a.kt)("inlineCode",{parentName:"p"},"v2")," (second oldest), ..., ",(0,a.kt)("inlineCode",{parentName:"p"},"vN")," (latest). However, this approach results in major challenges in both rest.li modeling & transaction isolation and therefore requires a rethinking."),(0,a.kt)("h2",{id:"restli-modeling"},"Rest.li Modeling"),(0,a.kt)("p",null,"As it's common to create dedicated rest.li sub-resources for a specific aspect, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"/datasets/{datasetKey}/ownership"),", the concept of versions become an interesting modeling question. Should the sub-resource be a ",(0,a.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/modeling/modeling#simple"},"Simple")," or a ",(0,a.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/modeling/modeling#collection"},"Collection")," type?"),(0,a.kt)("p",null,"If Simple, the ",(0,a.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/user_guide/restli_server#get"},"GET")," method is expected to return the latest version, and the only way to retrieve non-latest versions is through a custom ",(0,a.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/user_guide/restli_server#action"},"ACTION")," method, which is going against the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"REST")," principle. As a result, a Simple sub-resource doesn't seem to a be a good fit."),(0,a.kt)("p",null,"If Collection, the version number naturally becomes the key so it's easy to retrieve specific version number using the typical GET method. It's also easy to list all versions using the standard ",(0,a.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/user_guide/restli_server#get_all"},"GET_ALL")," method or get a set of versions via ",(0,a.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/user_guide/restli_server#batch_get"},"BATCH_GET"),". However, Collection resources don't support a simple way to get the latest/largest key directly. To achieve that, one must do one of the following"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a GET_ALL (assuming descending key order) with a page size of 1"),(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("a",{parentName:"li",href:"https://linkedin.github.io/rest.li/user_guide/restli_server#finder"},"FINDER")," with special parameters and a page size of 1"),(0,a.kt)("li",{parentName:"ul"},"a custom ACTION method again")),(0,a.kt)("p",null,"None of these options seems like a natural way to ask for the latest version of an aspect, which is one of the most common use cases."),(0,a.kt)("h2",{id:"transaction-isolation"},"Transaction Isolation"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Isolation_(database_systems)"},"Transaction isolation")," is a complex topic so make sure to familiarize yourself with the basics first. "),(0,a.kt)("p",null,"To support concurrent update of a metadata aspect, the following pseudo DB operations must be run in a single transaction,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. Retrieve the current max version (Vmax)\n2. Write the new value as (Vmax + 1)\n")),(0,a.kt)("p",null,"Operation 1 above can easily suffer from ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Isolation_(database_systems)#Phantom_reads"},"Phantom Reads"),". This subsequently leads to Operation 2 computing the incorrect version and thus overwrites an existing version instead of creating a new one."),(0,a.kt)("p",null,"One way to solve this is by enforcing ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Isolation_(database_systems)#Serializable"},"Serializable")," isolation level in DB at the ",(0,a.kt)("a",{parentName:"p",href:"https://logicalread.com/optimize-mysql-perf-part-2-mc13/#.XjxSRSlKh1N"},"cost of performance"),". In reality, very few DB even supports this level of isolation, especially for distributed document stores. It's more common to support ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Isolation_(database_systems)#Repeatable_reads"},"Repeatable Reads")," or ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Isolation_(database_systems)#Read_committed"},"Read Committed")," isolation levels\u2014sadly neither would help in this case."),(0,a.kt)("p",null,"Another possible solution is to transactionally keep track of ",(0,a.kt)("inlineCode",{parentName:"p"},"Vmax")," directly in a separate table to avoid the need to compute that through a ",(0,a.kt)("inlineCode",{parentName:"p"},"select")," (thus prevent Phantom Reads). However, cross-table/document/entity transaction is not a feature supported by all distributed document stores, which precludes this as a generalized solution."),(0,a.kt)("h2",{id:"solution-version-0"},"Solution: Version 0"),(0,a.kt)("p",null,'The solution to both challenges turns out to be surprisingly simple. Instead of using a "floating" version number to represent the latest version, one can use a "fixed/sentinel" version number instead. In this case we choose Version 0 as we want all non-latest versions to still keep increasing sequentially. In other words, it\'d be ',(0,a.kt)("inlineCode",{parentName:"p"},"v0")," (latest), ",(0,a.kt)("inlineCode",{parentName:"p"},"v1")," (oldest), ",(0,a.kt)("inlineCode",{parentName:"p"},"v2")," (second oldest), etc. Alternatively, you can also simply view all the non-zero versions as an audit trail."),(0,a.kt)("p",null,"Let's examine how Version 0 can solve the aforementioned challenges."),(0,a.kt)("h3",{id:"restli-modeling-1"},"Rest.li Modeling"),(0,a.kt)("p",null,"With Version 0, getting the latest version becomes calling the GET method of a Collection aspect-specific sub-resource with a deterministic key, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"/datasets/{datasetkey}/ownership/0"),", which is a lot more natural than using GET_ALL or FINDER."),(0,a.kt)("h3",{id:"transaction-isolation-1"},"Transaction Isolation"),(0,a.kt)("p",null,"The pseudo DB operations change to the following transaction block with version 0,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. Retrieve v0 of the aspect\n2. Retrieve the current max version (Vmax)\n3. Write the old value back as (Vmax + 1)\n4. Write the new value back as v0\n")),(0,a.kt)("p",null,"While Operation 2 still suffers from potential Phantom Reads and thus corrupting existing version in Operation 3, Repeatable Reads isolation level will ensure that the transaction fails due to ",(0,a.kt)("a",{parentName:"p",href:"https://codingsight.com/the-lost-update-problem-in-concurrent-transactions/"},"Lost Update")," detected in Operation 4. Note that this happens to also be the ",(0,a.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/innodb-transaction-isolation-levels.html"},"default isolation level")," for InnoDB in MySQL."))}d.isMDXComponent=!0}}]);