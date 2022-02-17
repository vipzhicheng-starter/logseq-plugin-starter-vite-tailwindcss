import{d as c,c as d,t as p,o as u,a as f}from"./vendor.71333f7e.js";const g=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};g();const m={class:"text-red-500 text-5xl font-bold"},y=c({setup(s){const o="hello world";return(l,r)=>(u(),d("div",m,p(o)))}});function a(){return{openModal(){logseq.showMainUI()}}}async function i(){a().openModal()}const h=async()=>{f(y).mount("#app"),logseq.provideModel(a()),logseq.Editor.registerSlashCommand("Test",i),logseq.Editor.registerBlockContextMenuItem("Test",i),logseq.App.registerUIItem("pagebar",{key:"logseq-plugin-starter-vite-tailwindcss-pagebar",template:`
      <a data-on-click="openModal" class="button" title="Open modal" style="font-size: 18px">
        P
      </a>
    `}),logseq.App.registerUIItem("toolbar",{key:"logseq-plugin-starter-vite-tailwindcss-toolbar",template:`
      <a class="button" data-on-click="openModal" title="Open modal" style="font-size: 18px">
        T
      </a>
    `}),document.addEventListener("click",s=>{logseq.hideMainUI()})};logseq.ready().then(h).catch(console.error);
