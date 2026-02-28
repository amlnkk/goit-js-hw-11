import{a as u,S as f,i}from"./assets/vendor-D8kWkXeg.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();function d(s){return u.get("https://pixabay.com/api/",{params:{key:"54827848-4d245c6c3f15ee40bb4986a25",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data)}const c=document.querySelector(".gallery"),m=new f(".gallery a");function y(s){const o=s.map(e=>`
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
        `).join("");c.insertAdjacentHTML("beforeend",o),m.refresh()}function h(){c.innerHTML=""}const p=document.querySelector(".loader");function g(){p.style.display="block"}function a(){p.style.display="none"}const L=document.querySelector(".form");L.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){i.error({message:"Please enter a search query!",position:"topRight"});return}h(),g(),d(o).then(e=>{if(e.hits.length===0){a(),i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(e.hits),a()}).catch(e=>{i.error({message:"Something went wrong. Please try again later.",position:"topRight"}),a(),console.log(e)})});
//# sourceMappingURL=index.js.map
