"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7419],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6861:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],c={title:"Configuring Azure Authentication for React App (OIDC)",sidebar_label:"Configuring Azure Authentication for React App (OIDC)",slug:"/how/auth/sso/configure-oidc-react-azure",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/how/auth/sso/configure-oidc-react-azure.md"},l="Configuring Azure Authentication for React App (OIDC)",p={unversionedId:"docs/how/auth/sso/configure-oidc-react-azure",id:"docs/how/auth/sso/configure-oidc-react-azure",isDocsHomePage:!1,title:"Configuring Azure Authentication for React App (OIDC)",description:"Authored on 21/12/2021",source:"@site/genDocs/docs/how/auth/sso/configure-oidc-react-azure.md",sourceDirName:"docs/how/auth/sso",slug:"/how/auth/sso/configure-oidc-react-azure",permalink:"/docs/how/auth/sso/configure-oidc-react-azure",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/how/auth/sso/configure-oidc-react-azure.md",tags:[],version:"current",frontMatter:{title:"Configuring Azure Authentication for React App (OIDC)",sidebar_label:"Configuring Azure Authentication for React App (OIDC)",slug:"/how/auth/sso/configure-oidc-react-azure",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/how/auth/sso/configure-oidc-react-azure.md"},sidebar:"overviewSidebar",previous:{title:"Configuring Okta Authentication for React App (OIDC)",permalink:"/docs/how/auth/sso/configure-oidc-react-okta"},next:{title:"Restoring Search and Graph Indices from Local Database",permalink:"/docs/how/restore-indices"}},s=[{value:"Steps",id:"steps",children:[{value:"1. Create an application registration in Microsoft Azure portal",id:"1-create-an-application-registration-in-microsoft-azure-portal",children:[],level:3},{value:"2. Configure Authentication (optional)",id:"2-configure-authentication-optional",children:[],level:3},{value:"3. Configure Certificates &amp; secrets",id:"3-configure-certificates--secrets",children:[],level:3},{value:"4. Configure API permissions",id:"4-configure-api-permissions",children:[],level:3},{value:"5. Obtain Application (Client) ID",id:"5-obtain-application-client-id",children:[],level:3},{value:"6. Obtain Discovery URI",id:"6-obtain-discovery-uri",children:[],level:3},{value:"7. Configure <code>datahub-frontend</code> to enable OIDC authentication",id:"7-configure-datahub-frontend-to-enable-oidc-authentication",children:[],level:3},{value:"9. Restart <code>datahub-frontend-react</code> docker container",id:"9-restart-datahub-frontend-react-docker-container",children:[],level:3}],level:2},{value:"Resources",id:"resources",children:[],level:2}],u={toc:s};function d(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-azure-authentication-for-react-app-oidc"},"Configuring Azure Authentication for React App (OIDC)"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Authored on 21/12/2021")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"datahub-frontend")," server can be configured to authenticate users over OpenID Connect (OIDC). As such, it can be configured to\ndelegate authentication responsibility to identity providers like Microsoft Azure."),(0,a.kt)("p",null,"This guide will provide steps for configuring DataHub authentication using Microsoft Azure."),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("h3",{id:"1-create-an-application-registration-in-microsoft-azure-portal"},"1. Create an application registration in Microsoft Azure portal"),(0,a.kt)("p",null,"a. Using an account linked to your organization, navigate to the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Microsoft Azure Portal"),"."),(0,a.kt)("p",null,"b. Select ",(0,a.kt)("strong",{parentName:"p"},"App registrations"),", then ",(0,a.kt)("strong",{parentName:"p"},"New registration")," to register a new app."),(0,a.kt)("p",null,"c. Name your app registration and choose who can access your application."),(0,a.kt)("p",null,"d. Select ",(0,a.kt)("inlineCode",{parentName:"p"},"Web")," as the ",(0,a.kt)("strong",{parentName:"p"},"Redirect URI")," type and enter the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://your-datahub-domain.com/callback/oidc\n")),(0,a.kt)("p",null,"If you are just testing locally, the following can be used: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9002/callback/oidc"),".\nAzure supports more than one redirect URI, so both can be configured at the same time from the ",(0,a.kt)("strong",{parentName:"p"},"Authentication")," tab once the registration is complete."),(0,a.kt)("p",null,"At this point, your app registration should look like the following:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"azure-setup-app-registration",src:n(7254).Z})),(0,a.kt)("p",null,"e. Click ",(0,a.kt)("strong",{parentName:"p"},"Register"),"."),(0,a.kt)("h3",{id:"2-configure-authentication-optional"},"2. Configure Authentication (optional)"),(0,a.kt)("p",null,"Once registration is done, you will land on the app registration ",(0,a.kt)("strong",{parentName:"p"},"Overview")," tab.  On the left-side navigation bar, click on ",(0,a.kt)("strong",{parentName:"p"},"Authentication")," under ",(0,a.kt)("strong",{parentName:"p"},"Manage")," and add extra redirect URIs if need be (if you want to support both local testing and Azure deployments)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"azure-setup-authentication",src:n(1097).Z})),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."),(0,a.kt)("h3",{id:"3-configure-certificates--secrets"},"3. Configure Certificates & secrets"),(0,a.kt)("p",null,"On the left-side navigation bar, click on ",(0,a.kt)("strong",{parentName:"p"},"Certificates & secrets")," under ",(0,a.kt)("strong",{parentName:"p"},"Manage"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Select ",(0,a.kt)("strong",{parentName:"p"},"Client secrets"),", then ",(0,a.kt)("strong",{parentName:"p"},"New client secret"),".  Type in a meaningful description for your secret and select an expiry.  Click the ",(0,a.kt)("strong",{parentName:"p"},"Add")," button when you are done."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"IMPORTANT:")," Copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," of your newly create secret since Azure will never display its value afterwards."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"azure-setup-certificates-secrets",src:n(1570).Z})),(0,a.kt)("h3",{id:"4-configure-api-permissions"},"4. Configure API permissions"),(0,a.kt)("p",null,"On the left-side navigation bar, click on ",(0,a.kt)("strong",{parentName:"p"},"API permissions")," under ",(0,a.kt)("strong",{parentName:"p"},"Manage"),".  DataHub requires the following four Microsoft Graph APIs:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"User.Read")," ",(0,a.kt)("em",{parentName:"li"},"(should be already configured)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"profile")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"email")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"openid"))),(0,a.kt)("p",null,"Click on ",(0,a.kt)("strong",{parentName:"p"},"Add a permission"),", then from the ",(0,a.kt)("strong",{parentName:"p"},"Microsoft APIs")," tab select ",(0,a.kt)("strong",{parentName:"p"},"Microsoft Graph"),", then ",(0,a.kt)("strong",{parentName:"p"},"Delegated permissions"),".  From the ",(0,a.kt)("strong",{parentName:"p"},"OpenId permissions")," category, select ",(0,a.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"openid"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"profile")," and click ",(0,a.kt)("strong",{parentName:"p"},"Add permissions"),"."),(0,a.kt)("p",null,"At this point, you should be looking at a screen like the following:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"azure-setup-api-permissions",src:n(9784).Z})),(0,a.kt)("h3",{id:"5-obtain-application-client-id"},"5. Obtain Application (Client) ID"),(0,a.kt)("p",null,"On the left-side navigation bar, go back to the ",(0,a.kt)("strong",{parentName:"p"},"Overview")," tab.  You should see the ",(0,a.kt)("inlineCode",{parentName:"p"},"Application (client) ID"),". Save its value for the next step."),(0,a.kt)("h3",{id:"6-obtain-discovery-uri"},"6. Obtain Discovery URI"),(0,a.kt)("p",null,"On the same page, you should see a ",(0,a.kt)("inlineCode",{parentName:"p"},"Directory (tenant) ID"),". Your OIDC discovery URI will be formatted as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://login.microsoftonline.com/{tenant ID}/v2.0/.well-known/openid-configuration\n")),(0,a.kt)("h3",{id:"7-configure-datahub-frontend-to-enable-oidc-authentication"},"7. Configure ",(0,a.kt)("inlineCode",{parentName:"h3"},"datahub-frontend")," to enable OIDC authentication"),(0,a.kt)("p",null,"a. Open the file ",(0,a.kt)("inlineCode",{parentName:"p"},"docker/datahub-frontend/env/docker.env")),(0,a.kt)("p",null,"b. Add the following configuration values to the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'AUTH_OIDC_ENABLED=true\nAUTH_OIDC_CLIENT_ID=your-client-id\nAUTH_OIDC_CLIENT_SECRET=your-client-secret\nAUTH_OIDC_DISCOVERY_URI=https://login.microsoftonline.com/{tenant ID}/v2.0/.well-known/openid-configuration\nAUTH_OIDC_BASE_URL=your-datahub-url\nAUTH_OIDC_SCOPE="openid profile email groups"\n')),(0,a.kt)("p",null,"Replacing the placeholders above with the client id (step 5), client secret (step 3) and tenant ID (step 6) received from Microsoft Azure."),(0,a.kt)("h3",{id:"9-restart-datahub-frontend-react-docker-container"},"9. Restart ",(0,a.kt)("inlineCode",{parentName:"h3"},"datahub-frontend-react")," docker container"),(0,a.kt)("p",null,"Now, simply restart the ",(0,a.kt)("inlineCode",{parentName:"p"},"datahub-frontend-react")," container to enable the integration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker-compose -p datahub -f docker-compose.yml -f docker-compose.override.yml  up datahub-frontend-react\n")),(0,a.kt)("p",null,"Navigate to your DataHub domain to see SSO in action."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.okta.com/docs/concepts/oauth-openid/"},"OAuth 2.0 and OpenID Connect Overview"))))}d.isMDXComponent=!0},9784:function(e,t,n){t.Z=n.p+"assets/images/azure-setup-api-permissions-2bc77316ef87bc6a2f9c255f00db43ad.png"},7254:function(e,t,n){t.Z=n.p+"assets/images/azure-setup-app-registration-0ec7357c935126b7207448d71a643c26.png"},1097:function(e,t,n){t.Z=n.p+"assets/images/azure-setup-authentication-56be68fc3253362d0c558ec27d039ece.png"},1570:function(e,t,n){t.Z=n.p+"assets/images/azure-setup-certificates-secrets-6435713a5dc4c224a30742ce6b7dd0fc.png"}}]);