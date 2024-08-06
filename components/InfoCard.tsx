'use client';

import Image from "next/image";
import personSvg from '@/public/person.svg'
import { IDept, IProf } from "@/data/profData";

interface InfoCardProps {
    block: string;
    departments: IDept;
}

const InfoCard: React.FC<InfoCardProps> = ({ block, departments }) => {
    
    function shortenString(input: string): string {
        if (input.length > 25) {
            return input.slice(0, 22) + '...';
        }
        return input;
    }

    return (
        <div className={`w-[90%] text-black bg-white shadow-md shadow-white rounded-xl md:px-4 px-2 md:py-4 py-2 mb-4`}>
            <p className={`font-nohemi-bold text-2xl`}>{block}-Block</p>
            {Object.entries(departments).map(([department, professors]: [string, IProf[]]) => (
                <div key={department}>
                    <p className={`font-montserrat-bold text-lg mt-2 capitalize`}>{department}</p>
                    {Array.isArray(professors) && professors.map((prof, index) => (
                        <div key={index} className={`flex flex-row justify-between items-center mb-4 w-full`}>
                            <div className={`flex flex-row`}>
                                <Image className={`w-[40px] aspect-square`} src={personSvg} alt={`Person`} />
                                <div className={`flex flex-col`}>
                                    <p className={`font-montserrat-semibold`}>{prof.name}</p>
                                    <div className={`flex flex-row gap-2 font-montserrat-medium text-sm`}>
                                        <p>{shortenString(prof.department)}</p>
                                        <p>{prof.room}</p>
                                    </div>
                                </div>
                            </div>
                            <button className={`h-fit px-3 py-1 rounded-full text-white bg-gradient-to-r from-snuxplore-footer-g2 to-snuxplore-footer-g1`}>
                                Contact
                            </button>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default InfoCard;
