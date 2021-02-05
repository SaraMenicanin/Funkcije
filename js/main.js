//task 1
const array=[1,2,3,4,5,6,7];
console.log('array:',array);
const reversed=array.reverse();
console.log('reversed:',reversed);
//task 1
function reverseArray(){
	var dataOld=[34,true,"Petar",1992];
	var dataNew=[];
	var i=0;
	while(i<dataOld.length){
		dataNew[i]=dataOld[dataOld.length-1-i];
		i++;
	}
	console.log(dataNew)
}
reverseArray();
//task 2

function func1(a, b, c) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
 }

func1(1, 2,3);
// task 3
function longestName(listOfNames,maxLength){
	var listOfNames=["Jabuka","Lubenica","Banana","Nar"];
	var maxLength=[];
	for (var i=0;i<listOfNames.length;i++){
		if(listOfNames[i].length>maxLength){
			maxLength=listOfNames[i].length;
		}

	} console.log(maxLength)

}

longestName();

//task 4
function Second_Greatest_Lowest(array)
{
  array.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [array[0]];
  var result = [];
  
  for(var j=1; j < array.length; j++)
  {
    if(array[j-1] !== array[j])
    {
      uniqa.push(array[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5]));

// task 5 
var array12=[101,23,445,28,45];
var newArray=[];
var singleNumber=20;
function firstFunction(_array,_number){
return function secondFunction(){
	for (let i=0;i<array12.length;i++){
		if(singleNumber<array12[i]){
			newArray[i]=array12[i];
		};
	}
	console.log(newArray)
}
}
firstFunction([23,44,78,32,6],20)()
// task 6
var numbers=[12,33,11,10,5];
var multiplyNumber=multiplyNumbers(numbers,highestNumber,lowestNumber);
function highestNumber(arr){
	var someArray=arr;
	var highestNumber=0;
	for(i=0;i<=highestNumber;i++){
		if(someArray[i]>highestNumber){
			var highestNumber=someArray[i];
		}
	}
	return highestNumber
}
function lowestNumber(arr){
	var someArray=arr;
	var lowestNumber=someArray[0];
	for(i=0;i<someArray.length;i++){
		if(lowestNumber>someArray[i]){
var lowestNumber=someArray[i]		}
	}
	return lowestNumber

}
function multiplyNumbers(arr,highestNumber,lowestNumber){
	return highestNumber(arr)*lowestNumber(arr)
}
console.log(multiplyNumber);
// task 7


var Numbers = [15,35,46,23,15,17,23,24,35,12,72,64,35,22,64];

function seventhTask (a,b ){

	var unique = [];
for(var i = 0; i < a.length; i++) {
for (var j = 0; j < a.length; j++){
	if (i==j){
	continue;
}
if ( a[i] == a[j]){
break;
}
}
if (j == a.length){
unique[unique.length]= a[i];
}
}
console.log(unique);
b(unique);
console.log(unique);

}

function seventhTaskTwo(c) {

zeroNumber=0;

for(var i = 0; i < c.length; i++) {

if(c[i] > c[zeroNumber]) {
zeroNumber = i;
}
}
delete c[zeroNumber];


}




seventhTask(Numbers, seventhTaskTwo);