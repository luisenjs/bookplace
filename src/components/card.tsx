type Cardprops = {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

export function Card({ className, onClick, children }: Cardprops) {
    return (
        <div className={`${className}`} onClick={onClick}>
            {children}
        </div>
    )
}