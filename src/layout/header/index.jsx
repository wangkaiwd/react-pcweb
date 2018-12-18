import React, { Component } from 'react';
import BaseIcon from '@/components/baseIcon'
import classNames from 'classnames'
import styles from './index.module'
import { closeExpand, openExpand } from './store/actionCreators'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { fetchSearchHot } from '@/api/header'

const mapStateToProps = (state) => {
  return {
    expand: state.header.expand
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onFocus: () => {
      dispatch(openExpand(true))
    },
    onBlur() {
      dispatch(closeExpand(false))
    }
  }
}
@connect(mapStateToProps, mapDispatchToProps)
class Header extends Component {
  state = {
    searchHotList: [],
    isRotate: false
  }
  focusClasses = {
    enter: styles.changeEnter,
    enterActive: styles.changeEnterActive,
    enterDone: styles.changeEnterDone,
    exit: styles.changeExit,
    exitActive: styles.changeExitActive,
    exitDone: styles.changeExitDone
  }
  componentDidMount() {
    this.getSearchHot()
  }
  getSearchHot = () => {
    fetchSearchHot().then(
      res => {
        console.log(res)
        this.setState({ searchHotList: res.list })
      }
    )
  }
  changeList = () => {
    this.setState({ isRotate: true }, () => {
      setTimeout(() => {
        this.setState({ isRotate: false })
      }, 1000);
    })
  }
  hotSearchHtml = () => {
    const { searchHotList } = this.state
    // if语句和for循环在javascript中不是表达式，因此它们不能直接在jsx中使用，
    // 但是你可以将它们放在周围的代码中
    return searchHotList.map((list, i) => {
      // 这里当条件不满足的情况下会返回undefined，
      // 布尔值、Null和Undefined被忽略，所以不符合情况下返回undefined被忽略
      if (i < 10) {
        return (
          <div key={i} className={styles.switchItem}>
            {list}
          </div>
        )
      }
    })
  }
  render() {
    const { expand, onFocus, onBlur } = this.props
    const { isRotate } = this.state
    return (
      <div className={styles.header}>
        <img className={styles.logo} src={require('images/logo.png')} alt="" />
        <div className={styles.headerNav}>
          <div className={styles.left}>
            <div className={classNames(styles.navItem, styles.active)}>首页</div>
            <div className={styles.navItem}>下载App</div>
            <CSSTransition
              in={expand}
              timeout={300}
              classNames={this.focusClasses}
            >
              <div className={styles.inputBox}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="搜索"
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
                <div className={styles.searchWrapper}>
                  <BaseIcon className={styles.searchIcon} name="search" />
                </div>
                <div className={styles.switch}>
                  <div className={styles.triangle}></div>
                  <div className={styles.switchTitle}>
                    <h3>热门搜索</h3>
                    <span className={styles.switchIcon} onClick={this.changeList}>
                      <BaseIcon
                        name="circle"
                        className={classNames({ [styles.rotate]: isRotate })}
                      />
                      换一批
                      </span>
                  </div>
                  <div className={styles.switchContent}>
                    {this.hotSearchHtml()}
                  </div>
                </div>
              </div>
            </CSSTransition>
          </div>
          <div className={styles.right}>
            <div className={styles.navItem}>
              <BaseIcon name="Aa" />
            </div>
            <div className={styles.navItem}>登录</div>
          </div>
        </div>
        <div className={styles.personal}>
          <p className={styles.register}>注册</p>
          <p className={styles.write}>
            <BaseIcon name="pen" />写文章
          </p>
        </div>
      </div>
    );
  }
}
export default Header;

// 通过function来实现无状态组件，但是不能使用修饰器来进行代码简化
// const Header = ({ expand, onBlur, onFocus }) => {
//   return (
//     <div className={styles.header}>
//       <img className={styles.logo} src={require('images/logo.png')} alt="" />
//       <div className={styles.headerNav}>
//         <div className={styles.left}>
//           <div className={classNames(styles.navItem, styles.active)}>首页</div>
//           <div className={styles.navItem}>下载App</div>
//           <CSSTransition
//             in={expand}
//             timeout={300}
//             classNames={{
//               enter: styles.changeEnter,
//               enterActive: styles.changeEnterActive,
//               enterDone: styles.changeEnterDone,
//               exit: styles.changeExit,
//               exitActive: styles.changeExitActive,
//               exitDone: styles.changeExitDone
//             }}
//           >
//             <div className={styles.inputBox}>
//               <input
//                 className={styles.input}
//                 type="text"
//                 placeholder="搜索"
//                 onFocus={onFocus}
//                 onBlur={onBlur}
//               />
//               <div className={styles.searchWrapper}>
//                 <BaseIcon className={styles.searchIcon} name="search" />
//               </div>
//             </div>
//           </CSSTransition>
//         </div>
//         <div className={styles.right}>
//           <div className={styles.navItem}>
//             <BaseIcon name="Aa" />
//           </div>
//           <div className={styles.navItem}>登录</div>
//         </div>
//       </div>
//       <div className={styles.personal}>
//         <p className={styles.register}>注册</p>
//         <p className={styles.write}>
//           <BaseIcon name="pen" />写文章
//           </p>
//       </div>
//     </div>
//   )
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Header)
