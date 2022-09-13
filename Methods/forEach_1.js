let newArray = []
const Array1 = [1,2,3,4,5]

Array1.forEach(function(x,index){
    console.log(index)
    newArray[index] = Array1[index]
})
console.log(newArray)