# Virtual-Keyboard-Generator
This web application helps the user to generate a virtual keyboard of his own preference.
The keyboard supports normal keys and user-defined action keys also. These action Keys like 'GO','SEARCH',etc works accoording to the callback function provided

<h3>Example of a keyboard with all character and keys.<h3>
<p> FULL KEYBOARD </p>
<p> <img src="VirtualKeyboard/screenshot/fullkeyboard.PNG"></img></p>

<hr>A qwerty keypad<h3>
<p> QWERTY KEYBOARD </p>
<p> <img src="VirtualKeyboard/screenshot/qwerty.PNG"></img></p>

<hr>A numeric keypad<h3>
<p> Numeric KEYBOARD </p>
<p> <img src="VirtualKeyboard/screenshot/numeric.PNG"></img></p>

# Creating a custom keyboard
``` javascript
	var keyPadHolder=document.getElementById("keyboard"),
		targetField=document.getElementById("target"),
		kbObject=new MyKeyBoard(),
		keyType=new KeyType(),
		//inserting special keys eg: backspace
		actionArr=[keyType.getAction().btBackSpace],
		// inserting custom keys as Array of strings
		kTypeArr=[['mycustomkeyboard'],['1234-5698'],['@#$%&^*']];

	//Creating the keypad
	kbObject.addkeyPad(keyPadHolder,kTypeArr,actionArr,targetField,null,0,0);
	//Adding Draggable feature to keypad
	kbObject.addDraggableFeature("#keyboard");


```
<hr>A custom keypad<h3>
<p> Custom KEYBOARD </p>
<p> <img src="VirtualKeyboard/screenshot/custom.PNG"></img></p>


