"use client"
import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { House, ArrowDownUp, ChartPie, Gem, ScrollText, ChevronRightIcon, LucideMenu, X } from "lucide-react";

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

const [menu, setMenu] = useState(false)



  return (
    <div className="flex w-full h-screen overflow-x-hidden ">


      <div className="bg-slate-800 text-white lg:w-[200px] xl:w-[300px] h-screen absolute lg:block hidden ">

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
            <h1> Bills</h1>
            </li>
          </ul>
        </div>
      </div>

      <div className={`fixed top-0 w-full transition-all border-b-4 duration-300 ${menu ? "bg-white h-[350px] " : "hidden"}`}>

        <X className='fixed top-3 right-4 cursor-pointer ' size={40} onClick={() => setMenu(!menu)} />
      <ul className="flex gap-2 flex-col pt-14">
            <li className="flex gap-2  justify-center cursor-pointer  bg-slate-200  pl-6 text-black font-medium  px-2 py-3 ">
            <House />
              <h1>Overview</h1>
            </li>
            <li className="flex gap-2  justify-center cursor-pointer  hover:bg-slate-200 pl-6 text-black font-medium  px-2 py-3 ">
            <ArrowDownUp />
              <h1>Transactions</h1>
            </li>
            <li className="flex gap-2 justify-center cursor-pointer  hover:bg-slate-200 pl-6 text-black font-medium  px-2 py-3 ">
            <ChartPie />
            <h1>Budgets</h1>
            </li>
            <li className="flex gap-2 justify-center cursor-pointer  hover:bg-slate-200 pl-6 text-black font-medium  px-2 py-3 ">
            <Gem />
            <h1>Pots</h1>
            </li>
            <li className="flex gap-2 justify-center cursor-pointer  hover:bg-slate-200 pl-6 text-black font-medium  px-2 py-3 ">
            <ScrollText />
            <h1> Bills</h1>
            </li>
          </ul>

      </div>


      <div className="w-full lg:px-10 p-8 sm:bg-slate-300 bg-slate-200 pt-8  h-min lg:pl-[250px] xl:pl-[350px]  lg:py-12 py-4">

        <div className='flex justify-between items-center'>
        <h1 className="font-bold text-4xl ">Overview</h1>
        <div className={`  sm:hidden cursor-pointer  h-10 w-10 p-2 rounded-full fixed top-9 right-10 bg-slate-900 items-center flex justify-center ${menu ? "hidden" : ""}`}>
        <LucideMenu className='text-white' size={25} onClick={() => setMenu(!menu)}  />
        </div>
        
        </div>
        

        <div className=" flex-col flex md:flex-row  gap-4 justify-between mt-8  w-full">
  <div className="p-4 bg-gray-900 text-white rounded-lg flex-1 ">
    <h1 className="lg:text-xl text-md md:text-xl font-semibold">Current Balance</h1>
    <h2 className="lg:text-3xl text-2xl font-bold">$4,836.00</h2>
  </div>
  <div className="p-4 bg-gray-100 text-black rounded-lg flex-1">
    <h1 className="lg:text-xl text-md md:text-xl font-semibold">Income</h1>
    <h2 className="lg:text-3xl text-2xl font-bold">$3,814.25</h2>
  </div>
  <div className="p-4 bg-gray-100 text-black rounded-lg flex-1">
    <h1 className="lg:text-xl text-md md:text-xl font-semibold">Expenses</h1>
    <h2 className="lg:text-3xl text-2xl font-bold">$1,700.50</h2>
  </div>
</div>



        <div className="lg:flex lg:flex-row  gap-8 w-full mt-8 flex-col flex">

        <div className="flex flex-col gap-8 w-full ">
          <div className="bg-white rounded-xl p-4 w-full  ">

              <div className="flex justify-between  cursor-pointer ">
                <h1 className="font-semibold  text-2xl">Pots </h1>
                <div className="flex gap-1 items-center">
                  
                  <h3 className="font-semibold "> See Details</h3>
                  <ChevronRightIcon size={20} />
                </div>
                
              </div>

              <div className="flex md:flex-row flex-col gap-8 lg:mt-2 mt-4 ">
                <div className="flex  md:w-[350px] lg:max-w-[300px] 2xl:w-full  rounded-xl p-4 gap-8 bg-slate-200 items-center">
                  <Gem size={45} />
                  <div className="">
                    <h1 className="md:text-xl lg:text-2xl ">Total Saved</h1>
                    <h2 className="md:text-2xl text-3xl font-bold">$850</h2>
                  </div>
                </div>

                <div className="lg:grid lg:grid-cols-2 sm:flex grid grid-cols-2 items-center justify-around w-full gap-4 "> 
                  <div className="border-l-4 p-2   border-green-800">
                    <h1 className='font-semibold'>Savings</h1>
                    <h3 className='font-bold '>$159</h3>
                  </div>
                  <div className="border-l-4 p-2  border-purple-700">
                  <h1 className='font-semibold'>Gift</h1>
                  <h3 className='font-bold '>$40</h3>
                  </div>
                  <div className="border-l-4 p-2  bg- border-blue-500">
                  <h1 className='font-semibold'>Concert Ticket</h1>
                  <h3 className='font-bold '>$110</h3>
                  </div>
                  <div className="border-l-4 p-2  border-amber-400">
                  <h1 className='font-semibold'>New Laptop</h1>
                  <h3 className='font-bold '>$125</h3>
                  </div>
                </div>
              </div>
            </div>


            <div className="bg-white rounded-xl p-8 lg:max-w-full ">

              <div className="">

                <div className="flex justify-between  cursor-pointer">
                <h1 className='font-semibold text-2xl'>Transactions</h1>
                <div className="flex items-center ">
                  <h1 className='font-semibold'>View All</h1>
                  <ChevronRightIcon />
                </div>

                </div>
                
                <div className="space-y-4 p-4 overflow-y-auto h-[300px] sm:h-auto">
            {dados.map(({ id, nome, tipo, valor, data }) => (
                <div
                    key={id}
                    className="p-2 cursor-pointer gap-2 hover:bg-slate-200 flex md:flex-row flex-col justify-between md:items-center border-b-2 border-gray-300"
                >
                    
                    <div className="flex items-center space-x-2 ">
                        <div className="p-2 w-8 h-8 rounded-full bg-black"></div>
                        <p className="font-bold text-md">{nome}</p>
                    </div>

                    
                    <div className="sm:pt-0 pt-2">
                        <p className={` font-bold text-md ${ tipo === "Saque" ? "text-green-700 " : "text-red-600"}`}>
                          R$ {valor.toFixed(2)}</p>
                        <p className="text-sm font-semibold">{data}</p>
                    </div>
                </div>
            ))}
        </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8  lg:w-[500px]">
            <div className="bg-white rounded-xl p-4 lg:max-w-[900px]   ">

              <div className='flex justify-between  cursor-pointer'>
                <h1 className='text-xl font-semibold'>Budgets</h1>
                <div className='flex gap-1'>
                <h2 className='font-medium'>See Details </h2>
                <ChevronRightIcon />
                </div>
                
              </div>

              <div className=' lg:flex-col xl:flex-row   flex-col md:flex justify-around pt-4  xl:py-8 lg:py-4   h-full'>

              <div className="2xl:w-80 xl:w-80 mx-auto justify-center flex">
                <Doughnut data={grafico} />
              </div>
              
              <div className='flex items-center  lg:pt-0 pt-8 '>

                <ul className='xl:flex xl:flex-col gap-8 sm:flex justify-around md:grid grid  w-full grid-cols-2 lg:mt-8 sm:  xl:m-0'>
                  <li className='border-l-4 border-green-800 px-2'>
                    <h1 className='font-semibold md:text-md'>Entertainment</h1>
                    <h2 className='font-bold'>$50.00</h2>
                    
                  </li>
                  <li className='border-l-4 border-blue-800 px-2'>
                    <h1 className='font-semibold text-md'>Biils</h1>
                    <h2 className='font-bold'>$750.00</h2>
                  </li>
                  <li className='border-l-4 border-orange-800  px-2'>
                    <h1 className='font-semibold text-md'>Dining Out</h1>
                    <h2 className='font-bold'>$75.00</h2>
                  </li>
                  <li className='border-l-4 border-purple-800 px-2'>
                    <h1 className='font-semibold text-md'>Personal Care</h1>
                    <h2 className='font-bold'>$150.00</h2>
                  </li>
                </ul>
              </div>

              </div>
            

            </div>
            <div className="bg-white rounded-xl p-8 flex flex-col h-[370px] mb-24">

              <div className='flex justify-between  cursor-pointer'>
                <h1 className='text-xl font-semibold'> Bills</h1>
                <div className='flex gap-1'>
                <h2 className='font-medium'>See Details </h2>
                <ChevronRightIcon />
                </div>
                </div>

              <div className='flex flex-col h-full justify-around'>
                <div className='bg-slate-200 flex justify-between px-4 py-5 rounded-md border-l-4 border-green-700'>
                  <h1 className='font-medium'>Paid Bills</h1>
                  <h2 className='font-bold'> $190.00</h2>
                </div>
                <div className='bg-slate-200 flex justify-between px-4 py-5 rounded-md border-l-4 border-blue-500 '>
                <h1 className='font-medium'>Total Upcoming</h1>
                <h2 className='font-bold'> $194.98</h2>
                </div>
                <div className='bg-slate-200 flex justify-between px-4 py-5 rounded-md border-l-4 border-orange-400'>
                <h1 className='font-medium'>Due Soon</h1>
                <h2 className='font-bold'> $59.78</h2>
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>

      <div className="fixed bottom-0 w-screen h-20 bg-slate-800 sm:block hidden  max-w-full text-white lg:hidden">

      <ul className="flex justify-around items-center h-full">
            <li className="flex flex-col items-center cursor-pointer bg-slate-300 text-black px-4 py-2 rounded-md transition-all">
            <House className='text-center flex justify-between '/>
              <h1 className='sm:text-xl text-sm'>Overview</h1>
            </li>
            <li className="flex flex-col items-center cursor-pointer hover:bg-slate-300 hover:text-black px-4 py-2 rounded-md transition-all">
            <ArrowDownUp />
              <h1 className='sm:text-xl text-sm'>Transactions</h1>
            </li>
            <li className="flex flex-col items-center cursor-pointer hover:bg-slate-300 hover:text-black px-4 py-2 rounded-md transition-all">
            <ChartPie />
            <h1 className='sm:text-xl text-sm'>Budgets</h1>
            </li>
            <li className="flex flex-col items-center cursor-pointer hover:bg-slate-300 hover:text-black px-4 py-2 rounded-md transition-all">
            <Gem />
            <h1 className='sm:text-xl text-sm'>Pots</h1>
            </li>
            <li className="flex flex-col items-center cursor-pointer hover:bg-slate-300 hover:text-black px-4 py-2 rounded-md transition-all">
            <ScrollText />
            <h1 className='sm:text-xl text-sm'> Bills</h1>
            </li>
          </ul>

      </div>

    </div>
  );
}
