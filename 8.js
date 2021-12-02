function new_string() {
    var fr = document.getElementById('forma');
    var str = document.getElementsByClassName('fields')[0];
    var el = str.cloneNode(true); 
    fr.appendChild(el);
}

function delestr(el) {
    var fr = document.getElementById('forma');
    var prnt = el.parentNode;
    fr.removeChild(prnt);
}

function move_up(el){
    par = el.parentNode;
    var fr = document.getElementById('forma');
    var sosed = par.previousSibling;
    fr.insertBefore(par,sosed);
}

function move_down(el){
    par = el.parentNode;
    var fr = document.getElementById('forma');
    var sosed = par.nextSibling;
    fr.insertBefore(par,sosed.nextSibling);
}

function save_data() {
    var el = document.createElement('div');
    el.className = 'save';
    el.innerHTML = '{';
    document.body.appendChild(el);
    var object = document.getElementsByClassName('fields');
    for (const key in object) 
    {
        if (object.hasOwnProperty(key)) 
        {
            const element = object[key];
            if (element != document.getElementsByClassName('fields')[0])
            {
                var text = '"' + element.children[0].value + '":"' + element.children[1].value + '"';
                el.innerHTML += text;
                if (element.nextSibling != undefined)
                {
                    el.innerHTML += ',';
                } 
            }
        }
    }
    el.innerHTML += "}";
}