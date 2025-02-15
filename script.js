const parseCode = (str) => {
  // your code here
	let name = ""
	let indL;
	for(let i = 0 ; i<str.length ; i++){
		if(str[i]==='0'){
			indL = i;
			return ;
		}
		name+=str[i];
	}
	let lname = ""
	let indR ;
	for(let i = str.length-1 ; i>=0 ; i--){
		if(str[i]==='0'){
			indR = i;
			return ;
		}
		lname+=str[i];
	}
	let indR ;
	let idx="";
	for(let i = indL ; i<indR ; i++){
		if(str[i]!=='0'){
			
			idx+=str[i] ;
		}
		
	}
	let obj = {
		firstName:name,
		lastName:lname,
		id:idx,
}
	return obj;
	
};

// // Do not change the code below
// const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
