

export default function Flip({ children, duration }: { children: React.ReactNode, duration: number }) {
    return (

        <div
            className="animate-flip"
            style={{transitionDuration: `${duration}ms`}}
        >
            {children}
        </div>

    )
}