const parseCode = (str) => {
  
	let res = [];
	let isZero = false;
	let ans = "";
	for(let i = 0 ; i<str.length;i++){
		if(str[i]==='0'){
            isZero=true;
           
			res.push(ans);
			ans=""
		} else{
			isZero=false;
		}
		if(!isZero) ans+=str[i];
    }
   
	res.push(ans);
	let finalAr = res.filter((s)=> s.length>0)
// 	 console.log(finalAr[0])
// 	 console.log(finalAr[1])
// 	 console.log(finalAr[2])
	return { firstName: finalAr[0], lastName:finalAr[1], id: finalAr[2] }
};

// // Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));