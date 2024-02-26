import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: Platform.OS === 'ios' ? 'Calls' : '',
          headerLargeTitle: true,
          headerShadowVisible: false,
          headerBlurEffect: 'regular',
          headerTransparent: Platform.OS === 'ios' ? true : false,
          headerStyle: {
            ...(Platform.OS === 'android' && {
              backgroundColor: Colors.background,
            }),
          },
          headerSearchBarOptions: { placeholder: 'Search' },
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons name="call-outline" color={Colors.primary} size={30} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};
export default Layout;
