"use client";
import React, { createContext, useContext } from 'react';
import type { Locale } from './config';
import { DEFAULT_LOCALE } from './config';
import { dictionaries, type Dictionary } from './dictionaries';

type LocaleContextValue = { locale: Locale; dict: Dictionary };

const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  dict: dictionaries[DEFAULT_LOCALE],
});

export const LocaleProvider = ({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) => (
  <LocaleContext.Provider value={{ locale, dict: dictionaries[locale] }}>
    {children}
  </LocaleContext.Provider>
);

export const useLocale = () => useContext(LocaleContext);
export const useDict = () => useContext(LocaleContext).dict;
