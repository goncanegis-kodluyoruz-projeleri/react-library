import React from 'react'

import { Header, Button } from 'babysharkui'
import 'babysharkui/dist/index.css'

const App = () => {
  return (
    <>
      <Header text='Baby Shark UI' />
      <div className='button-container'>
        <Button type='primary' text='Primary Button' />
        <Button type='default' text='Default Button' />
        <Button type='dashed' text='Dashed Button' />
        <Button type='text' text='Text Button' />
        <Button type='link' text='Link Button' />
      </div>
    </>
  )
}

export default App
