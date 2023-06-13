const myObj = {
  stuff1: '1',
  stuff2: '2',
  stuff3: '3'
};
const fakeCopyObj = myObj;
const copyObj = { stuff3: '4', ...myObj } 
fakeCopyObj.stuff1
// const { stuff1, stuff2, stuff3 } = myObj;

const { stuff1, ...rest } = myObj;

rest.stuff2


// const comp1 = (props) => {
//   return props
// }

// const comp2 = (props) => {
//   return () => comp1(props)
// }
// const comp3 = (props) => {
//   const c2 = comp2(props)
//   console.log( c2)
// }

// comp3({foo: 'foo', bar: 'bar'})