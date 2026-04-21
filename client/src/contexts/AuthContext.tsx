import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (studentName: string) => void;
  logout: () => void;
  studentName: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentName, setStudentName] = useState<string | null>(null);

  // Load auth state from localStorage on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem("auth");
    if (savedAuth) {
      const { isLoggedIn: logged, studentName: name } = JSON.parse(savedAuth);
      setIsLoggedIn(logged);
      setStudentName(name);
    }
  }, []);

  const login = (name: string) => {
    setIsLoggedIn(true);
    setStudentName(name);
    localStorage.setItem("auth", JSON.stringify({ isLoggedIn: true, studentName: name }));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setStudentName(null);
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, studentName }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
