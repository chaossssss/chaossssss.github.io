export function foreachArr(arr,key){
	var valuesArr = [];
	var valuesStr = '';
	for(var i = 0; i < arr.length; i++){
		//console.log(arr[i].hasOwnProperty(key));//是否含有这个key
		// console.log(arr[i][key]);
		valuesArr.push(arr[i][key]);
	}
	valuesStr = valuesArr.join(' / ');
	// console.log(valuesStr);
	return valuesStr;
	
	
	// var values = [];
	// for(var key in arr){
	// 	values.push(arr[key]);
	// }
	// console.log(values);
}