var data;

window.onload = function(){
    $.get("../data-fr-student.json", function(json){
        data = json;

        setHeader();
        setTrainingOrExperience("training");
        setTrainingOrExperience("experience");
        setMotivation();
        setInformation();
        setknowlegde();
        setDefault("hobby");
        setDefault("quality");
        setDefault("fault");
    });
}

function setHeader(){
    let name = data.header["name"];
    let study = data.header["study"];
    document.getElementById("header-name").innerHTML = name;
    document.getElementById("header-study").innerHTML = study;
}


function setMotivation(){
    let title = data.motivation["title"];
    let content = data.motivation["content"];
    let dom = document.getElementById("motivation");
    dom.getElementsByClassName("category-title")[0].innerHTML = title;
    dom.getElementsByClassName("category-content")[0].innerHTML = content;
}

function setInformation(){
    let title = data.information["title"];
    let contents = data.information["content"];
    let dom = document.getElementById("information");
    let ul = document.createElement("ul");

    dom.getElementsByClassName("category-title")[0].innerHTML = title;

    for(let i in contents){
        let li = document.createElement("li");
        let p = document.createElement("p");
        let img = document.createElement("img");

        img.src = "../images/" + contents[i]["img"];
        p.innerHTML = contents[i]["data"];
        li.className = "row";
        li.appendChild(img);
        li.appendChild(p);
        ul.appendChild(li);
    }

    dom.getElementsByClassName("category-content")[0].appendChild(ul);
}

function setTrainingOrExperience(){
    let title = data[arguments[0]]["title"];
    let contents = data[arguments[0]]["content"];
    let dom = document.getElementById(arguments[0]);
    let ul = document.createElement("ul");

    dom.getElementsByClassName("category-title")[0].innerHTML = title;

    for(let i in contents){
        let li = document.createElement("li");
        let date = document.createElement("p");
        let doublePoint = document.createElement("p");
        let description = document.createElement("p");

        date.innerHTML = contents[i]["date"];
        date.className = "date";
        doublePoint.innerHTML = ":";
        doublePoint.className = "double-point";
        description.innerHTML = contents[i]["description"];
        description.className = "description";

        li.className = "row";
        li.appendChild(date);
        li.appendChild(doublePoint);
        li.appendChild(description);

        ul.appendChild(li);
    }
    dom.getElementsByClassName("category-content")[0].appendChild(ul);
}

function setknowlegde(){
    let title = data.knowlegde["title"];
    let contents = data.knowlegde["content"];
    let dom = document.getElementById("knowledge");
    let ul = document.createElement("ul");

    dom.getElementsByClassName("category-title")[0].innerHTML = title;

    for(let i in contents){
        let type = contents[i]["type"];
        let classType = type.replace(/ /g,"-");
        let li = document.createElement("li");
        let classList = `${classType} knowledge`;
        let domType = ul.getElementsByClassName(classList)[0];

        if(domType === undefined){
            let liType = document.createElement("li");
            let h4 = document.createElement("h4");
            h4.innerHTML = type;
            domType = document.createElement("ul");
            domType.className = classList;
            liType.appendChild(h4);
            liType.appendChild(domType);
            ul.appendChild(liType);
        }

        let pName = document.createElement("p");
        let doublePoint = document.createElement("p");
        let pLevel = document.createElement("p");
        pName.innerHTML = contents[i]["name"];
        doublePoint.innerHTML = ":";
        doublePoint.className = "double-point";
        pLevel.innerHTML = contents[i]["level"];
        li.className = "row";
        li.appendChild(pName);
        li.appendChild(doublePoint);
        li.appendChild(pLevel);
        domType.appendChild(li);

    }
    dom.getElementsByClassName("category-content")[0].appendChild(ul);
}

function setDefault(){
    let title = data[arguments[0]]["title"];
    let contents = data[arguments[0]]["content"];
    let ul = document.createElement("ul");
    let dom = document.getElementById([arguments[0]]);

    dom.getElementsByClassName("category-title")[0].innerHTML = title;

    for(let i in contents){
        let li = document.createElement("li");
        li.innerHTML = contents[i];
        ul.appendChild(li);
    }

    dom.getElementsByClassName("category-content")[0].appendChild(ul);
}