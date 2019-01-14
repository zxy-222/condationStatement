// 1 、多重判断时 可以使用Array.includes
function test(fruit) {
  if(fruit == 'apple' || fruit == 'strawberry'){
    console.log('red')
  }
}
//当红色水果很多时，需要更多的 || 
//使用array.includes，把所有红色水果列出来放到数组中
function test(fruit) {
  const redFruits = resFruits = ['apple', 'strawberry', 'cherry', 'cranberries']
  if(redFruits.includes(fruit)){
    console.log('red')
  }
}

// 2、更少的嵌套，尽早return
/** 
 * 1、如果没传参数fruit，抛出错误
 * 2、接受quantity参数，让其大于10时打印出来
*/
function test(fruit, quantity) {
  const redFruits = resFruits = ['apple', 'strawberry', 'cherry', 'cranberries']
  // 1、fruit必须有值
  if (fruit) {
    // 2、必须是红的
    if (redFruits.includes(fruit)) {
      console.log('red')
      // 3、quantity大于10
      if (quantity > 10) {
        console.log('big')
      }
    }
  } else {
    throw new Error('No fruit')
  }
}
// 上面有一个if/else 语句；3个if嵌套语句

// 如果条件不符合尽早return
function test(fruit, quantity) {
  const redFruits = resFruits = ['apple', 'strawberry', 'cherry', 'cranberries']
  // 1、不符合条件，尽早抛出错误
  if (!fruit) throw new Error('No fruit')
  // 2、必须是红的
  if (redFruits.includes(fruit)) {
    console.log('red')
    // 3、 quantity > 10
    if (quantity > 10) {
      console.log('big');
    }
  }
}
// 或者
function test(fruit, quantity) {
  const redFruits = resFruits = ['apple', 'strawberry', 'cherry', 'cranberries']
  // 1、不符合条件，尽早抛出错误
  if (!fruit) throw new Error('No fruit')
  // 2、必须是红的
  if (!redFruits.includes(fruit)) return
    console.log('red')
  if (quantity > 10) {
      console.log('big');
  }
}

// 3、使用默认参数和解构
function test(fruit, quantity) {
  if(!fruit) return
  const q = quantity || 1;
  console.log(`we have ${q} 个 ${fruit}`)
}
//可以使用默认函数参数来消除变量q
function test(fruit, quantity = 1) {
  // 如果没传quantity参数，则该参数默认值是1
  if(!fruit) return;
  console.log(`we have ${quantity} 个 ${fruit}`)
}
// 如果fruit是一个对象时,
function test(fruit) {
  if (fruit && fruit.name) {
    console.log(fruit.name);
  } else {
    console.log('unknown')
  }
}
test({name: 'apple', color: 'red'}) // apple
//
function test({name} = {}) {
  console.log(name || 'unknown')
}
// 4、倾向于对象遍历不是Switch语句
function test(color) {
  switch (color) {
    case 'red':
      return ['apple', 'strawberry'];
    case 'yellow':
      return ['banana', 'pineapple'];
    case 'purple':
      return ['grape', 'plum'];
    default:
      return [];
  }
}
// 对象遍历更简洁
const fruitColor = {
  red: ['apple', 'strawberry'],
  yellow: ['banana', 'pineapple'],
  purple: ['grape', 'plum']
};
function test(color) {
  return fruitColor[color] || [];
}
// 或者使用Map实现相同的结果
const fruitColor = new Map()
  .set('red',['apple', 'strawberry'])
  .set('yellow', ['banana', 'pineapple'])
  .set('purple',['grape', 'plum']);
function test(color){
  return fruitColor.get(color) || [];
}

// 5、对所有/部分 判断使用Array.every & Array.some
const fruits = [
  { name: 'apple', color: 'red'},
  { name: 'banana', color: 'yellow'},
  { name: 'grape', color:'purple'}
];
function test() {
  let isAllRed = true;
  for (let f of fruits) {
    if(!isAllRed) break;
    isAllRed = (f.color == 'red');
  }
  console.log(isAllRed); //false
}

const fruits = [
  { name: 'apple', color: 'red' },
  { name: 'banana', color: 'yellow' },
  { name: 'grape', color: 'purple' }
];

function test() {
const isAllRed = fruits.every(f => f.color == 'red');

console.log(isAllRed); // false
}

const fruits = [
  { name: 'apple', color: 'red' },
  { name: 'banana', color: 'yellow' },
  { name: 'grape', color: 'purple' }
];

function test() {
// 条件：任何一个水果是红色
const isAnyRed = fruits.some(f => f.color == 'red');

console.log(isAnyRed); // true
}