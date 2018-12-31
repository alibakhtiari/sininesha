(function(){let PAGINATOR=(num,itemSelector)=>{let obj,tmpNode,pageButtons;let isSet=!1;itemSelector=itemSelector?itemSelector:'.prd';function showPage(){this.hideAllItems();this.setup.pages[this.setup.currentPage].map((i)=>{this.items[i].classList.remove('hide')});isSet=!1}
function setActivePage(page){if(isSet){return!1}
isSet=!0;this.setup.currentPage=page;this.resetButtons();pageButtons[page].classList.add('active');this.showPage.call(this)}
function addMainWrapper(){if(document.querySelectorAll(this.defaults.paginationWrapper).length===0){tmpNode=document.createElement('div');document.querySelector(itemSelector).parentNode.appendChild(tmpNode);tmpNode.outerHTML=this.setup.paginationTemplate}
this.setContainer()}
function setContainer(container){this.container=container||document.querySelector(this.defaults.paginationWrapper)}
function moveLeft(offset){console.log('l',parseInt(this.setup.currentPage)+parseInt(offset));if(this.setup.currentPage+parseInt(offset)>=0){this.setActivePage(parseInt(this.setup.currentPage)+parseInt(offset))}}
function moveRight(offset){console.log('r',parseInt(this.setup.currentPage)+parseInt(offset));if(this.setup.currentPage<(this.setup.pages.length-1)){this.setActivePage(parseInt(this.setup.currentPage)+parseInt(offset))}}
function qAll(selector){return Array.prototype.slice.call(document.querySelectorAll(selector))}
function runHandler(){let pb=qAll(this.buttonSelector.pageBtn);pb.map((a)=>{a.addEventListener('click',(e)=>{this.setActivePage(e.currentTarget.getAttribute('data-page'))})});pb=qAll(this.buttonSelector.pageDirection);pb.map((a)=>{a.addEventListener('click',(e)=>{let offset=e.currentTarget.getAttribute('data-offset');console.log('o',parseInt(offset))
if(parseInt(offset)<0){this.moveLeft.call(this,offset)}else{this.moveRight.call(this,offset)}})});pb=qAll(this.buttonSelector.pageJump);pb.map((a)=>{a.addEventListener('click',(e)=>{this.setActivePage.call(this,e.currentTarget.getAttribute('data-location'))})})}
function resetButtons(){let pb=qAll(this.buttonSelector.pageBtn)
pb.map((a)=>{a.classList.remove('active')})}
function createButton(cssClass,extra,label){return'<a class="'+cssClass+'" '+extra+' href="#prod" data-scroll>'+label+'</a>'}
function buildPagination(){var str='';this.setup.pages.map(function(itm,i){var indx=i+1;str+=createButton('pb page-btn','data-page="'+i+'"',indx)});this.container.innerHTML=str;pageButtons=qAll(this.buttonSelector.pageBtn)}
function init(){let ctr=0;this.items=Array.prototype.slice.call(document.querySelectorAll(itemSelector));this.maximumItems=this.items.length;this.setup.numPerPage=num||this.defaults.numPerPage;this.items.map((a,b)=>{this.setup.tmpPage.push(b);ctr++;if(ctr>=this.setup.numPerPage||(b+1===this.maximumItems)){this.setup.pages.push(this.setup.tmpPage);this.setup.tmpPage=[];ctr=0}});this.addMainWrapper();this.buildPagination();this.setActivePage(0);this.runHandler()}
function hideAllItems(){let ctr;this.items.map((a,b)=>{a.classList.add('hide')})};obj={num:num,items:null,container:null,defaults:{paginationWrapper:'.pagination',numPerPage:9,hideIfSinglePage:!1},setup:{paginationTemplate:"<div class=\"pagination\">PAGINATOR</div>",numPerPage:0,pages:[],page:1,tmpPage:[],ctr:0,currentPage:1,isSet:!1,activeClass:'page-active'},buttonSelector:{pageBtn:'.page-btn',pageDirection:'.page-btn-direction',allBtns:'.pb'},hideAllItems:hideAllItems,init:init,addMainWrapper:addMainWrapper,showPage:showPage,setActivePage:setActivePage,setContainer:setContainer,buildPagination:buildPagination,moveLeft:moveLeft,moveRight:moveRight,runHandler:runHandler,resetButtons:resetButtons};return obj};window.CB_PAGINATOR=PAGINATOR}());(function(){function run(){pg=CB_PAGINATOR(9,'.prd');pg.init()}
run()}())