describe('returnYellow', function(){
    it('Should be a Defined function', function(){
        expect(typeof returnYellow).toBe('function');
    })
    it('Should return "Yellow"', function(){
        expect(returnYellow()).toBe('Yellow');
    })
})