function speaker() {
  var sentence = 'Bird is the word.';
 
  console.log(sentence);
}

console.log(sentence)

const person = {
  name: 'Slavek', occupation: {title:'Manager of Moop', yearsWorked: '99'}, pets: [{kind:'dog',name:'Dimon'}, {kind:'bird',name:'Keshkesheban'}]
}

console.log(person.occupation.yearsWorked)
const collections = [1,[2,[4,[5,[6]],3]]]
var six = collectons[1][1][1][1][0]


function find(array,criteriaFn){
  let current= array
  let next = []
  while(current){
    if (criteriaFn(current)){return current}
    if (Array.isArray(current)){
      for (let i=0;i<current.length;i++){
        next.push(current[i])}
      }
   current=next.shift() }
  return null
}