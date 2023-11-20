'use client'
import styled from "styled-components"

const ItemBox = styled.div`
    border: 1px solid red;
    width:300px;
    align-self: start;
    padding:16px;
    margin:16px;
`
const ItemsContent = styled.div`
display:flex;
justify-content:space-around;
flex-direction: row;
flex-wrap:wrap; 
align-items:stretch;

`
export default function Page() {

    return <ItemsContent> 
        <ItemBox>hola mundo</ItemBox>
        <ItemBox>hola mundo</ItemBox>
        <ItemBox>hola mundo</ItemBox>
        <ItemBox>hola mundo</ItemBox>
        <ItemBox>hola mundo</ItemBox>
        <ItemBox>hola mundo</ItemBox>
        <ItemBox>hola mundo</ItemBox>
        <ItemBox>hola mundo</ItemBox>
        <ItemBox>hola mundo</ItemBox>
    </ItemsContent>

}