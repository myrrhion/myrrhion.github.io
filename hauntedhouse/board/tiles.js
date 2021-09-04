class Tile{
    constructor(name, built) {
        this.name = name;
        this.exits = built.exits | ["n"];
        this.windows = built.windows | [];
        this.keys = built.keys | [];
        this.symbol = built.symbol | symbols.NONE;
    }
    toString(){
        return this.name;
    };
    onReveal()
    {
        return null;
    };
    onEnter(){

    }
    onExit(){

    };
    onEnd(){

    };
}

class DivTile extends Tile{
    constructor(name,built) {
        super(name,built);
        this.onReveal = built.onReveal;
    }
}

console.log( new DivTile("lala",{}).name);
