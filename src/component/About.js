import React from 'react'

const About = (props) => {
    const Hindi = ()=>{
        document.getElementById('Hindi').innerHTML = 'यह हमारी Meme वेबसाइट है। आप यहां से Meme को कॉपी कर सकते हैं और जहां चाहें वहां पेस्ट कर सकते हैं।';
    }
    return (
        <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <br /><br /><br /><br />
            <h2>
                Hello User <br />
                <br />
            </h2>
            <h2 id='Hindi'>
                This Is Our Meme Website.
                You Can Copy The Meme From
                Here And Paste It Wherever You Want.
            </h2>
                <br /><br />
                <br /><br />
                <button className='HindiBtn' onClick={Hindi}>Translate In Hindi</button>
                <br /><br /><br />
                <h2>~ BY VAIBHAV</h2>
        </div>
    )
}
export default About