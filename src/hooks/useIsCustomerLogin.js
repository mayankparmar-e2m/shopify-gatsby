import { useCallback, useEffect, useState } from "react";
import { getCookies, setCookies } from "../utils/helper";
import { navigate } from "gatsby";

export default function useIsCustomerLogin() {
  const [isCustomerLogin, setIsCustomerLogin] = useState(false);
  const customerAccessToken = getCookies("shopify_cat");
  useEffect(() => {
    if (customerAccessToken) {
      setIsCustomerLogin(true);
    }
  }, []);
  const logOut = useCallback(() => {
    setCookies("shopify_cat", "", 0);
    setIsCustomerLogin(false);
    navigate("/account/login")
  },[])

  return { isCustomerLogin, logOut };
}
