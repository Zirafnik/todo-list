(()=>{"use strict";function e(e){return{name:e,tasks:[]}}function t(e,t,n,d,l){return{name:e,dueDate:t,priority:n,description:d,status:l}}function n(e,t){e.tasks.push(t)}let d=null;function l(e){let t=document.createElement("div");t.textContent=`${e.name}`,t.classList.add("projectDiv"),t.addEventListener("click",(function(){let t=document.querySelector("#tasks");for(;t.children.length>1;)t.removeChild(t.lastChild);o(e),e.tasks.forEach((e=>a(e))),d=e})),document.getElementById("projects").appendChild(t)}function o(e){document.getElementById("tasks-header").textContent=e.name}function a(e){let t=document.createElement("div");t.classList.add("taskDiv");let n=document.createElement("button");n.textContent="Done",n.addEventListener("click",(function(){t.style.backgroundColor="lightgray",t.style.textDecoration="line-through"})),t.appendChild(n);for(let n in e){let d=document.createElement("span");d.textContent=`${e[n]} `,d.classList.add("span"),t.appendChild(d)}t.addEventListener("click",(function(){})),document.getElementById("tasks").appendChild(t)}let c=[];function i(e){c.push(e),console.log(c)}let r=e("sport"),u=t("football","ball with foot","wednesday","urgent","todo"),s=t("basket","ball in hoop","saturday","non-urgent","done");n(r,u),n(r,s),l(r),o(r);let p=e("food");var m;n(p,t("burek","sirov","tuesday","urgetn","done")),l(p),r.tasks.forEach((e=>a(e))),i(r),i(p),document.getElementById("add-proj-btn").addEventListener("click",(function(){if(null==document.querySelector(".inputProjDiv")){let t=document.getElementById("projects"),n=document.querySelector("#proj-header-wrapper"),d=document.createElement("div");d.classList.add("inputProjDiv"),n.after(d);let o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("placeholder","Title"),d.appendChild(o);let a=document.createElement("button");a.textContent="Add",a.addEventListener("click",(function(){let n=e(o.value);i(n),l(n),t.removeChild(d)})),d.appendChild(a);let c=document.createElement("button");c.textContent="Cancel",c.addEventListener("click",(function(){t.removeChild(d)})),d.appendChild(c)}})),document.getElementById("add-task-btn").addEventListener("click",(function(){if(null==document.querySelector(".inputTaskDiv")){let e=document.getElementById("tasks"),l=document.querySelector("#task-header-wrapper"),o=document.createElement("div");o.classList.add("inputTaskDiv"),l.after(o);let c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("placeholder","task name"),o.appendChild(c);let i=document.createElement("input");i.setAttribute("type","date"),i.setAttribute("placeholder","due date"),o.appendChild(i);let r=document.createElement("select"),u=document.createElement("option");u.value="very urgent",u.textContent="very urgent",r.appendChild(u);let s=document.createElement("option");s.value="urgent",s.textContent="urgent",r.appendChild(s);let p=document.createElement("option");p.value="non-urgent",p.textContent="non-urgent",r.appendChild(p),o.appendChild(r);let m=document.createElement("input");m.setAttribute("type","text"),m.setAttribute("placeholder","description"),o.appendChild(m);let h=document.createElement("button");h.textContent="Add",h.addEventListener("click",(function(){let l=t(c.value,i.value,r.value,m.value,!1);console.log(d),n(d,l),a(l),e.removeChild(o)})),o.appendChild(h);let v=document.createElement("button");v.textContent="Cancel",v.addEventListener("click",(function(){e.removeChild(o)})),o.appendChild(v)}})),console.log(r),m=c[0],d=m})();