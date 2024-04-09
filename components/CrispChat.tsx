"use client";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("d8e9e638-3ce7-41e5-8db8-23f668c9fb09");
  }, []);

  return null;
};
