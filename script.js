
var b = document.getElementById('add')

b.addEventListener('click',added)


function added(){
    if(input.value==""){
        alert("Enter value the input")
    }else{
        var d = document.createElement('div');
        // d.setAttribute;
        var doto = document.getElementById("todolist");
        // doto.setAttribute;
        var list = document.createElement('li');
        list.innerText=input.value;

        var b = document.createElement("button");
        b.innerText='DEL';
        doto.appendChild(d)
        d.append(list);
        d.append(b);
        input.value=" ";

        b.addEventListener('click',del)
       
       
        function del(){
            b.parentElement.remove();
            
        }
        var clall = document.getElementById('clear');

        clall.addEventListener('click',clearA)

        function clearA(){
            list.parentElement.remove();
        }



    }
}
















