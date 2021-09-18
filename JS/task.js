
        const arr=[];
        const che=[];
        function print(){
        let ele="";
        let n=arr.length;
        for(let i=0;i<n;i++){
            ele +="<div  class='task'>"+
                "<span class='ch'> <input type='checkbox' id='myCheck"+i+"' onclick='checkboxcheck("+i+")'></span>"+
                "<span id='text"+i+"' class='work'>"+arr[i]+
                "</span>"
               + "<span class='btns'>"
               + "<span class='float'><a class='crossbtn' onclick='deletTask("+i+")' href='#'><i class='fa fa-times'></i></a> </span>"
               +"<span class='float'>";
                if(i!==0)ele+="<a class='upbtn' onclick='priorityUp("+i+")' href='#'> <i class='fa fa-angle-up'></i></a>";
                ele+="</span>"+
                "<span class='float'>";
                if(i!==n-1)ele+="<a class='downbtn' onclick='priorityDown("+i+")' href='#'> <i class='fa fa-angle-down'></i></a>";
                ele+="</span>"
               + "</span>   "  
            +"</div>"
        }
        document.getElementById("bd").innerHTML = ele;
    }

        function erase(){
            console.log("dele");
            while(arr.length > 0) {
                arr.pop();
            }
            print();
        }

        function add(){
            var val = document.getElementById("addWork").value;
            arr.push(val);
            print();
            console.log(val,arr.length);
        }

        function checkboxcheck(i){
     
            var checkBox = document.getElementById("myCheck"+i);
            var text = document.getElementById("text"+i);
            console.log("a");
            if (checkBox.checked == true){
                text.style='text-decoration: line-through';
              }
           else{
            text.style='text-decoration: none';
           }
        }


        function priorityUp(i){
            let temp=arr[i];
            arr[i]=arr[i-1];
            arr[i-1]=temp;
            print();
        }

        function priorityDown(i){
            let temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
            print();
        }


        function deletTask(i){
            arr.splice(i,1);
            print();
        }
  