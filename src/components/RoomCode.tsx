import copyImg from "../assets/images/copy.svg";
import "../styles/room-code.scss";

type RoomCodeProps = {
    code: string;
}

export  function RoomCode(props: RoomCodeProps) {

    function copyRunCodeToClipBoard() {
        navigator.clipboard.writeText(props.code);
    }

    return (
        <button className="room-code" onClick={copyRunCodeToClipBoard}>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala 129819ejd1jdppkas</span>
        </button>
    )
} 