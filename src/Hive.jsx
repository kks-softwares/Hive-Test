import React, { useState } from 'react'

const Hive = () => {

    const [buttonDisable, setButtonDisabled] = useState(false);
    // const [buttonText, setButtonText] = useState('');

    var num = 0
    const psuedoApiStub = () => {
        document.querySelector('button').innerHTML = "LOADING"
        setButtonDisabled(true);
        var random_boolean_value = Math.random() < 0.050;

        // setTimeout(() => {
        if (random_boolean_value) {
            document.querySelector('button').innerHTML = "FINISH"
            document.querySelector('p').innerHTML = ''
        }
        else {
            if (num <= window.maxRetries) {
                var x = Math.pow(window.initialTimer, num);
                num++;
                // console.log(num, "AAAA");
                document.querySelector('p').innerHTML = 'Auto Retrying in ' + x + ' seconds'
                setTimeout(() => {
                    psuedoApiStub();
                }, x * 1000);
                console.log(x, "AAAA");
            }
            else {
                document.querySelector('button').innerHTML = "RELOAD";
                document.querySelector('p').innerHTML = ''
                setButtonDisabled(false);
                num = 0;
            }
        }
        // }, 1000)
    }

    return (
        <div className='container mt-4' style={{ padding: '6vw', background: 'beige' }}>
            <button type="button" class="btn btn-info" disabled={buttonDisable}
                onClick={psuedoApiStub}>START
            </button>
            <p className='mt-4'></p>
        </div>
    )
}

export default Hive;