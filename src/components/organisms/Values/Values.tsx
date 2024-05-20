import React from 'react'
import ValueCard from '@/components/molecules/ValueCard/ValueCard'
import { values, valuesDescription } from '@/lib/assets/copy'
import { TypographyH2, TypographyP } from '@/components/molecules/typography'
 


type Props = {}

export const Values = (props: Props) => {
  return (
    <section className='flex flex-col'> 
    <TypographyH2>Our values</TypographyH2>
        <TypographyP>{valuesDescription}</TypographyP>
        <div className='flex flex-col sm:flex-row'>
        {values.map(({description, title}, index) => {
            return (
                <ValueCard key={index} description={description} title={title} />
            )
        })}
        </div>
    </section>
  )
}

 