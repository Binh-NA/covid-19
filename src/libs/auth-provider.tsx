import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

export interface IAuthComponentProps {
  children: React.ReactNode;
}

export interface IAuthContext {
  loading: boolean;
}

export const AuthContext = React.createContext<IAuthContext>({
  loading: false,
});

export const useAuth = () => useContext(AuthContext);

export const WithAuthProvider = ({
  children,
}: IAuthComponentProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
