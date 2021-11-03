import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Menu, Container } from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useHistory } from 'react-router'

export default function Navi() {

    const [isAuthenticated, setisAuthenticated] = useState(true)
    const history = useHistory()

    function handleSignedOut(params) {
        setisAuthenticated(false)
        history.push("/")
    }

    function handleSignIn(params) {
        setisAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed>
                <Container>
                    <Menu.Item name='home'/>
                    <Menu.Item name='messages'/>
                    <Menu.Menu position='right'>
                        <CartSummary />
                        {
                            isAuthenticated ? <SignedIn SignOut={handleSignedOut}/>
                             : <SignedOut SignIn={handleSignIn}/>
                        }
                        
                        
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
