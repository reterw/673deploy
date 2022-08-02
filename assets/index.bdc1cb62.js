import{v as D,d as P,r as b,c as Y,u as q,a as z,b as L,e as x,f as o,g as e,h as y,F as w,i as S,o as l,t as f,j as H,w as K,p as W,k as X,l as B,m as $,n as Z,q as Q,s as ee,x as te,P as se,y as oe,z as le,A as ne,B as ie,C as re,D as ae,E as ce,G as de,H as ue,I as pe,J as ve,K as me}from"./vendor.7f1684ed.js";const he=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const v of c.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&u(v)}).observe(document,{childList:!0,subtree:!0});function i(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function u(r){if(r.ep)return;r.ep=!0;const c=i(r);fetch(r.href,c)}};he();const _e="100087b3bd25a77c425b",fe={}.VITE_HOST_URL,ye="https://602vote.azurewebsites.net/api/auth",be="https://github.com/login/oauth/authorize";let O=localStorage.getItem("device-id");if(!O){const t=D();localStorage.setItem("device-id",t),O=t}const E=P("user",()=>{const t=b(""),s=b(O),i=b(""),u=b(""),r=Y(()=>u.value.length>0),c=q();async function v(){console.log(`${c.code}`);const n=`${ye}?code=${c.code}&state=${O}`,a=await fetch(n,{mode:"cors"}),{userId:m,avatarUrl:p,accessToken:_}=await a.json();t.value=m,i.value=p,u.value=_}return c.code&&v(),{username:t,deviceId:s,avatarUrl:i,isLogined:r}}),ge=P("vote-topic",()=>{const t=b([]);async function s(){const n=E(),a=await(await fetch({}.VITE_VOTE_URL,{headers:{username:n.username}})).json();await Promise.all(a.map(async m=>{if(m.author!=="Anonymous"){const p=await fetch(`https://api.github.com/users/${m.author}`),{avatar_url:_}=await p.json();m.avatar=_}})),t.value=a}async function i(n,a){const m=E(),p={voteTopicId:n.id,voteChoiceId:a.id},_=await fetch({}.VITE_VOTE_URL,{method:"PUT",body:JSON.stringify(p),headers:{username:m.username},mode:"cors"}),{voteCount:d}=await _.json();a.voteCount=d,a.voted=!0}async function u(n){n.liked?n.liked=!1:n.liked=!0}async function r(n){n.saved=!n.saved}async function c(n){const a=E();await fetch({}.VITE_VOTE_URL,{method:"POST",body:JSON.stringify(n),headers:{username:a.username},mode:"cors"}),s()}async function v(n){const a=E();await fetch({}.VITE_VOTE_URL,{method:"DELETE",body:JSON.stringify({id:n.id}),headers:{username:a.username},mode:"cors"}),s()}return{refresh:s,votes:t,vote:i,like:u,save:r,create:c,remove:v}});var U=(t,s)=>{const i=t.__vccOpts||t;for(const[u,r]of s)i[u]=r;return i};const xe=z({setup(){let t=b([]),s=b(""),i=b("");const u=ge(),{push:r}=L();return{choices:t,choice:s,title:i,addChoice(){t.value.push(s.value),s.value!==""&&(s.value="")},deleteChoice(c){t.value.splice(t.value.indexOf(c),1)},submitVote(){u.create({title:i.value,choices:t.value,single:!1}),r("/")}}}}),$e={class:"mt-35 z-10"},ke={class:"flex flex-col w-full mt-10"},we={class:""},Se={class:"flex flex-col gap-2 text-xl mt-5 pt-10"},Ve={class:"flex items-center bg-dark-200 p-2 justify-between px-5 rounded-xl hover:cursor-pointer"},Ce={class:""},Te=["onClick"],Ee={class:"flex items-center pt-5 sm:flex-row flex-col sm:h-auto h-full"},Ue={class:"inline-flex"},Re=e("div",{class:"flex-grow"},null,-1),Ie=e("i",{class:"pi pi-check",style:{fontSize:"1.5rem"}},null,-1),ze=e("div",{class:""},"submit",-1),Le=[Ie,ze];function Oe(t,s,i,u,r,c){const v=x("InputText");return l(),o("div",$e,[e("div",ke,[e("div",we,[y(v,{placeholder:"title",type:"text",class:"bg-dark-200 w-full text-light-300 rounded-xl",modelValue:t.title,"onUpdate:modelValue":s[0]||(s[0]=n=>t.title=n)},null,8,["modelValue"])]),e("div",Se,[(l(!0),o(w,null,S(t.choices,(n,a)=>(l(),o("div",Ve,[e("div",Ce,f(a+1)+". "+f(n),1),e("i",{class:"pi pi-times",onClick:m=>t.deleteChoice(n)},null,8,Te)]))),256))]),e("div",Ee,[e("div",Ue,[y(v,{placeholder:"choice content",type:"text",class:"bg-dark-300 text-light-300 rounded-xl",modelValue:t.choice,"onUpdate:modelValue":s[1]||(s[1]=n=>t.choice=n)},null,8,["modelValue"]),e("i",{class:"pi pi-plus mx-5 my-5",style:{fontSize:"1.5rem"},onClick:s[2]||(s[2]=(...n)=>t.addChoice&&t.addChoice(...n))})]),Re,e("div",{class:"flex gap-4 items-center cursor-pointer flex-shrink hover:bg-dark-300 rounded-xl sm:p-2 p-5 md:w-30 sm:p",style:{fontSize:"1.5rem"},onClick:s[3]||(s[3]=(...n)=>t.submitVote&&t.submitVote(...n))},Le)])])])}var je=U(xe,[["render",Oe]]);const G=(t,s,i,u)=>{const r=s.value;t.addEventListener("mouseenter",()=>{r.hovered=!0}),t.addEventListener("mouseleave",()=>{r.hovered=!1})};function Be(){return H({hovered:!1})}const Ne=z({data(){return{items:[{label:"Survey",icon:"pi pi-fw pi-pencil",items:[{label:"Create Survey",icon:"pi pi-fw pi-plus",to:"/create-survey"},{label:"Survey List",icon:"pi pi-list",to:"/survey-list"}]}]}},props:{},directives:{hoverState:G},setup(){const t=Be();let s=b("pi pi-thumbs-up"),i=b(!1);const u=E(),{push:r}=L();return{createVote(){r("/create-vote")},test(){alert("success")},user:u,push:r,changeIcon(){console.log(i.value),i.value==!1?(s.value="pi pi-check",i=b(!0)):(s.value="pi pi-thumbs-up",i.value=!1)},login(){window.location.href=`${be}?client_id=${_e}&redirect_uri=${fe}&state=${O}`},state:t,iconName:s}}}),C=t=>(W("data-v-044874dc"),t=t(),X(),t),Ae={class:"h-full grid grid-cols-12 text-light-50"},Pe={header:"",class:"fixed z-10 grid grid-cols-12 w-full sm:p-3 p-0 h-25 bg-dark-900"},Fe=C(()=>e("div",{class:"px-2 col-span-2 flex gap-3 items-center"},[e("i",{class:"pi pi-bell",style:{fontSize:"2rem"}}),e("div",{class:"text-xl lg:block hidden"},"We Vote")],-1)),De={class:"col-start-4 col-span-6 flex justify-center"},Ge={class:"p-input-icon-left w-200 flex items-center"},Je=C(()=>e("i",{class:"pi pi-search",style:{fontSize:"1.5rem"}},null,-1)),Me={class:"col-start-10 col-span-3 flex justify-end gap-5 cursor-pointer p-2"},Ye=C(()=>e("i",{class:"pi pi-user",style:{fontSize:"1rem"}},null,-1)),qe=C(()=>e("div",{class:"text-xl lg:block hidden"},"login",-1)),He=[Ye,qe],Ke={key:1,class:"flex flex-row items-center gap-2 hover:bg-dark-300 rounded-xl p-2"},We={class:"text-xl lg:block hidden"},Xe=C(()=>e("div",null,null,-1)),Ze={sidebar:"",class:"lg:grid grid-cols-12 w-full mt-25 fixed"},Qe={class:"lg:col-start-2 lg:col-span-2 lg:p-0 col-span-1"},et={class:"pr-5 flex flex-col gap-5"},tt=C(()=>e("i",{class:"pi pi-home",style:{fontSize:"2rem"}},null,-1)),st=C(()=>e("div",{class:"text-2xl lg:block hidden"},"home",-1)),ot=[tt,st],lt=C(()=>e("i",{class:"pi pi-users",style:{fontSize:"2rem"}},null,-1)),nt=C(()=>e("div",{class:"text-2xl lg:block hidden"},"my page (can delete)",-1)),it=[lt,nt],rt=C(()=>e("i",{class:"pi pi-clone",style:{fontSize:"2rem"}},null,-1)),at=C(()=>e("div",{class:"text-2xl lg:block hidden"},"about app",-1)),ct=[rt,at],dt=C(()=>e("a",{class:"flex flex-row gap-5 items-center hover:bg-dark-300 rounded-xl cursor-pointer p-2",href:"https://github.com/reterw/vvote"},[e("i",{class:"pi pi-github",style:{fontSize:"2rem"}}),e("div",{class:"text-2xl lg:block hidden"},"Github")],-1));function ut(t,s,i,u,r,c){const v=x("InputText"),n=x("router-link"),a=x("Menubar"),m=x("Avatar"),p=x("router-view");return l(),o("div",Ae,[e("div",Pe,[Fe,e("span",De,[e("span",Ge,[Je,y(v,{type:"text",placeholder:"type search",class:"bg-dark-100 w-full rounded-xl"})])]),e("div",Me,[y(a,{class:"h-10 p-0 mt-2",model:t.items},{default:K(()=>[y(n,{to:t.item.to,custom:""},null,8,["to"])]),_:1},8,["model"]),t.user.isLogined?(l(),o("div",Ke,[y(m,{image:t.user.avatarUrl},null,8,["image"]),e("div",We,f(t.user.username),1)])):(l(),o("div",{key:0,class:"flex flex-row items-center gap-2 hover:bg-dark-300 rounded-xl p-2",onClick:s[0]||(s[0]=(..._)=>t.login&&t.login(..._))},He))]),Xe]),e("div",Ze,[e("div",Qe,[e("div",et,[e("div",{class:"flex flex-row gap-5 items-center hover:bg-dark-300 rounded-xl cursor-pointer p-2",onClick:s[1]||(s[1]=_=>t.push("/"))},ot),e("div",{class:"flex flex-row gap-5 items-center hover:bg-dark-300 rounded-xl cursor-pointer p-2",onClick:s[2]||(s[2]=_=>t.push("/admin-page"))},it),e("div",{class:"flex flex-row gap-5 items-center hover:bg-dark-300 rounded-xl cursor-pointer p-2",onClick:s[3]||(s[3]=_=>t.push("/about"))},ct),dt])])]),y(p,{content:"",class:"mt-15 flex justify-center lg:col-span-6 lg:col-start-4 col-span-10 col-start-3 px-5 relative"})])}var pt=U(Ne,[["render",ut],["__scopeId","data-v-044874dc"]]),vt="/vvote/assets/602azureFunction.108458b2.jpg",mt="/vvote/assets/cusmosdb.20fb6121.jpg",ht="/vvote/assets/RestEndpoints.e07d7642.jpg",_t="/vvote/assets/githuboauth.a63fa0b0.jpg",ft="/vvote/assets/homepage.de221722.jpg",yt="/vvote/assets/mypage.92fd3167.jpg",bt="/vvote/assets/createvote.8f7a5fd7.jpg",gt="/vvote/assets/createvote2.74145964.jpg",xt="/vvote/assets/vote1.fa7e193c.jpg",$t="/vvote/assets/vote2.f88f95ac.jpg",kt="/vvote/assets/votecount.7f2f5ad5.jpg",wt="/vvote/assets/votehistory.bab89b62.jpg",St="/vvote/assets/restapi.bde22f86.jpg";const Vt={},Ct={class:"grid"},Tt=e("br",null,null,-1),Et=e("div",null,[e("div",null,[e("br"),e("label",{class:"text-6xl"},"Some details about this app"),e("br"),e("label",{class:"text-4xl"},"Azure function"),e("br"),e("label",{class:"text-2xl"},"My Server-Side functionality has been deployed on Microsoft Azure server"),e("br"),e("img",{src:vt}),e("label",{class:"text-4xl"},"Persistence"),e("br"),e("label",{class:"text-2xl"},"Im using CusmosDB provide by Azure to save my data, which also share the Mongo API"),e("br"),e("img",{src:mt}),e("label",{class:"text-4xl"},"Rest API endpoints"),e("br"),e("a",{class:"text-3xl text-yellow-200",href:"https://602vote.azurewebsites.net/api/vote"},"https://602vote.azurewebsites.net/api/vote"),e("img",{src:ht}),e("label",{class:"text-4xl"},"Log in with github Oauth"),e("br"),e("br"),e("img",{src:_t}),e("label",{class:"text-4xl"},"Home Page render all user's vote together, and the vote box does not have delete button"),e("br"),e("br"),e("img",{src:ft}),e("label",{class:"text-4xl"},"my page is for admin, after you login , you can render the vote create by you, and also delete them by click the button."),e("br"),e("br"),e("img",{src:yt}),e("label",{class:"text-4xl"},"for create vote, enter the title of the vote problem, and enter choice of it, then click submit."),e("br"),e("br"),e("img",{src:bt}),e("img",{src:gt}),e("label",{class:"text-4xl"},"click thumb to vote your choice."),e("br"),e("br"),e("img",{src:xt}),e("img",{src:$t}),e("label",{class:"text-4xl"},"vote count will change in data base, and each prople's vote are recorded."),e("br"),e("br"),e("img",{src:kt}),e("img",{src:wt}),e("label",{class:"text-4xl"},"using delete, get, post and put methods."),e("br"),e("br"),e("img",{src:St})])],-1),Ut=[Tt,Et];function Rt(t,s){return l(),o("div",Ct,Ut)}var It=U(Vt,[["render",Rt]]);const F=P("survey-store",()=>{const t=b([]),s=b([]);async function i(a){return await(await fetch({}.VITE_CREATE_SURVEY_URL,{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"},mode:"cors"})).json()}async function u(){return t.value=await(await fetch({}.VITE_GET_SURVEY_URL,{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"})).json(),console.log(t,233),t}async function r(){return s.value=await(await fetch({}.VITE_SURVEY_RESULT_URL,{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"})).json(),console.log(s,233),s}async function c(a){await fetch({}.VITE_FILL_IN_SURVEY_URL,{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"},mode:"cors"})}async function v(a){await(await fetch({}.VITE_GET_SURVEY_BY_USER_ID_URL+"&user_id="+a.user_id,{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"})).json()}async function n(a){await fetch({}.VITE_DELETE_SURVEY_BY_ID_URL+"&questionnaire_id="+a.questionnaire_id,{method:"POST",headers:{"Content-Type":"application/json"},mode:"cors"})}return{createSurvey:i,getAllSurveys:u,surveyForm:t,getAllSurveysResult:r,surveyResult:s,submitSurvey:c,getSurveyByUserId:v,deleteSurveyById:n}}),zt=z({setup(){const{username:t}=E();B(()=>{t||(window.alert("Please login to create survey!"),n("/"))});const s=[{name:"Survey Name",value:-1},{name:"Single",value:0},{name:"Multiple",value:1},{name:"Input",value:2}],i=b(null);let u=b([]),r=b(""),c=b("");const v=F(),{push:n}=L();let a=b([]);return{types:s,selectedType:i,choices:u,choice:r,title:c,surveyList:a,addChoice(){!r.value||(u.value.push(r.value),r.value!==""&&(r.value=""))},deleteChoice(m){u.value.splice(u.value.indexOf(m),1)},addSurveyList(){var p,_,d,T,g;const m=a.value.filter(R=>R.type===-1);!c.value||(((p=i==null?void 0:i.value)==null?void 0:p.value)===0||((_=i==null?void 0:i.value)==null?void 0:_.value)===1)&&u.value.length===0||m.length>0&&((d=i==null?void 0:i.value)==null?void 0:d.value)===-1||a.value.length===0&&((T=i==null?void 0:i.value)==null?void 0:T.value)!==-1||(a.value.push({id:D(),type:JSON.parse(JSON.stringify((g=i==null?void 0:i.value)==null?void 0:g.value)),title:JSON.parse(JSON.stringify(c.value)),content:JSON.parse(JSON.stringify(u.value)),checked:!1,inputText:"",selectedChoices:[]}),c.value="",u.value.splice(0,u.value.length))},deleteSurveyList(m){a.value.splice(a.value.indexOf(m),1)},async createSurvey(){var _;const m=[];a.value.map(d=>{d.type!==-1&&m.push({title:d.title,type:d.type,options:d.content})});const p=await v.createSurvey({user_id:t,name:(_=a.value.filter(d=>d.type===-1)[0])==null?void 0:_.title,items:m});n("/survey/"+p._id)}}}}),Lt={class:"mt-35 z-10",style:{"z-index":"1"}},Ot={class:"flex flex-col w-full mt-10"},jt={class:"inline-flex items-center mb-10"},Bt=e("div",{class:"mr-5"},"Please choose a type",-1),Nt={key:0},At={class:"flex flex-col gap-2 text-xl pt-10"},Pt={class:""},Ft=["onClick"],Dt={key:1,class:"flex items-center pt-5 sm:flex-row flex-col sm:h-auto w-full h-full"},Gt={class:"inline-flex w-full"},Jt={key:2,class:"flex gap-1 items-center cursor-pointer flex-shrink rounded-xl sm:p-2 p-5 md:w-40 sm:p mt-10 place-self-end",style:{fontSize:"1.5rem"}},Mt={class:"flex flex-col gap-2 text-xl mt-5 pt-10"},Yt={class:"flex-row mb-15 border-b-1 border-indigo-200"},qt={class:"flex justify-between mb-10"},Ht={key:0,class:"w-full mb-20 text-center",style:{fontSize:"3rem"}},Kt={key:1,class:"grow"},Wt=["onClick"],Xt={key:0},Zt={class:"flex justify-between mb-10"},Qt={class:"flex-none mr-5",style:{fontSize:"2rem"}},es={class:"grow"},ts=["onClick"],ss={class:"flex mb-10"},os={key:0,class:"cursor-pointer field-radiobutton",style:{"line-height":"1"}},ls=["for"],ns={key:1,class:"cursor-pointer field-checkbox",style:{"line-height":"1"}},is=["for"],rs={key:0,class:"flex"},as={key:3,class:"mb-40 place-self-end",style:{fontSize:"1.5rem"}};function cs(t,s,i,u,r,c){var d,T,g,R,I;const v=x("Dropdown"),n=x("InputText"),a=x("Button"),m=x("RadioButton"),p=x("Checkbox"),_=x("Textarea");return l(),o("div",Lt,[e("div",Ot,[e("div",jt,[Bt,y(v,{modelValue:t.selectedType,"onUpdate:modelValue":s[0]||(s[0]=h=>t.selectedType=h),options:t.types,optionLabel:"name",placeholder:"--Type--"},null,8,["modelValue","options"])]),((d=t.selectedType)==null?void 0:d.value)>-2?(l(),o("div",Nt,[y(n,{placeholder:"title",type:"text",class:"bg-dark-200 w-full text-light-300 rounded-xl",modelValue:t.title,"onUpdate:modelValue":s[1]||(s[1]=h=>t.title=h)},null,8,["modelValue"])])):$("",!0),e("div",At,[(l(!0),o(w,null,S(t.choices,(h,N)=>(l(),o("div",{key:h,class:"flex items-center bg-dark-200 p-2 justify-between px-5 rounded-xl hover:cursor-pointer"},[e("div",Pt,f(N+1)+". "+f(h),1),e("i",{class:"pi pi-times",onClick:V=>t.deleteChoice(h)},null,8,Ft)]))),128))]),((T=t.selectedType)==null?void 0:T.value)===0||((g=t.selectedType)==null?void 0:g.value)===1?(l(),o("div",Dt,[e("div",Gt,[y(n,{placeholder:"choice content",type:"text",class:"bg-dark-300 w-full text-light-300 rounded-xl",modelValue:t.choice,"onUpdate:modelValue":s[2]||(s[2]=h=>t.choice=h)},null,8,["modelValue"]),e("i",{class:"pi pi-plus mx-5 my-5 hover:bg-dark-200 cursor-pointer",style:{fontSize:"1.5rem"},onClick:s[3]||(s[3]=(...h)=>t.addChoice&&t.addChoice(...h))})])])):$("",!0),((R=t.selectedType)==null?void 0:R.value)>-2?(l(),o("div",Jt,[y(a,{onClick:t.addSurveyList,class:"md:w-40",label:"Add"},null,8,["onClick"])])):$("",!0),e("div",Mt,[(l(!0),o(w,null,S(t.surveyList,(h,N)=>(l(),o("div",Yt,[e("div",qt,[h.type===-1?(l(),o("div",Ht,f(h.title),1)):$("",!0),h.type===-1?(l(),o("div",Kt,[e("i",{style:{fontSize:"1.5rem"},class:"pi pi-times cursor-pointer hover:bg-dark-300",onClick:V=>t.deleteSurveyList(h)},null,8,Wt)])):$("",!0)]),h.type!==-1?(l(),o("div",Xt,[e("div",Zt,[e("div",Qt,f(N)+". "+f(h.title),1),e("div",es,[e("i",{style:{fontSize:"1.5rem"},class:"pi pi-times cursor-pointer hover:bg-dark-300",onClick:V=>t.deleteSurveyList(h)},null,8,ts)])]),(l(!0),o(w,null,S(h.content,(V,Ys)=>(l(),o("div",ss,[h.type===0?(l(),o("div",os,[y(m,{class:"mr-2 pb-5",value:V,id:"singleOption"+V,name:h.title,modelValue:h.checked,"onUpdate:modelValue":A=>h.checked=A},null,8,["value","id","name","modelValue","onUpdate:modelValue"]),e("label",{for:"singleOption"+V},f(V),9,ls)])):$("",!0),h.type===1?(l(),o("div",ns,[y(p,{class:"mr-2 pb-5",value:V,id:"multiOption"+V,name:h.title,modelValue:h.selectedChoices,"onUpdate:modelValue":A=>h.selectedChoices=A},null,8,["value","id","name","modelValue","onUpdate:modelValue"]),e("label",{for:"multiOption"+V},f(V),9,is)])):$("",!0)]))),256)),h.type===2?(l(),o("div",rs,[y(_,{autoResize:!0,class:"mb-10 w-full",modelValue:h.inputText,"onUpdate:modelValue":V=>h.inputText=V,rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])])):$("",!0)])):$("",!0)]))),256))]),((I=t.surveyList)==null?void 0:I.length)>1?(l(),o("div",as,[y(a,{onClick:t.createSurvey,class:"md:w-40",label:"Create"},null,8,["onClick"])])):$("",!0)])])}var ds=U(zt,[["render",cs]]);const us=z({setup(){const{push:t}=L();let s=b([]);return B(async()=>{const i=await(await fetch({}.VITE_SURVEY_RESULT_URL,{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"})).json();s.value=JSON.parse(JSON.stringify(i.reverse()))}),{surveyResult:s,navigateToSurvey(i){t("/survey/"+i)}}}}),ps={class:"mt-35 z-10 flex flex-col w-full",style:{"z-index":"1"}},vs=["onClick"],ms=e("div",{class:"mb-10",style:{fontSize:"1.5rem"}}," Q: ",-1),hs={class:"mb-5"},_s={class:"mt-10 mb-10",style:{fontSize:"1.5rem"}};function fs(t,s,i,u,r,c){return l(),o("div",ps,[(l(!0),o(w,null,S(t.surveyResult,v=>(l(),o("div",{key:v._id,class:"mt-20 bg-dark-900 border-1 border-dark-100 mb-20 rounded-3xl p-10"},[e("div",{class:"pb-5 w-full text-blue-400 cursor-pointer border-dark-100 border-b-1 text-center hover:underline",onClick:n=>t.navigateToSurvey(v._id),style:{fontSize:"2rem"}},f(v.name),9,vs),(l(!0),o(w,null,S(v.items,n=>(l(),o("div",{key:n.title,class:"mt-10 border-dark-100 border-b-1"},[ms,e("div",hs,f(n.title),1),(l(!0),o(w,null,S(n.options,a=>(l(),o("div",{class:"mb-5",key:a},f(a),1))),128))]))),128)),(l(!0),o(w,null,S(v.answers,(n,a)=>(l(),o("div",{key:n._id,class:"mt-10 border-dark-100 border-b-1"},[e("div",_s," A"+f(a+1)+": ",1),(l(!0),o(w,null,S(n.answerItems,m=>(l(),o("div",{key:m.answer,class:"mb-5 pb-5 border-dark-600 border-b-1"},f(m.answer),1))),128))]))),128))]))),128))])}var J=U(us,[["render",fs]]),j;(function(t){t[t.SingleChoice=0]="SingleChoice",t[t.MultipleChoice=1]="MultipleChoice",t[t.BlankFill=2]="BlankFill"})(j||(j={}));const ys=z({setup(){const{push:t,currentRoute:s}=L(),{submitSurvey:i}=F();let u=b([]);return B(async()=>{const r=await(await fetch({}.VITE_GET_SURVEY_URL,{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"})).json();u.value=r.filter(c=>c._id===s.value.params.id)}),{surveyForm:u,async submitForm(){const r=u.value,c=[];r[0].items.map(n=>{n.type===j.SingleChoice?c.push({answer:n.checked}):n.type===j.MultipleChoice?c.push({answer:n.selectedChoices.join()}):n.type===j.BlankFill&&c.push({answer:n.inputText})});const v={questionnaire_id:s.value.params.id.toString(),answerItems:c};await i(v),t("/survey-list")}}}}),bs={class:"mt-35 z-10 flex flex-col w-full",style:{"z-index":"1"}},gs={class:"w-full mb-20 pb-10 text-center border-b-1 border-indigo-200",style:{fontSize:"3rem"}},xs={class:"flex flex-col gap-2 text-xl mt-5 pt-10"},$s={class:"w-full mb-10",style:{fontSize:"1.5rem"}},ks={key:0},ws={key:0,class:"cursor-pointer field-radiobutton",style:{"line-height":"1"}},Ss=["for"],Vs={key:1,class:"cursor-pointer field-checkbox",style:{"line-height":"1"}},Cs=["for"],Ts={key:0,class:"flex"},Es={key:0,class:"mb-40 place-self-end",style:{fontSize:"1.5rem"}};function Us(t,s,i,u,r,c){var p;const v=x("RadioButton"),n=x("Checkbox"),a=x("Textarea"),m=x("Button");return l(),o("div",bs,[(l(!0),o(w,null,S(t.surveyForm,_=>(l(),o("div",{key:_._id,class:"mt-20 bg-dark-900 border-1 border-dark-100 mb-20 rounded-3xl p-10"},[e("div",gs,f(_.name),1),e("div",xs,[(l(!0),o(w,null,S(_.items,(d,T)=>(l(),o("div",{key:T,class:"flex-row mb-15 border-b-1 border-indigo-200"},[e("div",$s,f(d.title),1),d.type!==-1?(l(),o("div",ks,[(l(!0),o(w,null,S(d.options,(g,R)=>(l(),o("div",{class:"flex mb-10",key:R},[d.type===0?(l(),o("div",ws,[y(v,{class:"mr-2 pb-5",value:g,id:"singleOption"+g,name:d.title,modelValue:d.checked,"onUpdate:modelValue":I=>d.checked=I},null,8,["value","id","name","modelValue","onUpdate:modelValue"]),e("label",{for:"singleOption"+g},f(g),9,Ss)])):$("",!0),d.type===1?(l(),o("div",Vs,[y(n,{class:"mr-2 pb-5",value:g,id:"multiOption"+g,name:d.title,modelValue:d.selectedChoices,"onUpdate:modelValue":I=>d.selectedChoices=I},null,8,["value","id","name","modelValue","onUpdate:modelValue"]),e("label",{for:"multiOption"+g},f(g),9,Cs)])):$("",!0)]))),128)),d.type===2?(l(),o("div",Ts,[y(a,{autoResize:!0,class:"mb-10 w-full",modelValue:d.inputText,"onUpdate:modelValue":g=>d.inputText=g,rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])])):$("",!0)])):$("",!0)]))),128))])]))),128)),((p=t.surveyForm)==null?void 0:p.length)>0?(l(),o("div",Es,[y(m,{onClick:t.submitForm,class:"md:w-40",label:"Submit"},null,8,["onClick"])])):$("",!0)])}var Rs=U(ys,[["render",Us]]);const Is=z({setup(){const{go:t,push:s}=L(),{deleteSurveyById:i}=F(),{username:u}=E();let r=b([]);const c=async()=>await(await fetch({}.VITE_GET_SURVEY_BY_USER_ID_URL+"&user_id="+u,{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"})).json();return B(async()=>{u||(window.alert("Please login to delete survey!"),s("/")),r.value=await c()}),{async deleteSurvey(v){window.confirm("Are you sure to delete this survey?")&&(await i({questionnaire_id:v}),r.value=await c())},surveyForm:r}}}),zs={class:"mt-35 z-10 flex flex-col w-full",style:{"z-index":"1"}},Ls={class:"w-full mb-20 pb-10 text-center border-b-1 border-indigo-200",style:{fontSize:"3rem"}},Os=["onClick"],js={class:"flex flex-col gap-2 text-xl mt-5 pt-10"},Bs={class:"w-full mb-10",style:{fontSize:"1.5rem"}},Ns={key:0},As={key:0,class:"cursor-pointer field-radiobutton",style:{"line-height":"1"}},Ps=["for"],Fs={key:1,class:"cursor-pointer field-checkbox",style:{"line-height":"1"}},Ds=["for"],Gs={key:0,class:"flex"};function Js(t,s,i,u,r,c){const v=x("RadioButton"),n=x("Checkbox"),a=x("Textarea");return l(),o("div",zs,[(l(!0),o(w,null,S(t.surveyForm,m=>(l(),o("div",{key:m._id,class:"mt-20 bg-dark-900 border-1 border-dark-100 mb-20 rounded-3xl p-10"},[e("div",Ls,[Z(f(m.name)+" ",1),e("i",{class:"pi pi-times cursor-pointer mt-7",onClick:p=>t.deleteSurvey(m._id),style:{fontSize:"2rem",float:"right"}},null,8,Os)]),e("div",js,[(l(!0),o(w,null,S(m.items,(p,_)=>(l(),o("div",{key:_,class:"flex-row mb-15 border-b-1 border-indigo-200"},[e("div",Bs,f(p.title),1),p.type!==-1?(l(),o("div",Ns,[(l(!0),o(w,null,S(p.options,(d,T)=>(l(),o("div",{class:"flex mb-10",key:T},[p.type===0?(l(),o("div",As,[y(v,{class:"mr-2 pb-5",value:d,id:"singleOption"+d,name:p.title,modelValue:p.checked,"onUpdate:modelValue":g=>p.checked=g},null,8,["value","id","name","modelValue","onUpdate:modelValue"]),e("label",{for:"singleOption"+d},f(d),9,Ps)])):$("",!0),p.type===1?(l(),o("div",Fs,[y(n,{class:"mr-2 pb-5",value:d,id:"multiOption"+d,name:p.title,modelValue:p.selectedChoices,"onUpdate:modelValue":g=>p.selectedChoices=g},null,8,["value","id","name","modelValue","onUpdate:modelValue"]),e("label",{for:"multiOption"+d},f(d),9,Ds)])):$("",!0)]))),128)),p.type===2?(l(),o("div",Gs,[y(a,{autoResize:!0,class:"mb-10 w-full",modelValue:p.inputText,"onUpdate:modelValue":d=>p.inputText=d,rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])])):$("",!0)])):$("",!0)]))),128))])]))),128))])}var Ms=U(Is,[["render",Js]]);const M=Q({history:ee(),routes:[{path:"/create-vote",component:je},{path:"/",component:J},{path:"/about",component:It},{path:"/admin-page",component:Ms},{path:"/create-survey",component:ds},{path:"/survey-list",component:J},{path:"/survey/:id",component:Rs}]});M.afterEach((t,s,i)=>{document.querySelector("body").setAttribute("style","overflow: auto !important;")});const k=te(pt);k.use(M);k.use(se);k.directive("hover",G);k.component("chips",oe);k.component("Button",le);k.component("InputText",ne);k.component("Fieldset",ie);k.component("Checkbox",re);k.component("Avatar",ae);k.component("SpeedDial",ce);k.component("Dropdown",de);k.component("RadioButton",ue);k.component("Textarea",pe);k.component("Menubar",ve);k.use(me());k.mount("#app");