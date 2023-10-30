function extractValue(arr, key){
    return arr.reduce(function(accumulator, currentVal){
        accumulator.push(currentVal[key]);
        return accumulator;
    },[])
}
function vowelCount(str){
    const caseString = str.toLowerCase();
    const vowels = ['a','e', 'i','o','u'];
    return vowels.reduce(function(acc, cVal){
        for(let i=0;i<caseString.length;i++){
            if(cVal === caseString[i] && acc[cVal] == null){
                acc[cVal] = 1;
            }else if(cVal === caseString[i]){
                acc[cVal] += 1;
            }
        }
        return acc;
    },{});
}
function addKeyAndValue(arr, key, value){
    return arr.reduce(function(accumulator, currentVal, index){
        accumulator[index][key]=value;
        return accumulator;
    }, arr);
}
function isEven(val){
    return val % 2 === 0;
}
function partition(arr, cb){
    return arr.reduce(function(acc, cVal){
        if (cb(cVal)){
            acc[0].push(cVal);
        }else{
            acc[1].push(cVal);
        }
        return acc;
    }, [[],[]]);
}