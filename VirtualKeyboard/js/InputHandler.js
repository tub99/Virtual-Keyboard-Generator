function InputHandler(){
	var kbObject=new MyKeyBoard(),
		keyType=new KeyType(),
		numFlag=false,
		alpFlag=false,
		mathFlag=false,
		symbFlag=false,
		actionButton="ActionKey";

	this.clearDom=function(){
		for(var i=0;i<arguments.length;i++){
			$(arguments[i]).remove();
		}
	};
	this.resetElements =function(act){
		$('input:checkbox').removeAttr('checked');
		$('input[type=text]').val("");
	};
	this.parseUserInput = function(check,act){

		var child=$('.'+check).children(),
			chkId="",
			totId="";
		console.log($('#'+child[0].childNodes[0].id).is(":checked"));
		for(var i=0;i<child.length;i++){
			chkId=child[i].childNodes[0].id;
			totId='#'+chkId;
			if(chkId === 'alp' && ($(totId).is(":checked"))===true)
				alpFlag=true;

			if(chkId === 'num' && ($(totId).is(":checked"))===true)
				numFlag=true;

			if(chkId === 'math' && ($(totId).is(":checked"))===true)
				mathFlag=true;

			if(chkId === 'symb' && ($(totId).is(":checked"))===true)
				symbFlag=true;

		}
		if($('#'+act).val() !== "")
			actionButton=$('#'+act).val();
		console.log(alpFlag,numFlag,mathFlag,symbFlag,actionButton);	
	};
	this.getKeyArrays = function(){
		var actionArr=[],
			kTypeArr=[];
		//Adding the action/special keys
		actionArr=[keyType.getAction().btSpace,keyType.getAction().btBackSpace];
		if(alpFlag === true){
			kTypeArr.push([keyType.getAlphabets().alp1],[keyType.getAlphabets().alp2],[keyType.getAlphabets().alp3]);
			actionArr.push(keyType.getAction().btCapital ,keyType.getAction().btSmall);
		}
		if(numFlag === true)
			kTypeArr.push([keyType.getNumerics()]);
		if(mathFlag === true)
			kTypeArr.push([keyType.getMath()]);
		if(symbFlag === true)
			kTypeArr.push([keyType.getSymbols()]);

		//If the user has not given any input
		if(alpFlag === false && numFlag === false && mathFlag === false && symbFlag === false){
						actionArr=[keyType.getAction().btCapital ,keyType.getAction().btSmall ,keyType.getAction().btSearch,
									keyType.getAction().btYes,keyType.getAction().btNo];
					// //adding normal keys like alphabets,numbers,symbols,mathematical operators
						kTypeArr=[[keyType.getAlphabets().alp1],[keyType.getAlphabets().alp2],[keyType.getAlphabets().alp3],[keyType.getNumerics()],
						[keyType.getSymbols()],[keyType.getMath()]];


		}

		// action button as given by user
		actionArr.push(actionButton);

		return{
			normalkeys : kTypeArr,
			actionKeys : actionArr
		};

	};

}