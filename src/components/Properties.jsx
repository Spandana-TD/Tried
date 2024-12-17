import React from 'react'
import Content from './Content'

export default function Properties({Propname}) {
  return (
    <div>Properties
        <br/>
        {Propname}
        <br/>
        <Content color="red" title="about us"/>
        <Content color="yellow" title="contact us"/>
        <Content/>
    </div>
  )
}
