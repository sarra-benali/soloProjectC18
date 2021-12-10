var pasta1=makePasta("HASTA LA VISTA BABY","PENNES","SAUCE A LA CREME,CREVETTE,CHEVRETTE,CHAMPIGNION,FEUILLE DE BASLIC,TOMATE CERISE",27.0+"DT")
var pasta2=makePasta("TUNA TASTER","SPAGHETTIS","SAUCE TOMATE,OIGNON,OLIVE,AIL,FEUILLE DE BASLIC,TOMATE FRAICHE",20.5+"DT")
var pasta3=makePasta("GREENLAND","FARFALLES","SAUCE PESTO,POULET,PIGNONS",23.5+"DT")
var pastas=[pasta1,pasta2,pasta3]
var body=$("#order")
var plats=$('<div id=plats class="zoneA"></div>')
body.append(plats)
// $(document).ready(function () {   
// });
var plat1=$('<div id=plat1 class="border"></div>')
var plat2=$('<div id=plat2 class="border"></div>')
var plat3=$('<div id=plat3 class="border"></div>')
var plat4=$('<div id=plat4 class="border"></div>')
var plat5=$('<div id=plat5 class="border"></div>')
var plat6=$('<div id=plat6 class="border"></div>')
plats.append(plat1,plat2,plat3,plat4,plat5,plat6)
var img1=$('<img id="img1" src="./Pasta-Cosi-1.jpg" alt="">')
var titre1=('<h2 id="hasta">HASTA LA VISTA BABY</h2>')
$(titre1).text(pasta1.names)
var description1=('<p id="sause">"SAUCE A LA CREME,CREVETTE,CHEVRETTE,<br>CHAMPIGNION,FEUILLE DE BASLIC,<br>TOMATE CERISE"</p>')
$(description1).text(pasta1.description)
var price1=('<h3 id="prix">27.9DT   </h3>')
$(price1).text(pasta1.price)
plat1.append(img1,titre1,description1,price1)
var button=$("<button class='BUY'>ADD</button>")
$(plat1).append(button)
$(".BUY").click(function(){
    panier.push(pasta1)
    });
var img2=$('<img  id="img2" src="./Pasta-Cosi.1.jpg" alt="">')
plat2.append(img2)
var img3=$('<img id="img3" src="./pasta-parmigiano-saumo.jpg" alt="">')
plat3.append(img3)  
var img4=$('<img id="img4" src="./photo2jpg.jpg" alt="">')
plat4.append(img4)  
var img5=$('<img id="img5" src="./13895741_oJJG5j3udsNdFgZLrOBSQD76S2DO9Qi4PsazvZnd7f0.jpg" alt="">')
plat5.append(img5)
var img6=$('<img id="img6" src="./Pasta-Cosi-8.jpg" alt="">')
plat6.append(img6)

var panier=[]

var category=$("<div id=category class=zoneB></div>")
body.append(category)


var button=$("<button class='btn'>SIGN IN</button>")
$('body').append(button)
$(".btn").click(function(){
    $(".login-form").toggle(2000);
    });



function makePasta(name,pate,description,price){
    return{
        names:name,
        pate:pate,
        description:description,
        price:price
    }
}


