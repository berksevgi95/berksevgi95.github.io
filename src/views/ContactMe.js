import React from 'react'

const ContactMe = ({
    onMoveToStart,
    ...props
}) => {

    const [enable, setEnable] = React.useState(false)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target.text.value)
    }

    const handleOnChangeText = (e) => {
        e.target.value && 
        e.target.value !== '' ?
            setEnable(true) : 
            setEnable(false)
    }

    return <div className="section contactme">

        <div className="w-full h-full" >
            <div className="flex" style={{ height : '20%' }}>
                <h1 className="h1 white m-auto">
                    Contact Me
                </h1>
            </div>
            <div className="w-full flex" style={{height : '70%'}}>
                <div className="h-full" style={{width : '60%'}}>
                    <div className="title-container">
                        <div className="title">
                            Do you have something to say?
                        </div>
                        <div className="subtitle">
                            Just type me
                        </div>
                    </div>
                    <form onSubmit={handleOnSubmit}>
                        <textarea onChange={handleOnChangeText} name="text"></textarea>
                        <button disabled={!enable} type="submit">
                            Send
                        </button>
                    </form>
                </div>
                <div className="line"></div>
                <div style={{width : '40%'}}>
                    <div className="info" >
                        <i className="material-icons">place</i>
                        <div>
                            Osman Temiz Mah. 1026. Cadde No: 13/10 İlker Dikmen Çankaya/Ankara TURKEY
                        </div>
                    </div>
                    <div className="info" >
                        <i className="material-icons">phone</i>
                        <div>
                            (+90) 545 550 3728
                        </div>
                    </div>
                    <div className="info" >
                        <i className="material-icons">mail</i>
                        <a href="mailto:berksevgi95@gmail.com">
                            berksevgi95@gmail.com
                        </a>
                    </div>
                    <div className="info" >
                        <img src="github.png"/>
                        <a href="https://github.com/berksevgi95">
                            /berksevgi95
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full" style={{height : '10%'}}>
                <div className="arrow" onClick={onMoveToStart}>
                    <span className="reverse"></span>
                    Click to go to top
                </div>
            </div>
        </div>

    </div>

}

export default ContactMe;