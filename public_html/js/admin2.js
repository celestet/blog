$(function () {
    var APPLICATION_ID = "56F62848-D35A-0D8A-FF90-A2ABCB906300",
        SECRET_KEY = "0F5F61EC-000A-94CC-FF38-ACFD80959200",
        VERSION = "v1";

    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
 
    var loginScript = $("#login-template").html();
    var loginTemplate = Handlebars.compile(loginScript);
    
    $('.main-container').html(loginTemplate);

    $(document).on('submit', '.form-signin', function(event){
        event.preventDefault();
        
        var data = $(this).serializeArray(),
            email = data[0].value,
            password = data[1].value;
            
        Backendless.UserService.login(email, password, true, new Backendless.Async(userLoggedIn, gotError));
            
            
            
    });
    
    });
   

function Posts (args) {
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}

function userLoggedIn(){
    console.log("user sucessfully logged in");
}

function gotError(error){
    console.log("Error message - " + error.message);
    console.log("Error code - " + error.message);
}

