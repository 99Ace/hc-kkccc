// alert ('link')
async function submitForm() {
    let baseURL = "https://api-99ace.herokuapp.com/sendEmail"
    let parentName = document.getElementById("parent-name").value
    let mobile = document.getElementById("mobile").value
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value
    let visit = document.getElementById("visit").checked
    // alert('Click')
    console.log(mobile)
    console.log(visit)
    if (visit) {
        visit = "Yes! I would like to request for a visit!"
    }
    else {
        visit = "--"
    }
    console.log(visit)
    let newEnquiry = {
        parentName,
        email,
        mobile,
        message,
        visit
    }
    // send form to email
    let response = await axios.post(baseURL,newEnquiry)

    setTimeout(function(){
        document.getElementById("form-submit").innerHTML=`
            <div class="text-center p-5">
                <h1 class="text-knk-dark">We have heard you!</h1>
                <h1 class="text-knk-dark">We will be in touch with you very soon!</h1>
            </div>
            `
    }, 1000); 
    
    
    console.log('done')
}
