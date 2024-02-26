import { View, Text, ScrollView, FlatList } from 'react-native';
import chats from '@/assets/data/chats.json';
import { defaultStyles } from '@/constants/Styles';
import ChatRow from '@/components/ChatRow';
const Page = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{ paddingBottom: 14, backgroundColor: '#fff' }}
    >
      <FlatList
        scrollEnabled={false}
        ItemSeparatorComponent={() => (
          <View style={[defaultStyles.separator, { marginLeft: 90 }]} />
        )}
        keyExtractor={(item) => item.id.toString()}
        data={chats}
        renderItem={({ item }) => <ChatRow {...item} />}
      />
    </ScrollView>
  );
};
export default Page;
