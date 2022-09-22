// import React, { createContext, useState } from "react";
// interface SharedState {
//   currentToken: string;
//   setCurrentToken: React.Dispatch<React.SetStateAction<string>>;
//   currentUser: string;
//   setCurrentUser: React.Dispatch<React.SetStateAction<string>>;
// }

// export const UserWrapper = ({ children }) => {
//   const [currentToken, setCurrentToken] = useState<string>("");
//   const [currentUser, setCurrentUser] = useState<string>("");

//   const UserContext: React.Context<string> = createContext<string>("");
//   const sharedState: SharedState = {
//     currentToken,
//     setCurrentToken,
//     currentUser,
//     setCurrentUser,
//   };

//   return <UserContext.Provider value={{sharedState}}></UserContext>

// };

// // export function useUserContext() {
// //   return useContext(UserContext);
// // }
