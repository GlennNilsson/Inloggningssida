
    
    IdlePage();
    //Idle page is function for creating the idle page
    function IdlePage()
    {
        var test = localStorage.getItem("inloggad");
        if(test !== "ok")
        {
            var div = document.createElement("Div");
            div.setAttribute("id","div");
            document.body.appendChild(div);
            var p = document.createElement("P");
            var ptext = document.createTextNode("User");
            p.appendChild(ptext);
            document.getElementById("div").appendChild(p);
            var input = document.createElement("Input");
            input.setAttribute("Type", "Text")
            input.setAttribute("id", "User");
            document.getElementById("div").appendChild(input);
            var p = document.createElement("P");
            var ptext = document.createTextNode("Password");
            p.appendChild(ptext);
            document.getElementById("div").appendChild(p);
            var input = document.createElement("Input");
            input.setAttribute("Type", "Text");
            input.setAttribute("id", "los");
            document.getElementById("div").appendChild(input);
            var br = document.createElement("BR");
            document.getElementById("div").appendChild(br);
            var br2 = document.createElement("BR");
            document.getElementById("div").appendChild(br2);
            var btn = document.createElement("BUTTON");
            var btntext = document.createTextNode("Click me");
            btn.appendChild(btntext);
            btn.setAttribute("id", "but");
            document.getElementById("div").appendChild(btn);
            document.getElementById("but").addEventListener("click", Inloggad);
    }
}
//start page is function for creating start page which is the page that is open when you have logged in
function StartPage()
{   var test =localStorage.getItem("inloggad")
    if((test === "ok"))
    {       
        var div = document.getElementById("div");
        remove("div");
        var div = document.createElement("Div");
        div.setAttribute("id","div");
        document.body.appendChild(div);
        var p2 = document.createElement("P");
        var p2text = document.createTextNode("Välkommen to your page.");
        p2.appendChild(p2text);
        document.getElementById("div").appendChild(p2);
        localStorage.setItem("inloggad", "ok");
        var br = document.createElement("BR");
        document.getElementById("div").appendChild(br);
        var btn2 = document.createElement("BUTTON");
        var btn2text = document.createTextNode("Logga ut");
        btn2.appendChild(btn2text);
        btn2.setAttribute("id", "but2");
        document.getElementById("div").appendChild(btn2);
        document.getElementById("but2").addEventListener("click", restart);
    }
}
//Init function is a function for creating a information page that inform you that your password or user name was not correct
function Init()
    {        
            var div = document.createElement("Div");
            div.setAttribute("id","div");
            document.body.appendChild(div);
            var p = document.createElement("P");
            var ptext = document.createTextNode("Information! Wrong Password or Username.");
            p.appendChild(ptext);
            document.getElementById("div").appendChild(p);   
            var br = document.createElement("BR");
            document.getElementById("div").appendChild(br);       
            var btn4 = document.createElement("BUTTON");
            var btntext = document.createTextNode("Go Back");
            btn4.appendChild(btntext);
            btn4.setAttribute("id", "but3");
            document.getElementById("div").appendChild(btn4);
            document.getElementById("but3").addEventListener("click", restart);

}
// Function for running correct page if password and username is correct or not
function Inloggad()
{
    if(document.getElementById("los").value === "1234" && document.getElementById("User").value === "test")
    {
        localStorage.setItem('inloggad','ok'); 
        StartPage();
    }
    else
    {
        alert("wrong username or passsword");
        remove("div");
        Init();
    }
}
//function for opening the idle page and removing start page
function restart()
{
    localStorage.setItem("inloggad","notok"); 
    remove("div");
    IdlePage();
}

// Function for removing element by id
function remove(Id) {
    var element = document.getElementById(Id);
    element.parentNode.removeChild(element);
}


