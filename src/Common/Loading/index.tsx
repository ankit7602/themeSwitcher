import "./index.scss"
interface SwitchProps {
    text: string
}
const Loading: React.FC<SwitchProps> = ({ text }: SwitchProps) => {
    return (
        <div className="loading_wrapper">
            <h2 className="loading_text">{text}</h2>
        </div>
    )
}
export default Loading;