(function($){

	var MyDice = function(element, options, number, inc) {

		var elem = $(element);
		var obj = this;

		// Merge options with defaults
		var settings = $.extend({
			number 		: 6, // Number of sides for the dice
			speed		: 100, // Speed of dice roll
			duration 	: 2000, // Duration of dice roll
			callBack 	: function() {}
		}, options || {});

		// Public method
		this.rollDice = function() {

			var myNumbers = [];

			// Lets create an array of numbers from our number setting
			for (var i = 1; i <= settings.number; i++) {
				myNumbers.push(i);
			};

			if ( myNumbers.length > 0 ) {
				// We have some numbers to roll on our dice
			} else {

				if (typeof console == "object" ) { 
					console.log('We have no numbers to roll');
				}				
				return false;

			}

			// If we have got this far, we need to roll the dice
			var myInterval = setInterval(function () {
				var chosen = myNumbers[Math.floor(Math.random()*myNumbers.length)];
				elem.text(chosen);
			}, settings.speed);

			setTimeout(function(){
				var finalChoice = myNumbers[Math.floor(Math.random()*myNumbers.length)];
				elem.text(finalChoice);
				window.clearInterval(myInterval);

				if ( $.isFunction( settings.callBack ) && inc == number ) {
					settings.callBack.call(obj);
				}

			}, settings.duration);

	    };
	};

	$.fn.rsDice = function(options) {

		// Hacking this plugin to work to my requirments, I require just one callback rather than 1 for each element. 
		var numberDice = this.length;
		var inc = 1;

		return this.each(function() {
	 	
           	var myDice = new MyDice(this, options, numberDice, inc);
           	myDice.rollDice();
           	inc++;

       	});

	}

}(jQuery));
