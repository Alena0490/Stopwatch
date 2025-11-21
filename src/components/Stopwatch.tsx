import "./Stopwatch.css"
import Timer from "./Timer"
import ControllButtons from "./ControllButtons"
import { useEffect, useState } from "react"

type StopwatchStatus = 'idle' | 'running' | 'paused';

const Stopwatch = () => { 
     const [time, setTime] = useState<number>(0); 
     const [status, setStatus] = useState<StopwatchStatus>('idle');

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        if (status === 'running') {
                interval = setInterval(() => {
                    setTime((prevTime) => prevTime + 10);
                }, 10);
            } 
        //Cleanup
        return () => {
            if (interval ) {
                clearInterval(interval)
            }
        }
    }, [status]);

    const handleStart = () => {
        setStatus('running')
    }

    const handlePause = () => {
        setStatus('paused')
    }

    const handleResume = () => {
        setStatus('running')
    }

    const handleReset = () => {
        setStatus('idle')
        setTime(0)
    }

    
    return (
        <div 
            className="stop-watch" 
            data-status={status}
        >
            <Timer time={time}/>
            <ControllButtons
                onStart={handleStart}
                onPause={handlePause}
                onResume={handleResume}
                onReset={handleReset}
                status={status}
            />
        </div>
    )
}

export default Stopwatch