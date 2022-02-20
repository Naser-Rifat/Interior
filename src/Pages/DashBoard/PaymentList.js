import React from "react";

const PaymentList = () => {
  return (
    <div>
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Latest Transactions
            </h3>
            <span className="text-base font-normal text-gray-500">
              This is a list of latest transactions
            </span>
          </div>
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
            >
              View all
            </a>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <div className="overflow-x-auto rounded-lg">
            <div className="align-middle inline-block min-w-full">
              <div className="shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Transaction
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date & Time
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr>
                      <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                        Payment from{" "}
                        <span className="font-semibold">abu naser rifat</span>
                      </td>
                      <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                        jan 23 ,2022
                      </td>
                      <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        $2300
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                        Payment refund to{" "}
                        <span className="font-semibold">#00910</span>
                      </td>
                      <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                        Jan 23 ,2022
                      </td>
                      <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        -$670
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                        Payment failed from{" "}
                        <span className="font-semibold">#087651</span>
                      </td>
                      <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                        Jan 18 ,2022
                      </td>
                      <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        $234
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                        Payment from{" "}
                        <span className="font-semibold">Saiful</span>
                      </td>
                      <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                        Jan 15 ,2022
                      </td>
                      <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        $5000
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                        Payment from{" "}
                        <span className="font-semibold">Shihab</span>
                      </td>
                      <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                        Jan 15 ,2022
                      </td>
                      <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        $2300
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                        Payment from{" "}
                        <span className="font-semibold"> Rupok</span>
                      </td>
                      <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                        Jan 11 ,2022
                      </td>
                      <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        $560
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                        Payment from{" "}
                        <span className="font-semibold">Wiliam</span>
                      </td>
                      <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                        Jan 6 ,2022
                      </td>
                      <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        $1437
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentList;
