import { createContext, useContext, useState, ReactNode } from "react";

interface UserContextType {
  userData: {
    name: string;
    email: string;
    phone: string;
    bio: string;
    avatarUrl: string;
  };
  updateUserData: (data: Partial<UserContextType["userData"]>) => void;
}

const defaultUserData = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+1 (555) 000-0000",
  bio: "EV enthusiast and environmental advocate.",
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState(defaultUserData);

  const updateUserData = (newData: Partial<UserContextType["userData"]>) => {
    setUserData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUser };
