'use client';

import Image from "next/image";
import personSvg from '@/public/person.svg'

// Repeat the below componenet for every block
export default function InfoCard() {
    return (
        <div className={`text-black bg-white shadow-md shadow-white rounded-xl px-4 py-2`}>
            <p className={`font-nohemi-bold text-2xl`}>A-Block</p>

            {/* Repeat the below div for every school */}
            <div>
                <p className={`font-montserrat-bold text-lg`}>School of Engineering</p>

                <div className={`w-full flex flex-col `}>
                    {/* Prof Data */}
                    {/* Repeat the below div for every professor */}
                    <div className={`flex flex-row gap-2 items-center`}>
                        <Image className={`w-[40px] aspect-square`} src={personSvg} alt={`Person`}/>
                        <div className={`flex flex-col`}>
                            <p className={`font-montserrat-semibold`}>Professor Name</p>
                            <div className={`flex flex-row gap-2 font-montserrat-medium`}>
                                <p>Department</p>
                                <p>Room</p>
                            </div>
                        </div>
                        <button className={`h-fit px-3 py-1 rounded-full text-white bg-gradient-to-r from-snuxplore-footer-g2 to-snuxplore-footer-g1`}>
                            Contact
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}