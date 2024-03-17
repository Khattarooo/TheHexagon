import React, {createContext, useContext, useState, ReactNode} from 'react';

interface UserContextType {
  username: string;
  email: string;
  phoneNumber: string;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

const DEFAULT_USERNAME = '';
const DEFAULT_EMAIL = '';
const DEFAULT_PHONE_NUMBER = '';

const UserContext = createContext<UserContextType>({
  username: DEFAULT_USERNAME,
  email: DEFAULT_EMAIL,
  phoneNumber: DEFAULT_PHONE_NUMBER,
  setUsername: () => {},
  setEmail: () => {},
  setPhoneNumber: () => {},
});

export const useUserContext = () => useContext(UserContext);

export const UserProvider: React.FC<UserProviderProps> = ({children}) => {
  const [username, setUsername] = useState<string>(DEFAULT_USERNAME);
  const [email, setEmail] = useState<string>(DEFAULT_EMAIL);
  const [phoneNumber, setPhoneNumber] = useState<string>(DEFAULT_PHONE_NUMBER);

  const value = {
    username,
    setUsername,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
