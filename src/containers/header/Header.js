import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'


const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header_content'>
        <h1 className='gradient__text'>Build Amazing Things With GPT-3</h1>
        <p>
        Yet bed any for travelling assistance indulgence unpleasing. 
        Not thoughts all exercise blessing. 
        Indulgence way everything joy alteration boisterous the attachment. 
        Party we years to order allow asked of.
        </p>
        <div className='gpt3__header_content_input'>
          <input type='email' placeholder='Email'/>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header_content_people'>
          <img src={people} alt='people-icons'/>
          <p>1,600 people requested access</p>
        </div>
        </div>
        <div className='gpt3__header_image'>
            <img src={ai} alt='ai-icon'/>
        </div>
    </div>
  )
}

export default Header