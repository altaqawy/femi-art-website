/* Femi Art crochet-inspired WhatsApp widget — V6 */
(function(){
  "use strict";
  const phone = ""; // Add verified international WhatsApp number, digits only e.g. 201xxxxxxxxx.
  const instagram = "https://www.instagram.com/femi.art.by.kholoud/";
  const css = String.raw`
    .femi-wa{position:fixed;right:17px;bottom:max(18px,env(safe-area-inset-bottom));z-index:125;font-family:Cairo,"DM Sans",sans-serif}
    .femi-wa button{font:inherit}
    .femi-wa-toggle{position:relative;display:grid;place-items:center;width:66px;height:66px;border:0;border-radius:50%;background:transparent;cursor:pointer;filter:drop-shadow(0 9px 14px #173c2c60);transition:transform .32s ease}
    .femi-wa-toggle:hover{transform:rotate(-8deg) scale(1.07)}
    .femi-wa-toggle:focus-visible{outline:3px solid #c4a280;outline-offset:4px}
    .femi-wa-thread{position:absolute;inset:0;border-radius:50%;background:repeating-conic-gradient(#eedaca 0deg 8deg,#c5a080 9deg 12deg,#fff4e4 13deg 20deg,#be9a82 21deg 24deg);box-shadow:inset 0 0 0 3px #fff3de,inset 0 0 0 7px #d6b69c}
    .femi-wa-thread:before{content:"";position:absolute;inset:5px;border:3px dotted #fff8ef;border-radius:50%;box-shadow:0 0 0 2px #a98870}
    .femi-wa-center{display:grid;place-items:center;position:relative;width:48px;height:48px;border-radius:50%;background:#274b38;box-shadow:inset 0 1px 5px #183325,0 0 0 2px #fff4e4;color:white}
    .femi-wa-center svg{width:31px;height:31px}
    .femi-wa-hint{position:absolute;right:76px;top:16px;padding:9px 13px;background:#f9f1e6;border-radius:25px;white-space:nowrap;font-size:11px;color:#254533;opacity:0;transform:translateX(8px);transition:opacity .2s,transform .2s;pointer-events:none;box-shadow:0 6px 17px #13302220}
    .femi-wa:hover .femi-wa-hint,.femi-wa:focus-within .femi-wa-hint{opacity:1;transform:none}
    .femi-wa-panel[hidden]{display:none}
    .femi-wa-panel{position:absolute;bottom:82px;right:0;width:min(288px,calc(100vw - 36px));box-sizing:border-box;padding:18px 18px 16px;border:1px solid #dfd1be;border-radius:18px 18px 5px 18px;background:#f9f4eb;color:#294232;box-shadow:0 20px 44px #0c2a2040;text-align:right;direction:rtl}
    .femi-wa-panel strong{display:block;font-size:15px;margin-bottom:5px}.femi-wa-panel p{font-size:12px;line-height:1.8;margin:0 0 12px}.femi-wa-panel a{display:inline-block;background:#274b38;color:white!important;border-radius:8px;font-size:12px;padding:9px 13px;text-decoration:none}
    @media(max-width:650px){.femi-wa-toggle{width:61px;height:61px}.femi-wa-center{width:45px;height:45px}.femi-wa-hint{display:none}}
    @media(prefers-reduced-motion:reduce){.femi-wa-toggle,.femi-wa-hint{transition:none}}
  `;
  const style=document.createElement("style");
  style.textContent=css;document.head.appendChild(style);
  const wrap=document.createElement("div");wrap.className="femi-wa";wrap.id="femiWa";
  wrap.innerHTML=`
    <div class="femi-wa-panel" id="femiWaPanel" hidden role="status">
      <strong id="femiWaTitle">تواصلي مع Femi Art</strong>
      <p id="femiWaText">رقم واتساب البراند لسه مش متاح على الموقع. تقدري تتواصلي مع Femi Art على إنستجرام.</p>
      <a href="${instagram}" target="_blank" rel="noopener noreferrer" id="femiWaInstagram">افتحي إنستجرام ↗</a>
    </div>
    <span class="femi-wa-hint" aria-hidden="true" id="femiWaHint">خيط وصِل ✦</span>
    <button type="button" class="femi-wa-toggle" id="femiWaToggle" aria-label="WhatsApp Femi Art" aria-expanded="false" aria-controls="femiWaPanel">
      <span class="femi-wa-thread" aria-hidden="true"></span>
      <span class="femi-wa-center" aria-hidden="true">
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path stroke-width="3.4" d="M15 49 10 55l2.5-11.5a23 23 0 1 1 8.6 8.8"/>
          <path stroke-width="4.8" d="M23 22c-2 0-3.4 2.1-2.6 5.2 2 7.5 9.3 14.7 16.6 16.8 3.1.9 6.5-.5 7.2-3l-8-3.7-3.8 4a26.5 26.5 0 0 1-10.8-10.4l3.5-3.6-4.8-8.2Z" transform="translate(3 2) scale(.9)"/>
        </svg>
      </span>
    </button>`;
  document.body.appendChild(wrap);
  const button=wrap.querySelector("#femiWaToggle"),panel=wrap.querySelector("#femiWaPanel");
  function renderLanguage(){
    const ar=document.documentElement.dir==="rtl";
    wrap.querySelector("#femiWaTitle").textContent=ar?"تواصلي مع Femi Art":"Get in touch with Femi Art";
    wrap.querySelector("#femiWaText").textContent=ar?"رقم واتساب البراند لسه مش متاح على الموقع. تقدري تتواصلي مع Femi Art على إنستجرام.":"The brand's WhatsApp number is not configured yet. Contact Femi Art on Instagram.";
    wrap.querySelector("#femiWaInstagram").textContent=ar?"افتحي إنستجرام ↗":"Open Instagram ↗";
    wrap.querySelector("#femiWaHint").textContent=ar?"خيط وصِل ✦":"A little hello ✦";
  }
  renderLanguage();
  new MutationObserver(renderLanguage).observe(document.documentElement,{attributes:true,attributeFilter:["dir"]});
  const close=()=>{panel.hidden=true;button.setAttribute("aria-expanded","false")};
  button.addEventListener("click",()=>{
    const digits=phone.replace(/\D/g,"");
    if(digits){
      const greeting=document.documentElement.dir==="rtl"?"أهلًا Femi Art، حابة أستفسر عن المنتجات اليدوية":"Hello Femi Art, I'd like to ask about your handmade products.";
      window.open("https://wa.me/"+digits+"?text="+encodeURIComponent(greeting),"_blank","noopener,noreferrer");
    }else{
      panel.hidden=!panel.hidden;
      button.setAttribute("aria-expanded",String(!panel.hidden));
    }
  });
  document.addEventListener("pointerdown",event=>{if(!wrap.contains(event.target))close()});
  document.addEventListener("keydown",event=>{if(event.key==="Escape")close()});
})();