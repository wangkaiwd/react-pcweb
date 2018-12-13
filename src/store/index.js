import { createStore } from 'redux'
import reducer from './reducer'
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store

// 装饰器
function testable(target) {
  target.isTestable = true
}
// 修饰器，修改了testable类的行为，为它加上了静态属性isTestable.
// testable函数的参数target是MyTestTableClass类本身
@testable
class MyTestTableClass {

}
console.log(MyTestTableClass.isTestable)




function mixins(...list) {
  return function (target) {
    Object.assign(target.prototype, ...list)
  }
}
const Foo = {
  foo() {
    console.log('foo')
  }
}
// 把Foo对象上的方法添加到了MyClass的实例上面
@mixins(Foo)
class MyClass {

}
let obj = new MyClass()
obj.foo()
