'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ComingSoon() {
    const router = useRouter();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative min-h-screen w-full flex justify-center items-center p-4">
            {/* Background Color Sections (Evenly Divided Vertically) */}
            <div className="absolute inset-0 flex">
                <div className="w-1/4 h-full bg-blue-200"></div>
                <div className="w-1/4 h-full bg-orange-100"></div>
                <div className="w-1/4 h-full bg-yellow-100"></div>
                <div className="w-1/4 h-full bg-green-200"></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundSize: "20px 20px",
                    backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
                }}
            />

            {/* MLSA Logo */}
            <div className="absolute top-5 left-5 z-10">
                <Image src="/mlsamietlogo1.png" alt="MLSA MIET Logo" width={80} height={40} priority />
            </div>

            {/* Browser Window UI */}
            <div className="relative z-10 w-full max-w-6xl min-h-[400px] bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200">
                {/* Browser Header */}
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center">
                    <div className="flex gap-2 mr-4">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    </div>
                </div>

                {/* Content */}
                <div className="py-16 px-6 min-h-[300px] flex flex-col justify-center items-center text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                        Something Exciting is Coming Soon...
                    </h1>
                    <p className="text-xl text-gray-700 ">
                        👉 Hit the &apos;JOIN&apos; button &amp; unlock the next level! 😎 🔐
                    </p>


                    <a href="https://chat.whatsapp.com/KM2kqvUaJhdIjmy1GkFrmq">

                        <button
                            className={`mt-10 px-8 py-3 bg-blue-600 text-white font-medium rounded-full transform transition-all duration-300 ${isHovered ? 'scale-105 bg-blue-700' : ''
                                }`}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            JOIN
                        </button>
                    </a>
                </div>



                {/* Browser Footer */}
                <div className="h-10 bg-gray-50 border-t border-gray-200"></div>
            </div>
        </div >
    );
}
