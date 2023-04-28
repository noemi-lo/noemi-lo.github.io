function hideOutfits() {
    let outfits = document.getElementsByClassName("outfit");
    for (let i = 0; i < outfits.length; i++) {
        outfits[i].style.display = "none";
    }
}

// s1 outfit
let s1 = document.getElementById("s1")/* get #s1 outfit */
/* the process: */
s1.onclick = function() {
	/* 1. hide #body (set display to none)*/
	document.getElementById("body").style.display = "none";
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)*/
	hideOutfits();
	/* 3. show #o1 outfit (set display to block)*/
	document.getElementById("o1").style.display = "block";
};


// s2 outfit
let s2 = document.getElementById("s2")
s1.onclick = function() {
	document.getElementById("body").style.display = "none";
	hideOutfits();
	document.getElementById("o2").style.display = "block";
}

// s3 outfit
let s3 = document.getElementById("s3")
s1.onclick = function() {
	document.getElementById("body").style.display = "none";
	hideOutfits();
	document.getElementById("o3").style.display = "block";
}

// s4 outfit
let s4 = document.getElementById("s4")
s1.onclick = function() {
	document.getElementById("body").style.display = "none";
	hideOutfits();
	document.getElementById("o4").style.display = "block";
}

// s5 outfit
let s5 = document.getElementById("s5")
s1.onclick = function() {
	document.getElementById("body").style.display = "none";
	hideOutfits();
	document.getElementById("o5").style.display = "block";
}

// strip outfit
let strip = documtn.getElementById("body")/* get #strip-button */
strip.onclick = function() {
	/* call the function you created to hide all the outfits */
	hideOutfits();
	/* show #body */
	document.getElementById("body").style.display = "block";
};