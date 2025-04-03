import{S as d,i,a as f}from"./assets/vendor-CtT2CgVQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m=document.querySelector(".form"),c=document.querySelector(".gallery"),p=new d(".gallery a");m.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){i.error({message:"Please enter a search term!"});return}h(),b();try{const s=await g(t);s.length===0?i.warning({message:"Sorry, there are no images matching your search query. Please try again!"}):(y(s),p.refresh())}catch{i.error({message:"Something went wrong. Please try again later."})}finally{L(),o.target.reset()}});async function g(o){return(await f.get("https://pixabay.com/api/",{params:{key:"49617866-877f488ac6d2fa69158bf0643",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}function y(o){const t=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:n,comments:l,downloads:u})=>`
    <li class="gallery-item">
      <a href="${a}">
        <img src="${s}" alt="${e}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${r}</p>
        <p><b>Views:</b> ${n}</p>
        <p><b>Comments:</b> ${l}</p>
        <p><b>Downloads:</b> ${u}</p>
      </div>
    </li>
  `).join("");c.innerHTML=t}function h(){c.innerHTML=""}function b(){console.log("🟡 Лоадер Показано"),document.querySelector(".loader").classList.remove("hidden")}function L(){console.log("✅ Лоадер Приховано"),document.querySelector(".loader").classList.add("hidden")}
//# sourceMappingURL=index.js.map
