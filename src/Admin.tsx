import React from 'react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'
import { Button } from 'antd'

function Admin() {
    return (
        <div>
            <h1 style={titleStyle}>Admin</h1>
            <AmplifySignOut />
        </div>
    )
}

const titleStyle = {
    fontweight: 'normal',
    margin: '0px 0px 10px 0px'
}

export default withAuthenticator(Admin)