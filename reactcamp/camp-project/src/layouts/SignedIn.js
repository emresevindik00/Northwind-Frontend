import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

export default function SignedIn({SignOut}) {
    return (
        <div>
            <Menu>
                <Menu.Item>
                    <Dropdown pointing="top right" text="Emre">
                        <Dropdown.Menu>
                            <Dropdown.Item text="Bilgilerim" icon="info"/>
                            <Dropdown.Item onClick={SignOut} text="Çıkış Yap" icon="sign-out"/>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Menu>
        </div>
    )
}
