"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[103],{505:(e,i,s)=>{s.d(i,{t:()=>t});s(43);var a=s(579);function t(e){let{title:i,children:s,data:t}=e;return(0,a.jsxs)("div",{className:"about_sections",children:[(0,a.jsx)("div",{className:"image",children:(0,a.jsx)("img",{src:t.image,alt:"worker"})}),(0,a.jsxs)("div",{className:"text_section",children:[i?(0,a.jsx)("h1",{className:"title col-rare",children:i}):"",(0,a.jsx)("h1",{children:t.title}),(0,a.jsx)("p",{children:t.description}),(0,a.jsx)("div",{className:"aboutCardChildren",children:s||""})]})]})}},386:(e,i,s)=>{s.d(i,{A:()=>t});s(43);var a=s(579);const t=function(){return(0,a.jsxs)("div",{className:"ContactHome",children:[(0,a.jsx)("h1",{className:"title col-rare",children:"contact us"}),(0,a.jsxs)("form",{action:"/api/user",method:"post",className:"ContactForm",children:[(0,a.jsxs)("span",{children:[(0,a.jsx)("input",{type:"text",placeholder:"First name*",required:!0,name:"firstName"}),(0,a.jsx)("input",{type:"text",placeholder:"last name",name:"lastName"})]}),(0,a.jsx)("input",{type:"tel",placeholder:"phone number*",required:!0,name:"phoneNo"}),(0,a.jsx)("input",{type:"email",placeholder:"email*",required:!0,name:"email"}),(0,a.jsx)("textarea",{type:"text",className:"message",placeholder:"message*",required:!0,name:"message"}),(0,a.jsx)("button",{className:"btn",type:"submit",onClick:e=>{e.preventDefault()},children:"submit"})]})]})}},538:(e,i,s)=>{s.d(i,{A:()=>n});s(43);var a=s(475),t=s(280),r=s(579);const c=e=>{let{image:i,title:s,description:t,link:c}=e;return(0,r.jsx)("div",{className:"project-card",children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{className:"card-image",style:{backgroundImage:`url(${i})`}}),(0,r.jsxs)("div",{className:"card-content",children:[(0,r.jsx)("h3",{children:s}),(0,r.jsx)("p",{children:t}),(0,r.jsx)(a.k2,{to:c,"aria-label":`page for ${c}`,className:"btn-p",children:"View Project"})]})]})})},n=()=>(0,r.jsx)("div",{className:"project-cards",children:t.map(((e,i)=>(0,r.jsx)(c,{image:e.image,title:e.title,description:e.description,link:`/project/${e.id}`},i)))})},908:(e,i,s)=>{s.d(i,{A:()=>r});s(43);var a=s(748),t=s(579);const r=function(e){let{heading:i,icon:s,body:r,children:c}=e;return(0,t.jsxs)("div",{className:"service_card",children:[(0,t.jsx)("h1",{children:i}),(0,t.jsx)(a.In,{icon:s||"mdi:hand-saw",width:120,className:"service_icon"}),(0,t.jsx)("p",{children:r}),(0,t.jsx)("div",{className:"children",children:c||""})]})}},2:(e,i,s)=>{s.r(i),s.d(i,{default:()=>j});s(43);var a=s(975),t=s(50);s(14),s(551);const r=JSON.parse('[{"image":"https://res.cloudinary.com/dbumvyukj/image/upload/v1725870937/jpmrxgxfnyv8fg9iopqc.webp","alt":"swiper_image","id":1},{"image":"https://res.cloudinary.com/dbumvyukj/image/upload/v1725870934/ai1jpwgrbqs1hsxtdlk2.webp","alt":"swiper_image","id":2},{"image":"https://res.cloudinary.com/dbumvyukj/image/upload/v1725870939/jqexfekpcd0shfe00mh7.webp","alt":"swiper_image","id":3}]');var c=s(579);const n=e=>{let{data:i}=e;return(0,c.jsxs)("div",{className:"swiper-container",children:[(0,c.jsx)(a.RC,{modules:[t.Ij,t.dK],loop:!0,pagination:{clickable:!0,el:".swiper-pagination",type:"bullets",bulletClass:"bullets",bulletActiveClass:"bullet-active"},spaceBetween:2,slidesPerView:1,className:"swiper",autoplay:{delay:3e3,disableOnInteraction:!1},children:r.map((e=>(0,c.jsx)(a.qr,{className:"slide",children:(0,c.jsx)("img",{src:e.image,alt:e.alt})},e.id)))}),(0,c.jsx)("div",{className:"swiper-pagination"})]})};const l=function(){return(0,c.jsxs)("div",{className:"hero",children:[(0,c.jsxs)("div",{className:"hero-text",children:[(0,c.jsx)("h1",{children:"Welcome To MBS Corporation"}),(0,c.jsx)("p",{children:"Your trusted building demolition contractors"})]}),(0,c.jsx)(n,{})]})};var o=s(505),d=s(475),m=s(908),u=s(386),p=s(538),h=s(129);const x=JSON.parse('[{"heading":"this is heading","body":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet rem, iste eos magni debitis! Consectetur magni quam vero nihil minus, veniam aut, quibusdam, fugit iusto voluptatum corporis iste atque. ","Home":true,"id":1},{"heading":"this is heading","body":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet rem, iste eos magni debitis! Consectetur magni quam vero nihil minus, veniam aut, quibusdam, fugit iusto voluptatum corporis iste atque. ","Home":true,"icon":"mdi:saw-blade","id":2},{"heading":"this is heading","body":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet rem, iste eos magni debitis! Consectetur magni quam vero nihil minus, veniam aut, quibusdam, fugit iusto voluptatum corporis iste atque. ","Home":true,"icon":"f7:hammer","id":3}]');const j=function(){return(0,c.jsxs)("div",{children:[(0,c.jsx)(l,{}),(0,c.jsxs)("div",{className:"home_about",children:[(0,c.jsx)("h1",{className:"title col-rare about_title",children:"about us"}),(0,c.jsxs)(o.t,{data:h[0],children:[(0,c.jsx)(d.k2,{className:"btn",to:"/contact","aria-label":"contact page",children:"get in touch"}),(0,c.jsx)(d.k2,{className:"btn",to:"/about","aria-label":"about page",children:"read more"})]})]}),(0,c.jsx)("hr",{}),(0,c.jsxs)("div",{className:"service-container",children:[(0,c.jsx)("h1",{className:"title col-rare",children:"our services"}),(0,c.jsx)("div",{className:"services",children:x.map((e=>e.Home?(0,c.jsx)(m.A,{heading:e.heading,body:e.body,icon:e.icon},e.id):""))})]}),(0,c.jsx)("hr",{}),(0,c.jsx)("div",{className:"home-gallery",children:(0,c.jsx)(p.A,{})}),(0,c.jsx)("hr",{}),(0,c.jsx)(u.A,{})]})}},129:e=>{e.exports=JSON.parse('[{"image":"https://res.cloudinary.com/dbumvyukj/image/upload/v1725870938/e2xz0jpgafrczc0es0f9.webp","title":"Experienced Demolition Experts","description":"With over 20 years of experience, we have successfully completed numerous demolition projects, earning a reputation for excellence and reliability in the industry","id":1},{"image":"https://res.cloudinary.com/dbumvyukj/image/upload/v1725870938/e2xz0jpgafrczc0es0f9.webp","title":"Experienced Demolition Experts","description":"With over 20 years of experience, we have successfully completed numerous demolition projects, earning a reputation for excellence and reliability in the industry","id":2}]')},280:e=>{e.exports=JSON.parse('[{"image":"https://res.cloudinary.com/dbumvyukj/image/upload/v1725870936/bakkvwxk3iva8xvooprf.webp","title":"Project 1","description":"This is a description for project 1.","details":"this is project details","id":1},{"image":"https://res.cloudinary.com/dbumvyukj/image/upload/v1725870936/bakkvwxk3iva8xvooprf.webp","title":"Project 2","description":"This is a description for project 2.","details":"this is project details","id":2}]')}}]);
//# sourceMappingURL=103.695bb5e2.chunk.js.map