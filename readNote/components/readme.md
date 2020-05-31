## 组件实现
### 样式
* [ ] partial
* [ ] variable default value
### `Button`组件
* [ ] [Intersection Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types)
* [ ] Global Utility Types: [Partial<T>](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialt)
* [ ] `type NativeButtonProps = ButtonHTMLAttributes<HTMLElement>`，传`HTMLButtonElement`为什么报错？

#### 待补充功能
* [ ] Loading Button
* [ ] Icon Button

### `Menu`组件
* [ ] 使用`useContext`来进行跨组件通讯，极大的减少了组件传参的复杂性
* [ ] 由于`props.children`的可能是`string|null|undefined`等，`React`专门提供了[`React.Children`](https://reactjs.org/docs/react-api.html#reactchildren) 来处理`props.children`
* [ ] 新用到的一个类型:`FunctionComponentElement<Props>`，该类型中拥有函数组件实例的一些属性
* [ ] [`displayName`](https://reactjs.org/docs/react-component.html#displayname) 明确的定义组件的显示名称(1.指定高阶组件的名称；2.在`devtool`显示组件名字，方便调试区分)

#### 待补充功能
* [ ] 递归的`subMenu`
* [ ] `popover`的离开和移入样式内容优化
