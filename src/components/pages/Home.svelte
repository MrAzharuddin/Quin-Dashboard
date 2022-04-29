<script>
import ProfilePassword from './ProfilePassword.svelte'

import ApexCharts from 'apexcharts';
window.ApexCharts = ApexCharts;

let options1 = {
    chart: {
        id: 'chart1',
        height: 200,
        type: 'bar',
        // stacked: true
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#16cefa', '#fa83d6', '#fa83d6'],
    fill: {
        type: 'gradient',
        gradient: {
            type: 'vertical',
            inverseColors: false,
            shadeIntensity: 1,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
            gradientToColors: ['#0b6e85', 'transparent', '#88006c']
        }
    },
    series: [{
            name: 'TEAM A',
            type: 'bar',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        },
        {
            name: 'TEAM B',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        }
    ],
    xaxis: {
        categories: []
    },
    yaxis: [{
        axisTicks: {
            show: true
        }
    }],
    noData: {
        text: 'No Data'
    },
    stroke: {
        curve: 'smooth'
    },
    title: {
        text: 'Free Vs Apex',
        style: {
            fontSize: '16px'
        }
    }
};

let chart1;

function renderCharts1(node) {
    chart1 = new ApexCharts(node, options1);
    chart1.render();
}
</script>

<main class="text-white flex w-full">
    <div class="flex-auto pr-14">
        <h1 class="text-3xl font-bold p-4">Analytics</h1>
        <div class="space-y-6 py-4 w-full">
            <div class="bg-black flex justify-around rounded-md py-4">
                <div class="flex-1 py-4">
                    <div class='flex flex-col justify-center items-center '>
                        <h1 class="text-3xl font-bold">40<span class="font-medium">X</span></h1>
                        <p class="text-[#a5a5a5]">Rides</p>
                    </div>
                </div>
                <div class="flex-1 py-4">
                    <div class='flex flex-col justify-center items-center '>
                        <h1 class="text-3xl font-bold">146<span class="font-medium">h</span> 00<span class="font-medium">m</span> </h1>
                        <p class="text-[#a5a5a5]">Saddle Time</p>
                    </div>
                </div>
                <div class="flex-1 py-4 border-l-2 border-[#0b7777]">
                    <div class='flex flex-col justify-center items-center'>
                        <h1 class="text-3xl font-normal">23<span>X</span></h1>
                        <p class="text-[#a5a5a5]">Streak</p>
                    </div>
                </div>

            </div>

            <div class="py-0 flex space-x-10">
                <div class="bg-black flex flex-col items-center justify-between flex-1 p-6 rounded-xl">
                    <div class="flex w-full justify-between items-center pb-4">
                        <div class="bg-[#2f2f2f] p-4 rounded-md">
                            <img class="w-[30px]" src="https://cdn-icons-png.flaticon.com/512/1022/1022476.png" alt="">
                        </div>
                        <h1 class="text-3xl font-bold">003</h1>
                    </div>
                    <p class="text-[#a5a5a5]">No. Of SOS Alert created</p>
                </div>

                <div class="bg-black flex flex-col items-center justify-between flex-1 p-6 rounded-xl">
                    <div class="flex w-full justify-between items-center pb-4">
                        <div class="bg-[#2f2f2f] p-4 rounded-md">
                            <img class="w-[30px]" src="https://cdn-icons-png.flaticon.com/512/1022/1022476.png" alt="">
                        </div>
                        <h1 class="text-3xl font-bold">003</h1>
                    </div>
                    <p class="text-[#a5a5a5]">No. Of SOS Alert created</p>
                </div>

                <div class="bg-black flex flex-col items-center justify-between flex-1 p-6 rounded-xl">
                    <div class="flex w-full justify-between items-center pb-4">
                        <div class="bg-[#2f2f2f] p-4 rounded-md">
                            <img class="w-[30px]" src="https://cdn-icons-png.flaticon.com/512/1022/1022476.png" alt="">
                        </div>
                        <h1 class="text-3xl font-bold">003</h1>
                    </div>
                    <p class="text-[#a5a5a5]">No. Of SOS Alert created</p>
                </div>
            </div>

            <div class="space-x-10 flex">
                <div class="bg-black flex-1 rounded-xl p-2">
                    <div use:renderCharts1 class="z-[-1] my-2 bg-gray-100 p-2 rounded-lg shadow-inner" />
                </div>

                <div class="bg-black flex-1 rounded-xl p-2">
                    <div use:renderCharts1 class="z-[-1] my-2 bg-gray-100 p-2 rounded-lg shadow-inner" />
                </div>

            </div>

            <div class="bg-black flex justify-around items-center rounded-lg">
                <div class="flex-1 border-r-2 border-[#0b7777]">
                    <div class='flex flex-col justify-center items-center '>
                        <h1 class="text-3xl font-bold text-[#01c1c1]">3<span>X</span></h1>
                        <p class="text-[#a5a5a5]">Hard Accel.</p>
                        <p class="text-[#a5a5a5]">(7 Days)</p>
                    </div>
                </div>
                <div class="flex-1">
                    <div class="bg-black flex-1 rounded-xl p-2">
                        <div use:renderCharts1 class="z-[-1] my-2 bg-gray-100 p-2 rounded-lg shadow-inner" />
                    </div>
                </div>
                <div class="flex-1 border-l-2 border-[#0b7777]">
                    <div class='flex flex-col justify-center items-center '>
                        <h1 class="text-3xl font-bold text-[#BAEB17]">3<span>X</span></h1>
                        <p class="text-[#a5a5a5]">Hard Bracking</p>
                        <p class="text-[#a5a5a5]">(7 Days)</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ProfilePassword class="flex-auto"/>
</main>
