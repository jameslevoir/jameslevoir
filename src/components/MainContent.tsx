import React from 'react'
import Button from './Button'

const AboutMe = (props: {h1: string, h2: string, p: string, buttonText: string, buttonLink: string}) => {
  return (
    <div className="main-content">
        {props.h1 && <h1>{props.h1}</h1>}
        {props.h2 && <h2>{props.h2}</h2>}
        {props.p && <p>{props.p}</p>}
        {(props.buttonText && props.buttonLink) && <Button text={props.buttonText} link={props.buttonLink}/>}
    </div>
  )
}

export default AboutMe