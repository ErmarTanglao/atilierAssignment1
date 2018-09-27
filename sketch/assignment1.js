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
  createCanvas(400, 400);
	
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
	for(i = 0; i < 500; i += 50){
		rect(i,300,50,100);
	}
	
	//Black keys
	fill(0);
	rect(37.5,300,25,75);
	rect(87.5,300,25,75);
	rect(187.5,300,25,75);
	rect(237.5,300,25,75);
	rect(287.5,300,25,75);
	
	//Letters on piano
	textSize(16);
	textAlign(RIGHT);
	text('A', 30, 390);
	text('S', 80, 390);
	text('D', 130, 390);
	text('F', 180, 390);
	text('G', 230, 390);
	text('H', 280, 390);
	text('J', 330, 390);
	text('K', 380, 390);
	
	fill(255);
	text('W', 55, 370);
	text('E', 105, 370);
	text('T', 205, 370);
	text('Y', 255, 370);
	text('U', 305, 370);
	

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
			y: 290,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 300 || this.y < 0){
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
	
if (key === 's'){

	for ( var i = 0; i < 10; i++){
		var fireworks = {
			x: 80, 
			y: 290,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 300 || this.y < 0){
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
			x: 130, 
			y: 290,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 300 || this.y < 0){
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
			x: 180, 
			y: 290,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 300 || this.y < 0){
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
			x: 230, 
			y: 290,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 300 || this.y < 0){
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
			x: 280, 
			y: 290,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 300 || this.y < 0){
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
			x: 330, 
			y: 290,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 300 || this.y < 0){
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
			x: 380, 
			y: 290,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 300 || this.y < 0){
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
			x: 55, 
			y: 290,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 300 || this.y < 0){
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
			x: 105, 
			y: 290,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 300 || this.y < 0){
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
			x: 205, 
			y: 290,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 300 || this.y < 0){
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
			x: 255, 
			y: 290,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 300 || this.y < 0){
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
			x: 305, 
			y: 290,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > 300 || this.y < 0){
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