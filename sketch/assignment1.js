//References
//https://vimeo.com/190474651
//https://www.youtube.com/watch?v=H1Dvg2MxQn8
//https://p5js.org/reference/#/p5/keyTyped
//ants sketch from class
//https://p5js.org/examples/hello-p5-song.html

var firework = [];

//Natural notes
var oscC;
var oscD;
var oscE;
var oscF;
var oscG;
var oscA;
var oscB;
var oscC5;

// #/b notes

var oscCs;
var oscDs;
var oscFs;
var oscGs;
var oscAs;

var playing = false;
var notes = [261, 277, 293, 311, 329, 349, 369, 392, 415, 440, 466, 493, 523];
// C4, C#4, D4, D#4, E4, F4, F#4, G4, G#4, A4, A#4, B4, C5
// natural notes: 0,2,4,5,7,9,11,12
// #/b notes: 1,3,6,8,10
var swidth = 5;
var sheight = 5;

function setup() {
  	createCanvas(800,800);
	
	//Natural Notes
    oscC = new p5.Oscillator();
    oscC.setType('triangle');
    oscC.amp(0);
    oscC.start();
	
    oscD = new p5.Oscillator();
    oscD.setType('triangle');
    oscD.amp(0);
    oscD.start();

    oscE = new p5.Oscillator();
    oscE.setType('triangle');
    oscE.amp(0);
    oscE.start();

    oscF = new p5.Oscillator();
    oscF.setType('triangle');
    oscF.amp(0);
    oscF.start();
	
    oscG = new p5.Oscillator();
    oscG.setType('triangle');
    oscG.amp(0);
    oscG.start();
	
    oscA = new p5.Oscillator();
    oscA.setType('triangle');
    oscA.amp(0);
    oscA.start();
	
    oscB = new p5.Oscillator();
    oscB.setType('triangle');
    oscB.amp(0);
    oscB.start();
	
    oscC5 = new p5.Oscillator();
    oscC5.setType('triangle');
    oscC5.amp(0);
    oscC5.start();
	
	// #/b notes
	
    oscCs = new p5.Oscillator();
    oscCs.setType('triangle');
    oscCs.amp(0);
    oscCs.start();

    oscDs = new p5.Oscillator();
    oscDs.setType('triangle');
    oscDs.amp(0);
    oscDs.start();

    oscFs = new p5.Oscillator();
    oscFs.setType('triangle');
    oscFs.amp(0);
    oscFs.start();
	
    oscGs = new p5.Oscillator();
    oscGs.setType('triangle');
    oscGs.amp(0);
    oscGs.start();
	
    oscAs = new p5.Oscillator();
    oscAs.setType('triangle');
    oscAs.amp(0);
    oscAs.start();
}

function draw() {
  	background(220, 50);

	noStroke();
	for ( var i = 0; i < firework.length; i++){
		fill(firework[i].x, firework[i].y, 150);
		//stroke(255-ants[i].x, 255-ants[i].y, 150);
		ellipse(firework[i].x, firework[i].y, 10);
		firework[i].march();
	}

	//White keys
	stroke(0);
	fill(255);
	for(i = 0; i < 1000; i += 100){
		rect(i,600,100,200);
	}
	
	//Black keys
	fill(0);
	rect(75,600,50,150);
	rect(175,600,50,150);
	rect(375,600,50,150);
	rect(475,600,50,150);
	rect(575,600,50,150);
	
	//Letters on piano
	textSize(32);
	textAlign(RIGHT);
	text('A', 60, 780);
	text('S', 160, 780);
	text('D', 260, 780);
	text('F', 360, 780);
	text('G', 460, 780);
	text('H', 560, 780);
	text('J', 660, 780);
	text('K', 760, 780);
	
	fill(255);
	text('W', 110, 740);
	text('E', 210, 740);
	text('T', 410, 740);
	text('Y', 510, 740);
	text('U', 610, 740);
	

}

function keyPressed(){
	//natural notes
	
	//C
	if (keyCode === 65) {
		oscC.amp(0.5, 0.05);
		oscC.freq(notes[0]);
    	playing = true;
	}
	//D
	if (keyCode === 83) {
		oscD.amp(0.5, 0.05);
		oscD.freq(notes[2]);
    	playing = true;
	}
	//E
	if (keyCode === 68) {
    	oscE.amp(0.5, 0.05);
		oscE.freq(notes[4]);
    	playing = true;
	}
	//F
	if (keyCode === 70) {
		oscF.amp(0.5, 0.05);
		oscF.freq(notes[5]);
    	playing = true;
	}
	//G
	if (keyCode === 71) {
    	oscG.amp(0.5, 0.05);
		oscG.freq(notes[7]);
    	playing = true;
	}
	//A
	if (keyCode === 72) {
		oscA.amp(0.5, 0.05);
		oscA.freq(notes[9]);
   	 	playing = true;
	}
	//B
	if (keyCode === 74) {
		oscB.amp(0.5, 0.05);
		oscB.freq(notes[11]);
    	playing = true;
	}
	//C
	if (keyCode === 75) {
		oscC5.amp(0.5, 0.05);
		oscC5.freq(notes[12]);
    	playing = true;
	}
	
	// #/b notes
	//C#
	if (keyCode === 87) {
		oscCs.amp(0.5, 0.05);
		oscCs.freq(notes[1]);
    	playing = true;
	}
	//D#
	if (keyCode === 69) {
    	oscDs.amp(0.5, 0.05);
		oscDs.freq(notes[3]);
    	playing = true;
	}
	//F#
	if (keyCode === 84) {
		oscFs.amp(0.5, 0.05);
		oscFs.freq(notes[6]);
    	playing = true;
	}
	//G#
 	if (keyCode === 89) {
		oscGs.amp(0.5, 0.05);
		oscGs.freq(notes[8]);
    	playing = true;
	}
	//A#
	if (keyCode === 85) {
		oscAs.amp(0.5, 0.05);
		oscAs.freq(notes[10]);
    	playing = true;
	}
}

function keyReleased(){
	//Natural notes
	//C
	if (keyCode === 65) {
		oscC.amp(0, 0.5);
    	playing = false;
	}
	//D
	if (keyCode === 83) {
		oscD.amp(0, 0.5);
    	playing = false;
	}
	//E
	if (keyCode === 68) {
		oscE.amp(0, 0.5);
    	playing = false;
	}
	//F
		if (keyCode === 70) {
		oscF.amp(0, 0.5);
    	playing = false;
	}
	//G
	if (keyCode === 71) {
		oscG.amp(0, 0.5);
    	playing = false;
	}
	//A
	if (keyCode === 72) {
		oscA.amp(0, 0.5);
    	playing = false;
	}
	//B
	if (keyCode === 74) {
		oscB.amp(0, 0.5);
    	playing = false;
	}
	//C
	if (keyCode === 75) {
		oscC5.amp(0, 0.5);
    	playing = false;
	}
	
		// #/b notes
	//C#
	if (keyCode === 87) {
		oscCs.amp(0, 0.5);
    	playing = false;
	}
	//D#
	if (keyCode === 69) {
		oscDs.amp(0, 0.5);
    	playing = false;
	}
	//F#
	if (keyCode === 84) {
		oscFs.amp(0, 0.5);
    	playing = false;
	}
	//G#
	if (keyCode === 89) {
		oscGs.amp(0, 0.5);
    	playing = false;
	}
	//A#
	if (keyCode === 85) {
		oscAs.amp(0, 0.5);
    	playing = false;
	}
}

function keyTyped() {
  if (key === 'a'){

	for ( var i = 0; i < 10; i++){
		var fireworks = {
			x: 30, 
			y: 580,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
				}
				if ( this.y > 600 || this.y < 0){
					this.yspeed *= -1;
				}
			  	this.xspeed += this.xaccel;
			  	this.yspeed += this.yaccel;
				this.x += this.xspeed;
				this.y += this.yspeed;
			}
		};
			firework.push(fireworks);
  	}
}
	
if (key === 's'){

	for ( var i = 0; i < 10; i++){
		var fireworks = {
			x: 160, 
			y: 580,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 600 || this.y < 0){
					this.yspeed *= -1;
					//this.yaccel *= -1;
				}
			  	this.xspeed += this.xaccel;
			  	this.yspeed += this.yaccel;
				this.x += this.xspeed;
				this.y += this.yspeed;
			}
		};
			firework.push(fireworks);
  	}
}
	
if (key === 'd'){

	for ( var i = 0; i < 10; i++){
		var fireworks = {
			x: 260, 
			y: 580,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 600 || this.y < 0){
					this.yspeed *= -1;
					//this.yaccel *= -1;
				}
			  	this.xspeed += this.xaccel;
			  	this.yspeed += this.yaccel;
				this.x += this.xspeed;
				this.y += this.yspeed;
			}
		};
			firework.push(fireworks);
  	}
}
	
if (key === 'f'){

	for ( var i = 0; i < 10; i++){
		var fireworks = {
			x: 360, 
			y: 580,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 600 || this.y < 0){
					this.yspeed *= -1;
					//this.yaccel *= -1;
				}
			  	this.xspeed += this.xaccel;
			  	this.yspeed += this.yaccel;
				this.x += this.xspeed;
				this.y += this.yspeed;
			}
		};
			firework.push(fireworks);
  	}
}
	
if (key === 'g'){

	for ( var i = 0; i < 10; i++){
		var fireworks = {
			x: 460, 
			y: 580,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 600 || this.y < 0){
					this.yspeed *= -1;
					//this.yaccel *= -1;
				}
			  	this.xspeed += this.xaccel;
			  	this.yspeed += this.yaccel;
				this.x += this.xspeed;
				this.y += this.yspeed;
			}
		};
			firework.push(fireworks);
  	}
}
	
if (key === 'h'){

	for ( var i = 0; i < 10; i++){
		var fireworks = {
			x: 560, 
			y: 580,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 600 || this.y < 0){
					this.yspeed *= -1;
					//this.yaccel *= -1;
				}
			  	this.xspeed += this.xaccel;
			  	this.yspeed += this.yaccel;
				this.x += this.xspeed;
				this.y += this.yspeed;
			}
		};
			firework.push(fireworks);
  	}
}
	
if (key === 'j'){

	for ( var i = 0; i < 10; i++){
		var fireworks = {
			x: 660, 
			y: 580,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 600 || this.y < 0){
					this.yspeed *= -1;
					//this.yaccel *= -1;
				}
			  	this.xspeed += this.xaccel;
			  	this.yspeed += this.yaccel;
				this.x += this.xspeed;
				this.y += this.yspeed;
			}
		};
			firework.push(fireworks);
  	}
}
	
if (key === 'k'){

	for ( var i = 0; i < 10; i++){
		var fireworks = {
			x: 760, 
			y: 580,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 600 || this.y < 0){
					this.yspeed *= -1;
					//this.yaccel *= -1;
				}
			  	this.xspeed += this.xaccel;
			  	this.yspeed += this.yaccel;
				this.x += this.xspeed;
				this.y += this.yspeed;
			}
		};
			firework.push(fireworks);
  	}
}
	
if (key === 'w'){

	for ( var i = 0; i < 10; i++){
		var fireworks = {
			x: 110, 
			y: 580,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 600 || this.y < 0){
					this.yspeed *= -1;
					//this.yaccel *= -1;
				}
			  	this.xspeed += this.xaccel;
			  	this.yspeed += this.yaccel;
				this.x += this.xspeed;
				this.y += this.yspeed;
			}
		};
			firework.push(fireworks);
  	}
}
	
if (key === 'e'){

	for ( var i = 0; i < 10; i++){
		var fireworks = {
			x: 210, 
			y: 580,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 600 || this.y < 0){
					this.yspeed *= -1;
					//this.yaccel *= -1;
				}
			  	this.xspeed += this.xaccel;
			  	this.yspeed += this.yaccel;
				this.x += this.xspeed;
				this.y += this.yspeed;
			}
		};
			firework.push(fireworks);
  	}
}
	
if (key === 't'){

	for ( var i = 0; i < 10; i++){
		var fireworks = {
			x: 410, 
			y: 580,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 600 || this.y < 0){
					this.yspeed *= -1;
					//this.yaccel *= -1;
				}
			  	this.xspeed += this.xaccel;
			  	this.yspeed += this.yaccel;
				this.x += this.xspeed;
				this.y += this.yspeed;
			}
		};
			firework.push(fireworks);
  	}
}
	
if (key === 'y'){

	for ( var i = 0; i < 10; i++){
		var fireworks = {
			x: 510, 
			y: 580,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 600 || this.y < 0){
					this.yspeed *= -1;
					//this.yaccel *= -1;
				}
			  	this.xspeed += this.xaccel;
			  	this.yspeed += this.yaccel;
				this.x += this.xspeed;
				this.y += this.yspeed;
			}
		};
			firework.push(fireworks);
  	}
}
	
if (key === 'u'){

	for ( var i = 0; i < 10; i++){
		var fireworks = {
			x: 610, 
			y: 580,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 600 || this.y < 0){
					this.yspeed *= -1;
					//this.yaccel *= -1;
				}
			  	this.xspeed += this.xaccel;
			  	this.yspeed += this.yaccel;
				this.x += this.xspeed;
				this.y += this.yspeed;
			}
		};
			firework.push(fireworks);
  	}
}	
}