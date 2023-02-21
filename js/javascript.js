function insertValue(){

	var value = document.activeElement.textContent;
	var lenStorage= 0;
	var countValuesFromStorage=0;
	lenStorage = localStorage.length;
		
	countValuesFromStorage=discoverOption(value,lenStorage,countValuesFromStorage);
		
	if(localStorage.length > 0 && countValuesFromStorage > 0){
		showScreen(loadValuesFromLocalStorage(countValuesFromStorage).toString().replaceAll(',',''));
	}
}

function discoverOption(value,lenStorage,countValuesFromStorage){
	if(value == "C"){
		
		clearAction(lenStorage);
			
	}else if(value == "="){
		
		equalAction(lenStorage);
	
	}else{	
		countValuesFromStorage=insertSomeValue(lenStorage,value,countValuesFromStorage);
	}
	
	return countValuesFromStorage;
}

function clearAction(lenStorage){
	if(lenStorage > 0){
		clearScreen();
		localStorage.clear();
	}else{
		return;
	}
}

function equalAction(lenStorage){

	if(lenStorage > 0){
		result();
	}else{
		return;
	}
}

function insertSomeValue(lenStorage,value,countValuesFromStorage){

	if (lenStorage == 0){
		insertValueOnEmptyStorage(value);
	}else{
		insertValueEndRow(value,lenStorage);
	}
	countValuesFromStorage=localStorage.length;
	
	return countValuesFromStorage;
}


function insertValueOnEmptyStorage(value){
	if( isValueIsOperation(value) ){
		return;
	}else if(value == "." ){
		localStorage.setItem("[0]","0");
		localStorage.setItem("[1]",".");
	}else{
		localStorage.setItem("[0]",value);
	}
}

function insertValueEndRow(value,lenStorage){

	var isInsertValue = false;
	
	if( isValueIsOperation(value) ){
	
		if( lastItemNotOperation(lenStorage-1) && lastItemNotADot(lenStorage-1)){
			isInsertValue = true;
		}
		
	}else if( value == "." ){
	
		if( lastItemNotOperation(lenStorage-1) && lastItemNotADot(lenStorage-1)){
			isInsertValue = true;
		}
		
	}else{
		isInsertValue = true;
	}
	
	if( isInsertValue ){
		localStorage.setItem("["+lenStorage+"]",value);
	}
	
}




function lastItemNotOperation(indexLastItem){
	var lastItem = localStorage.getItem("["+indexLastItem+"]");
	
	if( isValueIsOperation(lastItem) ){
		 return false;
	}
	  return true;

}

function lastItemNotADot(indexLastItem){
	var lastItem = localStorage.getItem("["+indexLastItem+"]");
	
	if( lastItem == "."){
		 return false;
	 }
	 	 return true;
	
}

function isValueIsOperation(value){
	if(value == "+" || value == "-" || value == "/" || value == "*"){
		return true;
	}
	
	return false;
	
}

function loadValuesFromLocalStorage(count){
	var arrayValues = [];	
		
	for(var i=0;i<count;i++){
		arrayValues [i] =localStorage.getItem('['+i+']');
	}
	return arrayValues;
}

function hasOperatiosToCalc(array){
	
	for(var i=0;i<array.length;i++){
		if( isValueIsOperation(array[i]) ){
			return true;
		}
	}
	return false;
}


function hasMultDivOperation(array){
	
	for(var i=0;i<array.length;i++){
		if(array[i] == "*" || array[i] == "/" ){
			return true;
		}
	}
	return false;
}

function calcTheOperation(elements,operations,count){
	let result = discoverTheOperation( elements[count] + operations[count] + elements[count+1] ); 
	elements.splice(count,2,result);
	operations.splice(count,1);
	count = 0;
	
	return [elements,operations,count];
}

function separeteNumbersAndOperations(valuesStorage,elements,operations){
	var numbers = [];
	
	for(var i=0;i<valuesStorage.length;i++){
		if( !isValueIsOperation(valuesStorage[i]) ){
			numbers.push(valuesStorage[i]);
		}else{
			operations.push(valuesStorage[i]);
			elements.push(numbers.toString().replaceAll(',',''));
			numbers = [];		
		}
	}
		
		elements.push(numbers.toString().replaceAll(',',''));
	
		return [operations,elements];
}

function calc(elements,operations){
	var count = 0;
		
	while ( operations.length > 0){
		if( operations[count] == "*" || operations[count] == "/" ){
			
			let elementsOfTheCalc = calcTheOperation(elements,operations,count);
			elements = elementsOfTheCalc[0]; operations = elementsOfTheCalc[1]; count = elementsOfTheCalc[2];

		}else if ( hasMultDivOperation(operations) ) {
		 	count++;
		}else{				
			let elementsOfTheCalc = calcTheOperation(elements,operations,count);
			elements = elementsOfTheCalc[0]; operations = elementsOfTheCalc[1]; count = elementsOfTheCalc[2];
		}
	}	
	
	return elements;
}

function result(){

	var operations = [];
	var elements = [];	
	var valuesStorage = loadValuesFromLocalStorage(localStorage.length);
		
	if( lastItemNotOperation(localStorage.length-1) && lastItemNotADot(localStorage.length-1) && hasOperatiosToCalc(valuesStorage) ){
					
		var separetedElements = separeteNumbersAndOperations(valuesStorage,elements,operations);
		operations = separetedElements[0]; elements = separetedElements[1];
				
		elements = calc(elements,operations); 
				
		return showScreen(elements[0]);
	}
	return;
}

function discoverTheOperation(text){

	if (text.indexOf("*") != -1 ){	
		
		return multiplication( text.split("*") );
		
	}else if (text.indexOf("/") != -1 ){

		return division( text.split("/") );
		
	}else if (text.indexOf("+") != -1 ){

		return addition( text.split("+") );
		
	}else{

		return subtraction( text.split("-") ); 
	}
}

function addition(array){
	return (+array[0]) + (+array[1]);
}

function subtraction(array){
	return array[0]-array[1];
}

function division(array){
	if (array[1] == 0){
		return "Nao pode ser feita divisao por zero!";
	}else{
		return array[0]/array[1];
	}
}

function multiplication(array){
	return array[0]*array[1];
}

function clearScreen() {
	document.getElementById('idScreen').textContent=0;
}

function showScreen(value) {
		document.getElementById('idScreen').textContent=value;	
}


