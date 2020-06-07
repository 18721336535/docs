window.onload=function(){
    var tabn= "mytest";
    var oTab=document.getElementById('d1');
    var aLi=oTab.getElementsByTagName('li');
    var oTabBox=document.getElementById('inbox');
    var aBox=oTabBox.getElementsByTagName('div');
    for(var i=0;i<aLi.length;i++){
        aLi[i].index=i;
        aLi[i].onclick=function(){
            for(var j=0;j<aLi.length;j++){
                aLi[j].className='nav-item';//取消菜单样式
                aBox[j].className="hide";//隐藏所有的tabDiv
            }
            aLi[this.index].className='nav-item dl-selected';
            aBox[this.index].className="";
            aBox[this.index].innerHTML= "<object type='text/html' data='"+tabn+".html ' width='100%' height='100%'></object>";
            // $(aBox[this.index]).load('mytest.html');

        }
    }
}