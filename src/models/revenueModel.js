const revenues = [
    { month: 'January', amount: 5000 },
    { month: 'February', amount: 7000 },
    { month: 'March', amount: 6500 },
    { month: 'April', amount: 8000 },
    { month: 'May', amount: 7200 },
    { month: 'June', amount: 6000 }
  ];
  
  function getAllRevenues() {
    return revenues;
  }
  
  function getRevenueByMonth(month) {
    return revenues.find(r => r.month.toLowerCase() === month.toLowerCase());
  }
  
  function addRevenue(month, amount) {
    const newRevenue = { month, amount };
    revenues.push(newRevenue);
    return newRevenue;
  }
  
  module.exports = { getAllRevenues, getRevenueByMonth, addRevenue };