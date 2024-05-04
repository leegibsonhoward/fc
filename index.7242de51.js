const t=t=>{t.setAttribute("pattern","^[A-Za-z\\d](?:[A-Za-z\\d]|-(?=[A-Za-z\\d])){0,38}$")},e=t=>{t.addEventListener("invalid",(()=>{const e=t.validity;e.valueMissing?t.setCustomValidity("required"):e.patternMismatch?t.setCustomValidity("enter valid github username"):e.tooShort?t.setCustomValidity("too short"):e.tooLong&&t.setCustomValidity("too long")}))},r=t=>{t.addEventListener("input",(()=>{t.setCustomValidity("")}))},o=([t,e],r)=>{e.addEventListener("submit",(o=>{console.info("username submitted"),t.blur(),o.preventDefault(),e.checkValidity(),r(t.value)}))},n={mainHandler:n=>{const a=document.querySelector("#username-input"),i=document.querySelector("#submit-form");t(a),e(a),r(a),o([a,i],n)}},a={constructUrl:t=>"https://api.github.com/search/commits"+`?q=author:${t}`+"&order=asc&sort=committer-date"},i={getData:async(t,e)=>{try{const r=await t(e);return await r.json()}catch(t){return t}}},s=t=>{const e=t.items[0];return{_avatar:e.author.avatar_url,_name:e.commit.author.name,_userHandle:e.author.login,_commitMsg:e.commit.message,_date:e.commit.author.date,_repo:e.repository.name,_profileUrl:e.author.html_url,_commitUrl:e.html_url,_repoUrl:e.repository.html_url}},l=t=>new Date(t).toLocaleDateString(),m={renderTemplate:(t,e,r)=>{if(!document.querySelector(t)){r=document.querySelector(r);const t=(e=document.querySelector(e)).content.cloneNode(!0);r.appendChild(t)}},renderData:t=>{const{_avatar:e,_name:r,_userHandle:o,_commitMsg:n,_date:a,_repo:i,_profileUrl:m,_commitUrl:c,_repoUrl:d}=s(t),u=document.querySelector("#avatar"),p=document.querySelector("#name"),h=document.querySelector("#userhandle"),y=document.querySelector("#commitmsg"),f=document.querySelector("#date"),_=document.querySelector("#repo"),v=document.querySelector("#profileurl"),g=document.querySelector("#commiturl"),L=document.querySelector("#repourl"),q=l(a),S=n.split("\n")[0];u.src=e,p.textContent=r,h.textContent=`@${o}`,y.textContent=S,f.textContent=q,_.textContent=i,v.href=m,g.href=c,L.href=d},removeElements:function(...t){for(let e=0;e<t.length;e++){const r=document.querySelector(t[e]);r&&r.remove()}},elementList:{jumbotron:".jumbotron",additionalInfo:"#additional-info",cardContainer:".row",notFound:"#container404",template404:"#page404",container:"#container",cardTemplate:"#card-template",card:".card",avatar:"#avatar",name:"#name",userHandle:"#userhandle",commitMsg:"#commitmsg",date:"#date",repo:"#repo",profileUrl:"#profileurl",commitUrl:"#commiturl",repoUrl:"#repourl"}};class c{constructor(t,e,r,o){this.input=t,this.data=e,this.display=r,this.utils=o,console.info("app::running")}run(){this.input.mainHandler((async t=>{try{const e=this.utils.constructUrl(t),r=await this.data.getData(fetch,e);if(void 0===r.items||0===r.items.length)throw this.display.removeElements(this.display.elementList.notFound,this.display.elementList.jumbotron,this.display.elementList.card),this.display.renderTemplate(this.display.elementList.container404,this.display.elementList.template404,this.display.elementList.container),new Error("username not found!");this.display.removeElements(this.display.elementList.jumbotron,this.display.elementList.notFound,this.display.elementList.additionalInfo),this.display.renderTemplate(this.display.elementList.card,this.display.elementList.cardTemplate,this.display.elementList.container),this.display.renderData(r),console.info(r.items[0])}catch(t){console.error(t)}}))}}new c(n,i,m,a).run();
//# sourceMappingURL=index.7242de51.js.map