"use client"
import React, { createContext, useState, ReactNode, FC, useContext } from 'react';

// Define the context types
interface ModalContextType {
  heading:string;
  setHeading: (heading: string) => void;
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  setContent: (content: ReactNode) => void;
  content: ReactNode;
}

// Create the context with default values
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Provider component
export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<ReactNode>(null);
  const [heading, setHeading] = useState<string>("")

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, setContent,setHeading, content, heading }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to use the modal context
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
