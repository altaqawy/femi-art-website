/* Femi Art crochet-inspired WhatsApp widget — V6 */
(function(){
  "use strict";
  const phone = ""; // Add verified international WhatsApp number, digits only e.g. 201xxxxxxxxx.
  const instagram = "https://www.instagram.com/femi.art.by.kholoud/";
  const crochetImage = 'data:image/webp;base64,UklGRvAUAABXRUJQVlA4WAoAAAAQAAAAXwAAXwAAQUxQSPQJAAABDAVt2zAJf9r7IxARE0DXMDAFLL5iiLaHbdvLXNu2fUVr0O4Dp23btm3btnnZtm3bvk7btm1j7E3SdJ2mdkvaEREMHEltc4Dj3iFOeYHsSJIsSdFfMv5RZh9VdXdAZUQtEkSEwwBo24au1KsYI9npCRhMqovXLRXlaMIAmHP7z/3+N9+76ulXb/zoB376qw+sBAC6HBljtAagFHLlZjeYtHuq9RljRl3aIgd98BOXvMGOYk1BT35uu3VXWwiYKK3WWnRUYnbUL8VohPl3OeNjV5Fk4713PgTvvHcV6V576YFfbgxVjIQHGI6eHimV+nQ5KoDj7vYkq3HlQp1Q6HrgqlBH8tUzlh4BpWk5OyfDSqUrl4ktgcl1f0E650KsW+pBHVpyY/KlSz60HMrSpox+qOx8AcLXwlqs+8WrXqEX8xXrkLnGmDQgsnqST+0EoFDDUlVfIIlVZmT1+W+S0WXGMABJTV32t39+3KKwggdHqGS90eXQBaDfzzh2Pr8cIkZSnafoI/nQbij1II9SyAKQsuAHf6WRKsT6ixEMCVmvJ93hMDaDAQPM+XSJlW/l9/v9ryTZ78ks7H7JZJfPuPjuByeQ4cHttmIn1Py3cOYd7mxSi34lOWTzmX8EePlSKIdrduofAfP8jePcokIJXDQ86fGXRBjzjuVRaDU0SgmUWPqCa1gldSBCm6bVKEFHFR87DHagCVFK+C32v5+tiNRC5imXLhJ5QnLTfFQooEA+TfoLnN7wnUTXsLLRSxvcDWfpPQ9DobNQWYNXmLVeimMxXb0xNDxwmbwWHt6/dlLSjsoZvESfRziLT/ChPIIN97efnSARGr5fGd2fCUobg8Meyqz1CS2gCgt0X/EDMEplSwmx1nyNDBAEtKj8AfEgDWZQRl/PrAwr86TJulO4I1i5fJdngXizi2UcMVgIjj/UykgWIsxFUV7HauCcc6rekGzl6PhnU8aoFIDWZgK7ZowF6cViyeUkLNFm/PE9mSh5LbH9MzHEHkxzVVMPDOgGIMnaxycW0R2rJK7Arq82VRSW6Np5QEqyMOh6MJrnR1HqTLrRi/z+fkr7UAothrko48yusEGVPwYWaXqp9p9n/WUzoLV6gEovk6EK2pYqvrmuKmStWk/gou8NIKZ+z0I10yo6LuKYX0WpIFSuwBoP1vufmiDuZlpaM1SCXU9TnHbNJaUxSncWQy90C1/2Q6j6CbKjKTJ78O75lNUdCnyW71aaBVZBrCIpiqT6msPwuUKh+b4WMGqumxtnqWJR59FzMhdcjJZP7otCQ1ss9Th9bbpdWTjWMNvhYBwkwZaJjptfq0K3YbX4M8wc4JK3rgJ4PtswNdpNOVd6XjdtTFf6vSGRwr2SVBHjk6bUjg3GuG0ebVvZaqbJKMBhN+HItTi+Gbgb6brmwyhNiW+yEoPhpiBTSZbVUWlsMWEUeD63mDJmzuu79GDGzQ6pKQ16izpGsgxxNxTYdJycPhtVNYeD4S4XUI32yHaex2GEo2V4ZJuXCM1bDrYlX0RnQRTOLiix6dvJI4Xak9/g8GgCmk8k2cqM57TY4a3gs/MQ4giCULCJ8CcSOfoFjyxhJi5P72iWLt6l+8Iq0r0NhkwHyFAhxH2wffQhPz2blkN6tJtYd09QwfMknN9zQ8544NGmifCXbAx7Bvok8iGMd8Ln0pIc/xBFggkwSazkL/H57Ar4KKtMDvqBqrjpE6Mqu1hC/l3JPsG743B49P2H5OBRFoypUgu8FwZoqB0vxVozTTp4zauSbWgBMEbJiN54OybwERwtbvl5SJsPQGJMf4Zvsop95hPngjKrldTqZABqGGrPS8r/iyNL/3mNIVPQ9Z1RzwhVX580dV0GpIploMP9I80XirKNGCbwyWXxcxEIfDAJlvZ2NR1KLqggNv5bm2F/72Pda7mhWrJc1J1mi2KzGiHwQMz3BEPyGmzA77iiHEs2QnFqBFtbVtsT67zVdiW5SHY5HSl4hK0FXfGcs2d8bU0cxBCH3exTYaXraZcoo9bBqeLvLQ5IHsdiPbDUMyg2GjoPlCcD3HWeXw1Yx8UwG2BVcNP9mm8mOmlNZL3LoIz5Bl1I+yLK4mK6ZSqt6IcaPoZ43j8njJr+O53ok9w3Tb4J8vr9xib01Sbvm/umoUp8su+RksbVXb0/eAyxRj84/hpGFerTTS9YKvLT+Cz4qM+sA8HXe8KqEifT9TXB4U3ZmuBVRigfFX9uDZTFum+EPsieziQ4AuaDJZKOax5eABpKGfylS0DHxUrbfCwAd3jZl6FsErvrVTBoYdX6z0W5DymJOWYcTApGRvYzzS+VgWDs8W6yw+Ut28NEKCq3J8wXGpljHgUJbYvb+DpgzDgSeQMlkC8UFa+bK3mx0lb8M6l6F5FufzIBGT61GGKId64HDekU+Hb+2QOnQ/Xt9zPiiM7Qh5PmW2vCQKLAWi/Wr6KV271P7TlO4imcOCXNp1Xy2qbEVzjmA+7hjlGCEIlh6Qxnwhl+Utkkzui5b0ksk2BUrsO58eANyOUVb19AiXRobbHIvaIkVh9CecSnPETRT0IBb1ox81q6xcKP0HcsQMYczcecM7xq+qdyNop3zy9VTtRq7VdZ1aj4J5iPsTdgxwtQAJnSO9XBpwaTM1sOpJ0Pa2cHszrwmcW0QspW/4rjnL59JUsy2W0omzHPs/L14dBIYbHk441QOsxCZDLPVscoG0ynjvwQDLJY7rHoQmpOONelHP8HMVPLHeem/qSiqUspgAuxadB4OEXO0ZV8Mp2rePPcUAp55+zKD/g+UpHAJNi6EdFXFtGNG7cryr7PYQs+wgw0PIuyk8QjOzrfU/Klo2HQh+28r4eDJB/80gBmGlx9/RdX6Rfg8DgO/YczPdPC2dP+ShMu/l1eOo0hsuwDotaA59dlmRSz1lWJnpvf1jXKGW7I+1dCqdGPz9Mli1A48uvxfL2Llyh8hhqu14ILfPP+Ly3RxQ7ALY3vr9FXniTZuJDlEHqczJgrF8iLl5kT0BiEp9idvbPs64a858z9/v3oa/SV9zmjMAyeZH3vEQCMBtQQ3N5BqIBswPGt5285ZgpQU6v+hqT4sWAgee+ris/+5H3bzwEtP3UOwocSrev2jveh5oObrzwXYAwAvde3L7mVdFVVDcjq5drduzGQ7NahvxWs/UpyZgzekTMv/H01AEbMglaAHp37oPwfJfjKOdd1z3U1kA8/dN9/zl8ApZXHq8Gf4if+y3fF/ya+5s07bbwqkPsoqoxWCovsed65p377jW7rk8FHsopNfdfxiy2+kMg/a9q3rUfs0pd/vKiYrXy/ch1fYZO93/Oecy6diS9ff/762+6xxdzCKFs1e9Hq2Aeev/+Thx6xz9qANXpIR7VtKRltudVea08mBlnr/k6qIYUBVlA4INYKAAAQKACdASpgAGAAPpU6lEolo6IhvV6IALASiUAZZJXgbk6tkm+QBgXGc3gP5BYhOBPrx1Ee9/FPvL+RGoF7Q8yB6Z0H+q9AjvPxI+IB5Y9+/QA/Tnqv/5Pke+xfYK/YDosfZE/V12SPnGxPL9z1ivfrKwDeIwZ5N8Hkj5VrePovCNoSjzgb2TRVzTk3RutIjKr9n8kYl0orcH46iq5NYzJgSNcjdq8Q65PB/Dz/SuTfPWqfbIk9iBX6/LCCRV29S4Oa1EG3AsdmLmokxZ0gpkdx9FxnS9ZDYCMJhTlHJoa/JMkT5HLjc76S/j7WqH5c8KHX+1DzkrCoObP6TxWGiZYTUdxnXtr3efMt+C9+T26jZJrWGvGjOrmc01zPIP7S47waEgSZ3Mn0VsyEZkDtK1dliuzaAz5TnEfOfyl/cx2bQ/n5Sfnh5lYswAD+/xpALf+zWH/o85vckcn/tQCdft9LWXGduyt5Pgyk/V6vRI5MX2bvuCR5JrngWl/ytylZmyUI90XgFqQwV+C3zc2D3FBPZSo+zpLz2zquigNmu4uLOs3J9qf3u/xNiB9OwQPWOv8ITf7cWFjL0pQjBlHhXE+xsxoiBXNk0quyrRlNbhuuxiqPdh1bffhXYQjZyJvBU+PTK0xWRvkLVAWm8pez8V6bIz2HtjV0r31VaTt4DAiLV5ZzJf5uqAKAphBuRKKsJu0Dur7XBavXZ9XC7JkllMUGdL5DXBC2DzXInV0+LRwrDareBiny4kuVpB7+Zfbc4Hd0y3b4v1Hc8KiVvBx4iAF5OT/ZZL6LT2J6posC7oXXtkDIm4TV4cSmOh9Iy5UVuY5TayGSpAhpf4GejT4ymC11BWUqLL9mrkBKPTIiaywcJ54uGLcfWGPV+wwKmwWEup3sIk/3wR/0ysCSv9YYtr/AEzDvlepgAUbjFtbyZ0LEoqRHcdP7Ayy/127ySUgKPdw1qC2BPeRbi59JtQV9Gv3gbQvn/II7X2znQOrRnw49h4CGk7Y5hi6iXpP0ZNfv/O+qa9TIaTiwA0+kR5P44Uws/cQaC8jU9CR6yhXECzWkH8u90ZiKkBezUf4okbwn2hjH6emA7WF5Y9PnKHMLwzAudiSmrZQtwqp0Yu1hInRzH1rcbImVkCsh4dDFRwzlu66BeMd3QkV51G7s3f8L2y41T0tmPIL6086lXxqDQNU5sH66PrEN+gjMfW3pgGRmc7TuVfhAuYpFzdZvK88r7a+eDNcJKKc+WZCrMK77dfHwt254YKkWfItihvuhkh6bo5CL1aWF6/xKwjbJxJaohF2I5wzMwgP2Rd/Z9O1m/QHojG7x+6JkSlmj1CjaueazclE8ZS6AtwToDjI+tInPn+TizxvT5zxrwFlAvS+ZjdNqfm2XH0QBMlifn72ugzLW7s67zgqrl4tJ3vLqNVTTlDiqODS5zXflkC0jbP5r10Cme1delJXY+kCjS4Gbq8v3ToJDmI2mbvq7nu9Q93qh4SgveVcmhnBI4QWzLxb7j/s11Z4bdhz7sD0E7Sg0jJcMBD5jeTFraulP4rdgAacq+4KoEC08+pv/uqeEgLnbWQjyaM5CzS9xLuiIJqgIAcl2F6HZ6w9ZCQ6U3az755gEhLDDbVs7mfzL3oIfeC/wf5SKORZWGywGcwmvtdCCc9/UsFcYQKbGnELmk5mv0AX4Bd/ewZTo93+MIYihWBvh5r/gMyjRtjKOrr0cbwWl6DpuzKVTyCkItTuHZQhvaylzQWAh4+QT/T7BGhWO8yPGgHXVX99I6GBBbWVwfkXlragha0jU2zhYQdxJQYRqPuQxHVuPeufI1HXV7XtSAOvD4Gmppbj+ySMHR/W4NN/7XKaQtG6LID3qkrzzC5EwJmGmbAoMb82R+Ak0An6Nb+N04lZ1tdrPJCqQuU1Ytz6nMQFRzv2JVJA+A5qhmDFUs1tobyK0XudKV6jqKaLBseCr8EpcQeaaEFFdH62GzwymQb15nGFHlk3APYp/6Zh1wZLlvD1ApnVID/ZhJswlz+4Mfn0WuPJ0Vbqmk9+EgZsbLI72xNWUCkPQMg8KyJU7grGpSopTDJhjakelndGf9577BffpV31Zyeubv6baPcdnb8h6ddroIasUqXTujtMbb7Q6rpf07+k51McTeCEvWm3l4FuH5n90dPL3kwCKQxM3zfoZwelI3Sf6yARFg6wbcsirazW4x7EEN5ytLKbFuv0I2KhYwZlzKF4pe8mW87CV+TIn9nk4A/bVmauOmgapPeQOSwiBqiQRkoqzNc/+e5sCiYrGyYys7LQ6IyyTZQ7fgj8q0k28Xro7Mgmmas8ljBeD6ozoYBhk61TBYdiu6u922nSbSpdvIIZKnsaDx9RX528Rg2z63v8RKPeOhVUeQ17Gv8boo4xK26VNNTey5smpu6cc7UyuH6fsMNrSMviHKG4erETx3DZoHT5hyfUxZLTBBABS/1GgCohluy4yOEot2xbTn6IS6gn8AaPMx1sNaaBvkQKFH6GFwzNiogu9rHoaL2ZA1byPVLeBVNOG5hhJP7rM6nStAjl1rDHuBh0I3JXtsyN3iUjPUTySKdSp8RUeiaZXOrA92/LkWSeTYxhSd+JmBRSjTgQeHpTlqR/8KGsI0VqruP+nM77eapuvfstvUkIeD1nURj2JcP5ZR2GLomddBNS31PbuYL+WHFKUBb63tv8Mjrf0HN33jEnPuBB3p1ULL2EQ118YjLYFJCdTml1S16nQCEpyRrAvilinTUtHXhm0QnGk91fjb3VZtJ8btDB+cnSGW5V18GaLRnK5gQbPrwEZqgSYfAKCog/bFjJT0jL3kt8lnuNY83gxUV2nLF2n/ckzCZbcDDBBxjMJ09W31OgBGkhdjFWJp1q4V3KI+r3p89nnrxmNNkyHDOjZ5KrC+EagO1iVKu+adWq1qhbu2AAfP+3kdH9f5Dmcelhbw1rNFTOEAuzht9jkX7r6Hx44Q+MReTK1PipDuqG2U9w5flMA3E8TH1xdw/0m/H3gUVUDD/sWPgZaloHzfdtSVfKA/vufFGN72SHdjHvhHgSMnQ0F8zIkP4P2l9TeYKr51DOxIbLPDIlY7NUdmas7KnZm/RK3VrVxiH9RZSdJcTn4sbe/BZpRJqpPLFMzTvUOvm7hLjAeYGQJAeqhja6/9gNP/AlJeg5dBsi7DQNd6KG9FtFoIrc1akSdJ/iR64ZD2bgTH8DkdsKFDhGQt9EfgqpRaiPnvAGgDoduslkJtj9SmQFrjdx21SsjXd3C/cjiM5VLSFjI159pwT7RDuu5KhNHZt7351ylNHIxubyd4VCR3AjeeEAXrSxg2pv3RopbRwxGAUmMDfD1L3JNUwM/8TW5gacPF25j9ya681LTixFqABjFzMeqKKAYMuARGdhZbUc7cvIpEfSilCowLTT6DZtVNq6zwRR0XnuyMkL6TGOI71xLCi5Ub08gwwvEwfGZCk69hpic/aMQ7Ni0EnYnmp7cU+KY6Tv/DF2ui12JzCZmuY21pbYLFTAFsizG39BQ3TN+GeYs5BmLn2TGgmmqFwDUQHU8asSeznfa7NoKpYNEWHiVMCn15o/xkvhh9d9VIZjMBWpoc7zIg1FzuCzsSUQsc3PgajQfnbWZkpK2IKXBOuzWqPG8ks9zKXKNpvhIk37LZJZVANG1TBW4ShTTEIFh/n1ASQAqf5+AHeFmwBLsJ/WIlQgAAA==';
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
    .femi-wa-toggle{width:70px;height:70px;filter:drop-shadow(0 7px 9px #173c2c35);background:none;border-radius:18px}
    .femi-wa-image{display:block;width:100%;height:100%;object-fit:contain;pointer-events:none;user-select:none}
    .femi-wa-toggle:hover{transform:translateY(-4px) rotate(-5deg) scale(1.06)}
    .femi-wa-toggle:active{transform:translateY(0) scale(.94)}
    @media(max-width:650px){.femi-wa-toggle{width:64px;height:64px}}
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
    <button type="button" class="femi-wa-toggle" id="femiWaToggle" aria-label="Contact Femi Art" aria-expanded="false" aria-controls="femiWaPanel">
      <img class="femi-wa-image" src="${crochetImage}" alt="" width="70" height="70" draggable="false">
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