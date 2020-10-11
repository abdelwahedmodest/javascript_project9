
var  bag = [
	 ["Infinitiv","backen","sich befinden", "beginin","begreifen","behalten","bekommen","beraten","beschliessen","besprechen","bestehen","betragen","betrten","sich bewerben", "bieten","bitten","braten","brechen","brennen","bringen","denken","drufen","empfangen","empfehlen","empfinden","entlassen","entscheiden","sich entschliessen","erfahren","erfinden","erschrecken","erziehen","Essen","fahren","fallen","fangen","finden","fliegen","fliehen","fliessen","frieren","geben","gefallen","gehen","gelingen","geniessen","geschehen","gewinnnen","greifen","haben","halten","hangen","heben","heissen","helfen","kennen","klingen","kommen","konnen","laden","lassen","laufen","leiden","leihen","lesen","liegen","lugen","messen","nehmen","nennen","raten","reiten","rennen","riechen","rufen","scheinen","shieben","schlafen","schlagen","schliessen","schneiden","schreiben","schreien","schweigen","schwimmen","sehen","sein","senden","singen","sitzen","sprechen","springen","stehen","stehlen"]
    ,["Prasens","backt","binfindet","beginnt","begreift","behalt","bekommt","berat","beschliesst","bespricht","besteht","betragt","betritt","bewirbtsich","bietet","bittet","bleibt","brat","bricht","brennt","bringt","denkt","darf","empfangt","empfiehlt","empfindet","entlasst","entscheidet","sich ntschliesst","erfahrt","erfindet","erschrickt","erzieht","isst","fahrt","fallt","fangt"," findet","fliegt","flieht","fliesst","friert","gibt","gefallt","geht","gelingt","gilt","geniesst","geschieht","gewinnt","greift","habt","halt","hangt","hebt","heisst","hilft","kennt","klingt","kommt","kann","ladt","lasstlauft","leidet","leiht","liest","liegt","lugt","misst","nimmt","nennt","rat","reitet","rennt","riecht","ruft","scheint","schiebt","schlaft","schlagt","schliesst","schneidet","schreibt","schreit","schweigt","schwimmt","sieht","ist","sendet","singt","sitzt","spricht","springt","steht","stiehlt"]
    ,["Prateritum","backte","befand sich","begann","behielt","bekan","berieit","beschloss","besprach", "bestand","betrug","betrat","bewarb sich","bot","bat","blieb","briet","brach","brannte","brachte","dachte","durfte","empfing","empfahl","empfand","entliess","entschied","sich entschloss","erfuhr","erfand","erschrak","erzog","ass","fuhr","fiel","fing","fand","flog","floh","floss","fror","gab","gefiel","gang","gelang","galt","genoss","geschah","gewann","griff","hatte","hielt","hing","hob","hiess","half","kannte","klang","kam","konnte","lud","liess","lief","litt","lieh","las","lag","log","mass","nahm","nannte","riet","ritt","rannte","roch","rief","schien","schob","schlief","schlug","schloss","schnitt","schrieb","schrie","schwieg","schwamn","sah","war","sendete","sang","sass","spricht","springt","steht","stiehlte"]
    ,["Français","cuire","se retrouver","commencer","comprendre","garder","recevoir","conseiller","décider","discuter","réussir","se monter à","entrer","postuler","offrir","demander","rester","rôtir","casser","brûler","apporter","penser","avoir la permission","accueillir","recommander","ressentir","licencier","décider","se décider","apprendre une nouvelle","inventer","s'effrayer","éduquer","manger","aller","tomber","attraper","trouver","voler","fuir","couler","avoir froid","donner","plaire","aller","valoir","profiter de","se produire","gagner","tendre la main","avoir","tenir","etre suspendu","lever soulever","s'appeler","aider","connaitre","sonner","venir","pouvoir","inviter","laisser","courir","souffrir","prêter","lire","etre couché","mentir","mesurer","prendre","nommer","conseiller","aller à cheval","courir","sentir","appeler","briller","pousser","dormir","frapper","fermer","couper","écrire","crier","se taire","nager","voir","etre","envoyer","emettre","chanter","etre assis","parler","sauter","etre debout", "voler"]
];
//var lb = document.querySelectorAll("label");
var thebtn = document.querySelector("#thebtn");

var  longueur=0 ;
var theh = document.querySelectorAll("h2");


	/*var  somevalue = bag[0].length  ;
console.log(somevalue);
for(var i=0 ;i < 3 ; i++){
    // Quel  le    synonyme     du  verbe   + infinitiv[0][1]
	//var  myh = document.createElement("h1");         
	//var   thebr = document.createElement("br");     
	//myh.innerHTML = '"'+infinitiv[0][i]+'":' +  '"'+infinitiv[1][i]+'"' +  '"'+infinitiv[2][i]+'":'+  '"'+infinitiv[3][i]+'":' ;
    lb[i].textContent = bag[i][1] ;	
	//document.body.appendChild(myh);
	//myh.appendChild(thebr) ;
} */
/*
prasens.forEach(elem=>{
		concole.log('"' + elem +':"' );
	})
*/
var   vt = 2 ;
//if(dt.getSeconds > 10){
//}		 
var  myht = document.querySelector(".boite");
//var myhh = myht.querySelector(".boite");


thebtn.addEventListener("click",doit) ; 


function  doit(){
	var theaudio = document.querySelector("audio");
	theaudio.play();
	     if(longueur > 3){
		 longueur += begin ;
	 }

setInterval(counting,1000);

function counting(){

//var   dt = new Date();
     //var dts = 0 ;
	//var  dts = dt.getSeconds();
	//console.log(dts);
	//var dts2 = dts ;
	//dts2++ ;
	//console.log(dts2);
	//myht.innerHTML = dts2-dts;
	//vt-- ;
	myht.innerHTML = vt ;
	//myht.style.size = "35px" ;
	//document.body.appendChild(myht);
	vt-- ;
	// vt++ ;
	// console.log(vt);
	 if(vt < 1){
		 myht.classList.remove("btn-success");
		 vt = 20 ;
		 myht.classList.add("btn-danger");
         longueur += 3 ;
		 //console.log(longueur);
var verben = document.querySelector(".leverbe");
var stop = [] ;
for(var i=0 ; i < longueur ; i++){
	console.log(i);
	//stop.push(i) ;
      	for(var j=0 ;  j< bag.length ; j++){    
		//console.log(bag.length);
		/*   if(theh[j].innerHTML !=null){
		   
			   theh[j].innerHTML = "" ;
		   }*/
			theh[j].innerHTML = bag[j][i] ;
			verben.innerHTML = bag[0][i];
		                }
		        }
         }
	 }
	 

//console.log("the value  of i after   the  loop : " + i ) ;
var  finish = document.querySelector("#sbt");
var   thei = i ;
finish.addEventListener("click",()=>{
                                        
		
			var  begin = longueur ;
			console.log(begin);
          // 	console.log(longueur);
         	//var stop = i  ;
			//console.log(stop);
			//var index = stop[stop.length-1];
			//console.log(index[index.length-1]);
			//tracking   the  number of  verbs  displayed 
			//console.log(stop[stop.length-1][stop[stop.length-1].length-1]);
			finish.classList.remove("btn-secondary");
			finish.classList.add("btn-primary");
			thebtn.removeEventListener("click",doit,false);
           // halt();   
})






function  halt(){
	 myht.classList.remove("btn-success");
		 vt = "" ;
    myht.classList.add("btn-danger");
        // longueur = begin ;
		 //console.log(longueur);
		 var verben = document.querySelector(".leverbe");
		//var stop = [] ;
		var   i = thei ;
       //for(var i=0 ; i < longueur ; i++){
	             console.log(i);
	//stop.push(i) ;
      	for(var j=0 ;  j< bag.length ; j++){    
		//console.log(bag.length);
		/*   if(theh[j].innerHTML !=null){
		   
			   theh[j].innerHTML = "" ;
		   }*/
			theh[j].innerHTML = bag[j][i] ;
			verben.innerHTML = bag[0][i];
		}
	//}

}

}
	


		 //d.remove();
		  //dt.setDate(0);
		  //dt.setTime(0);
		  //dt.setSeconds(0);
          //myht.remove();
	 //}
//}
//}
/*if(dt.getSeconds()===10){
		//console.log("yes");
		dt.getSeconds===0 ;
		myht.innerHTML = 0 ;
       	document.body.appendChild(myht);
	
	}
}*/
//console.log(counting());





