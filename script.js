let inp = document.getElementById("inp");

let clck = document.getElementById("clckm");

let p2 = document.getElementById("p2");

let p1 = document.getElementById("p1");
  clck.addEventListener('click',add);
 
 
function add(){

if (p1.innerHTML=='') {
    p1.innerHTML+= inp.value;
       inp.value = '';
    clck.innerHTML = "Added";
    p1.style.display ="inline";
    button1.style.display="inline";
    del1.style.display="inline";
} else if(p2.innerHTML=='') {
    p2.innerHTML+= inp.value;
    inp.value = '';
    clck.innerHTML = "Added";
    p2.style.display ="inline";
    button2.style.display="inline";
    del2.style.display="inline";
} else if(p3.innerHTML==''){
    p3.innerHTML+= inp.value;
    inp.value = '';
    clck.innerHTML = "Added";
    p3.style.display ="inline";
    button3.style.display="inline";
    del3.style.display="inline";
} else if(p4.innerHTML==''){
    p4.innerHTML+= inp.value;
    inp.value = '';
    clck.innerHTML = "Added";
    p4.style.display ="inline";
    button4.style.display="inline";
    del4.style.display="inline";
}   else{
    p5.innerHTML+= inp.value;
    inp.value = '';
    clck.innerHTML = "Added";
    p5.style.display ="inline";
    button5.style.display="inline";
    del5.style.display="inline";
}   
    }

  
function added(){
    clck.innerHTML = "Add";
}
setInterval(added,3000)

let del1 = document.getElementById("del1");
let button1 =  document.getElementById("button1");
button1.addEventListener('click',function(){
    p1.innerHTML = "Congrats! please! Delete work form list";
});

let button2 =  document.getElementById("button2");
button2.addEventListener('click',function(){
    p2.innerHTML = "Congrats! please! Delete work form list";
});
let button3 =  document.getElementById("button3");
button3.addEventListener('click',function(){
    p3.innerHTML = "Congrats! please! Delete work form list";
});

let button4 =  document.getElementById("button4");
button4.addEventListener('click',function(){
    p4.innerHTML = "Congrats! please! Delete work form list";
});

let button5 =  document.getElementById("button5");
button5.addEventListener('click',function(){
    p5.innerHTML = "Congrats! please! Delete work form list";
});


del1.addEventListener('click',function(){
    p1.innerHTML = '';
    p1.style.display ="none";
    button1.style.display="none";
    del1.style.display="none";
});
let del2 = document.getElementById("del2");
del2.addEventListener('click',function(){
    p2.innerHTML = '';
    p2.style.display ="none";
    button2.style.display="none";
    del2.style.display="none";
});
let del3 = document.getElementById("del3");
del3.addEventListener('click',function(){
    p3.innerHTML = '';
    p3.style.display ="none";
    button3.style.display="none";
    del3.style.display="none";
});

let del4 = document.getElementById("del4");
del4.addEventListener('click',function(){
    p4.innerHTML = '';
    p4.style.display ="none";
    button4.style.display="none";
    del4.style.display="none";
});

let del5 = document.getElementById("del5");
del5.addEventListener('click',function(){
    p5.innerHTML = '';
    p5.style.display ="none";
    button5.style.display="none";
    del5.style.display="none";
});

function loading(){
        alert("WARNING! " + "  " +"MAX. 5 WORK CAN BE ADD." +"                                                                                 " + 
        "                                              DELETE WORK AFTER BEING COMPLETED");
};
loading();

