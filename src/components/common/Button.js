import React from 'react'
import cn from 'classnames';

import 'stylesheets/common/button.scss'

const Button = ({ className, disabled = false, onClick, children, ...params }) => {
  const btnClassname = cn({
    'button-style': true,
    'button-orange': true,
    [className]: !!className,
    'button-disabled': disabled,
  })
  
  const handleClick = () => {
    if (disabled) return null;
    onClick()
  }
  
  return (
    <div
      className={btnClassname}
      onClick={handleClick}
      {...params}
    >
      {children}
    </div>
  )
}

export default Button