import React, { FunctionComponent, ReactNode } from 'react'
import styles from './Grid.module.scss'
import cn from 'classnames'

const Grid: FunctionComponent<{
  children: ReactNode;
  container?: boolean;
  item?: boolean;
}> = ({ children, container, item }) => {
  const classNames = cn({
    [styles.Grid_container]: container,
    [styles.Grid_item]: item,
  });
  return (
    <div className={classNames}>{children}</div>
  )
}

export default Grid;
