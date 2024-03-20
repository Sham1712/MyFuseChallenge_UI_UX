    import React from 'react'
    import eth from "../assets/ethereum-logo.png"
    import slk from "../assets/slack-logo.png"
    import sc from "../assets/soundcloud-logo.png"
    import tn from "../assets/tinder-1-logo.png"

    export const Jobs = () => {
        return (
            <div>
                <div class="mx-5 my-5 flex flex-col">
    <div class="mt-5 flex justify-center text-4xl font-semibold text-[#050C26]">Recent Jobs</div>

    <div class="mx-1 mt-7 flex flex-row justify-evenly">

        <div class="mx-10 flex w-[50%] flex-col p-3 shadow-lg">
        <div class="my-5 flex justify-center text-4xl font-semibold tracking-wider text-[#050C26]">UI/UX Designer</div>

        <div class="flex flex-row justify-evenly mt-3">
            <div class="mr-1 flex flex-row">
            <svg class="mr-1" width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0C3.13556 0 0 2.73592 0 6.10714C0 11.5357 7 19 7 19C7 19 14 11.5357 14 6.10714C14 2.73592 10.8644 0 7 0ZM7 9.5C6.44621 9.5 5.90486 9.34081 5.4444 9.04256C4.98395 8.74431 4.62506 8.3204 4.41314 7.82443C4.20121 7.32846 4.14576 6.7827 4.2538 6.25618C4.36184 5.72966 4.62851 5.24602 5.0201 4.86642C5.41169 4.48682 5.9106 4.22831 6.45375 4.12358C6.99689 4.01885 7.55988 4.0726 8.07151 4.27804C8.58315 4.48348 9.02045 4.83138 9.32811 5.27774C9.63578 5.7241 9.8 6.24888 9.8 6.78571C9.79919 7.50535 9.50393 8.19528 8.979 8.70414C8.45408 9.21299 7.74236 9.49921 7 9.5Z" fill="#9F9F9F" />
            </svg>
            <div class="my-3 mr-10 mt-1 flex justify-center text-center align-middle text-sm font-bold text-black">Bangalore</div>

            </div>
            <div class="my-3 mr-10 mt-1 flex justify-center text-sm font-light text-[#8A8A8A]">Technology and IT</div>
        </div>

        <div class="flex flex-row justify-evenly mt-7">
            <div class="my-3 mr-10 mt-1 flex justify-center rounded-xl bg-[#FFC107] bg-opacity-20 px-3 text-center align-middle text-base font-semibold text-[#FFC107]">Full Time</div>

            <div class="my-3 mr-10 mt-1 flex justify-center text-sm font-light text-black">Salary: 11-12LPA</div>
        </div>

        <div class="mx-6 my-2 mt-5 flex justify-center text-left align-middle text-lg font-light text-black tracking-wider">We're looking for a talented individual with a keen eye for design, exceptional user empathy, and a passion for crafting seamless digital experiences.</div>

        <div class="ml-9 flex flex-row justify-center">
            <img src={sc} alt="" />
        </div>

        </div>

        <div class="mx-10 flex w-[50%] flex-col p-3 shadow-lg">
        <div class="my-5 flex justify-center text-4xl font-semibold tracking-wider text-[#050C26]">C# Developer</div>


        <div class="flex flex-row justify-evenly mt-3">
            <div class="mr-1 flex flex-row">
            <svg class="mr-1" width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0C3.13556 0 0 2.73592 0 6.10714C0 11.5357 7 19 7 19C7 19 14 11.5357 14 6.10714C14 2.73592 10.8644 0 7 0ZM7 9.5C6.44621 9.5 5.90486 9.34081 5.4444 9.04256C4.98395 8.74431 4.62506 8.3204 4.41314 7.82443C4.20121 7.32846 4.14576 6.7827 4.2538 6.25618C4.36184 5.72966 4.62851 5.24602 5.0201 4.86642C5.41169 4.48682 5.9106 4.22831 6.45375 4.12358C6.99689 4.01885 7.55988 4.0726 8.07151 4.27804C8.58315 4.48348 9.02045 4.83138 9.32811 5.27774C9.63578 5.7241 9.8 6.24888 9.8 6.78571C9.79919 7.50535 9.50393 8.19528 8.979 8.70414C8.45408 9.21299 7.74236 9.49921 7 9.5Z" fill="#9F9F9F" />
            </svg>
            <div class="my-3 mr-10 mt-1 flex justify-center text-center align-middle text-sm font-bold text-black">Chennai</div>

            </div>
            <div class="my-3 mr-10 mt-1 flex justify-center text-sm font-light text-[#8A8A8A]">Technology and IT</div>
        </div>

        <div class="flex flex-row justify-evenly mt-7">
            <div class="my-3 mr-10 mt-1 flex justify-center rounded-xl bg-[#FFC107] bg-opacity-20 px-3 text-center align-middle text-base font-semibold text-[#FFC107]">Full Time</div>

            <div class="my-3 mr-10 mt-1 flex justify-center text-sm font-light text-black">Salary: 11-12LPA</div>
        </div>

        <div class="mx-6 my-2 mt-5 flex justify-center text-left align-middle text-lg font-light text-black tracking-wider">Seeking a skilled C# developer with a knack for problem-solving, a passion for clean code, and a drive for innovation in software development.</div>

        <div class="ml-9 flex flex-row justify-center">
            <img src={tn} alt="" />
        </div>

        </div>

    </div>
    <div class="mx-1 mt-7 flex flex-row justify-evenly">

        <div class="mx-10 flex w-[50%] flex-col p-3 shadow-lg my-4">
        <div class="my-5 flex justify-center text-4xl font-semibold tracking-wider text-[#050C26]">Product Tester</div>

        <div class="flex flex-row justify-evenly mt-3">
            <div class="mr-1 flex flex-row">
            <svg class="mr-1" width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0C3.13556 0 0 2.73592 0 6.10714C0 11.5357 7 19 7 19C7 19 14 11.5357 14 6.10714C14 2.73592 10.8644 0 7 0ZM7 9.5C6.44621 9.5 5.90486 9.34081 5.4444 9.04256C4.98395 8.74431 4.62506 8.3204 4.41314 7.82443C4.20121 7.32846 4.14576 6.7827 4.2538 6.25618C4.36184 5.72966 4.62851 5.24602 5.0201 4.86642C5.41169 4.48682 5.9106 4.22831 6.45375 4.12358C6.99689 4.01885 7.55988 4.0726 8.07151 4.27804C8.58315 4.48348 9.02045 4.83138 9.32811 5.27774C9.63578 5.7241 9.8 6.24888 9.8 6.78571C9.79919 7.50535 9.50393 8.19528 8.979 8.70414C8.45408 9.21299 7.74236 9.49921 7 9.5Z" fill="#9F9F9F" />
            </svg>
            <div class="my-3 mr-10 mt-1 flex justify-center text-center align-middle text-sm font-bold text-black">Chennai</div>

            </div>
            <div class="my-3 mr-10 mt-1 flex justify-center text-sm font-light text-[#8A8A8A]">Technology and IT</div>
        </div>

        <div class="flex flex-row justify-evenly mt-7">
            <div class="my-3 mr-10 mt-1 flex justify-center rounded-xl bg-[#FFC107] bg-opacity-20 px-3 text-center align-middle text-base font-semibold text-[#FFC107]">Full Time</div>

            <div class="my-3 mr-10 mt-1 flex justify-center text-sm font-light text-black">Salary: 15-16LPA</div>
        </div>

        <div class="mx-6 my-2 mt-5 flex justify-center text-left align-middle text-lg font-light text-black tracking-wider">We're seeking an enthusiastic and meticulous individual to join our team as a product tester. The ideal candidate should possess a keen eye for detail, a passion for quality assurance, and a commitment to delivering impeccable results.</div>

        <div class="ml-9 flex flex-row justify-center">
            <img src={slk} alt="" />
        </div>

        </div>

        <div class="mx-10 flex w-[50%] flex-col p-3 shadow-lg">
        <div class="my-5 flex justify-center text-4xl font-semibold tracking-wider text-[#050C26]">Recruit Manager </div>


        <div class="flex flex-row justify-evenly mt-3">
            <div class="mr-1 flex flex-row">
            <svg class="mr-1" width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0C3.13556 0 0 2.73592 0 6.10714C0 11.5357 7 19 7 19C7 19 14 11.5357 14 6.10714C14 2.73592 10.8644 0 7 0ZM7 9.5C6.44621 9.5 5.90486 9.34081 5.4444 9.04256C4.98395 8.74431 4.62506 8.3204 4.41314 7.82443C4.20121 7.32846 4.14576 6.7827 4.2538 6.25618C4.36184 5.72966 4.62851 5.24602 5.0201 4.86642C5.41169 4.48682 5.9106 4.22831 6.45375 4.12358C6.99689 4.01885 7.55988 4.0726 8.07151 4.27804C8.58315 4.48348 9.02045 4.83138 9.32811 5.27774C9.63578 5.7241 9.8 6.24888 9.8 6.78571C9.79919 7.50535 9.50393 8.19528 8.979 8.70414C8.45408 9.21299 7.74236 9.49921 7 9.5Z" fill="#9F9F9F" />
            </svg>
            <div class="my-3 mr-10 mt-1 flex justify-center text-center align-middle text-sm font-bold text-black">Coimbatore</div>

            </div>
            <div class="my-3 mr-10 mt-1 flex justify-center text-sm font-light text-[#8A8A8A]">Technology and IT</div>
        </div>

        <div class="flex flex-row justify-evenly mt-7">
            <div class="my-3 mr-10 mt-1 flex justify-center rounded-xl bg-[#FFC107] bg-opacity-20 px-3 text-center align-middle text-base font-semibold text-[#FFC107]">Full Time</div>

            <div class="my-3 mr-10 mt-1 flex justify-center text-sm font-light text-black">Salary: 8-9LPA</div>
        </div>

        <div class="mx-6 my-2 mt-5 flex justify-center text-left align-middle text-lg font-light text-black tracking-wider">We're in search of a dynamic and strategic-minded individual to lead our recruitment efforts as a Recruitment Manager.</div>

        <div class="ml-9 flex flex-row justify-center">
            <img src={eth} alt="" />
        </div>

        </div>

    </div>
    <div class="flex justify-center mt-5">

    <div class="m-1 flex rounded-xl py-3 bg-[#FAB140] px-5  text-white text-4xl hover:scale-95">Search More</div>
    </div>
    </div>

            </div>
        )
    }
