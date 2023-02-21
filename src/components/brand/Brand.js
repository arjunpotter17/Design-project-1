import React from 'react'
import {google, atlassian, slack,shopify, dropbox} from './imports'
import './brand.css'
const brand = () => {
  return (
    <div className='gpt3__brand section__branding'>
      <div className=''>
        <img src={google} alt='google-icon'/>
      </div>
      <div className=''>
        <img src={atlassian} alt='google-icon'/>
      </div>
      <div className=''>
        <img src={slack} alt='google-icon'/>
      </div>
      <div className=''>
        <img src={dropbox} alt='google-icon'/>
      </div>
      <div className=''>
        <img src={shopify} alt='google-icon'/>
      </div>
    </div>
  )
}

export default brand