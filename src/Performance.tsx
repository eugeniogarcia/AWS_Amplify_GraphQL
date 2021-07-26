import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPerformance } from './graphql/queries'
import { API } from 'aws-amplify'

export type rendimiento={
    id:string,
    performer:string,
    time:string,
    description:string
}|null

function Performance() {
    const [performance, setPerformance] = useState(null as rendimiento)

    const [loading, setLoading] = useState(true)

    //El id es un parámetro de la navegación react-router-dom
    let { id }:{id:string} = useParams()

    async function fetchPerformanceInfo() {
        try {
            const talkInfo = await API.graphql({
                query: getPerformance,
                variables: { id },
                //@ts-ignore
                authMode: 'API_KEY'
            })
            //@ts-ignore
            setPerformance(talkInfo.data.getPerformance)
            setLoading(false)
        } catch (err) {
            console.log('error fetching talk info...', err)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPerformanceInfo()
    }, [fetchPerformanceInfo])

    return (
        <div>
            <p>Performance</p>
            {loading && <h3>Loading...</h3>}
            {
                performance && (
                    <div>
                        <h1>{performance.performer}</h1>
                        <h3>{performance.time}</h3>
                        <p>{performance.description}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Performance