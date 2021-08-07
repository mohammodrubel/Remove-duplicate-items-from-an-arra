var arr = ['hashem','rubel','hsib','rasel','nishat','rabbi','nosib','rahman','kader','shifat','rasel','rongon','rubel']

function myFunction(arr){
    var update = []
        // for (var i = 0; i<arr.length; i++){
            // var newVar = arr[i]
            // console.log(newVar)
        // }
    for (var Element of arr){
        // console.log(Element)
            if (update.indexOf (Element)==-1){
                update.push(Element)
            }
    }
    return update
}
var result = myFunction(arr)
console.log(result)


function myFastFunction(arr){
    var updateArray = []
        for (var i =0;i<arr.length;i++){
            if (updateArray.indexOf(arr[i])==-1){
                updateArray.push(arr[i])
            }
        }
    return updateArray
}
var result= myFastFunction(arr)
console.log(result)