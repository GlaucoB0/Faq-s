import React from 'react'
import Container from '../Container/Container'
import ContainerModal from '../ContainerModal/ContainerModal'
import Title from '../Title/Title'
import './App.css'

function App() {
  return (
    <>
      <Container>
        <Title title={'FAQs'}/>
        <ContainerModal 
        textButton={'What is Frontend Mentor, and how will it help me?'}
        textModal={'Frontend Mentor offers realistic coding challengesto help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript, Its suitable for all levels and ideal for portfolio building.'}
        />
        <ContainerModal 
        textButton={'Is Frontend Mentor free?'}
        textModal={'Frontend Mentor offers realistic coding challengesto help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript, Its suitable for all levels and ideal for portfolio building.'}
        />
        <ContainerModal 
        textButton={'Can i use Frontend Mentor projects in my portfolio?'}
        textModal={'Frontend Mentor offers realistic coding challengesto help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript, Its suitable for all levels and ideal for portfolio building.'}
        />
        <ContainerModal 
        textButton={"How can i get help if i'm stuck on a challenge?"}
        textModal={'Frontend Mentor offers realistic coding challengesto help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript, Its suitable for all levels and ideal for portfolio building.'}
        />
      </Container>
    </>
  )
}

export default App
