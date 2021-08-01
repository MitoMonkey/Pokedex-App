let pokemonRepository=function(){let t=[],e="https://pokeapi.co/api/v2/pokemon/?limit=50";function n(e){t.push(e)}let i=document.querySelector("#filter_pokemons");function o(t){let e=t.detailsUrl;return fetch(e).then(function(t){return t.json()}).then(function(e){t.imageUrlFront=e.sprites.front_default,t.imageUrlBack=e.sprites.back_default,t.height=e.height,t.weight=e.weight,t.types=e.types.map(t=>" "+t.type.name),t.abilities=e.abilities.map(t=>" "+t.ability.name)}).catch(function(t){console.error(t)})}return i.addEventListener("input",function(){let t=document.querySelectorAll("li"),e=i.value.toUpperCase();t.forEach(function(t){t.innerText.toUpperCase().indexOf(e)>-1?t.style.display="":t.style.display="none"})}),{getAll:function(){return t},add:n,addListItem:function(t){let e=document.querySelector(".pokemon-list"),n=document.createElement("li"),i=document.createElement("button");i.innerText=t.name,i.classList.add("list-group-item","list-group-item-action","list-group-item-success","mb-2","text-center"),i.setAttribute("data-toggle","modal"),i.setAttribute("data-target","#pokemonDetailsModal"),n.appendChild(i),e.appendChild(n),function(t,e){t.addEventListener("click",function(){!function(t){o(t).then(function(){!function(t){let e=$(".modal-body"),n=$(".modal-title");e.empty(),n.empty();let i=$("<h2>"+t.name+"</h2>"),o=$("<img class='modal-img' style='width:50%' alt='front of "+t.name+"' >");o.attr("src",t.imageUrlFront);let a=$("<img class='modal-img' style='width:50%' alt='back of "+t.name+"' >");a.attr("src",t.imageUrlBack);let l=$("<p>Height: "+t.height+"</p>"),r=$("<p>Weight: "+t.weight+"</p>"),p=$("<p>Types: "+t.types+"</p>"),s=$("<p>Abilities: "+t.abilities+"</p>");n.append(i),e.append(o),e.append(a),e.append(l),e.append(r),e.append(p),e.append(s)}(t)})}(e)})}(i,t)},loadList:function(){return fetch(e).then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){n({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error(t)})},loadDetails:o}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});