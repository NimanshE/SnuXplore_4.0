'use client';
import { profData } from "@/data/profData";
import { useState } from "react";
import InfoCard from "./InfoCard";

export default function InfoGallery() {
    const [currentTab, setCurrentTab] = useState<number>(0);

    return (
        <div className={`flex flex-col`}>
            <div className={`bg-white shadow-md shadow-white h-fit w-fit rounded-xl px-4 py-2 flex flex-row gap-8 mb-8`}>
                <button onClick={() => setCurrentTab(0)} className={`transition-all duration-300 font-montserrat-bold px-4 py-1 rounded-lg ${currentTab === 0 ? 'text-white bg-gradient-to-r from-snuxplore-footer-g2 to-snuxplore-footer-g1' : 'text-snuxplore-footer-g1 hover:bg-neutral-200'}`}>
                    Professors
                </button>
                <button onClick={() => setCurrentTab(1)} className={`transition-all duration-300 font-montserrat-bold px-4 py-1 rounded-lg ${currentTab === 1 ? 'text-white bg-gradient-to-r from-snuxplore-footer-g2 to-snuxplore-footer-g1' : 'text-snuxplore-footer-g1 hover:bg-neutral-200'}`}>
                    Laboratories
                </button>
            </div>

            <div className={`${currentTab === 0 ? 'block' : 'hidden'}`}>
                <div>
                    
                </div>
            </div>

            {/* Test */}
            <InfoCard />
        </div>
    )
}