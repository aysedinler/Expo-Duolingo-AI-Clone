import { Link } from "expo-router";
import { Text, View } from "react-native";

import { PrimaryButton } from "@/components/PrimaryButton";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-2 bg-background px-6">
      <Text className="h1 text-lingua-purple">lingua</Text>
      <Text className="body-md text-ink">Design system loaded successfully.</Text>
      <Text className="caption text-ink-muted">Poppins · brand colors · type scale</Text>

      <Link href="/onboarding" asChild>
        <PrimaryButton label="View Onboarding" className="mt-6" />
      </Link>
    </View>
  );
}
