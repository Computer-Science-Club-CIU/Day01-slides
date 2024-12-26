import{_ as d}from"./Mermaid.vue_vue_type_script_setup_true_lang-CEJnalAA.js";import{_ as o}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-vpSCjbL7.js";import{o as g,c as y,k as l,e as s,l as t,m as k,D as i,q as c,s as m,C as n}from"./modules/vue-8yl6fvjb.js";import{_ as A}from"./slidev/two-cols.vue_vue_type_script_setup_true_lang-CPU6M-UP.js";import{u,f as B}from"./slidev/context-DkKTJgAD.js";import"./index-DeqJ9OV1.js";import"./modules/shiki-fILki0z0.js";import"./modules/file-saver-CsNJ2AjR.js";import"./modules/unplugin-icons-CQ0FNBxQ.js";const C={class:"mt-4"},f={class:"mt-4"},R={__name:"slides.md__slidev_12",setup(_){const{$slidev:D,$nav:b,$clicksContext:h,$clicks:v,$page:$,$renderContext:F,$frontmatter:e}=u();return h.setup(),(P,a)=>{const p=o,r=d;return g(),y(A,c(m(n(B)(n(e),11))),{right:l(x=>[s("div",f,[a[2]||(a[2]=s("h2",null,"Pipeline Stages",-1)),t(r,k({"code-lz":"OYJwhgDgFgBAKgEQFA1TAggbQMIHsAmApjAAoCuAzlALowC0dAfDAEKYtkCWANvtSmhb0mMbJjiEKAF35pRw5gkwJCEbrgCeMKbhgBlKWGCcAdsFloECmAFFMASRNTCoMFM64T8SVIoXUNtYAYsqq6lo6pCAEZADG7p7UQA="},{scale:.7}),null,16)])]),default:l(()=>[a[3]||(a[3]=s("h1",null,"CI/CD Pipeline Implementation",-1)),s("div",C,[a[1]||(a[1]=s("h2",null,"GitHub Actions Workflow",-1)),t(p,k({},{ranges:[]}),{default:l(()=>a[0]||(a[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-yaml"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"name"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," CI/CD Pipeline")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"on"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  push"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"    branches"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ["),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," main"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"jobs"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"  build"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"    runs-on"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," ubuntu-latest")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"    steps"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    -"),s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," uses"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," actions/checkout@v2")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    -"),s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," name"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," Setup Node.js")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"      uses"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," actions/setup-node@v2")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    -"),s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," name"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," Install dependencies")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"      run"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," npm install")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    -"),s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," name"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," Run tests")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"      run"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," npm test")])])],-1)])),_:1},16)])]),_:1},16)}}};export{R as default};