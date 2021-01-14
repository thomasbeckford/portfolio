import React from 'react'

import Button from '@/components/atoms/Button/index'
import Input from '@/components/atoms/Input/index'
import Textarea from '@/components/atoms/Textarea/index'

import { ContactContainer } from './ContactForm.styled'

function ContactForm(): JSX.Element {
  return (
    <ContactContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '48%' }}>
          <Input type="text" name="name" placeholder="Name" />
        </div>
        <div style={{ width: '48%' }}>
          <Input type="text" name="website" placeholder="Website Link" />
        </div>
      </div>
      <div>
        <Input type="email" name="email" placeholder="Email" />
      </div>
      <div>
        <Textarea name="name" placeholder="Message" cols={30} rows={5} />
      </div>
      <Button text="Send Message" />
    </ContactContainer>
  )
}

export default ContactForm
