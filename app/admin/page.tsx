import InfoGallery from "@/components/InfoGallery";

export default function Admin() {
    return (
        <div className={`min-h-screen w-screen bg-snuxplore-brown text-white flex flex-col items-center md:py-24 py-10`}>
            <div className={`grid place-items-center px-4 mb-8`}>
                <p className={`font-nohemi-bold md:text-6xl text-5xl text-snuxplore-yellow text-wrap`}>Admin & <span className={`text-snuxplore-footer-g1`}>Contacts</span></p>
                <p className={`md:text-base text-sm text-center md:w-[70%]`}>This page contains all the information that bridges you to the Administration and DSA.</p>
            </div>

            <InfoGallery />
        </div>
    )
}