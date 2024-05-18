import React from 'react'
import { TypographyH2, TypographyH3, TypographyP } from '@/components/molecules/typography'
import { OurStory } from '@/lib/assets/copy'
 

export const Story = ()  => {
  return (
    <div className='flex flex-col bg-white w-full gap-4 items-center text-left sm:text-center'>
        <TypographyH3>Our Story</TypographyH3>
        <TypographyP>{OurStory}</TypographyP>
    </div>
  )
}

 