import "@/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";

import { styled } from 'nativewind';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-7xl font-bold text-success">
        Home
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4">Go To Onboarding Screen</Link>
    </SafeAreaView> 
  );
}