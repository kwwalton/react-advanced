import React, { Fragment, useState } from 'react';
import useDocumentTitle from './useDocumentTitle'

function Counter(props) {
    // Can not call useState hook in loops, conditionals or nested functions
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // custom hook
    useDocumentTitle(name)

    // useEffect(() => {
    //     // gets called each time component renders, unless you pass second argument
    //     // which is an array of state variables you want to cause re-render
    //     document.title = `${name} has clicked ${count} times!`

    //     return () => {
    //         console.log('useEffect ran')
    //     }
    // })

    return (
        <Fragment>
            <input type="text" onChange={(e) => setName(e.target.value)} />
        <div>
            {name} has clicked {count} times!
        </div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        </Fragment>
    );
}

export default Counter;