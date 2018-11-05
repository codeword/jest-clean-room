var {speak} = require("./index");

describe('index', () => {
    describe('.speak', () => {
        it('can speak', () => {
            spyOn(console, 'log');
            speak('hello');
            expect(console.log).toHaveBeenCalledWith('hello');
        });

        it('returns what it was passed', () => {
            expect(speak('hello')).toEqual('hello');
        });
    });
});
