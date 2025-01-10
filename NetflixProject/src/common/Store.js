import {create} from 'zustand'
import { persist } from 'zustand/middleware'

export const themeStore = create(
    persist(
        set => (
            {
                theme: "light",
                token: "",
      
                toggle: () => set((prevState) => ({...prevState, theme: prevState.theme === "light" ? "dark" : "light"})),
                addAccessToken: (token) => set((prevState) => ({...prevState, token: token})),
               
            }
        )
    )
)