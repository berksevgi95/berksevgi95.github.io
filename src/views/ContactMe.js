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

        <div className="w-full h-full flex flex-col justify-between" >
            <div className="flex h-24 md:h-56">
                <h1 className="text-4xl md:text-6xl text-white m-auto">
                    <b>Contact Me</b>
                </h1>
            </div>
            <div className="w-full flex flex-col md:flex-row">
                <div className="h-full w-full md:w-3/5">
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
                <div className="line hidden md:block"></div>
                <div className="w-full md:w-2/5" >
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
                        <img alt="github" src="github.png"/>
                        <a href="https://github.com/berksevgi95">
                            /berksevgi95
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full h-24 flex" onClick={onMoveToStart}>
                <div className="m-auto flex flex-col justify-center text-white">
                    <div className="reverse-arrow"></div>
                    Click to go to top
                </div>
            </div>
        </div>

    </div>

}

export default ContactMe;