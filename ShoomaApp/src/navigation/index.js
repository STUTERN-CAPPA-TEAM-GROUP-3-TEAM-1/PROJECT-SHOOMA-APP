import { useAuthentication } from "../hook/useAuthentication";
import AppStack from "../navigation/AppStack";
import AuthStack from "../navigation/AuthStack";
import { useEffect, useState } from "react";

export default function RootNavigation() {
  const { user } = useAuthentication();

  return user ? <AppStack /> : <AuthStack />;
}
