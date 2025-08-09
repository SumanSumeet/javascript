// NOTES
/* javascript execution context
->global execution context
->function execution context
->eval execution context

=>Phases of execution of code
1.Global execution using "this" keyword
2.Memory creation phase.
  val1=undefined
  val2=undefined
  addition=definition
  result1=undefined
  result2=undefined
3.Execution phase.  
  val1=10
  val2=5
  add num=new variable environment+execution thread


*/
// example
let val1 = 10
let val2= 5
function addnum(num1,num2){
    let total = num1 +num2
    return total
}
let result1= addnum(val1,val2)
let result2=addnum(10,2)
// +++++++++++++CALL STACK++++++++++++++
 