function calculadoraTest(){
	showScreenTest();
	clearScreenTest();
	multiplicationTest();
	divisionTest();
	subtractionTest();
	additionTest();
	discoverTheOperationTest();
	resultTest();
	loadValuesFromLocalStorageTest();
	isValueIsOperationTest();
	lastItemNotADotTest();
	lastItemNotOperationTest();
	insertValueEndRowTest();
	insertValueOnEmptyStorageTest();
	insertSomeValueTest();
	equalActionTest();
	clearActionTest();
	discoverOptionTest();
	
	hasOperatiosToCalcTest();
	hasMultDivOperationTest();
	calcTheOperationTest();
	separeteNumbersAndOperationsTest();
	calcTest();	
	
}

function hasOperatiosToCalcTest(){
	
	
}


function hasMultDivOperationTest(){
	

}

function calcTheOperationTest(){

}

function separeteNumbersAndOperationsTest(){

}

function calcTest(){

} 

function discoverOptionTest(){

	discoverOption(2,0,0);
	console.log('discoverOptionTest', localStorage.getItem("[0]") == 2 ? "OK":"FALHA");	
	
	discoverOption("C",1,0);
	console.log('discoverOptionTest', getValue() == 0 ? "OK":"FALHA");
	
	var arrayValue = ["3","*","3"];
	setLocalStorage(arrayValue);
	
	discoverOption("=",3,0);
	console.log('discoverOptionTest', getValue() == 9 ? "OK":"FALHA");
	
	discoverOption("C",3,0);
	console.log('discoverOptionTest', getValue() == 0 ? "OK":"FALHA");
	localStorage.clear();
}

function clearActionTest(){

	console.log('clearActionTest', clearAction(0) == null ? "OK":"FALHA");
	
	localStorage.setItem([0],3);
	clearAction(1);
	console.log('clearActionTest', getValue() == 0 ? "OK":"FALHA");
	console.log('clearActionTest', localStorage.length == 0 ? "OK":"FALHA");
	localStorage.clear();
}

function equalActionTest(){

	console.log('equalActionTest', equalAction(0) == null ? "OK":"FALHA");
	
	localStorage.setItem([0],3);
	localStorage.setItem([1],"+");
	localStorage.setItem([2],3);	
	console.log('equalActionTest', equalAction(1) != "+" ? "OK":"FALHA");
	localStorage.clear();
}

function insertSomeValueTest(){
	var countValuesFromStage = insertSomeValue(0,5,0);
	console.log('insertSomeValueTest', localStorage.getItem("[0]") == 5 ? "OK":"FALHA");
	console.log('insertSomeValueTest', countValuesFromStage == 1 ? "OK":"FALHA");

	countValuesFromStage = insertSomeValue(1,4,1);
	console.log('insertSomeValueTest', localStorage.getItem("[1]") == 4 ? "OK":"FALHA");
	console.log('insertSomeValueTest', countValuesFromStage == 2 ? "OK":"FALHA");
	localStorage.clear();
	clearScreen();	
}

function insertValueOnEmptyStorageTest(){
	insertValueOnEmptyStorage("+");
	console.log('insertValueOnEmptyStorageTest', getValue() != "+" ? "OK":"FALHA");
	
	insertValueOnEmptyStorage(".");
	console.log('insertValueOnEmptyStorageTest', getValue() == 0 ? "OK":"FALHA");
	
	insertValueOnEmptyStorage(2);
	console.log('insertValueOnEmptyStorageTest', localStorage.getItem("[0]") == 2 ? "OK":"FALHA");
	
	localStorage.clear();
}

function insertValueEndRowTest(){
	localStorage.setItem("[0]",3);
	insertValueEndRow(2,1);
	console.log('insertValueEndRowTest', localStorage.getItem("[1]") == "2" ? "OK":"FALHA");

	insertValueEndRow(".",2);
	console.log('insertValueEndRowTest', localStorage.getItem("[2]") == "." ? "OK":"FALHA");
	
	insertValueEndRow("/",3);
	console.log('insertValueEndRowTest', localStorage.getItem("[3]") == null ? "OK":"FALHA");
	
	insertValueEndRow(5,3);
	console.log('insertValueEndRowTest', localStorage.getItem("[3]") == "5" ? "OK":"FALHA");
	
	insertValueEndRow("+",4);
	console.log('insertValueEndRowTest', localStorage.getItem("[4]") == "+" ? "OK":"FALHA");
	
	insertValueEndRow("-",5);
	console.log('insertValueEndRowTest', localStorage.getItem("[5]") == null ? "OK":"FALHA");
	
	insertValueEndRow(".",5);
	console.log('insertValueEndRowTest', localStorage.getItem("[5]") == null ? "OK":"FALHA");
	
	insertValueEndRow(2,5);
	console.log('insertValueEndRowTest', localStorage.getItem("[5]") == "2" ? "OK":"FALHA");
	
	localStorage.clear();
}

function lastItemNotOperationTest(){
	localStorage.setItem("[0]",3);
	console.log('lastItemNotOperationTest',lastItemNotOperation(0) == true ? "OK":"FALHA");
	
	localStorage.setItem("[1]",".");
	console.log('lastItemNotOperationTest',lastItemNotOperation(1) == true ? "OK":"FALHA");
	
	localStorage.setItem("[2]","/");
	console.log('lastItemNotOperationTest',lastItemNotOperation(2) == false ? "OK":"FALHA");
	
	localStorage.clear();
}


function lastItemNotADotTest(){
	localStorage.setItem("[0]",3);
	console.log('lastItemNotADotTest',lastItemNotADot(0) == true ? "OK":"FALHA");
	
	localStorage.setItem("[1]",".");
	console.log('lastItemNotADotTest',lastItemNotADot(1) == false ? "OK":"FALHA");
	
	localStorage.setItem("[2]","/");
	console.log('lastItemNotADotTest',lastItemNotADot(2) == true ? "OK":"FALHA");
	
	localStorage.clear();
}

function isValueIsOperationTest(){

	console.log('isValueIsOperationTest',isValueIsOperation("+") == true ? "OK":"FALHA");
	console.log('isValueIsOperationTest',isValueIsOperation("/") == true ? "OK":"FALHA");
	console.log('isValueIsOperationTest',isValueIsOperation("-") == true ? "OK":"FALHA");
	console.log('isValueIsOperationTest',isValueIsOperation("*") == true ? "OK":"FALHA");
	console.log('isValueIsOperationTest',isValueIsOperation(".") == false ? "OK":"FALHA");
	console.log('isValueIsOperationTest',isValueIsOperation("2") == false ? "OK":"FALHA");
}

function loadValuesFromLocalStorageTest(){
	var array = [];
	
	var arrayValue = ["2","+","2"];
	setLocalStorage(arrayValue);
	
	array=loadValuesFromLocalStorage(3);
	
	console.log('loadValuesFromLocalStorageTest',array.toString() == ["2","+","2"] ? "OK":"FALHA");
	
	localStorage.clear();
}

function resultTest(){

	var arrayValue = ["2","+"];
	setLocalStorage(arrayValue);
	
	result();
	
	console.log('resultTest',getValue() == 0 ? "OK":"FALHA");	

	localStorage.setItem("[2]",2);
	
	result();
	
	console.log('resultTest',getValue() == 4 ? "OK":"FALHA");	
	
	limpaLocaStorage();
	
	arrayValue = ["2","+","8","*"];
	setLocalStorage(arrayValue);
	
	result();
	
	console.log('resultTest',getValue() == 0 ? "OK":"FALHA");	

	localStorage.setItem("[4]",2);
	
	result();
	
	console.log('resultTest',getValue() == 18 ? "OK":"FALHA");	
	
	limpaLocaStorage();	
	
	arrayValue = ["4","/","8","*"];
	setLocalStorage(arrayValue);
	
	result();
	
	console.log('resultTest',getValue() == 0 ? "OK":"FALHA");	

	localStorage.setItem("[4]",2);
	
	result();
	
	console.log('resultTest',getValue() == 1 ? "OK":"FALHA");	
	
	limpaLocaStorage();	
	
	arrayValue = ["4","*","8","/"];
	setLocalStorage(arrayValue);
		
	result();
	
	console.log('resultTest',getValue() == 0 ? "OK":"FALHA");	

	localStorage.setItem("[4]",2);
	
	result();
	
	console.log('resultTest',getValue() == 16 ? "OK":"FALHA");	
	
	limpaLocaStorage();	
		
	arrayValue = ["2","*","8","+"];
	setLocalStorage(arrayValue);
		
	result();
	
	console.log('resultTest',getValue() == 0 ? "OK":"FALHA");	

	localStorage.setItem("[4]",3);
	
	result();
	
	console.log('resultTest',getValue() == 19 ? "OK":"FALHA");	
	
	limpaLocaStorage();	
	
	arrayValue = ["1","0","+","0",".","0","5","/","2","*","8","-"];
	setLocalStorage(arrayValue);	
	
	result();
	
	console.log('resultTest',getValue() == 0 ? "OK":"FALHA");	

	localStorage.setItem("[12]",1);
	
	result();
	
	console.log('resultTest',getValue() == "9.2" ? "OK":"FALHA");	
	
	limpaLocaStorage();
}

function discoverTheOperationTest(){
	var text = "2+6";
	console.log('discoverTheOperationTest',discoverTheOperation(text) == 8 ? "OK":"FALHA");
	
	text = "2*6";
	console.log('discoverTheOperationTest',discoverTheOperation(text) == 12 ? "OK":"FALHA");
	
	text = "2-6";
	console.log('discoverTheOperationTest',discoverTheOperation(text) == -4 ? "OK":"FALHA");
	
	text = "2/4";
	console.log('discoverTheOperationTest',discoverTheOperation(text) == 0.5 ? "OK":"FALHA");
}

function additionTest(){
	var array = ["6","2"];
	console.log('additionTest',addition(array) == 8 ? "OK":"FALHA");
}


function subtractionTest(){
	var array = ["3","2"];
	console.log('subtractionTest',subtraction(array) == 1 ? "OK":"FALHA");
}


function divisionTest(){
	var array = ["8","4"];
	console.log('divisionTest',division(array) == 2 ? "OK":"FALHA");
	
	array = ["8","0"];
	console.log('divisionTest',division(array) == "Nao pode ser feita divisao por zero!" ? "OK":"FALHA");
}


function multiplicationTest(){
	var array = ["2","3"];
	console.log('multiplicationTest',multiplication(array) == 6 ? "OK":"FALHA");
}

function clearScreenTest(){
	clearScreen();
	console.log('clearScreenTest',getValue() == 0 ? "OK":"FALHA");	
}

function showScreenTest(){
	showScreen(3);
	console.log('showScreenTest',getValue() == 3 ? "OK":"FALHA");		
 }
 
 function getValue(){
 	return document.getElementById('idScreen').textContent;
 }
 
 function limpaLocaStorage(){
 	localStorage.clear();
	clearScreen();
 }
 
 function setLocalStorage(arrayValue){
 
 	for(var i=0;i<arrayValue.length;i++){
 		localStorage.setItem("["+i+"]",arrayValue[i]);
 	}
 }
 
