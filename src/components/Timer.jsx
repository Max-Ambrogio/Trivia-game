import React from "react";

export function Timer (){

    const TIMER_LENGTH = 5


    const timerRef = useRef(null)
    const [timeLeft, setTimeLeft] = useState(TIMER_LENGTH);
    const [timerActive, setTimerActive] = useState(false);

    const stopTimer = () => {
        if(timerRef.current) { clearInterval(timerRef.current) }
        setTimerActive(false);
    }

    const updatetimer = () => {
        console.log("start Time", timeLeft, timerActive)

        setTimeLeft((prevTimeleft) => {
            const newTimeLeft =  prevTimeleft - 1;
            if(newTimeLeft < 0 ) {
                stopTimer()
                setError('Time is up')
                return;
            }
            return newTimeLeft;
        })


    }

    const startTimer = () => {
        setTimerActive(true);
        if(timerRef.current) { clearInterval(timerRef.current) }
        const timer = setInterval(updatetimer, 1000)
        timerRef.current = timer
    }

    const resetTimer = () => {
        stopTimer()
        setTimeLeft(TIMER_LENGTH)
    }

    return(
        <>
            <p>
                Time Left: {timeLeft}
            </p>
            <button onClick={startTimer}>Start</button>
            <button onClick={timerActive ? stopTimer : startTimer}>
                {timerActive ? 'Pause' : 'Resume' }
            </button>
            <button onClick={resetTimer}>Reset</button>
            <hr />
        </>
    )
}