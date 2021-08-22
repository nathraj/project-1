const register=()=>{
	const email = document.getElementById('email').value 
	const pass = document.getElementById('password').value
    const city = document.getElementById('city').value
    const country = document.getElementById('country').value
    
firebase.auth().createUserWithEmailAndPassword(email,pass) 
.then((user)=>{
	console.log("Data Added!")
    const data = {
		email:email,
		password:pass,
        city:city,
        country:country
	}
firebase.database().ref("/admin").push(data)
	
})
.catch((error)=>{
console.log("ERROR!")
})
}
