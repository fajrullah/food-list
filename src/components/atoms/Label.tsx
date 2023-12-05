
interface LabelProps {
    readonly label: string
}

function Label({ label }: LabelProps) {
    const labelStyle: React.CSSProperties = {
        textTransform: 'capitalize',
    };
    return <p style={labelStyle}>{label}</p>
}

export default Label;