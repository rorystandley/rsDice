(function($){

	var MyDice = function(element, options) {

		var elem = $(element);
		var obj = this;

		// Merge options with defaults
		var settings = $.extend({
			number 		: 6, // Number of sides for the dice
			speed		: 100, // Speed of dice roll
			duration 	: 2000, // Duration of dice roll
			callBack 	: function() {} // Callback function for when roll has finished
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
				settings.callBack.call(this);
			}, settings.duration);

			

	    };
	};

	$.fn.rsDice = function(options) {

		return this.each(function() {
	 
           	var myDice = new MyDice(this, options);
           	myDice.rollDice();

       	});

	}

}(jQuery));
