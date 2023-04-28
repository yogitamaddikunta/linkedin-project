const view1 = document.getElementById('object'); //0
const view2 = document.getElementById('target'); //1
const view3 = document.getElementById('format');
const view4 = document.getElementById('bud');
const view5 = document.getElementById('mes');

const views = [view1,view2,view3,view4,view5];

const viewSelect = document.getElementById('viewSelect');

const btns = [...viewSelect.children];

console.log(view5)

for(let i in btns){
    btns[i].onclick = ()=>{
        const k = i;
        console.log(views[k])
        views[k].removeAttribute('hidden')
        for(let j in views){
            if(k === j){
            }
            else{
                views[j].setAttribute('hidden','hidden')
            }
        }
    }
}


window.addEventListener('DOMContentLoaded',()=>{
    view1.removeAttribute('hidden')
})