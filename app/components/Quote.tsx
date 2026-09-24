import React from 'react'
import { InfiniteMovingCards } from '@/app/components/ui/infinite-moving-cards'
const Quote = () => {
  const quote = [
    {
      "quote": "The only way to do great work is to love what you do.",
      "name": "Steve Jobs",
      "title": "Co-founder of Apple Inc."
    },
    {
      "quote": "Innovation distinguishes between a leader and a follower.",
      "name": "Steve Jobs",
      "title": "Co-founder of Apple Inc."
    },
    {
      "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      "name": "Winston Churchill",
      "title": "Former Prime Minister of the United Kingdom"
    },
    {
      "quote": "The future belongs to those who believe in the beauty of their dreams.",
      "name": "Eleanor Roosevelt",
      "title": "Former First Lady of the United States"
    },
    {
      "quote": "Quality is not an act, it is a habit.",
      "name": "Aristotle",
      "title": "Ancient Greek Philosopher"
    }
  ]
  return (

    <div className='mb-5 dark:bg-black dark:bg-grid-white/[0.4] h-[40vh]'>
      <h2 className='mt-4 mb-7 text-4xl text-white font-semibold tracking-wide text-center' >Quotes</h2>
      <InfiniteMovingCards items={quote} />
    </div>

  )
}

export default Quote
