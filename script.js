
const getInputFieldValue=(id)=>{
    return document.getElementById(id).value
}
const handleLogin=()=>{
    event.preventDefault()

    let fullName = getInputFieldValue("fullName")
    let email = getInputFieldValue("email")
    let password = getInputFieldValue("password")

    if(fullName.length < 3){
        return alert("plz enter your full Name")
    }
    if(email.length < 3){
        return alert("plz enter your email")
    }
    if(password.length < 6){
        return alert("plz enter your corret password")
    }
    document.getElementById("loginCard").style.display="none"
    document.getElementById("loginButton").style.display="none"
    document.getElementById("homePage").style.display="block"
    document.getElementById("logoutButton").style.display="block"
    document.getElementById("fullNamePreview").innerHTML=fullName
}
const handleLogout=()=>{
    document.getElementById("loginCard").style.display="block"
    document.getElementById("loginButton").style.display="block"
    document.getElementById("homePage").style.display="none"
    document.getElementById("logoutButton").style.display="none"
 }
window.onload=()=>{
    let year=new Date().getFullYear()
    document.getElementById("year").innerText=year
}