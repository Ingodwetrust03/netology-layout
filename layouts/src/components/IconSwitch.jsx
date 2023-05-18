export default function IconSwitch ({icon, onSwitch}) {

    return (
        <div className="icon">
            <span className="material-icons" icon={icon} onClick={onSwitch}>{icon}</span>
        </div>
    )

}