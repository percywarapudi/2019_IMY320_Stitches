//1. Default Behaviour
var completes = document.querySelectorAll(".complete");
var toggleButton = document.getElementById("toggleButton");

function toggleComplete(){
  var lastComplete = completes[completes.length - 1];
  lastComplete.classList.toggle('complete');
}
toggleButton.onclick = toggleComplete();



//2. Select Single Project element
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");

function toggleSingleComplete(proj){
	//alert(proj);
	switch(proj) {
		case "1":
			completes[0].classList.toggle('complete',true);
			completes[1].classList.toggle('complete',false);
			completes[2].classList.toggle('complete',false);
			completes[3].classList.toggle('complete',false);
			completes[4].classList.toggle('complete',false);
			
			document.getElementById("proj1").style.display = "block";
			document.getElementById("proj2").style.display = "none";
			document.getElementById("proj3").style.display = "none";
			document.getElementById("proj4").style.display = "none";
			document.getElementById("proj5").style.display = "none";
			break;
		case "2":
			completes[0].classList.toggle('complete',false);
			completes[1].classList.toggle('complete',true);
			completes[2].classList.toggle('complete',false);
			completes[3].classList.toggle('complete',false);
			completes[4].classList.toggle('complete',false);
			
			document.getElementById("proj1").style.display = "none";
			document.getElementById("proj2").style.display = "block";
			document.getElementById("proj3").style.display = "none";
			document.getElementById("proj4").style.display = "none";
			document.getElementById("proj5").style.display = "none";
			break;
		case "3":
			completes[0].classList.toggle('complete',false);
			completes[1].classList.toggle('complete',false);
			completes[2].classList.toggle('complete',true);
			completes[3].classList.toggle('complete',false);
			completes[4].classList.toggle('complete',false);
			
			document.getElementById("proj1").style.display = "none";
			document.getElementById("proj2").style.display = "none";
			document.getElementById("proj3").style.display = "block";
			document.getElementById("proj4").style.display = "none";
			document.getElementById("proj5").style.display = "none";
			break;
		case "4":
			completes[0].classList.toggle('complete',false);
			completes[1].classList.toggle('complete',false);
			completes[2].classList.toggle('complete',false);
			completes[3].classList.toggle('complete',true);
			completes[4].classList.toggle('complete',false);
			
			document.getElementById("proj1").style.display = "none";
			document.getElementById("proj2").style.display = "none";
			document.getElementById("proj3").style.display = "none";
			document.getElementById("proj4").style.display = "block";
			document.getElementById("proj5").style.display = "none";
			break;
		default:
			//alert(previous.id);
			//previous.classList.toggle('complete');
			completes[0].classList.toggle('complete',false);
			completes[1].classList.toggle('complete',false);
			completes[2].classList.toggle('complete',false);
			completes[3].classList.toggle('complete',false);
			completes[4].classList.toggle('complete',true);
			
			document.getElementById("proj1").style.display = "none";
			document.getElementById("proj2").style.display = "none";
			document.getElementById("proj3").style.display = "none";
			document.getElementById("proj4").style.display = "none";
			document.getElementById("proj5").style.display = "block";
	}
	
}


/*
document.getElementById("one").onclick = toggleSingleComplete(1);
document.getElementById("two").onclick = toggleSingleComplete(2);
document.getElementById("three").onclick = toggleSingleComplete(3);
document.getElementById("four").onclick = toggleSingleComplete(4);
document.getElementById("five").onclick = toggleSingleComplete(5);*/


one.addEventListener("click", function() {
	toggleSingleComplete("1");
});

two.addEventListener("click", function() {
	toggleSingleComplete("2");
});

three.addEventListener("click", function() {
	toggleSingleComplete("3");
});
four.addEventListener("click", function() {
	toggleSingleComplete("4");
});
five.addEventListener("click", function() {
	toggleSingleComplete("5");
});
toggleSingleComplete("5");