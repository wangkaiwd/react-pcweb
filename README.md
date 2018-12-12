## 
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
