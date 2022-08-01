import Navbar from "../../component/nav"
import styled from 'styled-components'

const Title = styled.h2`
    font-size: 50px;
    color: ${({theme}) => theme.colors.primary}
`

export default function Cssinjs(){
    return(
        <>
            <Navbar/>
            <h2 style={{ color: 'red' }}>Hello World</h2>
            <Title>Styled Component</Title>
            <h3>Import styled-components using yarn add then add styled-components on _app.js</h3>
        </>
    )
}