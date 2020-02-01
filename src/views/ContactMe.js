import React from 'react'

const ContactMe = ({
    onMoveToStart,
    ...props
}) => {

    const [enable, setEnable] = React.useState(false)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.text.value)
    }

    const handleOnChangeText = (e) => {
        e.target.value && 
        e.target.value !== '' ?
            setEnable(true) : 
            setEnable(false)
    }

    return <div className="section contactme">

        <div style={{width : '100%', height : '100%'}}>
            <div style={{width : '100%', height : '20%', display : 'flex'}}>
                <h1 className="titleexperiences" style={{margin : 'auto'}}>
                    Contact Me
                </h1>
            </div>
            <div style={{width : '100%', height : '70%', display : 'flex'}}>
                <div style={{width : '60%', height : '100%', }}>
                    <div style={{
                        padding : 50, 
                        paddingTop : 25, 
                        paddingBottom : 25,
                        boxSizing :'border-box', 
                        height : '20%', 
                        width : '100%',
                    }}>
                        <div style={{
                            textAlign : 'start',
                            fontSize : 30,
                            fontWeight : 'bolder',
                            color : 'white',
                            width : '100%'
                        }}>
                            Do you have something to say?
                        </div>
                        <div style={{
                            textAlign : 'start',
                            fontSize : 20,
                            color : 'white'
                        }}>
                            Just type me
                        </div>
                    </div>
                    <form onSubmit={handleOnSubmit} style={{height : '80%', width : '100%'}}>
                        <div style={{
                            height : '70%', 
                            padding : 50, 
                            paddingTop : 25, 
                            paddingBottom : 25 
                        }}>
                            <textarea 
                                onChange={handleOnChangeText}
                                style={{ 
                                    height: '100%', 
                                    width: '100%', 
                                    padding: 0 
                                }}
                                name="text"
                            >
                            </textarea>
                        </div>
                        <div style={{padding : 50, paddingTop : 0}}>
                            <button disabled={!enable} type="submit">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
                <div style={{width : 2, height : '100%', background : 'white'}}>
                     
                </div>
                <div style={{width : '40%'}}>
                    <div style={{width : '100%', display : 'flex', padding : 30, boxSizing : 'border-box'}}>
                        <i style={{color : 'white'}} className="material-icons">place</i>
                        <div style={{textAlign : 'start', color : 'white', marginLeft : 10}}>
                            Osman Temiz Mah. 1026. Cadde No: 13/10 İlker Dikmen Çankaya/Ankara TURKEY
                        </div>
                    </div>
                    <div style={{width : '100%', display : 'flex', padding : 30, boxSizing : 'border-box'}}>
                        <i style={{color : 'white'}} className="material-icons">phone</i>
                        <div style={{textAlign : 'start', color : 'white', marginLeft : 10}}>
                            (+90) 545 550 3728
                        </div>
                    </div>
                    <div style={{width : '100%', display : 'flex', padding : 30, boxSizing : 'border-box'}}>
                        <i style={{color : 'white'}} className="material-icons">mail</i>
                        <a href="mailto:berksevgi95@gmail.com" style={{textAlign : 'start', color : 'white', marginLeft : 10}}>
                            berksevgi95@gmail.com
                        </a>
                    </div>
                    <div style={{width : '100%', display : 'flex', padding : 30, boxSizing : 'border-box'}}>
                        <img style={{width  : 25, filter : 'brightness(100)'}} src="github.png"/>
                        <a href="https://github.com/berksevgi95" style={{textAlign : 'start', color : 'white', marginLeft : 10}}>
                            /berksevgi95
                        </a>
                    </div>
                </div>
            </div>
            <div style={{width : '100%', height : '10%'}}>
                <div className="arrow" onClick={onMoveToStart}>
                    <span className="reverse"></span>
                    Click to go to top
                </div>
            </div>
        </div>





    </div>

}

export default ContactMe;