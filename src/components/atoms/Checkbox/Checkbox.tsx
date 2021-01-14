import React from 'react'

import { InputContainer } from './Checkbox.styled'

type InputProps = {
  type: string
  name: string
  placeholder: string
}

function Checkbox(props: InputProps): JSX.Element {
  return <InputContainer {...props} />
}

export default Checkbox
