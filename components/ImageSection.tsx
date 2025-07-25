"use client"

import Image from 'next/image'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const ImageSection = () => {
  return (
    <div className='flex items-center justify-center m-8 pb-4 overflow-hidden'>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000
          })
        ]}
      >
        <CarouselContent>
          <CarouselItem className="basis-full">
            <div className="flex justify-center">
              <Image src={'/img.jpg'} alt='foods' width={600} height={400} className='rounded-2xl' />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-full">
            <div className="flex justify-center">
              <Image src={'/img2.jpg'} alt='foods' width={600} height={400} className='rounded-2xl' />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-full">
            <div className="flex justify-center">
              <Image src={'/img3.jpg'} alt='foods' width={600} height={400} className='rounded-2xl' />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-full">
            <div className="flex justify-center">
              <Image src={'/img4.jpg'} alt='foods' width={600} height={400} className='rounded-2xl' />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default ImageSection
