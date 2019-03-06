import React, { Component } from 'react'
import cn from 'classnames';

import 'stylesheets/components/quickview.scss'

class QuickView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: true,
    }
  }
  
  handleClose = () => {
    this.setState({
      isOpen: false,
    }, () => {
      setTimeout(this.props.handleClose, 300)
    })
  }
  
  render () {
    const { children } = this.props;
    const { isOpen } = this.state;
    const classname = cn('white-cover',{
      open: isOpen,
      close: !isOpen,
    })
    return (
      <div className={classname}>
        <div className="quickview">
          <span className="close-icon" onClick={this.handleClose}><i className="close icon" /></span>
          <div className="quickview-container">
            {children}
          </div>
        </div>
      </div>
    )
  }
}

QuickView.propTypes = {

}

export default QuickView