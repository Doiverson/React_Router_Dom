import React from 'react'

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '185791743481-u5k65tugaghmr0cnhsgtte8ktf9tp3vs.apps.googleusercontent.com',
                scope: 'email'
            })
        })
    }

    render() {
        return (
            <div>
                Google Auth
            </div>
        );
    }
}

export default GoogleAuth
