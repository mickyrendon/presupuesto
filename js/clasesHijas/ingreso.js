class Entry extends Data{
    static counterEntry = 0;
    constructor(description, value){
        super(description, value);
        this._id = ++Entry.counterEntry;
    }
    get id(){
        return this._id;
    }
}