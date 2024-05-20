import React from 'react'
import { Button } from '@/components/ui/button'
import { TypographyH3 } from '@/components/molecules/typography'


type Props = {
    title: string,
}

export const LinkBanner = ({title}: Props) => {
  return (
    <div className='w-full flex flex-col items-center justify-evenly text-center min-h-32 bg-green-900'>
        {/* @todo insert an icon here */}
        <TypographyH3 className='text-lime-300' >{title}</TypographyH3>
        <Button variant={'outline'}>View Products </Button>
    </div>
  )
}

 