
//Không sử dụng bind
var blog = {
    domain : "shaisunkan.com",
    author : "Chanhnv",
    showWebsite : function (callbackFunction){
        callbackFunction();
    },
    render : function(){
        var _self = this;
        this.showWebsite(function(){
            console.log(_self); // là đối tượng this
            console.log(_self.domain); // ok
            console.log(_self.author); /// ok
        });
    }
};
 
blog.render();

//Sử dụng bind
var blog = {
    domain : "shaisunkan.net",
    author : "Chanhnv",
    showWebsite : function (callbackFunction){
        callbackFunction();
    },
    render : function(){
        this.showWebsite(function(){
            console.log(this); // là đối tượng this
            console.log(this.domain); // ok
            console.log(this.author); /// ok
        }.bind(this));
    }
};
 
blog.render();

var blog = {
    showWebsite : function (callbackFunction){
        callbackFunction();
    },
    render : function(){
        this.showWebsite(function(args){
           console.log(this); // This chính là mảng truyền vào
        }.bind(["Abc.net", "Abc@gmail.com"]));
    }
};
 
blog.render();