import React, {useEffect, useState} from 'react'
export const GoogleAuth = ()=>{
 const [value, setValue] = useState({isSignedIn: null })
    useEffect(()=>{
        window.gapi.load('client: auth2',()=>{
          window.gapi.client.init({
              clientId:'427459684852-49tqdviurqlh0a2n3org84toj10dfg1j.apps.googleusercontent.com',
              scope: 'email'
          }).then(()=>{
              const auth = window.gapi.auth2.getAuthInstance()
            setValue({isSignedIn: auth.isSignedIn.get()})
              auth.isSignedIn.listen(onChangeAuth)
          })
        })
    },[value])
    const onChangeAuth = ()=>{
        const auth = window.gapi.auth2.getAuthInstance()
     setValue({isSignedIn: auth.isSignedIn.get()})
    }
    const signin=()=>{
        const auth = window.gapi.auth2.getAuthInstance()
         auth.signIn()
    }
    const signout=()=>{
        const auth = window.gapi.auth2.getAuthInstance()
        auth.signout()
    }
    const signIn = ()=>{
     if (value.isSignedIn == null){
         return <button onClick={signin}>Sign In with google</button>

     }else  if(value.isSignedIn){
         return <button onClick={signout}>Sign OUt</button>
     }
     else {
         return <button onClick={signin}>Sign In with google</button>
     }
    }
    // console.log(signIn())

    return(
        <>
            {signIn()}
            Google Auth
        </>
    )
}