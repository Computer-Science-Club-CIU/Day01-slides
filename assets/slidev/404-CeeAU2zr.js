import{d as f,X as m,H as _,r as x,o as n,b as v,e as o,D as a,x as r,C as g,c as u,k as i,g as c}from"../modules/vue-8yl6fvjb.js";import{l as k,_ as h}from"../index-DeqJ9OV1.js";import"../modules/shiki-fILki0z0.js";const C={class:"grid justify-center text-center pt-15% gap-5"},N={class:"text-2xl"},y={class:"op-60"},B={class:"mt-3 flex flex-col gap-2 max-w-xs mx-auto w-full"},R=f({__name:"404",setup(w){const{currentRoute:l}=m(),{total:d}=k(),s=_(()=>{const t=l.value.path.match(/\d+/);if(t){const e=+t[0];if(e>0&&e<=d.value)return e}return null});return(p,t)=>{const e=x("RouterLink");return n(),v("div",C,[o("div",null,[t[2]||(t[2]=o("h1",{class:"text-9xl font-light"}," 404 ",-1)),o("p",N,[t[0]||(t[0]=a(" Page ")),o("code",y,r(g(l).path),1),t[1]||(t[1]=a(" not found "))])]),o("div",B,[s.value!==1?(n(),u(e,{key:0,to:"/",class:"page-link"},{default:i(()=>t[3]||(t[3]=[a(" Go Home ")])),_:1})):c("v-if",!0),s.value?(n(),u(e,{key:1,to:`/${s.value}`,class:"page-link"},{default:i(()=>[a(" Go to Slide "+r(s.value),1)]),_:1},8,["to"])):c("v-if",!0)])])}}}),G=h(R,[["__scopeId","data-v-2af184e6"]]);export{G as default};
