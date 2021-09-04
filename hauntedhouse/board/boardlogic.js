const symbols = {
    NONE: "none",
    OMEN: "omen",
    ITEM: "item",
    EVENT: "event",
}
class Manager {

}

class Floor {

    constructor(key)
    {
        this._width = 5;
        this._height = 5;
        this._center = [2, 2];
        this._tilesize = "150px";
        this._level = key;
        this._rooms = [];
        this._rooms[this._width * this._height] = undefined;
    };

    get_xy(x, y) {
        return x + y;
    };

}


