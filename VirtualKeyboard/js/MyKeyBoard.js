function  MyKeyBoard() {

	var textField="",
		smallFlag=false,
		capitalFlag=false,
		target,
		actionCommands = {
			Capital : function() {
				var i,
					el,
					char;
				if( capitalFlag === false) {	
					//make all alphabet button to capital letter
					for(i=97;i<=122;i++) {
						char=String.fromCharCode(i);
						el=document.getElementById(char);
						el.value=char.toUpperCase();
						el.id=char.toUpperCase();
					}
					capitalFlag = true;
					smallFlag=false;
				}
			},
			Small : function() {
				var i,
					el,
					char;
				if( smallFlag === false) {
					//make all alphabet button to capital letter
					for(i=65;i<=90;i++){
						char=String.fromCharCode(i);
						el=document.getElementById(char);
						el.value=char.toLowerCase();
						el.id=char.toLowerCase();
					}
					smallFlag = true;
					capitalFlag=false;
				}
				
			},
			Space : function() {
					var tf= document.getElementById('target');
					textField+=" ";
					tf.value=textField;
				
			},
			BackSpace : function() {
				var tf= document.getElementById('target'),
					len = textField.length;
				textField= textField.substr(0,len-1);
				tf.value=textField;
			},
			Yes : function() {
				var tf= document.getElementById('target');
				tf.value="Yes";
				textField="";
			},
			No : function() {
				var tf= document.getElementById('target');
				tf.value="No";
				textField="";
			}

		},
		getActionCommand = function(str) {
			for(var prop in actionCommands){
				if(str == prop)
					return actionCommands[prop];
			}
				
			return undefined;
		},
		generateNormalKeys = function(keyPad,targetField,arr) {
				
			var	keyRow,
				keyCol,
				keys,keyString="";
			
			for(var i=0;i<arr.length;i++) {
				
				keyRow=document.createElement("tr");
				console.log("hi");
				keyString=arr[i].toString();
				//keyRow.className=arr[i];
				for(var j=0;j<keyString.length;j++) {
					keyCol=document.createElement("td");
					keys=document.createElement("input");
					keys.type="button";
					keys.value=keyString.charAt(j);
					keys.id=keyString.charAt(j);
					keys.className="key";
					keys.style.width="40px";
					keys.style.height="40px";
					keys.addEventListener("click",function(){
						textField+=this.value;
						targetField.value=textField;
						console.log(textField);
					});

					keyCol.appendChild(keys);
					keyRow.appendChild(keyCol);
				}
				
				keyPad.appendChild(keyRow);
			}
			return keyPad;

		},
		generateActionKeys = function(actionkeyPad,targetField,actionArr,callback) {

			var	actionRow,
				actionCol,
				keys,
				action;
			actionRow=document.createElement("tr");
			for(var j=0;j<actionArr.length;j++) {
				actionCol=document.createElement("td");
				keys=document.createElement("input");
				keys.type="button";
				keys.value=actionArr[j];
				keys.id=actionArr[j];
				keys.className="key";
				keys.style.height="40px";
				action=getActionCommand(actionArr[j]);
				//action(targetField);
				
				if(action === undefined)
					keys.addEventListener("click",callback);
				else
					keys.addEventListener("click",action);


				actionCol.appendChild(keys);
				actionRow.appendChild(actionCol);
			}
			
			actionkeyPad.appendChild(actionRow);
			return actionkeyPad;

		};
	this.addkeyPad = function(keyPadHolder,arr,actionArr,targetField,callback,maxChars,gap) {
		var keyPad=document.createElement("table"),
			normalKeyPad,
			actionKeyPad,
			target = targetField;

		//keyPad.border="1px";
		keyPad.id="keypad";
		normalKeyPad=generateNormalKeys(keyPad,targetField,arr);
		keyPadHolder.appendChild(normalKeyPad);
		var actionPad=document.createElement("table");
		//actionPad.border="1px";
		actionPad.id="actionpad";
		actionKeyPad=generateActionKeys(actionPad,targetField,actionArr,callback);
		keyPadHolder.appendChild(actionKeyPad);

	};
	this.addDraggableFeature= function(id){
		$(function() {
		    $( id).draggable();
		});
	};
}