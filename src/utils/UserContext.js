import React from "react";
import { createContext } from 'react'

const UserContext = createContext({
    LoggedInUser : "Default User"
})

export default UserContext
