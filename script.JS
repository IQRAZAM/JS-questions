let helloBtn=document.querySelector("button");
helloBtn.addEventListener("click",inputMsg);

function inputMsg(){
    let name= prompt("enter in the name of love");
    helloBtn.textContent = "Roll No.1" + name;
}
switch("qualities"){
    case"sana":
    console.log("she is brave");
    break;
    case"rabia":
    console.log("she is cute");
    break;var qualities = prompt("name of girl");

    case"wareesha":
    console.log("she is prettiest");
    break;
    case"ayesha":
    console.log("she is mad");
    break;
    default:
        consolw.log("nothing special");
        break;
}