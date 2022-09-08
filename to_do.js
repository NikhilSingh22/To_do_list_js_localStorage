const title = document.getElementById("title");
const desc = document.getElementById("desc");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];

showAllTask();

function showAllTask()
{
        tasks.forEach((value,index)=>{
            const div = document.createElement("div");
            div.setAttribute("class","task");

            const innerDiv = document.createElement("div");
            div.append(innerDiv);

            const p = document.createElement("p");
            p.innerText= value.title;
            innerDiv.append(p);

            const span = document.createElement("span");
            span.innerText=value.desc;
            innerDiv.append(span);

            const delbtn = document.createElement("button");
            delbtn.setAttribute("class","del_btn");
            delbtn.innerText ="-";
            div.append(delbtn);

            delbtn.addEventListener("click",()=>{
                removeTasks();
                tasks.splice(index,1);
                localStorage.setItem("tasks",JSON.stringify(tasks));
                showAllTask();
            });

            container.append(div);
        });
}


function removeTasks()
{
    tasks.forEach(()=>{
        const div = document.querySelector(".task");
        div.remove();
    })
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    removeTasks();

    tasks.push({
        title: title.value,
        desc: desc.value,
    });
    title.value="";
    desc.value="";
   localStorage.setItem("tasks",JSON.stringify(tasks));
    showAllTask();
});

