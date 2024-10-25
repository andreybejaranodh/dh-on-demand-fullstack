

import { Container } from '@mui/material'

import Header from "./Header"
import Footer from "./Footer"


function Layout(props: any) {
    return (
        <div>
            <Header />
            <Container component="main">
                {props.children}
            </Container>
            <Footer />
        </div>
    )
}

export default Layout