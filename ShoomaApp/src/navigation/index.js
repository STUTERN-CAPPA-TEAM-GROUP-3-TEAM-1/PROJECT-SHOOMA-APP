import { useAuthentication } from "../hook/useAuthentication";
import AppStack from "../navigation/AppStack";
import AuthStack from "../navigation/AuthStack";

export default function RootNavigation() {
  const { user } = useAuthentication();

  return user ? <AppStack /> : <AuthStack />;
}
