$(function () {
    var APPLICATION_ID = "56F62848-D35A-0D8A-FF90-A2ABCB906300",
        SECRET_KEY = "0F5F61EC-000A-94CC-FF38-ACFD80959200",
        VERSION = "v1";

    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
   
    if(Backendless.UserService.isValidLogin){
        userLoggedIn(Backendless.LocalCache.get("current-user-id"));
    }else{
    var loginScript = $("#login-template").html();
    var loginTemplate = Handlebars.compile(loginScript);
    $('.main-container').html(loginTemplate);
}
    
    $(document).on('submit', '.form-signin', function(event){
        event.preventDefault();
        
        var data = $(this).serializeArray(),
        email = data[0].value,
        password = data[1].value;
        
        Backendless.UserService.login(email, password, true, new Backendless.Async(userLoggedIn, gotError));
    });
   
   $(document).on('click', '.add-blog',function(){
         var blogScript = $("#blog-template").html();
    var blogTemplate = Handlebars.compile(blogScript);
    
    $('.main-container').html(blogTemplate);
   });
   
   $(document).on('submit', '.forrm-add-blog', function(event){
       event.preventDefault();
       
       var data = $(this).serializeArray(),
           title = data[0].value,
           content = data[1].value;
       
       var dataStore = Backendless.Persistence.of(Posts);
       
       var postObject = new Posts({
           title: title,
           content:  content,
           authorEmail: Backendless.UserService.getCurrentUser().email
           
       });
       
       dataStore.save(postObject);
       
       this.title.value = "";
       this.content.value = "";
       
       
   });
   
   $(document).on('click', 'logout', function(){
       Backendless.UserService.logout(new Backendless.Async(userLoggedOut, gotError));
       
        var loginScript = $("#login-template").html();
    var loginTemplate = Handlebars.compile(loginScript);
    $('.main-container').html(loginTemplate);
   });

});

function Posts (args) {
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}

function userLoggedIn(user){
    console.log("user sucessfully logged in");
    var userData;
    if(typeof user == "string"){
        userData = Backendless.Data.of(Backendless.User).findbyID(user);
    } else{
        userData = user;
    }
    var welcomeScript = $('#welcome-template');
    var welcomeTemplate = Handlebars.compile(welcomeScript);
    var welcomeHTML = welcomeTemplate(user);
    
    $('.main-container').html(welcomeHTML);
}

function userLoggedOut(){
    console.log("sucessfully logged out");
}

function gotError(error){
    console.log("Error message - " + error.message);
    console.log("Error code - " + error.message);
    
}






