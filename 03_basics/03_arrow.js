const user = {
    username: "Sachin",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to Website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);