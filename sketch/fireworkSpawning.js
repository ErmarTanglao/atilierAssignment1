var ants = [];

function setup(){
	createCanvas(400,400);
	
	// for ( var i = 0; i < 5; i++){
	// 	var ant = {
	// 		x: width/2, 
	// 		y: height/2,
	// 		xaccel: random(-0.1, 0.1),
	// 		yaccel: random(-0.1, 0.1),
	// 		xspeed: random(-.4,.4),
	// 		yspeed: random(-.4,.4),
	// 		march: function (){// update the x and y
	// 		  if (this.x > width || this.x < 0){
	// 				this.xspeed *= -1;
	// 				//this.xaccel *= -1;
	// 			}
	// 			if ( this.y > height || this.y < 0){
	// 				this.yspeed *= -1;
	// 				//this.yaccel *= -1;
	// 			}
	// 		  this.xspeed += this.xaccel;
	// 		  this.yspeed += this.yaccel;
	// 			this.x += this.xspeed;
	// 			this.y += this.yspeed;
	// 		}
	// 	};
	// 	ants.push(ant);
	// }

}

function draw(){
	background(255,6);
	// for(var i = 1; i < ants.length; i++){
	// 	line(ants[i-1].x, ants[i-1].y, ants[i].x, ants[i].y);
	// }
	
	noStroke();
	for ( var i = 0; i < ants.length; i++){
		fill(ants[i].x, ants[i].y, 150);
		//stroke(255-ants[i].x, 255-ants[i].y, 150);
		ellipse(ants[i].x, ants[i].y, 10);
		ants[i].march();
	}
}

function keyTyped() {
  if (key === 'a',"s"){

	for ( var i = 0; i < 10; i++){
		var ant = {
			x: width/2, 
			y: height/2,
			xaccel: random(-0.1, 0.1),
			yaccel: random(-0.1, 0.1),
			xspeed: random(-.4,.4),
			yspeed: random(-.4,.4),
			march: function (){// update the x and y
				if (this.x > width || this.x < 0){
					this.xspeed *= -1;
					//this.xaccel *= -1;
				}
				if ( this.y > height || this.y < 0){
					this.yspeed *= -1;
					//this.yaccel *= -1;
				}
			  this.xspeed += this.xaccel;
			  this.yspeed += this.yaccel;
				this.x += this.xspeed;
				this.y += this.yspeed;
			}
		};
		ants.push(ant);
  }
}
}