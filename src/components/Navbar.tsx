'use client'
import Link from "next/link"
import styled from "styled-components"

const NavBarConainter = styled.div`
     
`
export default function Navbar() {
    return <NavBarConainter>
        <Link href="/">
            Home
        </Link>
        <Link href="/rings">
            Rings
        </Link>
        <Link href="/Store">
            Store            
        </Link>
    </NavBarConainter>
}