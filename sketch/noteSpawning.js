var notes = [];
var toggle = 0;

function setup() {
  createCanvas(400, 400);

}
function draw() {
	noStroke();
  background(220);
	if(keyIsPressed){
	   for (var i = 0; i < notes.length; i++){
		 	notes[i].h--;
			toggle = 1;
		 }
	}else{
		// if(toggle = 0){
				for (var i = 0; i < notes.length; i++){
		 			notes[i].y--;
				//}
		 }
	}
	for (var i = 0 ; i < notes.length; i++){
		rect(notes[i].x, notes[i].y, 10, notes[i].h);
	}
	
}

function keyReleased(){
	if (keyCode === 65){
		note = {
			x : 200,
			y : 400,
			h : 0
		};
		 
// 		for (var i = 0; i < notes.length; i++){
// 		 	notes[i].y--;
// 		 }
	}
		
	// if (keyCode === 83){
	// 	note = {
	// 		x : 300,
	// 		y : 400,
	// 		h : 0
	// 	};
	// }
		
		notes.push(note);
		//console.log(notes);
}