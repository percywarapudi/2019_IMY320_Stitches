//1. Default Behaviour
var completes = document.querySelectorAll(".menu-item");
//var toggleButton = document.getElementById("toggleButton");

function toggleComplete(){
  var lastComplete = completes[completes.length - 1];
  lastComplete.classList.toggle('complete');
}

$(document).ready(function() {
	//toggleButton.onclick = toggleComplete();
});




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

		case "5":
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
			break;

      case "6":
        //alert(previous.id);
        //previous.classList.toggle('complete');
        completes[0].classList.toggle('complete',false);
        completes[1].classList.toggle('complete',false);
        completes[2].classList.toggle('complete',false);
        completes[3].classList.toggle('complete',false);
        completes[4].classList.toggle('complete',false);

        document.getElementById("proj1").style.display = "none";
        document.getElementById("proj2").style.display = "none";
        document.getElementById("proj3").style.display = "none";
        document.getElementById("proj4").style.display = "none";
        document.getElementById("proj5").style.display = "none";

		default:
			//alert(previous.id);
			//previous.classList.toggle('complete');
			completes[0].classList.toggle('complete',false);
			completes[1].classList.toggle('complete',false);
			completes[2].classList.toggle('complete',false);
			completes[3].classList.toggle('complete',false);
			completes[4].classList.toggle('complete',false);

			document.getElementById("proj1").style.display = "none";
			document.getElementById("proj2").style.display = "none";
			document.getElementById("proj3").style.display = "none";
			document.getElementById("proj4").style.display = "none";
			document.getElementById("proj5").style.display = "none";

	}

}

var checked = 0;
var projOpt = 10;


$(document).ready(function(){
	//var checked = 0;

	$("#one").click(function(){
    $(".proj2c").fadeOut("slow");
    $(".proj3c").fadeOut("slow");
    $(".proj4c").fadeOut("slow");
    $(".proj5c").fadeOut("slow");
    if(projOpt==10)
    {
      $("#projects").animate({height: "165%"});
      $(".proj1c").fadeIn("slow");
      checked = 1;
    }
    else// if(projOpt==1)
		{
			if(checked != 0 && projOpt==1)
			{
				$("#projects").animate({height: "50%"});
        $(".proj1c").fadeOut("slow");
				checked = 0;
			}
			else// if(checked == 0 )
			{
				$("#projects").animate({height: "165%"});
        $(".proj1c").fadeIn("slow");

				checked = 1;
			}
		}
    projOpt = 1;


	});
  });

  $(document).ready(function(){
	//var checked = 0;

  	$("#two").click(function(){
    $(".proj1c").fadeOut("slow");
    $(".proj3c").fadeOut("slow");
    $(".proj4c").fadeOut("slow");
    $(".proj5c").fadeOut("slow");
    if(projOpt==10)
    {
      $("#projects").animate({height: "165%"});
      $(".proj2c").fadeIn("slow");
      checked = 1;
    }
		else
    {
			if(checked != 0 && projOpt==2)
			{
				$("#projects").animate({height: "50%"});
        $(".proj2c").fadeOut("slow");

				checked = 0;
			}
			else// if(checked == 0 )
			{
				$("#projects").animate({height: "165%"});
        $(".proj2c").fadeIn("slow");

				checked = 1;
			}
		}
		projOpt = 2;

	});
  });

  $(document).ready(function(){
	//var checked = 0;

	$("#three").click(function(){
    $(".proj1c").fadeOut("slow");
    $(".proj2c").fadeOut("slow");
    $(".proj4c").fadeOut("slow");
    $(".proj5c").fadeOut("slow");

    if(projOpt==10)
    {
      $("#projects").animate({height: "165%"});
      $(".proj3c").fadeIn("slow");

      checked = 1;

    }
    else// if(projOpt==3)
		{
			if(checked != 0 && projOpt==3)
			{
				$("#projects").animate({height: "50%"});
        $(".proj3c").fadeOut("slow");

				checked = 0;
			}
			else// if(checked == 0 )
			{
				$("#projects").animate({height: "165%"});
        $(".proj3c").fadeIn("slow");

				checked = 1;
			}
		}
		projOpt = 3;

	});
  });

  $(document).ready(function(){
	//var checked = 0;

	$("#four").click(function(){
    $(".proj1c").fadeOut("slow");
    $(".proj2c").fadeOut("slow");
    $(".proj3c").fadeOut("slow");
    $(".proj5c").fadeOut("slow");

    if(projOpt==10)
    {
      $("#projects").animate({height: "165%"});
      $(".proj4c").fadeIn("slow");

      checked = 1;

    }
    else
		{
			if(checked != 0 && projOpt==4)
			{
				$("#projects").animate({height: "50%"});
        $(".proj4c").fadeOut("slow");

				checked = 0;
			}
			else// if(checked == 0 )
			{
				$("#projects").animate({height: "165%"});
        $(".proj4c").fadeIn("slow");

				checked = 1;
			}
		}
		projOpt = 4;

	});
  });

  $(document).ready(function(){
	//var checked = 0;
	console.log(checked);


	$("#five").click(function(){
    $(".proj1c").fadeOut("slow");
    $(".proj2c").fadeOut("slow");
    $(".proj3c").fadeOut("slow");
    $(".proj4c").fadeOut("slow");

    if(projOpt==10)
    {
      $("#projects").animate({height: "165%"});
      $(".proj5c").fadeIn("slow");

      checked = 1;

    }
    else// if(projOpt==5)
		{
			if(checked != 0 && projOpt==5)
			{
				$("#projects").animate({height: "50%"});
        $(".proj5c").fadeOut("slow");

				checked = 0;
			}
			else //if(checked == 0 )
			{
				$("#projects").animate({height: "165%"});
        $(".proj5c").fadeIn("slow");

				checked = 1;
			}
		}
		projOpt = 5;

	});
  });
/*
  $(document).ready(function(){
	//var checked = 0;
	projOpt = 3;
	console.log(checked);
	$("#3").click(function(){

		if(projOpt==3)
		{
			if(checked != 0)
			{
				$("#projects").animate({height: "50%"});
				checked = 0;
			}
			else if(checked == 0 )
			{
				$("#projects").animate({height: "165%"});
				checked = 1;
			}
		}

	});
  });

  $(document).ready(function(){
	//var checked = 0;
	projOpt = 4;
	console.log(checked);
	$("#4").click(function(){

		if(projOpt==4)
		{
			if(checked != 0)
			{
				$("#projects").animate({height: "50%"});
				checked = 0;
			}
			else if(checked == 0 )
			{
				$("#projects").animate({height: "165%"});
				checked = 1;
			}
		}

	});
  });

  $(document).ready(function(){
	//var checked = 0;
	projOpt = 5;
	console.log(checked);
	$("#5").click(function(){

		if(projOpt==1)
		{
			if(checked != 0)
			{
				$("#projects").animate({height: "50%"});
				checked = 0;
			}
			else if(checked == 0 )
			{
				$("#projects").animate({height: "165%"});
				checked = 1;
			}
		}

	});
  });


  */




/*
$(document).ready(function(){
  $("#3").click(function(){
    $("#projects").animate({height: "165%"});
  });
});

$(document).ready(function(){
	$("#4").click(function(){
	  $("#projects").animate({height: "165%"});
	});
  });

$(document).ready(function(){
	$("#5").click(function(){
	  $("#projects").animate({height: "165%"});
	});
  });
*/

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
toggleSingleComplete("6");
