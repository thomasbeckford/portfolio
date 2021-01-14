import React from 'react'

import { InputContainer } from './Input.styled'

type InputProps = {
  type: string
  name: string
  placeholder: string
}

function Input(props: InputProps): JSX.Element {
  return <InputContainer {...props} />
}

export default Input
