const poolData = {
    UserPoolId: 'eu-west-2_LMOC9KU7n',  // get in Cognito console
    ClientId: 'so7s6rs7nasbgsip9lk38l961'  // cognito console -> App clients
}

// create an instance of User Pool
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const form = document.querySelector('#sign-up-form'); // put the form into variable
form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent unnecessary navigate on submit
    // get the form data as a plain object
    const formData = Object.fromEntries(new FormData(form).entries());
    signUp(formData);
});

function signUp(formData) {
    // attributes that should be placed onto user object, only name in your case
    const attributes = [
        { Name: 'name', Value: formData.name }
    ]
    userPool.signUp(formData.email, formData.password, attributes, null, onSignUp);
}

function onSignUp(err, userData) {
    if (err) {
        alert (JSON.stringify(err)); // for example if user already exists
    } else {
        console.log(userData); // good, user was successfully created
    }
}