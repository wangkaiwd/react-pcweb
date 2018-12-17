import React, { Component } from 'react';
import BaseIcon from '@/components/baseIcon'
import classNames from 'classnames'
import styles from './index.module'
import { closeExpand, openExpand } from './store/actionCreators'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'

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
  focusClasses = {
    enter: styles.changeEnter,
    enterActive: styles.changeEnterActive,
    enterDone: styles.changeEnterDone,
    exit: styles.changeExit,
    exitActive: styles.changeExitActive,
    exitDone: styles.changeExitDone
  }
  render() {
    const { expand, onFocus, onBlur } = this.props
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
              </div>
            </CSSTransition>
            <div className={styles.switch}>
              <div className={styles.switchTitle}>
                <h3>热门搜索</h3>
                <span><BaseIcon name="" />换一批</span>
              </div>
              <div className={styles.switchContent}>
                <div className={styles.switchItem}></div>
              </div>
            </div>
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
