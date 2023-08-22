'use client';
import { useSearchParams } from 'next/navigation'
import React from 'react'

const About = () => {
  const query = useSearchParams();
  console.log('query', query.get('batch'));
  return (
    <div>About Page</div>
  )
}

export default About;