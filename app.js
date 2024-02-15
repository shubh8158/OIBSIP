let todo=[];

let req=prompt("Enter the Request you want to Execute");
while(true){
    if(req=="quit"){
        console.log("Quitiing the App");
        break;
    }
    if(req=="list"){
        console.log("____________");
        for(i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
    }
    else if(req=="add"){
        let task=prompt("Enter the value you want to add");
        todo.push(task);
        console.log("Task is Added");
    }
    else if(req=="delete"){
        let idx=prompt("Enter the id of value you Want to delete");
        todo.splice(idx,1);
        console.log("Task has been Deleted");
    }else{
        console.log("Wrong Input");
    }
     req=prompt("Enter the request:");
}