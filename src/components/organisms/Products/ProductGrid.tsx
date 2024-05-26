import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export const ProductGrid = ({children}: Props) => {
  return (
    <div className='flex flex-wrap w-full gap-3 justify-center items-center sm:mt-32 m-12'>{children}</div>
  )
}

 