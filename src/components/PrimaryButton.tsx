import type { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type PrimaryButtonProps = {
  label: string;
  icon?: ReactNode;
  onPress?: () => void;
  className?: string;
};

export function PrimaryButton({ label, icon, onPress, className }: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      className={`flex-row items-center justify-center rounded-full bg-lingua-deep-purple px-6 py-4 ${className ?? ""}`}
    >
      {icon ? <View className="w-6" /> : null}
      <Text className="flex-1 text-center text-body-lg font-poppins-semibold text-background">
        {label}
      </Text>
      {icon ? <View className="w-6 items-end">{icon}</View> : null}
    </TouchableOpacity>
  );
}
