import React, { useState } from "react";

const ScoreContext = React.createContext({
    score: 0,
    setScore: () => {},
})

export const ScoreProvider = ScoreContext.Provider
export default ScoreContext