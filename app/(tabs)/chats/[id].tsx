import { View, Text } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';

import messageData from '@/assets/data/messages.json';

const Page = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      ...messageData.map((message) => {
        return {
          _id: message.id,
          text: message.msg,
          createdAt: new Date(message.date),
          user: {
            _id: message.from,
            name: message.from ? 'You' : 'Bob',
          },
        };
      }),
      {
        _id: 0,
        system: true,
        text: 'All your base are belong to us',
        createdAt: new Date(),
        user: {
          _id: 0,
          name: 'Bot',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messagess: any) => onSend(messagess)}
      user={{
        _id: 1,
      }}
    />
  );
};
export default Page;
