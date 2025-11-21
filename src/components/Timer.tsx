import "./Timer.css"

interface TimerProps {
  time: number;  // Čekám číslo
}

const Timer = (props: TimerProps) => {

    const minutes = Math.floor((props.time/60000) % 60)
    const seconds = Math.floor((props.time/ 1000) % 60)
    const centiseconds = Math.floor((props.time / 10) % 100)

    const padZero = (num: number):string => {
        return num.toString().padStart(2, "0")
    }

    

    return (
        <div className="timer">
            <span className="digits">{padZero(minutes)}:</span>
            <span className="digits">{padZero(seconds)}.</span>
            <span className="digits centiseconds">{padZero(centiseconds)}</span>
        </div>
    )
}

export default Timer