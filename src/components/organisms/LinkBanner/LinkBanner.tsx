import React from 'react'
import { Button } from '@/components/ui/button'
import { TypographyH3 } from '@/components/molecules/typography'
import { useRouter } from 'next/navigation'
 

type Props = {
    title: string,
}

export const LinkBanner = ({title}: Props) => {

  const router = useRouter()
  const handleClick = () => {
    router.push('/products')
  }

  return (
    <div className='w-full flex flex-col items-center justify-evenly text-center min-h-32 bg-green-900'>
        {/* @todo insert an icon here */}
        <TypographyH3 className='text-lime-300' >{title}</TypographyH3>
        <Button variant={'outline'} onClick={handleClick}>View Products </Button>
    </div>
  )
}

 