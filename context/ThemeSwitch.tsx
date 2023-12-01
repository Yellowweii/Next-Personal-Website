"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

const ThemeSwitch = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="light" attribute="class" disableTransitionOnChange={true}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeSwitch;
