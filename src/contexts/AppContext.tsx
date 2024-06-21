import { PropsWithChildren, createContext, useContext, useState } from "react";

// Define your context props
export interface AppContextProps {
  track: number;
  prev: () => void;
  next: () => void;
  musicTime: number;
}

// Create a new empty (undefined) context (you don't need to export it if using only the custom hook)
export const AppContext = createContext<AppContextProps | undefined>(undefined);

// Create a custom context provider, so all context data will be self-contained
export default function AppContextProvider({ children }: PropsWithChildren) {
  const [track, setTrack] = useState(1);

  const appContext: AppContextProps = {
    track,
    prev: () => {
      if (track > 1) setTrack(track - 1);
    },
    next: () => {
      setTrack(track + 1);
    },
    musicTime: 1.55,
  };

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
}

// Create a custom consumer hook (check Timeline.tsx for usage)
export function useAppContext() {
  const context = useContext<AppContextProps>(AppContext);

  if (context === undefined) {
    throw new Error("useTrack must be used inside AppContextProvider!");
  }

  return context;
}
