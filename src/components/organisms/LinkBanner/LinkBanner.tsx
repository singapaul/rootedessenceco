import React from 'react'
import { Button } from '@/components/ui/button'
import { TypographyH3 } from '@/components/molecules/typography'
import Link from 'next/link'
 import { ArrowRight } from 'lucide-react'
type Props = {
    title: string,
}

export const LinkBanner = ({title}: Props) => {

 
  return (
    <div className='w-full flex flex-col items-center justify-evenly text-center min-h-32 bg-green-900 py-8 gap-5'>
        <TypographyH3 className='text-lime-300 text-5xl' >{title}</TypographyH3>
        <Link href='/products'><Button>View Products <ArrowRight className='ml-2'/></Button></Link>
    </div>
  )
}

 