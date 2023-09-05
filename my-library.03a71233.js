function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequired7c6=o);var a=o("9B8F0"),s=o("9dB6Q"),r=o("iCfuO"),c=o("gSWVZ"),l=o("KTnyM"),u=o("lm9xO"),d=o("7Y9D8");c.storage.signIn||window.location.replace("./index.html"),r.listButton.addEventListener("click",(function(t){const n=()=>{document.querySelector(".js-watched").classList.toggle("buttons__style--focus"),document.querySelector(".js-queue").classList.toggle("buttons__style--focus"),r.filmBoxRef.removeEventListener("click",m),r.filmBoxRef.removeEventListener("click",f)};if(t.target.classList.contains("js-watched"))(async()=>{u.spiner.start(),n();const t=await c.storage.getTwentyFromWatch();if(0===t.length)return r.filmBoxRef.innerHTML='<div style="width: 100%;"><img src="https://myron5.github.io/goit-js-hw-07/img-watch.jpg" style="width: 100%; object-fit: cover;"></div>',e(d).Notify.warning("🙈 You haven't watched films"),void u.spiner.stop();{(0,l.renderFilms)(t,r.filmBoxRef);const e=(0,l.pagination)(c.storage.getPageWatch(),c.storage.getMaxWatch());r.filmBoxRef.setAttribute("data-id","watch-gallery"),(0,l.renderPagination)(e,r.filmBoxRef),r.filmBoxRef.addEventListener("click",m),u.spiner.stop()}})();else{if(!t.target.classList.contains("js-queue"))return;(async()=>{u.spiner.start(),n();const t=await c.storage.getTwentyFromQueue();if(0===t.length)return r.filmBoxRef.innerHTML='<div style="width: 100%;"><img src="https://myron5.github.io/goit-js-hw-07/img-queue.jpg" style="width: 100%; object-fit: cover;"></div>',e(d).Notify.warning("🗃 You haven't queued films"),void u.spiner.stop();(0,l.renderFilms)(t,r.filmBoxRef),c.default.then((()=>{const e=(0,l.pagination)(c.storage.getPageQueue(),c.storage.getMaxQueue());r.filmBoxRef.setAttribute("data-id","queue-gallery"),(0,l.renderPagination)(e,r.filmBoxRef),r.filmBoxRef.addEventListener("click",f)})),u.spiner.stop()})()}}));function m(e){g(e,"watch")}function f(e){g(e,"queue")}async function g(t,n){if(!t.target.classList.contains("js-films-list")){r.filmBoxRef.removeEventListener("click",m),r.filmBoxRef.removeEventListener("click",f);try{const i=Number(t.target.closest(".movie_card").attributes.getNamedItem("js-id").value),o=await s.API.fetchById(i);if(!o)throw new Error("❌ Something go wrong, so we can`t load your film");const u=function(e,t){return a.create(e,{onShow:v,onClose:e=>{"watch"==t?r.filmBoxRef.addEventListener("click",m):r.filmBoxRef.addEventListener("click",f)}})}(function({poster_path:e,original_title:t,vote_average:n,vote_count:i,popularity:o,genres:a,overview:s},r){let c="",l="";"queue"==r?(c='<button class="movie__to-queue" type="button">Delete from Queue</button>',l='<button class="movie__watched" type="button">add to Watched</button>'):"watch"==r&&(c='<button class="movie__to-watched" type="button">Delete from Watched</button>',l='<button class="movie__queue" type="button">add to queue</button>');return`\n  <div class="modal">\n    <button class="button__modal" type="button">\n    </button>\n    <div class="movie__description-card">\n      <div class="div__movie-img" >\n        <img\n          class="movie__img"\n          src="https://image.tmdb.org/t/p/w500${e}"\n          alt="info of movie"\n        />\n      </div>\n      <div class="movie__desc">\n        <p class="movie__title">${t}</p>\n        <table class="movie__characters">\n          <tbody class="character__table">\n            <tr>\n              <td class="character">Vote / Votes</td>\n              <td class="character__item "><span class="vote">${n.toFixed(1)}</span><span class="vote__slash">/</span><span class="vote__grey">${i}</span></td>\n            </tr>\n            <tr>\n              <td class="character">Popularity</td>\n              <td class="character__item">${o.toFixed(1)}</td>\n            </tr>\n            <tr>\n              <td class="character">Original Title</td>\n              <td class="character__item">${t}</td>\n            </tr>\n            <tr>\n              <td class="character">Genre</td>\n              <td class="character__item">${a[0].name}</td>\n            </tr>\n          </tbody>\n        </table>\n        <p class="movie__about">About</p>\n        <p class="movie__about-description">\n        ${s}\n        </p>\n        <ul class="button__list">\n          <li class="button__item">${c}</li>\n          <li class="button__item">${l}</li>\n        </ul>\n        <button class="trailer-btn trailer-btn--mtzero" type="button">watch trailer</button>\n      </div>\n    </div>\n  </div>`}(o,n),n);u.show(),h(u),function(t,n,i){const o=document.querySelector(".movie__to-watched"),a=document.querySelector(".movie__to-queue"),s=i=>{(async()=>{i.preventDefault(),await c.storage.delFilmFromWatch(t);const o=await c.storage.getTwentyFromWatch();(0,l.renderFilms)(o,r.filmBoxRef);const a=(0,l.pagination)(c.storage.getPageWatch(),c.storage.getMaxWatch());if((0,l.renderPagination)(a,r.filmBoxRef),n.close(),0===o.length){document.querySelector(".pagination").innerHTML="",r.filmBoxRef.innerHTML='<div style="width: 100%;"><img src="https://myron5.github.io/goit-js-hw-07/img-watch.jpg" style="width: 100%; object-fit: cover;"></div>',e(d).Notify.warning("🙈 You haven't watched films")}})()},u=i=>{(async()=>{i.preventDefault(),await c.storage.delFilmFromQueue(t);const o=await c.storage.getTwentyFromQueue();(0,l.renderFilms)(o,r.filmBoxRef);const a=(0,l.pagination)(c.storage.getPageQueue(),c.storage.getMaxQueue());if((0,l.renderPagination)(a,r.filmBoxRef),n.close(),0===o.length){document.querySelector(".pagination").innerHTML="",r.filmBoxRef.innerHTML='<div style="width: 100%;"><img src="https://myron5.github.io/goit-js-hw-07/img-queue.jpg" style="width: 100%; object-fit: cover;"></div>',e(d).Notify.warning("🗃 You haven't queued films")}})()};"watch"==i?o.addEventListener("click",s):"queue"==i&&a.addEventListener("click",u)}(i,u,n),function(t,n,i){const o=document.querySelector(".movie__watched"),a=document.querySelector(".movie__queue"),s=t=>{t.preventDefault(),t.target.hasAttribute("js-disabled")?e(d).Notify.warning("🎬 Your film has already sucessfully been added"):(c.storage.addFilmToWatch(n),o.textContent="Moved to Watched",o.setAttribute("js-disabled",""))},r=t=>{t.preventDefault(),t.target.hasAttribute("js-disabled")?e(d).Notify.warning("🎬 Your film has already sucessfully been added"):(c.storage.addFilmToQueue(n),a.textContent="Moved to Queue",a.setAttribute("js-disabled",""))};"watch"==i?(async()=>{await c.storage.checkQueue(t)&&(a.textContent="Moved to Queue",a.setAttribute("js-disabled","")),a.addEventListener("click",r)})():"queue"==i&&(async()=>{await c.storage.checkWatched(t)&&(o.textContent="Moved to Watched",o.setAttribute("js-disabled","")),o.addEventListener("click",s)})()}(i,o,n);const g=document.querySelector(".trailer-btn");g.hidden=!0;const y=o.videos.results;y.length>0&&(y.every((e=>!e.type.includes("Trailer")))?g.hidden=!0:g.hidden=!1),g.addEventListener("click",(()=>{const e=y.find((e=>{if("Trailer"===e.type)return e})),t=(n=function({key:e}){return`<iframe\n  width="1141"\n  height="641"\n  src="https://www.youtube.com/embed/${e}"\n  frameborder="0"\n  allowfullscreen\n></iframe>\n  <button type="button" class="button__trailer--close"></button>`}(e),a.create(n,{onShow:v}));var n;t.show(),h(t)}))}catch(t){e(d).Notify.failure(t.message),console.log(t.message)}}}function h(e){const t=e.element().querySelector("button"),n=i=>{i.preventDefault(),e.close(),t.removeEventListener("click",n)};t.addEventListener("click",n)}function v(e){const t=n=>{if("Escape"!==n.code)return!1;e.close(),document.removeEventListener("keydown",t)};document.addEventListener("keydown",t)}document.querySelector(".js-queue").click();
//# sourceMappingURL=my-library.03a71233.js.map
