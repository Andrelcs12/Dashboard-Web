"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { House, ArrowDownUp, ChartPie, Gem, ScrollText, ChevronRightIcon } from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Home() {

  const grafico = {
    labels: ["Marketing", "Software", "Diretoria", "Finanças", "Segurança"],
    datasets: [
      {
        data: [600, 380, 420, 780, 550], 
        backgroundColor: ["yellow", "blue", "red", "purple", "green"],
        hoverBackgroundColor: [] 
        
      },
    ],
  }


  const dados = [
    { id: 1, nome: "Emma Richardson", tipo: "Saque", valor: 75.50, data: "19 Aug 2024" },
    { id: 2, nome: "Lucas Mendes", tipo: "Transferência", valor: 120.00, data: "22 Aug 2024" },
    { id: 3, nome: "Sophia Almeida", tipo: "Saque", valor: 200.75, data: "25 Aug 2024" },
    { id: 4, nome: "Carlos Ferreira", tipo: "Transferência", valor: 95.30, data: "28 Aug 2024" },
    { id: 5, nome: "Isabela Costa", tipo: "Saque", valor: 50.00, data: "30 Aug 2024" }
];


  return (
    <div className="flex w-full h-screen overflow-x-hidden">


      <div className="bg-slate-800 text-white w-[350px] h-screen fixed">

        <h1 className="p-6 text-2xl font-bold">GROUP</h1>


        <div className="mt-8 pr-6">
          <ul className="flex gap-2 flex-col">
            <li className="flex gap-2 cursor-pointer hover:bg-slate-300 hover:text-black pl-6 text-black font-medium bg-white px-2 py-3 rounded-r-lg">
            <House />
              <h1>Overview</h1>
            </li>
            <li className="flex gap-2 cursor-pointer hover:bg-slate-300 hover:text-black pl-6 text-white font-medium  px-2 py-3 rounded-r-lg">
            <ArrowDownUp />
              <h1>Transactions</h1>
            </li>
            <li className="flex gap-2 cursor-pointer hover:bg-slate-300 hover:text-black pl-6 text-white font-medium  px-2 py-3 rounded-r-lg">
            <ChartPie />
            <h1>Budgets</h1>
            </li>
            <li className="flex gap-2 cursor-pointer hover:bg-slate-300 hover:text-black pl-6 text-white font-medium  px-2 py-3 rounded-r-lg">
            <Gem />
            <h1>Pots</h1>
            </li>
            <li className="flex gap-2 cursor-pointer hover:bg-slate-300 hover:text-black pl-6 text-white font-medium  px-2 py-3 rounded-r-lg">
            <ScrollText />
            <h1>Recurring Bills</h1>
            </li>
          </ul>
        </div>
      </div>


      <div className="w-full px-20 bg-orange-100 ml-[350px] h-min py-12">

        <h1 className="font-bold text-4xl ">Overview</h1>

        <div className="flex gap-4 justify-between mt-12">
          <div className="p-4 bg-black text-white rounded-lg w-[400px]">
            <h1 className="text-2xl font-semibold">Current Balance</h1>
            <h2 className="text-4xl font-bold ">$4,836.00</h2>
          </div>
          <div className="p-4 bg-white text-black rounded-lg w-[400px]">
          <h1 className="text-2xl font-semibold">Income</h1>
          <h2 className="text-4xl font-bold ">$3,814.25</h2>
          </div>
          <div className="p-4 bg-white text-black rounded-lg w-[400px]">
          <h1 className="text-2xl font-semibold">Expenses</h1>
          <h2 className="text-4xl font-bold ">$1,700.50</h2>
          </div>
        </div>


        <div className="flex gap-8 w-full mt-8">

          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-xl p-8 w-[700px] h-[270px]">

              <div className="flex justify-between  cursor-pointer">
                <h1 className="font-semibold  text-2xl">Pots </h1>
                <div className="flex gap-1 items-center">
                  
                  <h3 className="font-semibold "> See Details</h3>
                  <ChevronRightIcon size={15} className="mt-1" />
                </div>
                
              </div>

              <div className="flex gap-8 mt-8">
                <div className="flex w-[300px] h-[130px] rounded-xl p-4 gap-8 bg-orange-50 items-center">
                  <Gem size={40} />
                  <div className="">
                    <h1 className="text-xl">Total Saved</h1>
                    <h2 className="text-3xl font-bold">$850</h2>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4"> 
                  <div className="border-l-4 border- pl-4 border-green-800">
                    <h1>Savings</h1>
                    <h3>$159</h3>
                  </div>
                  <div className="border-l-4 border- pl-4 border-purple-700">
                  <h1>Gift</h1>
                  <h3>$40</h3>
                  </div>
                  <div className="border-l-4 border- pl-4 border-blue-500">
                  <h1>Concert Ticket</h1>
                  <h3>$110</h3>
                  </div>
                  <div className="border-l-4 border- pl-4 border-amber-400">
                  <h1>New Laptop</h1>
                  <h3>$125</h3>
                  </div>
                </div>
              </div>
            </div>


            <div className="bg-white rounded-xl p-8 w-[700px] h-[600px]">

              <div className="">

                <div className="flex justify-between  cursor-pointer">
                <h1 className='font-semibold text-2xl'>Transactions</h1>
                <div className="flex">
                  <h1 className='font-semibold'>View All</h1>
                  <ChevronRightIcon />
                </div>

                </div>
                
                <div className="space-y-4 p-4">
            {dados.map(({ id, nome, tipo, valor, data }) => (
                <div
                    key={id}
                    className="p-4 cursor-pointer hover:bg-slate-200 flex justify-between items-center border-b-2 border-gray-300"
                >
                    
                    <div className="flex items-center space-x-2">
                        <div className="p-2 w-8 h-8 rounded-full bg-black"></div>
                        <p className="font-bold">{nome}</p>
                    </div>

                    
                    <div className="text-right">
                        <p className={` font-bold ${ tipo === "Saque" ? "text-green-700 " : "text-red-600"}`}>
                          R$ {valor.toFixed(2)}</p>
                        <p className="text-sm font-semibold">{data}</p>
                    </div>
                </div>
            ))}
        </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8  w-full">
            <div className="bg-white rounded-xl p-8  h-[500px]">

              <div className='flex justify-between  cursor-pointer'>
                <h1 className='text-xl font-semibold'>Budgets</h1>
                <div className='flex gap-1'>
                <h2 className='font-medium'>See Details </h2>
                <ChevronRightIcon />
                </div>
                
              </div>

              <div className='flex mt-12'>
              <div className="w-80 mx-auto">
                <Doughnut data={grafico} />
              </div>
              
              <div>
                <ul className='flex flex-col gap-8'>
                  <li className='border-l-4 border-green-800 px-2'>
                    <h1>Entertainment</h1>
                    <h2>$50.00</h2>
                    
                  </li>
                  <li className='border-l-4 border-blue-800 px-2'>
                    <h1>Biils</h1>
                    <h2>$750.00</h2>
                  </li>
                  <li className='border-l-4 border-orange-800 px-2'>
                    <h1>Dining Out</h1>
                    <h2>$75.00</h2>
                  </li>
                  <li className='border-l-4 border-purple-800 px-2'>
                    <h1>Personal Care</h1>
                    <h2>$150.00</h2>
                  </li>
                </ul>
              </div>

              </div>
            

            </div>
            <div className="bg-white rounded-xl p-8 flex flex-col h-[370px]">

              <div className='flex justify-between  cursor-pointer'>
                <h1 className='text-xl font-semibold'>Recurring Bills</h1>
                <div className='flex gap-1'>
                <h2 className='font-medium'>See Details </h2>
                <ChevronRightIcon />
                </div>
                </div>

              <div className='flex flex-col h-full justify-around'>
                <div className='bg-orange-100 flex justify-between px-4 py-5 rounded-md border-l-4 border-green-700'>
                  <h1>Paid Bills</h1>
                  <h2 className='font-bold'> $190.00</h2>
                </div>
                <div className='bg-orange-100 flex justify-between px-4 py-5 rounded-md border-l-4 border-blue-500 '>
                <h1>Total Upcoming</h1>
                <h2 className='font-bold'> $194.98</h2>
                </div>
                <div className='bg-orange-100 flex justify-between px-4 py-5 rounded-md border-l-4 border-orange-400'>
                <h1>Due Soon</h1>
                <h2 className='font-bold'> $59.78</h2>
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
