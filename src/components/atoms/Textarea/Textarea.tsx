import React from 'react'

import { TextareaContainer } from './Textarea.styled'

type TextareaProps = {
  name: string
  placeholder: string
  cols: number
  rows: number
}

function Textarea(props: TextareaProps): JSX.Element {
  return <TextareaContainer {...props} />
}

export default Textarea
