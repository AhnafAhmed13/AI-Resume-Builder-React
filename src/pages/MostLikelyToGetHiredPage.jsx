import '../index.css';

export default function MostLikelyToGetHired() {

    return (
        <>
            <div className='min-h-screen text-xl font-bold flex flex-col items-center justify-center'>
                <h1 >You are most likely to get hired in these companies:</h1>
                <ul className='text-lg'>
                    <li>Meta</li>
                    <li>Amazon</li>
                    <li>Apple</li>
                    <li>Microsoft</li>
                    <li>Netflix</li>
                </ul>
            </div>
        </>
    )

}