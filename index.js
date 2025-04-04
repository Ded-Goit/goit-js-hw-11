import{a as d,S as f,i}from"./assets/vendor-CsQrAiRy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m="49617866-877f488ac6d2fa69158bf0643",p="https://pixabay.com/api/";async function y(o){return(await d.get(p,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}const c=document.querySelector(".gallery");function g(o){const t=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:r,views:a,comments:l,downloads:u})=>`
    <li class="gallery-item">
      <a href="${n}">
        <img src="${s}" alt="${e}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${r}</p>
        <p><b>Views:</b> ${a}</p>
        <p><b>Comments:</b> ${l}</p>
        <p><b>Downloads:</b> ${u}</p>
      </div>
    </li>
  `).join("");c.innerHTML=t}function h(){c.innerHTML=""}function b(){document.querySelector(".loader").classList.remove("hidden")}function L(){document.querySelector(".loader").classList.add("hidden")}const w=new f(".gallery a"),S=document.querySelector(".form");S.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){i.error({message:"Please enter a search term!"});return}h(),b();try{const s=await y(t);s.length===0?i.warning({message:"Sorry, there are no images matching your search query. Please try again!"}):(g(s),w.refresh())}catch{i.error({message:"Something went wrong. Please try again later."})}finally{L(),o.target.reset()}});
//# sourceMappingURL=index.js.map
