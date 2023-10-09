"use client";

import { useEffect, useState, createContext, ReactNode } from "react";
import { PulseLoader } from "react-spinners";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/router"; // Change this import

export const GlobalContext = createContext<{ sideBarOpen: boolean; setSideBarOpen: (open: boolean) => void } | null>(null);

interface GlobalStateProps {
  children: ReactNode;
}

export default function GlobalState({ children }: GlobalStateProps) {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [loader, setLoader] = useState(true);
  // const { status } = useSession();
  // const router = useRouter(); // Change this line

  // useEffect(() => {
  //   if (status === "loading") setLoader(true);
  //   if (
  //     status === "unauthenticated" &&
  //     (router.pathname.includes("/") || router.pathname.includes("/products") || router.pathname.includes("/visitors")) // Change this line
  //   ) {
  //     router.push("/unauth-page");
  //     setLoader(false);
  //   }

  //   if (status === "authenticated") setLoader(false);
  // }, [status, router]); // Change this line

  // if (loader) {
  //   return (
  //     <div className="w-full min-h-screen flex justify-center items-center">
  //       <PulseLoader
  //         color="#000000"
  //         loading={loader}
  //         size={35}
  //         data-textid="Loader"
  //       />
  //     </div>
  //   );
  // }

  return (
    // <GlobalContext.Provider value={{ sideBarOpen, setSideBarOpen }}>
    <GlobalContext.Provider value={{}}>
      {children}
    </GlobalContext.Provider>
  );
}
