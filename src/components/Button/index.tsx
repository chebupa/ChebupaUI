import React, { FC, ReactElement } from 'react'


interface IProps {
  children: ReactElement

  color: string
  big: boolean
}


export const Button: FC<IProps> = ({
  children,
  color,
  big,
  ...props
}) => {
  return (
    <button { ...props }>
      { children }
    </button>
  )
}
