document.getElementById("addButton").addEventListener("click", function() {
    var inputVal = document.getElementById("inputactivity").value;
    if(inputVal.trim() !== "") {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(inputVal));
        document.getElementById("List-container").appendChild(li);
        document.getElementById("inputactivity").value = "";
        
        var closeBtn = document.createElement("span");
        closeBtn.className = "close";
        closeBtn.appendChild(document.createTextNode("×"));
        li.appendChild(closeBtn);
    } else {
        alert("Please enter a task.");
    }
});

document.getElementById("List-container").addEventListener("click", function(event) {
    if(event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    } else if(event.target.classList.contains("close")) {
        event.target.parentElement.style.display = "none";
    }
});
