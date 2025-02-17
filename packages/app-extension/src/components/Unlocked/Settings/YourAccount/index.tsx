import { useEffect } from "react";
import { useDrawerContext } from "../../../common/Layout/Drawer";
import { useNavStack } from "../../../common/Layout/NavStack";
import { SettingsList } from "../../../common/Settings/List";

export function YourAccount() {
  const { close } = useDrawerContext();
  const nav = useNavStack();

  const menuItems = {
    "Change Password": {
      onClick: () => nav.push("change-password"),
    },
    "Edit Wallets": {
      onClick: () => nav.push("edit-wallets"),
    },
    "Show Secret Recovery Phrase": {
      onClick: () => nav.push("show-secret-phrase-warning"),
    },
    "Reset Wallet": {
      onClick: () => nav.push("reset-warning", { onClose: () => close() }),
    },
  };

  useEffect(() => {
    nav.setTitle("Your Account");
  }, []);

  return <SettingsList menuItems={menuItems} />;
}
