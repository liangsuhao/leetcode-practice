var game = function(name) {
    var instance;
    var getGame = function(name) {
        this.name = name;
        if(instance) {
            return instance;
        }

        instance = this;
        return instance;
        
    }

    getGame.prototype.getName = function() {
        console.log(this.name);
    }
}()