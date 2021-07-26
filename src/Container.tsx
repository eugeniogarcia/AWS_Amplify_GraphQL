import React,{ReactElement} from 'react'

export default function Container({ children }: { children:(ReactElement[]|ReactElement)}) {
    return (
        <div style={container}>
            {children}
        </div>
    )
}

const container = {
    padding: '30px 40px',
    minHeight: 'calc(100vh - 120px)'
}