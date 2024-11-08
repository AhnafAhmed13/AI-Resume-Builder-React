import { useState, useEffect } from 'react'

export default function ResumeResult(props) {

    const [resume, setResume] = useState(null)

    return (
        <>
            <div>
                Resume: {props.resume}
            </div>
        </>
    )
}