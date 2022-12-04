import React, { useState } from "react";

const ScoreContext = React.createContext({
    score: 0,
    setScore: () => {},
})

export const ScoreProvider = ScoreContext.ScoreProvider
export default ScoreContext