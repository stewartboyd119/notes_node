var myObject = {
    name: 23,
    func1: () => {
        console.log(`name = ${this.name}`);
        console.log(arguments);
    },

    func2 () {
        console.log(`name = ${this.name}`);
        console.log(arguments);
        console.log(arguments['0']);
    }
}

myObject.func1(1,2,3);
myObject.func2(1,2,3);
