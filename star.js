var a=count1=count2=count3 =0;
function changeimage(thisElem) {
    if(thisElem.src.match("images2")) {
		thisElem.src = "images1.png";
	} else {
		thisElem.src = "images2.png";
	}
	count2 = 0;
	while (thisElem = thisElem.previousElementSibling) {
		thisElem.src = "images2.png";
	count2++;
		}
 	a= count1+count2;
	calculateAverage(a);
}

function changeimagePresenation(thisElem) {
    if(thisElem.src.match("images2")) {
		thisElem.src = "images1.png";
	} else {
		thisElem.src = "images2.png";
	}
	count1 = 0;
	while (thisElem = thisElem.previousElementSibling) {
		thisElem.src = "images2.png";
	    count1++;
	}
 	a= count1+count2;
	calculateAverage(a);
}

function calculateAverage(a){
	var avg = Math.floor(a/2);
	for(var i=0; i<avg;i++) {
		document.getElementById("star"+i).src = 'images2.png';
	}
}

function changeimage1() {
    for( var i=0; i<5;i++){
		console.log(document.getElementById("star"+i).src);
		if(document.getElementById("star"+i).src == "file:///opt/lampp/htdocs/ratestar/images2.png") {
	    count3++;
	  }
	}
	alert("average rating is" +count3);
}	