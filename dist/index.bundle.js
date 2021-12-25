(()=>{"use strict";var t,e,n,r,a,o={181:(t,e,n)=>{n.d(e,{d:()=>a,I:()=>r});const r={pageNo:1,numOfRows:10,upkind:"",upr_cd:"",org_cd:"",state:"",bgnde:"",endde:""},a=async t=>{const e=await(async({pageNo:t,numOfRows:e,upkind:n,upr_cd:r,org_cd:a,state:o,bgnde:s,endde:c})=>{try{return(await fetch(`/api/lost-pets?upr_cd=${r}&org_cd=${a}&upkind=${n}&state=${o}&pageNo=${t}&numOfRows=${e}&bgnde=${s}&endde=${c}`)).json()}catch(t){console.log(t)}})(t),[n,r]=(t=>{const{items:{item:e},totalCount:n}=t;return[e,n]})(e);return[n,r]}},103:(t,e,n)=>{n.a(t,(async t=>{var e=n(181),r=n(105),a=n(346),o=t([a]);a=(o.then?await o:o)[0];const s="showing",c=document.querySelector(".slider__item:first-child");function d(){const t=document.querySelector(".showing");if(t){t.classList.remove(s);const e=t.nextElementSibling;e?e.classList.add(s):c.classList.add(s)}else c.classList.add(s)}d(),setInterval(d,2e3),a.l;let[i,l]=await(0,e.d)({...e.I,numOfRows:6});(0,r.l)(i),t()}),1)},346:(t,e,n)=>{n.a(t,(async t=>{n.d(e,{l:()=>h});var r=n(181);const a=t=>`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,[o,s]=(()=>{let t=new Date,e=new Date;return t.setDate(e.getDate()-1),e=a(e),t=a(t),[e,t]})();r.I.bgnde=s,r.I.endde=o;let[c,d]=await(0,r.d)(r.I),[i,l]=await(0,r.d)({...r.I,upkind:"417000"}),[p,u]=await(0,r.d)({...r.I,upkind:"422400"}),[b,m]=await(0,r.d)({...r.I,upkind:"429900"});const _=document.querySelector(".news__description"),f=document.getElementById("myChart"),g=[l,u,m];_.innerHTML=`\n오늘은<br>\n<span style="color: var(--main-color-orange)">${d}</span>마리의 반려동물이<br>\n가족을 기다리고 있습니다.<br>\n새로운 가족이 되어주세요!<br>\n`;const h=new Chart(f,{type:"doughnut",options:{responsive:!1,plugins:{title:{display:!0,text:"오늘 접수된 유기동물 현황"}}},data:{labels:["강아지","고양이","기타"],datasets:[{label:"Lost Pets Dataset",data:g,backgroundColor:["#ecbb7f","#a48772","#a47272"],hoverOffset:4}]}});t()}),1)},105:(t,e,n)=>{n.d(e,{l:()=>a});const r=t=>{const{desertionNo:e,popfile:n,kindCd:r,sexCd:a}=t;return`\n        <div class="board__content">\n          <a href="/lostPets/${e}">\n            <img\n                class="board__img"\n                src="${n}"\n                alt=""\n            />\n            <h4 class="content__title">${r} / ${a}</h4>\n          </a>\n        </div>\n  `},a=t=>{const e=t.map(r);document.querySelector(".board__save .board__contentsBox").innerHTML=e.join("")}}},s={};function c(t){var e=s[t];if(void 0!==e)return e.exports;var n=s[t]={exports:{}};return o[t](n,n.exports,c),n.exports}t="function"==typeof Symbol?Symbol("webpack then"):"__webpack_then__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n=t=>{t&&(t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},r=t=>!--t.r&&t(),a=(t,e)=>t?t.push(e):r(e),c.a=(o,s,c)=>{var d,i,l,p=c&&[],u=o.exports,b=!0,m=!1,_=(e,n,r)=>{m||(m=!0,n.r+=e.length,e.map(((e,a)=>e[t](n,r))),m=!1)},f=new Promise(((t,e)=>{l=e,i=()=>(t(u),n(p),p=0)}));f[e]=u,f[t]=(t,e)=>{if(b)return r(t);d&&_(d,t,e),a(p,t),f.catch(e)},o.exports=f,s((o=>{if(!o)return i();var s,c;d=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[t])return o;if(o.then){var s=[];o.then((t=>{c[e]=t,n(s),s=0}));var c={};return c[t]=(t,e)=>(a(s,t),o.catch(e)),c}}var d={};return d[t]=t=>r(t),d[e]=o,d})))(o);var l=new Promise(((t,n)=>{(s=()=>t(c=d.map((t=>t[e])))).r=0,_(d,s,n)}));return s.r?l:c})).then(i,l),b=!1},c.d=(t,e)=>{for(var n in e)c.o(e,n)&&!c.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},c.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),c(103)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQ3RCQyxHQUFlLEdNbkVoQm5CLEVBQW9Cc0MsRUFBSSxDQUFDbEMsRUFBU21DLEtBQ2pDLElBQUksSUFBSUMsS0FBT0QsRUFDWHZDLEVBQW9CeUMsRUFBRUYsRUFBWUMsS0FBU3hDLEVBQW9CeUMsRUFBRXJDLEVBQVNvQyxJQUM1RUUsT0FBT0MsZUFBZXZDLEVBQVNvQyxFQUFLLENBQUVJLFlBQVksRUFBTUMsSUFBS04sRUFBV0MsTUNKM0V4QyxFQUFvQnlDLEVBQUksQ0FBQ04sRUFBS1csSUFBVUosT0FBT0ssVUFBVUMsZUFBZUMsS0FBS2QsRUFBS1csR0NHeEQ5QyxFQUFvQixNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVhbTMtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovL3RlYW0zLXByb2plY3QvLi9zcmMvanMvbG9zdFBldHMvZ2V0TG9zdFBldHMuanMiLCJ3ZWJwYWNrOi8vdGVhbTMtcHJvamVjdC8uL3NyYy9qcy9tYWluL21haW4uanMiLCJ3ZWJwYWNrOi8vdGVhbTMtcHJvamVjdC8uL3NyYy9qcy9tYWluL21haW5DaGFydC5qcyIsIndlYnBhY2s6Ly90ZWFtMy1wcm9qZWN0Ly4vc3JjL2pzL21haW4vbWFpblByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vdGVhbTMtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZWFtMy1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZWFtMy1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVhbTMtcHJvamVjdC93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHdlYnBhY2tUaGVuID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayB0aGVuXCIpIDogXCJfX3dlYnBhY2tfdGhlbl9fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciBjb21wbGV0ZVF1ZXVlID0gKHF1ZXVlKSA9PiB7XG5cdGlmKHF1ZXVlKSB7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0pKTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSA/IGZuLnIrKyA6IGZuKCkpKTtcblx0fVxufVxudmFyIGNvbXBsZXRlRnVuY3Rpb24gPSAoZm4pID0+ICghLS1mbi5yICYmIGZuKCkpO1xudmFyIHF1ZXVlRnVuY3Rpb24gPSAocXVldWUsIGZuKSA9PiAocXVldWUgPyBxdWV1ZS5wdXNoKGZuKSA6IGNvbXBsZXRlRnVuY3Rpb24oZm4pKTtcbnZhciB3cmFwRGVwcyA9IChkZXBzKSA9PiAoZGVwcy5tYXAoKGRlcCkgPT4ge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmKGRlcFt3ZWJwYWNrVGhlbl0pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0ZGVwLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFeHBvcnRzXSA9IHI7XG5cdFx0XHRcdGNvbXBsZXRlUXVldWUocXVldWUpO1xuXHRcdFx0XHRxdWV1ZSA9IDA7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBvYmogPSB7fTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0b2JqW3dlYnBhY2tUaGVuXSA9IChmbiwgcmVqZWN0KSA9PiAocXVldWVGdW5jdGlvbihxdWV1ZSwgZm4pLCBkZXBbJ2NhdGNoJ10ocmVqZWN0KSk7XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0fVxuXHR2YXIgcmV0ID0ge307XG5cdFx0XHRcdFx0XHRyZXRbd2VicGFja1RoZW5dID0gKGZuKSA9PiAoY29tcGxldGVGdW5jdGlvbihmbikpO1xuXHRcdFx0XHRcdFx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0XHRcdFx0XHRcdHJldHVybiByZXQ7XG59KSk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmEgPSAobW9kdWxlLCBib2R5LCBoYXNBd2FpdCkgPT4ge1xuXHR2YXIgcXVldWUgPSBoYXNBd2FpdCAmJiBbXTtcblx0dmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcblx0dmFyIGN1cnJlbnREZXBzO1xuXHR2YXIgb3V0ZXJSZXNvbHZlO1xuXHR2YXIgcmVqZWN0O1xuXHR2YXIgaXNFdmFsdWF0aW5nID0gdHJ1ZTtcblx0dmFyIG5lc3RlZCA9IGZhbHNlO1xuXHR2YXIgd2hlbkFsbCA9IChkZXBzLCBvblJlc29sdmUsIG9uUmVqZWN0KSA9PiB7XG5cdFx0aWYgKG5lc3RlZCkgcmV0dXJuO1xuXHRcdG5lc3RlZCA9IHRydWU7XG5cdFx0b25SZXNvbHZlLnIgKz0gZGVwcy5sZW5ndGg7XG5cdFx0ZGVwcy5tYXAoKGRlcCwgaSkgPT4gKGRlcFt3ZWJwYWNrVGhlbl0ob25SZXNvbHZlLCBvblJlamVjdCkpKTtcblx0XHRuZXN0ZWQgPSBmYWxzZTtcblx0fTtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9ICgpID0+IChyZXNvbHZlKGV4cG9ydHMpLCBjb21wbGV0ZVF1ZXVlKHF1ZXVlKSwgcXVldWUgPSAwKTtcblx0fSk7XG5cdHByb21pc2Vbd2VicGFja0V4cG9ydHNdID0gZXhwb3J0cztcblx0cHJvbWlzZVt3ZWJwYWNrVGhlbl0gPSAoZm4sIHJlamVjdEZuKSA9PiB7XG5cdFx0aWYgKGlzRXZhbHVhdGluZykgeyByZXR1cm4gY29tcGxldGVGdW5jdGlvbihmbik7IH1cblx0XHRpZiAoY3VycmVudERlcHMpIHdoZW5BbGwoY3VycmVudERlcHMsIGZuLCByZWplY3RGbik7XG5cdFx0cXVldWVGdW5jdGlvbihxdWV1ZSwgZm4pO1xuXHRcdHByb21pc2VbJ2NhdGNoJ10ocmVqZWN0Rm4pO1xuXHR9O1xuXHRtb2R1bGUuZXhwb3J0cyA9IHByb21pc2U7XG5cdGJvZHkoKGRlcHMpID0+IHtcblx0XHRpZighZGVwcykgcmV0dXJuIG91dGVyUmVzb2x2ZSgpO1xuXHRcdGN1cnJlbnREZXBzID0gd3JhcERlcHMoZGVwcyk7XG5cdFx0dmFyIGZuLCByZXN1bHQ7XG5cdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRmbiA9ICgpID0+IChyZXNvbHZlKHJlc3VsdCA9IGN1cnJlbnREZXBzLm1hcCgoZCkgPT4gKGRbd2VicGFja0V4cG9ydHNdKSkpKTtcblx0XHRcdGZuLnIgPSAwO1xuXHRcdFx0d2hlbkFsbChjdXJyZW50RGVwcywgZm4sIHJlamVjdCk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGZuLnIgPyBwcm9taXNlIDogcmVzdWx0O1xuXHR9KS50aGVuKG91dGVyUmVzb2x2ZSwgcmVqZWN0KTtcblx0aXNFdmFsdWF0aW5nID0gZmFsc2U7XG59OyIsImNvbnN0IGdldExvc3RQZXREYXRhID0gYXN5bmMgKHtcclxuICBwYWdlTm8sXHJcbiAgbnVtT2ZSb3dzLFxyXG4gIHVwa2luZCxcclxuICB1cHJfY2QsXHJcbiAgb3JnX2NkLFxyXG4gIHN0YXRlLFxyXG4gIGJnbmRlLFxyXG4gIGVuZGRlLFxyXG59KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGAvYXBpL2xvc3QtcGV0cz91cHJfY2Q9JHt1cHJfY2R9Jm9yZ19jZD0ke29yZ19jZH0mdXBraW5kPSR7dXBraW5kfSZzdGF0ZT0ke3N0YXRlfSZwYWdlTm89JHtwYWdlTm99Jm51bU9mUm93cz0ke251bU9mUm93c30mYmduZGU9JHtiZ25kZX0mZW5kZGU9JHtlbmRkZX1gXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0TG9zdFBldExpc3QgPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGl0ZW1zOiB7IGl0ZW06IGxvc3RQZXRMaXN0IH0sXHJcbiAgICB0b3RhbENvdW50LFxyXG4gIH0gPSBkYXRhO1xyXG4gIHJldHVybiBbbG9zdFBldExpc3QsIHRvdGFsQ291bnRdO1xyXG59O1xyXG5cclxuY29uc3Qgc2VhcmNoUGFyYW1zID0ge1xyXG4gIHBhZ2VObzogMSxcclxuICBudW1PZlJvd3M6IDEwLFxyXG4gIHVwa2luZDogXCJcIixcclxuICB1cHJfY2Q6IFwiXCIsXHJcbiAgb3JnX2NkOiBcIlwiLFxyXG4gIHN0YXRlOiBcIlwiLFxyXG4gIGJnbmRlOiBcIlwiLFxyXG4gIGVuZGRlOiBcIlwiLFxyXG59O1xyXG5cclxuY29uc3QgZ2V0TG9zdFBldHMgPSBhc3luYyAocGFyYW1zKSA9PiB7XHJcbiAgY29uc3QgbG9zdFBldERhdGEgPSBhd2FpdCBnZXRMb3N0UGV0RGF0YShwYXJhbXMpO1xyXG4gIGNvbnN0IFtsb3N0UGV0TGlzdCwgdG90YWxDb3VudF0gPSBnZXRMb3N0UGV0TGlzdChsb3N0UGV0RGF0YSk7XHJcbiAgcmV0dXJuIFtsb3N0UGV0TGlzdCwgdG90YWxDb3VudF07XHJcbn07XHJcblxyXG5leHBvcnQgeyBnZXRMb3N0UGV0cywgc2VhcmNoUGFyYW1zIH07XHJcbiIsIi8vIGltcG9ydCBcIi4uL3N0eWxlL2luZGV4LmNzc1wiO1xyXG4vLyBpbXBvcnQgXCIuLi9zdHlsZS9yZXNldC5jc3NcIjtcclxuaW1wb3J0IHsgZ2V0TG9zdFBldHMsIHNlYXJjaFBhcmFtcyB9IGZyb20gXCIuLi9sb3N0UGV0cy9nZXRMb3N0UGV0cy5qc1wiO1xyXG5pbXBvcnQgeyBwYWludExvc3RQZXRQcmV2aWV3IH0gZnJvbSBcIi4vbWFpblByZXZpZXcuanNcIjtcclxuaW1wb3J0IHsgbXlDaGFydCB9IGZyb20gXCIuL21haW5DaGFydC5qc1wiO1xyXG5cclxuLy8g7J2066+47KeAIOyKrOudvOydtOuNlFxyXG5jb25zdCBTSE9XSU5HX19DTEFTUyA9IFwic2hvd2luZ1wiO1xyXG5jb25zdCBmaXJzdFNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJfX2l0ZW06Zmlyc3QtY2hpbGRcIik7XHJcbmZ1bmN0aW9uIHNsaWRlKCkge1xyXG4gIGNvbnN0IGN1cnJlbnRTaWxkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke1NIT1dJTkdfX0NMQVNTfWApO1xyXG4gIGlmIChjdXJyZW50U2lsZGUpIHtcclxuICAgIGN1cnJlbnRTaWxkZS5jbGFzc0xpc3QucmVtb3ZlKFNIT1dJTkdfX0NMQVNTKTtcclxuICAgIGNvbnN0IG5leHRTbGlkZSA9IGN1cnJlbnRTaWxkZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICBpZiAobmV4dFNsaWRlKSB7XHJcbiAgICAgIG5leHRTbGlkZS5jbGFzc0xpc3QuYWRkKFNIT1dJTkdfX0NMQVNTKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZpcnN0U2xpZGUuY2xhc3NMaXN0LmFkZChTSE9XSU5HX19DTEFTUyk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGZpcnN0U2xpZGUuY2xhc3NMaXN0LmFkZChTSE9XSU5HX19DTEFTUyk7XHJcbiAgfVxyXG59XHJcblxyXG5zbGlkZSgpO1xyXG5zZXRJbnRlcnZhbChzbGlkZSwgMjAwMCk7XHJcblxyXG4vLyDthrXqs4RcclxubXlDaGFydDtcclxuXHJcbi8vIOuztO2YuCDqsozsi5ztjJAg66+466as67O06riwXHJcbmxldCBbbG9zdFBldExpc3QsIHRvdGFsQ291bnRdID0gYXdhaXQgZ2V0TG9zdFBldHMoe1xyXG4gIC4uLnNlYXJjaFBhcmFtcyxcclxuICBudW1PZlJvd3M6IDYsXHJcbn0pO1xyXG5wYWludExvc3RQZXRQcmV2aWV3KGxvc3RQZXRMaXN0KTtcclxuIiwiaW1wb3J0IHsgZ2V0TG9zdFBldHMsIHNlYXJjaFBhcmFtcyB9IGZyb20gXCIuLi9sb3N0UGV0cy9nZXRMb3N0UGV0cy5qc1wiO1xyXG5cclxuY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlKSA9PiB7XHJcbiAgY29uc3QgeXkgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgY29uc3QgbW0gPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gIGNvbnN0IGRkID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgcmV0dXJuIGAke3l5fS0ke21tfS0ke2RkfWA7XHJcbn07XHJcblxyXG5jb25zdCBzZXRUd29EYXRlcyA9ICgpID0+IHtcclxuICBsZXQgeWVzdGVyZGF5ID0gbmV3IERhdGUoKTtcclxuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIHllc3RlcmRheS5zZXREYXRlKHRvZGF5LmdldERhdGUoKSAtIDEpO1xyXG5cclxuICB0b2RheSA9IGZvcm1hdERhdGUodG9kYXkpO1xyXG4gIHllc3RlcmRheSA9IGZvcm1hdERhdGUoeWVzdGVyZGF5KTtcclxuICByZXR1cm4gW3RvZGF5LCB5ZXN0ZXJkYXldO1xyXG59O1xyXG5cclxuY29uc3QgW3RvZGF5LCB5ZXN0ZXJkYXldID0gc2V0VHdvRGF0ZXMoKTtcclxuc2VhcmNoUGFyYW1zLmJnbmRlID0geWVzdGVyZGF5O1xyXG5zZWFyY2hQYXJhbXMuZW5kZGUgPSB0b2RheTtcclxuXHJcbmxldCBbbG9zdFBldExpc3QsIHRvdGFsQ291bnRdID0gYXdhaXQgZ2V0TG9zdFBldHMoc2VhcmNoUGFyYW1zKTtcclxuXHJcbmxldCBbZG9nTGlzdCwgZG9nQ291bnRdID0gYXdhaXQgZ2V0TG9zdFBldHMoe1xyXG4gIC4uLnNlYXJjaFBhcmFtcyxcclxuICB1cGtpbmQ6IFwiNDE3MDAwXCIsXHJcbn0pO1xyXG5cclxubGV0IFtjYXRMaXN0LCBjYXRDb3VudF0gPSBhd2FpdCBnZXRMb3N0UGV0cyh7XHJcbiAgLi4uc2VhcmNoUGFyYW1zLFxyXG4gIHVwa2luZDogXCI0MjI0MDBcIixcclxufSk7XHJcblxyXG5sZXQgW290aGVyc0xpc3QsIG90aGVyc0NvdW50XSA9IGF3YWl0IGdldExvc3RQZXRzKHtcclxuICAuLi5zZWFyY2hQYXJhbXMsXHJcbiAgdXBraW5kOiBcIjQyOTkwMFwiLFxyXG59KTtcclxuXHJcbmNvbnN0IG5ld3NfX2Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdzX19kZXNjcmlwdGlvblwiKTtcclxuY29uc3QgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNoYXJ0XCIpO1xyXG5jb25zdCBkYXRhID0gW2RvZ0NvdW50LCBjYXRDb3VudCwgb3RoZXJzQ291bnRdO1xyXG5cclxubmV3c19fZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gYFxyXG7smKTripjsnYA8YnI+XHJcbjxzcGFuIHN0eWxlPVwiY29sb3I6IHZhcigtLW1haW4tY29sb3Itb3JhbmdlKVwiPiR7dG90YWxDb3VudH08L3NwYW4+66eI66as7J2YIOuwmOugpOuPmeusvOydtDxicj5cclxu6rCA7KGx7J2EIOq4sOuLpOumrOqzoCDsnojsirXri4jri6QuPGJyPlxyXG7sg4jroZzsmrQg6rCA7KGx7J20IOuQmOyWtOyjvOyEuOyalCE8YnI+XHJcbmA7XHJcblxyXG5jb25zdCBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gIHR5cGU6IFwiZG91Z2hudXRcIixcclxuICBvcHRpb25zOiB7XHJcbiAgICByZXNwb25zaXZlOiBmYWxzZSxcclxuICAgIHBsdWdpbnM6IHtcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgIHRleHQ6IFwi7Jik64qYIOygkeyImOuQnCDsnKDquLDrj5nrrLwg7ZiE7ZmpXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGF0YToge1xyXG4gICAgbGFiZWxzOiBbXCLqsJXslYTsp4BcIiwgXCLqs6DslpHsnbRcIiwgXCLquLDtg4BcIl0sXHJcbiAgICBkYXRhc2V0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbGFiZWw6IFwiTG9zdCBQZXRzIERhdGFzZXRcIixcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiI2VjYmI3ZlwiLCBcIiNhNDg3NzJcIiwgXCIjYTQ3MjcyXCJdLFxyXG4gICAgICAgIGhvdmVyT2Zmc2V0OiA0LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCB7IG15Q2hhcnQgfTtcclxuIiwiY29uc3QgY3JlYXRlTG9zdFBldFByZXZpZXcgPSAoaXRlbSkgPT4ge1xyXG4gIGNvbnN0IHsgZGVzZXJ0aW9uTm8sIHBvcGZpbGUsIGtpbmRDZCwgc2V4Q2QgfSA9IGl0ZW07XHJcblxyXG4gIGNvbnN0IGxvc3RQZXRQcmV2aWV3VGVtcGxhdGUgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJvYXJkX19jb250ZW50XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL2xvc3RQZXRzLyR7ZGVzZXJ0aW9uTm99XCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYm9hcmRfX2ltZ1wiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIke3BvcGZpbGV9XCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cImNvbnRlbnRfX3RpdGxlXCI+JHtraW5kQ2R9IC8gJHtzZXhDZH08L2g0PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIHJldHVybiBsb3N0UGV0UHJldmlld1RlbXBsYXRlO1xyXG59O1xyXG5cclxuY29uc3QgcGFpbnRMb3N0UGV0UHJldmlldyA9IChsb3N0UGV0TGlzdCkgPT4ge1xyXG4gIGNvbnN0IGxvc3RQZXRJdGVtcyA9IGxvc3RQZXRMaXN0Lm1hcChjcmVhdGVMb3N0UGV0UHJldmlldyk7XHJcbiAgY29uc3QgbG9zdEJvYXJkQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5ib2FyZF9fc2F2ZSAuYm9hcmRfX2NvbnRlbnRzQm94XCJcclxuICApO1xyXG4gIGxvc3RCb2FyZENvbnRlbnQuaW5uZXJIVE1MID0gbG9zdFBldEl0ZW1zLmpvaW4oXCJcIik7XHJcbn07XHJcblxyXG5leHBvcnQgeyBwYWludExvc3RQZXRQcmV2aWV3IH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMDMpO1xuIl0sIm5hbWVzIjpbIndlYnBhY2tUaGVuIiwid2VicGFja0V4cG9ydHMiLCJjb21wbGV0ZVF1ZXVlIiwiY29tcGxldGVGdW5jdGlvbiIsInF1ZXVlRnVuY3Rpb24iLCJzZWFyY2hQYXJhbXMiLCJwYWdlTm8iLCJudW1PZlJvd3MiLCJ1cGtpbmQiLCJ1cHJfY2QiLCJvcmdfY2QiLCJzdGF0ZSIsImJnbmRlIiwiZW5kZGUiLCJnZXRMb3N0UGV0cyIsImFzeW5jIiwicGFyYW1zIiwibG9zdFBldERhdGEiLCJmZXRjaCIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXRMb3N0UGV0RGF0YSIsImxvc3RQZXRMaXN0IiwidG90YWxDb3VudCIsImRhdGEiLCJpdGVtcyIsIml0ZW0iLCJnZXRMb3N0UGV0TGlzdCIsIlNIT1dJTkdfX0NMQVNTIiwiZmlyc3RTbGlkZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlIiwiY3VycmVudFNpbGRlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwibmV4dFNsaWRlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiYWRkIiwic2V0SW50ZXJ2YWwiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImdldEZ1bGxZZWFyIiwiU3RyaW5nIiwiZ2V0TW9udGgiLCJwYWRTdGFydCIsImdldERhdGUiLCJ0b2RheSIsInllc3RlcmRheSIsIkRhdGUiLCJzZXREYXRlIiwic2V0VHdvRGF0ZXMiLCJkb2dMaXN0IiwiZG9nQ291bnQiLCJjYXRMaXN0IiwiY2F0Q291bnQiLCJvdGhlcnNMaXN0Iiwib3RoZXJzQ291bnQiLCJuZXdzX19kZXNjcmlwdGlvbiIsImN0eCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwibXlDaGFydCIsIkNoYXJ0IiwidHlwZSIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwicGx1Z2lucyIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiaG92ZXJPZmZzZXQiLCJjcmVhdGVMb3N0UGV0UHJldmlldyIsImRlc2VydGlvbk5vIiwicG9wZmlsZSIsImtpbmRDZCIsInNleENkIiwicGFpbnRMb3N0UGV0UHJldmlldyIsImxvc3RQZXRJdGVtcyIsIm1hcCIsImpvaW4iLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIlN5bWJvbCIsInF1ZXVlIiwiZm9yRWFjaCIsImZuIiwiciIsInB1c2giLCJhIiwiYm9keSIsImhhc0F3YWl0IiwiY3VycmVudERlcHMiLCJvdXRlclJlc29sdmUiLCJyZWplY3QiLCJpc0V2YWx1YXRpbmciLCJuZXN0ZWQiLCJ3aGVuQWxsIiwiZGVwcyIsIm9uUmVzb2x2ZSIsIm9uUmVqZWN0IiwibGVuZ3RoIiwiZGVwIiwiaSIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlaiIsInJlamVjdEZuIiwicmVzdWx0IiwidGhlbiIsIm9iaiIsInJldCIsIndyYXBEZXBzIiwiZCIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=