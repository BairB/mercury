import React from 'react';
import { ScrollView, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
class MessageScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        }
    }
    componentDidMount = () => {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ],
        })
    }
    onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
      }
    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        )
    }
}
export default MessageScreen;