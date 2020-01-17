$(function() {
    var count = 4;
    $('#add').click(function(){
        var card = document.createElement("div");
        card.className = "card";
        var cardheader = document.createElement("div");
        cardheader.className ="card-header";
        var cardtitle = document.createElement("h2");
        cardtitle.className = "mb-0";
        cardtitle.contentEditable = "true";
        var collbtn = document.createElement("button");
        collbtn.classList = "btn btn-link collapsed";
        collbtn.setAttribute('type',"button");
        collbtn.setAttribute('data-toggle',"collapse");
        collbtn.setAttribute('data-target',"#collapse"+ count);
        collbtn.setAttribute('aria-controls',"collapse"+ count);
        collbtn.innerHTML = "Assignment" + count;
        cardtitle.appendChild(collbtn);
        cardheader.appendChild(cardtitle);

        var colldiv = document.createElement("div");
        colldiv.id =  "collapse"+ count;
        colldiv.class = "collapse";
        colldiv.setAttribute('data-parent',"#accordionExample");
        var cardbody = document.createElement("div");
        cardbody.class = "card-body";
        cardbody.contentEditable = "true";
        var cardbodytitle = document.createElement("h5");
        cardbodytitle.innerText = " Topics";
        cardbody.appendChild(cardbodytitle);
        colldiv.appendChild(cardbody);

        card.appendChild(cardheader);
        card.appendChild(colldiv);
        document.getElementById("accordionExample").appendChild(card);
        count++;
    })
});

