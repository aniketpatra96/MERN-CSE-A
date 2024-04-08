import { useRef, useState } from 'react'

const FormDemo = () => {
    const numOneRef = useRef(null)
    const numTwoRef = useRef(null)
    const [sum, setSum] = useState(0)

    function handleSubmit(e){
        e.preventDefault()
        // console.log(numOneRef.current.value);
        let a = Number(numOneRef.current.value)
        let b = Number(numTwoRef.current.value)
        // alert("Sum="+(a+b))
        setSum(a+b)
    }

    return (
        <div className="row my-3">
            <div className="col-md-4 mx-auto">
                <h1 className="text-center">Add Calculator</h1>
                <form action="" method="post" onSubmit={handleSubmit}>
                    <input
                        ref={numOneRef}
                        type="text"
                        className="form-control my-1"
                        placeholder="First Number"
                    />
                    <input
                        ref={numTwoRef}
                        type="text"
                        className="form-control my-1"
                        placeholder="Second Number"
                    />
                    <input
                        type="submit"
                        value="ADD"
                        className="btn btn-primary my-2"
                    />
                </form>
                {sum!==0 && <p className='my-2'>Sum = {sum}</p>}
            </div>
        </div>
    )
}

export default FormDemo
