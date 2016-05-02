function KeyType(){
	var alphabets={
			alp1 : "qwertyuiop",
			alp2 : "asdfghjkl",
			alp3: "zxcvbnm"
		},
		numeric="0123456789",
		symbol=".,;?!:&=/",
		math="`+-*/=%^",
		action={
			btCapital : "Capital", 
			btSmall : "Small", 
			btSpace : "Space",
			btBackSpace : "BackSpace", 
			btOK : "OK", 
			btSearch : "Search", 
			btSubmit : "Submit", 
			btCheck : "Check", 
			btYes : "Yes", 
			btNo : "No" 

		},
		done={
			btOk: "",
			btSearch:"",
			btSubmit:"",
			btCheck:"",
			btYes:"",
			btNo:""

		};
	this.getAlphabets = function(){
		return alphabets;
	};
	this.getNumerics = function() {
		return numeric;
	};
	this.getSymbols = function() {
		return symbol;
	};
	this.getMath = function() {
		return math;
	};
	this.getAction = function() {
		return action;
	};



		
}

