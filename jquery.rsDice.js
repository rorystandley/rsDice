(function($){

	var MyDice = function(element, options) {

		var elem = $(element);
		var obj = this;

		// Merge options with defaults
		var settings = $.extend({
			number 		: 6, // Number of sides for the dice
			speed		: 100, // Speed of dice roll
			duration 	: 2000 // Duration of dice roll
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
			}, settings.duration);

			

	    };
	};

	$.fn.rsDice = function(options) {

		return this.each(function() {

			var element = $(this);

			// Return early if this element already has a plugin instance
			if (element.data('myDice')) return;
	 
           	var myDice = new MyDice(this, options);
           	myDice.rollDice();

           	// Store plugin object in this element's data
			element.data('myDice', myDice);

       	});

	}

}(jQuery));
