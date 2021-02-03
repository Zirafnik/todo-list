(()=>{"use strict";function e(e){return{name:e,tasks:[]}}function t(e,t,n,d,l){return{name:e,dueDate:t,priority:n,description:d,status:l}}let n=[];function d(){window.localStorage.clear(),window.localStorage.setItem("projectsData",JSON.stringify(n)),console.log(n)}function l(e){n.push(e),d()}function i(e,t){let l=n.indexOf(e);n[l].tasks.push(t),d()}let a=null,o=null;function s(e){let t=document.createElement("div");t.id=e.name,t.textContent=`${e.name}`,t.classList.add("projectDiv"),t.addEventListener("click",(function(){if(document.getElementById(e.name)){let n=document.querySelector("#tasks");for(;n.children.length>1;)n.removeChild(n.lastChild);c(e.name),e.tasks.forEach((e=>r(e))),o.classList.remove("projectDivClicked"),a=e,o=t,t.classList.add("projectDivClicked")}}));let l=document.createElement("button");l.classList.add("deleteBtn"),l.classList.add("proj-deleteBtn"),l.addEventListener("click",(function(){!function(e){let t=n.indexOf(e);t>-1&&n.splice(t,1),d()}(e);let l=document.querySelector("#tasks");for(;l.children.length>1;)l.removeChild(l.lastChild);document.getElementById("projects").removeChild(t),c("")})),t.appendChild(l),document.getElementById("projects").appendChild(t)}function c(e){document.getElementById("tasks-header").textContent=e}function r(e){let t=document.createElement("div");t.classList.add("taskDiv"),1==e.status?t.classList.add("completed"):"urgent"==e.priority?t.classList.add("urgent"):"non-urgent"==e.priority?t.classList.add("non-urgent"):"very urgent"==e.priority&&t.classList.add("very-urgent");let l=document.createElement("button");l.textContent="Done",l.classList.add("done"),l.addEventListener("click",(function(){!function(e,t){let l=n.indexOf(t);console.log(l);let i=n[l].tasks.indexOf(e);console.log(i),n[l].tasks[i].status=!0,d()}(e,a),t.style.textDecoration="line-through",t.classList.add("completed")}));let i=!1;l.addEventListener("mouseover",(function(){i=!0})),l.addEventListener("mouseleave",(function(){i=!1})),t.appendChild(l);for(let n in e){if("description"==n||"status"==n)continue;let d=document.createElement("span");d.textContent=`${e[n]} `,d.classList.add("span"),t.appendChild(d)}t.addEventListener("click",(function(){if(null==t.querySelector(".description")&&0==i){let n=document.createElement("span");n.textContent=`${e.description}`,n.classList.add("description"),t.appendChild(n)}else if(t.querySelector(".description")&&0==i){let e=t.querySelector(".description");t.removeChild(e)}}));let o=document.createElement("button");o.textContent="Edit",o.addEventListener("click",(function(){}));let s=document.createElement("button");s.classList.add("deleteBtn"),s.addEventListener("click",(function(){!function(e,t){let l=n.indexOf(t),i=n[l].tasks.indexOf(e);i>-1&&n[l].tasks.splice(i,1),d()}(e,a),document.getElementById("tasks").removeChild(t)})),t.appendChild(s),document.getElementById("tasks").appendChild(t)}if("undefined"!=typeof Storage&&0!=window.localStorage.length?n=JSON.parse(window.localStorage.getItem("projectsData")):console.log("no storage support"),document.getElementById("add-proj-btn").addEventListener("click",(function(){if(null==document.querySelector(".inputProjDiv")){let t=document.getElementById("projects"),n=document.querySelector("#proj-header-wrapper"),d=document.createElement("div");d.classList.add("inputProjDiv"),n.after(d);let i=document.createElement("h2");i.classList.add("input-header"),i.textContent="Add a project:",d.appendChild(i);let a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("placeholder","Title"),a.classList.add("inputElem"),d.appendChild(a);let o=document.createElement("div");o.classList.add("buttonsDiv");let c=document.createElement("button");c.classList.add("inputElem"),c.textContent="Add",c.addEventListener("click",(function(){let n=e(a.value);l(n),s(n),t.removeChild(d)})),o.appendChild(c);let r=document.createElement("button");r.classList.add("inputElem"),r.textContent="Cancel",r.addEventListener("click",(function(){t.removeChild(d)})),o.appendChild(r),d.appendChild(o)}else{let e=document.getElementById("projects"),t=document.querySelector(".inputProjDiv");e.removeChild(t)}})),document.getElementById("add-task-btn").addEventListener("click",(function(){if(null==document.querySelector(".inputTaskDiv")){let e=document.getElementById("tasks"),n=document.querySelector("#task-header-wrapper"),d=document.createElement("div");d.classList.add("inputTaskDiv"),n.after(d);let l=document.createElement("h2");l.classList.add("input-header"),l.textContent="Add a task:",d.appendChild(l);let o=document.createElement("input");o.classList.add("inputElem"),o.setAttribute("type","text"),o.setAttribute("placeholder","task name"),d.appendChild(o);let s=document.createElement("input");s.classList.add("inputElem"),s.setAttribute("type","date"),s.setAttribute("placeholder","due date"),d.appendChild(s);let c=document.createElement("select");c.classList.add("inputElem");let u=document.createElement("option");u.value="very urgent",u.textContent="very urgent",c.appendChild(u);let m=document.createElement("option");m.value="urgent",m.textContent="urgent",c.appendChild(m);let p=document.createElement("option");p.value="non-urgent",p.textContent="non-urgent",c.appendChild(p),d.appendChild(c);let h=document.createElement("textarea");h.classList.add("inputElem"),h.classList.add("description"),h.setAttribute("rows","3"),h.setAttribute("cols","50"),h.setAttribute("placeholder","description"),d.appendChild(h);let E=document.createElement("div");E.classList.add("buttonsDiv");let v=document.createElement("button");v.classList.add("inputElem"),v.textContent="Add",v.addEventListener("click",(function(){let n=t(o.value,s.value,c.value,h.value,!1);i(a,n),r(n),e.removeChild(d)})),E.appendChild(v);let C=document.createElement("button");C.classList.add("inputElem"),C.textContent="Cancel",C.addEventListener("click",(function(){e.removeChild(d)})),E.appendChild(C),d.appendChild(E)}else{let e=document.getElementById("tasks"),t=document.querySelector(".inputTaskDiv");e.removeChild(t)}})),0==n.length){let n=e("Default");l(n);let d=t("demoTask","2021-01-01","urgent","This is an example task",!1),a=t("demoTask2","2021-02-02","very urgent","This is another example task",!1),o=t("demoTask3","2021-03-03","non-urgent","Another example, this one non-urgent",!1);i(n,d),i(n,a),i(n,o);let s=e("another");l(s),i(s,t("demoTask4","2021-04-04","urgent","Another list example",!1))}var u;n.forEach((e=>s(e))),c(n[0].name),n[0].tasks.forEach((e=>r(e))),u=n[0],a=u,o=document.querySelectorAll(".projectDiv")[0]})();