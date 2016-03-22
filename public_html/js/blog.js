$(function () {
    var APPLICATION_ID = "56F62848-D35A-0D8A-FF90-A2ABCB906300",
            SECRET_KEY = "0F5F61EC-000A-94CC-FF38-ACFD80959200",
            VERSION = "v1";

    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var dataStore = Backendless.Persistence.of(Posts);
    var post = new Posts((title: "My first blog post", content:"My first blog post content", authorEmail:"email@email.com"));
    dataStore.save(post);

});

function Post(args) {
    args = args || ();
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail - args.authorEmail || "";
}



