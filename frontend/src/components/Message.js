import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'semantic-ui-react'
import _ from 'lodash'

import './Message.css'

const Message = (props) => {
    let messageCollection = _.map(props.messages, (element, index) => {
        return (
            <List.Item key={index}>
                <List.Content>
                    <List.Header>{element.username}</List.Header>
                    <List.Description>
                        {element.content}
                        <span className='timestamp'>{element.timestamp}</span>
                    </List.Description>
                </List.Content>
            </List.Item>
        )
    })

    return (
        <List relaxed>
            {messageCollection}
        </List>
    )
}

Message.propTypes = {
    messages: PropTypes.array.isRequired
}


export default Message
