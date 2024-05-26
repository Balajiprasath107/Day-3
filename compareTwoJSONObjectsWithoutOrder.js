obj = {"name":"abc","age":5}
obj2 = {"age":5,"name":"abc"}
keyObj = (Object.keys(obj))
keyObj2 = (Object.keys(obj2))
valuesObj = (Object.values(obj))
valuesObj2 = (Object.values(obj2))
for(var i=0;i<keyObj.length;i++){
    if(obj[keyObj[i]]==obj2[keyObj[i]]){
        delete obj[keyObj[i]]
        delete obj2[keyObj[i]]
    }
}
//if prints two empty object {} {} then both are same else not same
console.log(obj,obj2)
