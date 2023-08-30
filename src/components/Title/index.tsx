import React from 'react'
import {TitleDiv,Title} from './style'


interface ITitle {
  title: string;
}

 const Module: React.FC <ITitle> = ({title}) => {
  return (
    <TitleDiv>
    <Title >{title} </Title>

    </TitleDiv>
  )
}



export default Module
