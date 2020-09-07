function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
    this.setName = function (name) {
        this.name = name;
    }
    this.setWeight = function (weight) {
        this.Weight = weight;
    }
    this.getName = function () {
        return this.name;
    }
    this.getWeight = function () {
        return this.weight;
    }
    this.toString = function () {
        return "name is " + this.name + ", weight is " + this.weight;
    }
}

