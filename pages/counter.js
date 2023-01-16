import { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import styles from '../styles/Counter.module.css'

export default function Counter() {
    const [number, setNumber] = useState(0);
    const searchParams = useSearchParams();
    const isUser = searchParams.get('username');
    const router = useRouter();

    useEffect(() => {
        !isUser ? router.push('/') : <></>
    }, [isUser])

    return (
        <>
            <div class="container">
                <div> COUNTER PAGE </div>
                <div> Welcome {isUser} </div>

                <div>{number}</div>
                <div class="buttons">
                    <button class="Increment" onClick={() => setNumber(number + 1)}>Increment</button>
                    <button class="Decrement" onClick={() => setNumber(number - 1)}>Decrement</button>
                </div>
            </div>
        </>
    )
}