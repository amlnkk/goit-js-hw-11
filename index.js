import{a as p,S as f,i as c}from"./assets/vendor-D8kWkXeg.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();function d(s){return p.get("https://pixabay.com/api/",{params:{key:"54827848-4d245c6c3f15ee40bb4986a25",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data)}const l=document.querySelector(".gallery"),y=new f(".gallery a");function m(s){const o=s.map(e=>`
            <li class="gallery-item">
            <a href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" title="">
            </a>
            <div class="info">
            <p>Likes  <span>${e.likes}</span></p> 
            <p>Views  <span>${e.views}</span></p> 
            <p>Comments  <span>${e.comments}</span></p> 
            <p>Downloads  <span>${e.downloads}</span></p> 
            </div> 
            </li>
        `).join("");l.insertAdjacentHTML("beforeend",o),y.refresh()}function h(){l.innerHTML=""}const u=document.querySelector(".loader");function g(){u.style.display="block"}function i(){u.style.display="none"}const L=document.querySelector(".form");L.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){c.error({message:"Please enter a search query!",position:"topRight"});return}h(),g(),d(o).then(e=>{if(e.hits.length===0){i(),c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(e.hits),i()}).catch(e=>{i(),console.log(e)})});
//# sourceMappingURL=index.js.map
