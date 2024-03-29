import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

// icons 
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Browse',
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="movies"
        options={{
          title: 'Movies',
          tabBarIcon: ({ color }) => 
            <MaterialIcons name="video-library" size={24} color={color} />,
          headerShown: false
        }}
      />

      <Tabs.Screen
        name="tv"
        options={{
          title: 'TV',
          tabBarIcon: ({ color }) => 
          <Entypo name="tv" size={24} color={color} />,
          headerShown: false
        }}
      />

      <Tabs.Screen
        name="my-list"
        options={{
          title: 'My List',
          tabBarIcon: ({ color }) => 
            <Entypo name="list" size={24} color={color} />,
          headerShown: false
        }}
      />
    </Tabs>
  );
}
