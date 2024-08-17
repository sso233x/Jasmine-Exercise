describe('calculateMonthlyPayments test', function(){
  it('should calculate the monthly rate correctly', function () {
    const values = { amount: 5000, years: 4, rate: 2.6};
    expect(calculateMonthlyPayment(values)).toEqual('109.79')
  });

  it("should return a result with 2 decimal places", function() {
    const values = { amount: 8000, years: 4, rate: 2.6}
    expect(calculateMonthlyPayment(values)).toEqual('175.66')
  });
});
