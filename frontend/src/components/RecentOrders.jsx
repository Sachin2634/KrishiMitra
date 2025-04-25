import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";

const RecentOrders = () => {
  const [filter, setFilter] = useState("This week");

  const orders = [
    { invoice: "#Kri5001", customer: "Roy", date: "15/3/2025", amount: 2500, status: "OFD", payment: "Paid" },
    { invoice: "#Kri5002", customer: "Avi", date: "10/3/2025", amount: 1500, status: "Delivered", payment: "Paid" },
    { invoice: "#Kri5003", customer: "Meera", date: "2/3/2025", amount: 3000, status: "Pending", payment: "Unpaid" },
    { invoice: "#Kri5004", customer: "Jay", date: "5/3/2025", amount: 2200, status: "OFD", payment: "Paid" },
  ];

  // Dummy filter logic (you can adjust based on real date handling)
  const filteredOrders = orders.filter(order => {
    if (filter === "This week") return true; // show all for now
    if (filter === "Last week") return order.invoice === "#Kri5002"; // example logic
    if (filter === "This month") return order.invoice !== "#Kri5003"; // example logic
  });

  return (
    <div className="shadow-xl border border-black/10 overflow-auto no-scrollbar ml-[44px] mr-[44px] mt-[56px] mb-[24px] w-[662px] h-[432px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[#006A30] text-[26px] jomolhari-regular pl-[21px] pt-[14px]">Recent Orders</h2>
        <select
          className="text-[#006A30] text-[18px] joan-regular bg-transparent cursor-pointer mr-[30px] mt-[25px]"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>This week</option>
          <option>Last week</option>
          <option>This month</option>
        </select>
      </div>
      <div className="overflow-auto no-scrollbar h-[280px] mt-[10px]">
      <table className="mt-[10px] border-separate border-spacing-y-[10px] w-[650px] ml-[2px]">
        <thead>
          <tr className="shadow-sm border-black/10 rounded-[20px] pl-[2px] pr-[9px]">
            <th className="pl-[25px] pt-[15px] pb-[10px] text-center text-[16.62px] joan-regular">Invoice</th>
            <th className="pl-[25px] pt-[15px] pb-[10px] text-center text-[16.62px] joan-regular">Customer</th>
            <th className="pl-[25px] pt-[15px] pb-[10px] text-center text-[16.62px] joan-regular">Purchased on</th>
            <th className="pl-[25px] pt-[15px] pb-[10px] text-center text-[16.62px] joan-regular">Amount</th>
            <th className="pl-[25px] pt-[15px] pb-[10px] text-center text-[16.62px] joan-regular">Status</th>
            <th className="pl-[25px] pt-[15px] pb-[10px] text-center text-[16.62px] joan-regular">Payment Status</th>
          </tr>
        </thead>
        <tr className="h-[10px]"><td colSpan={6}></td></tr>
        <tbody>
          {filteredOrders.map((order, index) => (
            <tr key={index} className="shadow-sm border-black/10 rounded-[20px]">
              <td className="pl-[25px] pt-[15px] pb-[10px] text-center text-[17.62px] joan-regular">{order.invoice}</td>
              <td className="pl-[25px] pt-[15px] pb-[10px] text-center text-[17.62px] joan-regular">{order.customer}</td>
              <td className="pl-[25px] pt-[15px] pb-[10px] text-center text-[17.62px] joan-regular">{order.date}</td>
              <td className="pl-[25px] pt-[15px] pb-[10px] text-center text-[17.62px] joan-regular">{order.amount}</td>
              <td className="pl-[25px] pt-[15px] pb-[10px] text-center text-[17.62px] joan-regular">{order.status}</td>
              <td className="pl-[25px] pt-[15px] pb-[10px] text-center text-[17.62px] joan-regular">{order.payment}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className='flex justify-center mt-[28px]'>
        <button className='bg-[#006A30] text-white text-[12.62px] itim-regular flex flex-row rounded-[20px] pl-[23px] pt-[10px] pb-[9px] pr-[10px] cursor-pointer'>
          View More <FaArrowRight style={{ transform: "translate(0, 3px)", marginLeft: "10px", cursor: "pointer" }} />
        </button>
      </div>
    </div>
  );
};

export default RecentOrders;
