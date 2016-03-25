$(function () {
    var APPLICATION_ID = "56F62848-D35A-0D8A-FF90-A2ABCB906300",
        SECRET_KEY = "0F5F61EC-000A-94CC-FF38-ACFD80959200",
        VERSION = "v1";

    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
   
    
    var loginScript = $("#login-template").html();
    var loginTemplate = Handlebars.compile(loginScript);
    
    $('.main-container').html(loginTemplate);
   

});

function Posts (args) {
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}






