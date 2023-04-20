"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[389],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(a),c=r,f=p["".concat(i,".").concat(c)]||p[c]||d[c]||o;return a?n.createElement(f,s(s({ref:t},u),{},{components:a})):n.createElement(f,s({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var m=2;m<o;m++)s[m]=a[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(83117),r=a(67294),o=a(86010),s=a(51048),l=a(33609),i=a(1943),m=a(72957);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){const{lazy:t,block:a,defaultValue:s,values:p,groupId:c,className:f}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,l.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===s?s:s??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:v}=(0,i.U)(),[T,_]=(0,r.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:w}=(0,m.o5)();if(null!=c){const e=k[c];null!=e&&e!==T&&h.some((t=>t.value===e))&&_(e)}const C=e=>{const t=e.currentTarget,a=N.indexOf(t),n=h[a].value;n!==T&&(w(t),_(n),null!=c&&v(c,String(n)))},R=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;t=N[a]??N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;t=N[a]??N[N.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},f)},h.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>N.push(e),onKeyDown:R,onClick:C},s,{className:(0,o.Z)("tabs__item",d,s?.className,{"tabs__item--active":T===t})}),a??t)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function c(e){const t=(0,s.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},79174:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var n=a(83117),r=(a(67294),a(3905)),o=a(34259),s=a(18679);const l={title:"Modifying Terms on Datasets",slug:"/api/tutorials/modifying-dataset-terms",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/modifying-dataset-terms.md"},i="Modifying Terms on Datasets",m={unversionedId:"docs/api/tutorials/modifying-dataset-terms",id:"docs/api/tutorials/modifying-dataset-terms",title:"Modifying Terms on Datasets",description:"Why Would You Use Terms on Datasets?",source:"@site/genDocs/docs/api/tutorials/modifying-dataset-terms.md",sourceDirName:"docs/api/tutorials",slug:"/api/tutorials/modifying-dataset-terms",permalink:"/docs/api/tutorials/modifying-dataset-terms",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/modifying-dataset-terms.md",tags:[],version:"current",frontMatter:{title:"Modifying Terms on Datasets",slug:"/api/tutorials/modifying-dataset-terms",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/modifying-dataset-terms.md"},sidebar:"overviewSidebar",previous:{title:"Modifying Tags on Datasets",permalink:"/docs/api/tutorials/modifying-dataset-tags"},next:{title:"Modifying Owners",permalink:"/docs/api/tutorials/modifying-dataset-owners"}},u={},d=[{value:"Why Would You Use Terms on Datasets?",id:"why-would-you-use-terms-on-datasets",level:2},{value:"Goal Of This Guide",id:"goal-of-this-guide",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create Terms",id:"create-terms",level:2},{value:"Expected Outcome of Creating Terms",id:"expected-outcome-of-creating-terms",level:3},{value:"Read Terms",id:"read-terms",level:2},{value:"Add Terms",id:"add-terms",level:2},{value:"Expected Outcome of Adding Terms",id:"expected-outcome-of-adding-terms",level:3},{value:"Remove Terms",id:"remove-terms",level:2},{value:"Expected Outcome of Removing Terms",id:"expected-outcome-of-removing-terms",level:3}],p={toc:d};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"modifying-terms-on-datasets"},"Modifying Terms on Datasets"),(0,r.kt)("h2",{id:"why-would-you-use-terms-on-datasets"},"Why Would You Use Terms on Datasets?"),(0,r.kt)("p",null,"The Business Glossary(Term) feature in DataHub helps you use a shared vocabulary within the orgarnization, by providing a framework for defining a standardized set of data concepts and then associating them with the physical assets that exist within your data ecosystem."),(0,r.kt)("p",null,"For more information about terms, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/glossary/business-glossary"},"About DataHub Business Glossary"),"."),(0,r.kt)("h3",{id:"goal-of-this-guide"},"Goal Of This Guide"),(0,r.kt)("p",null,"This guide will show you how to "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create: create a term named ",(0,r.kt)("inlineCode",{parentName:"li"},"Rate of Return"),"."),(0,r.kt)("li",{parentName:"ul"},"Read : read terms attached to a dataset ",(0,r.kt)("inlineCode",{parentName:"li"},"SampleHiveDataset"),"."),(0,r.kt)("li",{parentName:"ul"},"Add: add a ",(0,r.kt)("inlineCode",{parentName:"li"},"CustomerAccount")," term to ",(0,r.kt)("inlineCode",{parentName:"li"},"user_name")," column of a dataset named ",(0,r.kt)("inlineCode",{parentName:"li"},"fct_users_created"),"."),(0,r.kt)("li",{parentName:"ul"},"Remove: remove a term ",(0,r.kt)("inlineCode",{parentName:"li"},"CustomerAccount")," from the ",(0,r.kt)("inlineCode",{parentName:"li"},"user_name")," column of a dataset called ",(0,r.kt)("inlineCode",{parentName:"li"},"fct_users_created"),".")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"For this tutorial, you need to deploy DataHub Quickstart and ingest sample data.\nFor detailed information, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/quickstart"},"Datahub Quickstart Guide"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before modifying terms, you need to ensure the target dataset is already present in your DataHub instance.\nIf you attempt to manipulate entities that do not exist, your operation will fail.\nIn this guide, we will be using data from sample ingestion.")),(0,r.kt)("p",null,"For more information on how to set up for GraphQL, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/graphql/how-to-set-up-graphql"},"How To Set Up GraphQL"),"."),(0,r.kt)("h2",{id:"create-terms"},"Create Terms"),(0,r.kt)("p",null,"The following code creates a term ",(0,r.kt)("inlineCode",{parentName:"p"},"Rate of Return"),"."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation createGlossaryTerm {\n  createGlossaryTerm(input: {\n    name: "Rate of Return",\n    id: "rateofreturn",\n    description: "A rate of return (RoR) is the net gain or loss of an investment over a specified time period."\n  },\n  )\n}\n')),(0,r.kt)("p",null,"If you see the following response, the operation was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "createGlossaryTerm": "urn:li:glossaryTerm:rateofreturn"\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(s.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation createGlossaryTerm { createGlossaryTerm(input: { name: \\"Rate of Return\\", id:\\"rateofreturn\\", description: \\"A rate of return (RoR) is the net gain or loss of an investment over a specified time period.\\" }) }", "variables":{}}\'\n')),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": { "createGlossaryTerm": "urn:li:glossaryTerm:rateofreturn" },\n  "extensions": {}\n}\n'))),(0,r.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/create_term.py\nimport logging\n\nfrom datahub.emitter.mce_builder import make_term_urn\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import GlossaryTermInfoClass\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\nterm_urn = make_term_urn("rateofreturn")\nterm_properties_aspect = GlossaryTermInfoClass(\n    definition="A rate of return (RoR) is the net gain or loss of an investment over a specified time period.",\n    name="Rate of Return",\n    termSource="",\n)\n\nevent: MetadataChangeProposalWrapper = MetadataChangeProposalWrapper(\n    entityUrn=term_urn,\n    aspect=term_properties_aspect,\n)\n\n# Create rest emitter\nrest_emitter = DatahubRestEmitter(gms_server="http://localhost:8080")\nrest_emitter.emit(event)\nlog.info(f"Created term {term_urn}")\n\n')))),(0,r.kt)("h3",{id:"expected-outcome-of-creating-terms"},"Expected Outcome of Creating Terms"),(0,r.kt)("p",null,"You can now see the new term ",(0,r.kt)("inlineCode",{parentName:"p"},"Rate of Return")," has been created."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"term-created",src:a(54309).Z,width:"1283",height:"462"})),(0,r.kt)("p",null,"We can also verify this operation by programmatically searching ",(0,r.kt)("inlineCode",{parentName:"p"},"Rate of Return")," term after running this code using the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," cli."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'datahub get --urn "urn:li:glossaryTerm:rateofreturn" --aspect glossaryTermInfo\n\n{\n  "glossaryTermInfo": {\n    "definition": "A rate of return (RoR) is the net gain or loss of an investment over a specified time period.",\n    "name": "Rate of Return",\n    "termSource": "INTERNAL"\n  }\n}\n')),(0,r.kt)("h2",{id:"read-terms"},"Read Terms"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'query {\n  dataset(urn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)") {\n    glossaryTerms {\n      terms {\n        term {\n          urn\n          glossaryTermInfo {\n            name\n            description\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"If you see the following response, the operation was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "dataset": {\n      "glossaryTerms": {\n        "terms": [\n          {\n            "term": {\n              "urn": "urn:li:glossaryTerm:CustomerAccount",\n              "glossaryTermInfo": {\n                "name": "CustomerAccount",\n                "description": "account that represents an identified, named collection of balances and cumulative totals used to summarize customer transaction-related activity over a designated period of time"\n              }\n            }\n          }\n        ]\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(s.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"query\": \"{dataset(urn: \\\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)\\\") {glossaryTerms {terms {term {urn glossaryTermInfo { name description } } } } } }\", \"variables\":{}}'\n")),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"data":{"dataset":{"glossaryTerms":{"terms":[{"term":{"urn":"urn:li:glossaryTerm:CustomerAccount","glossaryTermInfo":{"name":"CustomerAccount","description":"account that represents an identified, named collection of balances and cumulative totals used to summarize customer transaction-related activity over a designated period of time"}}}]}}},"extensions":{}}```\n'))),(0,r.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Coming Soon!")))),(0,r.kt)("h2",{id:"add-terms"},"Add Terms"),(0,r.kt)("p",null,"The following code shows you how can add terms to a dataset.\nIn the following code, we add a term ",(0,r.kt)("inlineCode",{parentName:"p"},"Legacy")," to a dataset named ",(0,r.kt)("inlineCode",{parentName:"p"},"fct_users_created"),"."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'mutation addTerms {\n    addTerms(\n      input: {\n        termUrns: ["urn:li:glossaryTerm:rateofreturn"],\n        resourceUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n        subResourceType:DATASET_FIELD,\n        subResource:"user_name"})\n}\n')),(0,r.kt)("p",null,"Note that you can also add a term on a dataset if you don't specify ",(0,r.kt)("inlineCode",{parentName:"p"},"subResourceType")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"subResource"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation addTerms {\n    addTerms(\n      input: {\n        termUrns: ["urn:li:glossaryTerm:rateofreturn"],\n        resourceUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n      }\n  )\n}\n')),(0,r.kt)("p",null,"If you see the following response, the operation was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "addTerms": true\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(s.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation addTerm { addTerms(input: { termUrns: [\\"urn:li:glossaryTerm:rateofreturn\\"], resourceUrn: \\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)\\" }) }", "variables":{}}\'\n')),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "data": { "addTerms": true }, "extensions": {} }\n'))),(0,r.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_add_term.py\nimport logging\nfrom typing import Optional\n\nfrom datahub.emitter.mce_builder import make_dataset_urn, make_term_urn\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\n\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import (\n    AuditStampClass,\n    GlossaryTermAssociationClass,\n    GlossaryTermsClass,\n)\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\n\n# First we get the current terms\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\ndataset_urn = make_dataset_urn(platform="hive", name="realestate_db.sales", env="PROD")\n\ncurrent_terms: Optional[GlossaryTermsClass] = graph.get_aspect(\n    entity_urn=dataset_urn, aspect_type=GlossaryTermsClass\n)\n\nterm_to_add = make_term_urn("Classification.HighlyConfidential")\nterm_association_to_add = GlossaryTermAssociationClass(urn=term_to_add)\n# an audit stamp that basically says we have no idea when these terms were added to this dataset\n# change the time value to (time.time() * 1000) if you want to specify the current time of running this code as the time\nunknown_audit_stamp = AuditStampClass(time=0, actor="urn:li:corpuser:ingestion")\nneed_write = False\nif current_terms:\n    if term_to_add not in [x.urn for x in current_terms.terms]:\n        # terms exist, but this term is not present in the current terms\n        current_terms.terms.append(term_association_to_add)\n        need_write = True\nelse:\n    # create a brand new terms aspect\n    current_terms = GlossaryTermsClass(\n        terms=[term_association_to_add],\n        auditStamp=unknown_audit_stamp,\n    )\n    need_write = True\n\nif need_write:\n    event: MetadataChangeProposalWrapper = MetadataChangeProposalWrapper(\n        entityUrn=dataset_urn,\n        aspect=current_terms,\n    )\n    graph.emit(event)\nelse:\n    log.info(f"Term {term_to_add} already exists, omitting write")\n\n')))),(0,r.kt)("h3",{id:"expected-outcome-of-adding-terms"},"Expected Outcome of Adding Terms"),(0,r.kt)("p",null,"You can now see ",(0,r.kt)("inlineCode",{parentName:"p"},"Legacy")," term has been added to ",(0,r.kt)("inlineCode",{parentName:"p"},"user_name")," column."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"term-added",src:a(42541).Z,width:"2374",height:"886"})),(0,r.kt)("h2",{id:"remove-terms"},"Remove Terms"),(0,r.kt)("p",null,"The following code remove a term from a dataset.\nAfter running this code, ",(0,r.kt)("inlineCode",{parentName:"p"},"Legacy")," term will be removed from a ",(0,r.kt)("inlineCode",{parentName:"p"},"user_name")," column."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation removeTerm {\n    removeTerm(\n      input: {\n        termUrn: "urn:li:glossaryTerm:rateofreturn",\n        resourceUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n        subResourceType:DATASET_FIELD,\n        subResource:"user_name"})\n}\n')),(0,r.kt)("p",null,"Note that you can also remove a term from a dataset if you don't specify ",(0,r.kt)("inlineCode",{parentName:"p"},"subResourceType")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"subResource"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation removeTerm {\n    removeTerm(\n      input: {\n        termUrn: "urn:li:glossaryTerm:rateofreturn",\n        resourceUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n      })\n}\n')),(0,r.kt)("p",null,"Also note that you can remove terms from multiple entities or subresource using ",(0,r.kt)("inlineCode",{parentName:"p"},"batchRemoveTerms"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation batchRemoveTerms {\n    batchRemoveTerms(\n      input: {\n        termUrns: ["urn:li:glossaryTerm:rateofreturn"],\n        resources: [\n          { resourceUrn:"urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)"} ,\n          { resourceUrn:"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)"} ,]\n      }\n    )\n}\n'))),(0,r.kt)(s.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation removeTerm { removeTerm(input: { termUrn: \\"urn:li:glossaryTerm:rateofreturn\\", resourceUrn: \\"urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)\\" }) }", "variables":{}}\'\n'))),(0,r.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Coming Soon!")))),(0,r.kt)("h3",{id:"expected-outcome-of-removing-terms"},"Expected Outcome of Removing Terms"),(0,r.kt)("p",null,"You can now see ",(0,r.kt)("inlineCode",{parentName:"p"},"Rate of Return")," term has been removed to ",(0,r.kt)("inlineCode",{parentName:"p"},"user_name")," column."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"term-removed",src:a(90809).Z,width:"2014",height:"904"})))}c.isMDXComponent=!0},42541:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/term-added-2bc33c01f5b8a731fc2f5805f65ca3e0.png"},54309:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/term-created-a09abaf0fac1a9c7bd090cca5731f9fe.png"},90809:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/term-removed-0508c0639c2467946e669060e5fbe14b.png"}}]);