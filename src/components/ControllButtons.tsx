import "./ControllButtons.css"

interface ControlButtonsProps {
  onStart: () => void;      // ← gets function
  onPause: () => void;      // ← gets function
  onResume: () => void; // ← gets function
  onReset: () => void;      // ← gets function
  status: 'idle' | 'running' | 'paused';       // ← gets, true/false or created choices
}

const ControllButtons = (props: ControlButtonsProps) => {
    if (props.status === 'idle') {
        return (
            <div className="stop-watch-controls">
                <button onClick={props.onStart} className="btn-main">Start</button>
            </div>
        );
    } else if (props.status === 'running' ) {
        return (
            <div className="stop-watch-controls">
                <button onClick={props.onPause} className="btn-main">Pause</button>
                <button onClick={props.onReset} className="btn-secondary"><span className="btn-text">Reset</span></button>
            </div>
        )

    } else {
        return (
            <div className="stop-watch-controls">
                <button onClick={props.onResume} className="btn-main">Resume</button>
                <button onClick={props.onReset} className="btn-secondary"><span className="btn-text">Reset</span></button>
            </div>
        )
    }
}

export default ControllButtons