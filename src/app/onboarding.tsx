import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { PrimaryButton } from "@/components/PrimaryButton";
import { images } from "@/constants/images";

type SpeechBubbleProps = {
  text: string;
  bgClassName: string;
  textClassName: string;
  positionClassName: string;
};

function SpeechBubble({ text, bgClassName, textClassName, positionClassName }: SpeechBubbleProps) {
  return (
    <View className={`absolute ${positionClassName}`}>
      <View className={`rounded-2xl px-4 py-2 ${bgClassName}`}>
        <Text className={`text-body-md font-poppins-medium ${textClassName}`}>{text}</Text>
      </View>
      <View className={`absolute -bottom-1 left-5 h-3 w-3 rotate-45 rounded-sm ${bgClassName}`} />
    </View>
  );
}

export default function Onboarding() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 px-6">
        <View className="flex-row items-center justify-center gap-2 pt-2">
          <Image source={images.mascotLogo} className="h-9 w-9" resizeMode="contain" />
          <Text className="text-h2 font-poppins-bold text-ink">lingua</Text>
        </View>

        <View className="mt-10 gap-3">
          <Text className="h1 text-ink">
            Your AI language{"\n"}
            <Text className="text-lingua-purple">teacher.</Text>
          </Text>
          <Text className="text-body-lg text-ink-muted">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>
        </View>

        <View className="flex-1 items-center justify-center">
          <View className="relative h-72 w-72 items-center justify-center">
            <Image source={images.mascotWelcome} className="h-64 w-64" resizeMode="contain" />

            <SpeechBubble
              text="Hello!"
              bgClassName="bg-[#EAF2FE]"
              textClassName="text-ink"
              positionClassName="left-0 top-4 -rotate-6"
            />
            <SpeechBubble
              text="¡Hola!"
              bgClassName="bg-[#F1ECFE]"
              textClassName="text-lingua-purple"
              positionClassName="right-2 top-0 rotate-3"
            />
            <SpeechBubble
              text="你好!"
              bgClassName="bg-[#FCE7E2]"
              textClassName="text-error"
              positionClassName="right-0 top-24 -rotate-3"
            />
          </View>
        </View>

        <PrimaryButton
          label="Get Started"
          icon={<Text className="text-lg font-poppins-semibold text-background">›</Text>}
          className="mb-4"
        />
      </View>
    </SafeAreaView>
  );
}
