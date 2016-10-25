// JavaScript authentication file
$(function() {

    // Initialize Firebase
      var config = {
        apiKey: "AIzaSyBkOERDxof4n4RN0iyzetTzHq1pju_a-NM",
        authDomain: "fir-2-d6e32.firebaseapp.com",
        databaseURL: "https://fir-2-d6e32.firebaseio.com",
        storageBucket: "fir-2-d6e32.appspot.com",
        messagingSenderId: "311225974804"
      };
      firebase.initializeApp(config);

      var auth = firebase.auth();

    // Sign Up: Function to create account on firebase, then redirect to index.html
    var signUp = function() {
        
        // Get email and password from a form
        var email = $('#email').val();
        var password = $("#password").val();
        var displayName = $("#displayName").val();

        // Create a user using the values from your form
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
            user.updateProfile({
                displayName:displayName
            })
        });


        // Create user, then set the user's display name

                // Set display name

    };

    // SignIn: Function to authenticate on Firebase, then redirect to index.html
    var signIn = function() {
        // Get email and password


        // Authenticate using email and password, then redirect

    };

    // Sign out: Function to log a user out of firebase
    var signOut = function() {
        // Sign out, then redirect



    };

    // Assign event lister to form submission
     // Assign event lister to form submission
    $('form').on('submit', function(event) {
        event.preventDefault();
        var formId = $(this).attr('id');
        if (formId == 'sign-up') {
            signUp();
        } else if (formId == 'sign-in') {
            signIn();
        }
    });
    // Assign click event to logout button



    // Authentication Change: see if a user is already signed in, and redirect

            // Rediriect to index.html if there is a user and the pathname isn't '/'

            // Redirect to sign-in if there is NOT a user and the pathname IS '/'

});
