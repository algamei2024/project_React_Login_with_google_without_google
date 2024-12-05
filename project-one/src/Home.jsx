import React from 'react'
import Header from './component/Header'

export default function Home() {
  return (
    <>
      <Header/>
      <div>
        <h1>{localStorage.getItem('email')}</h1>
        Home
      </div>
    </>
  )
}
