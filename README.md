## 
### `redux`数据流
首先要通过`redux`的`createStore`传入`reducer`来创建一个全局的`store`，当要更改`store`中的数据时，首先要新建一个`action`，然后通过`store.dispath`将`action`派发给`reducer`，`reducer`会根据`action`的`type`属性进行判断，实现不同的逻辑。之后将更新后的`state`返回到`store`，`store`会根据最新的`state`来更新`ui`视图。  

我们可以通过`actionTypes`来进行对`action`返回的`type`属性进行统一管理，通过`actionCreators`来统一管理`action`。由于页面会涉及到逻辑会很多，我们还要通过`combineReducers`来将不同模块的`reducer`进行合并。这样`store`中的`state`就会被按照模块来进行定义，更易于管理
### 自定义组件的`className`
在`react`中使用自定义组件的时候，如果需要传入`css`类名要通过`props`的形式进行传入，而不会像`Vue`一样与组件根元素的`class`进行浅合并
```jsx
class BaseIcon extends Component {
  render() {
    const { name, onClick, className } = this.props
    return (
      <span className={classNames(styles.iconWrapper, className)} onClick={onClick}>
        <svg className={styles.icon} aria-hidden="true">
          <use xlinkHref={`#js-${name}`}></use>
        </svg>
      </span>
    );
  }
}
BaseIcon.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string // className会作为props传给子组件
};
BaseIcon.defaultProps = {
  className: ''
}
// 在页面中使用
<BaseIcon className={styles.searchIcon} name="search" />
```
### `css`动画

#### `animation`属性
`animation-fill-mode`:指定在动画执行之前和之后如何给动画的目标应用样式 

该属性的相关取值([mdn](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-fill-mode))
  ```
  取值：
  1. none: 动画执行前后不改变任何样式(初始值)
  2. forwards:目标动画保持最后一帧的样式
  3. backwards: 动画采用第一帧的样式
  4. both: 动画将执行forwards和backwards执行的动作
  ```

通常，我们会在一个动画执行结束后目标元素能够保持动画之后的样式，而不是回到最初使的样式  
```less
.show2 {
  animation: color-show 2s ease-in forwards;
}
.hide2 {
  animation: color-hide 2s ease-in forwards;
}
@keyframes color-show {
  0% {
    opacity: 0;
    color: green;
  }
  50% {
    color: red;
    opacity: 0.5;
  }
  100% {
    color: blue;
    opacity: 1;
  }
}
@keyframes color-hide {
  0% {
    color: blue;
    opacity: 1;
  }
  50% {
    color: red;
    opacity: 0.5;
  }
  100% {
    color: green;
    opacity: 0;
  }
}
```

动画执行结束后会一直保持结束后的样式
