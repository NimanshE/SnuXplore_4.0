export interface IProf {
    name: string;
    department: string;
    email: string | null;
    school: string
    room: string
}

export interface IDept {
    "center for informatics"?: IProf[];
    "school of natural sciences"?: IProf[];
    "school of humanities and social sciences"?: IProf[];
    "school of management and entrepreneurship"?: IProf[];
    "school of engineering"?: IProf[];
}

export interface IProfData {
    A: IDept;
    B: IDept;
    C: IDept;
    D: IDept;
    F: IDept;
    R: IDept;
    Online: IDept;
}

export const profData: IProfData = {
    "A": {
        "center for informatics": [
            {
                "name": "Vijay Kumar",
                "department": "Center for Informatics",
                "email": "vijay.kumar@snu.edu.in",
                "school": "center for informatics",
                "room": "A227I"
            }
        ],
        "school of natural sciences": [
            {
                "name": "Ajit Kumar",
                "department": "Department Of Mathematics",
                "email": "ajit.kumar@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A111A"
            },
            {
                "name": "Ajoy Kapat",
                "department": "Department Of Chemistry",
                "email": "ajoy.kapat@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A227C"
            },
            {
                "name": "Aloke Kanjilal",
                "department": "Department Of Physics",
                "email": "aloke.kanjilal@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A017A"
            },
            {
                "name": "Amber Habib",
                "department": "Department Of Mathematics",
                "email": "amber.habib@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A111B"
            },
            {
                "name": "Animesh Samanta",
                "department": "Department Of Chemistry",
                "email": "animesh.samanta@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A227E"
            },
            {
                "name": "Anindita Chakrabarty",
                "department": "Department Of Life Sciences",
                "email": "anindita.chakrabarty@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A321J"
            },
            {
                "name": "Arindam Chatterjee",
                "department": "Department Of Physics",
                "email": "arindam.chatterjee@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A0231"
            },
            {
                "name": "Ashutosh Singh",
                "department": "Department Of Life Sciences",
                "email": "ashutosh.singh@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A321L"
            },
            {
                "name": "Basab Bijayi Dhar",
                "department": "Department Of Chemistry",
                "email": "basab.dhar@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A227H"
            },
            {
                "name": "Bhaskar Kaviraj",
                "department": "Department Of Physics",
                "email": "bhaskar.kaviraj@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A017C"
            },
            {
                "name": "Biswajit Guchhait",
                "department": "Department Of Chemistry",
                "email": "biswajit.guchhait@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A227D"
            },
            {
                "name": "Charu Sharma",
                "department": "Department Of Mathematics",
                "email": "charu.sharma@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A111D"
            },
            {
                "name": "Deepak Sehgal",
                "department": "Department Of Life Sciences",
                "email": "deepak.sehgal@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A321F"
            },
            {
                "name": "Dipti Dubey",
                "department": "Department Of Mathematics",
                "email": "dipti.dubey@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A111N"
            },
            {
                "name": "Heena Slathia",
                "department": "Department Of Physics",
                "email": "heena.slathia@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A021.1"
            },
            {
                "name": "Indranil Biswas",
                "department": "Department Of Mathematics",
                "email": "indranil.biswas@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A109D"
            },
            {
                "name": "Kenji Nishiwaki",
                "department": "Department Of Physics",
                "email": "kenji.nishiwaki@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A021D"
            },
            {
                "name": "Kshatresh Dutta Dubey",
                "department": "Department Of Chemistry",
                "email": "kshatresh.dubey@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A227B"
            },
            {
                "name": "Lakshmi Arya",
                "department": "Department Of Mathematics",
                "email": "lakshmi.arya@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A109.1"
            },
            {
                "name": "Naga Suresh Veerapu",
                "department": "Department Of Life Sciences",
                "email": "nagasuresh.veerapu@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A321E"
            },
            {
                "name": "Neelesh Naresh Dahanukar",
                "department": "Department Of Life Sciences",
                "email": "neelesh.dahanukar@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A321C"
            },
            {
                "name": "Neha Gupta",
                "department": "Department Of Mathematics",
                "email": "neha.gupta@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A111F"
            },
            {
                "name": "Niteesh Sahni",
                "department": "Department Of Mathematics",
                "email": "niteesh.sahni@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A111M"
            },
            {
                "name": "Pradeep Kumar",
                "department": "Department Of Mathematics",
                "email": "pradip.kumar@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A111K"
            },
            {
                "name": "Prem Chandra Pandey",
                "department": "Department Of Life Sciences",
                "email": "prem.pandey@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A321B"
            },
            {
                "name": "Priya Sudhir Johari",
                "department": "Department Of Physics",
                "email": "priya.johari@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A023G"
            },
            {
                "name": "Priyanka Grover",
                "department": "Department Of Mathematics",
                "email": "priyanka.grover@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A111G"
            },
            {
                "name": "Qazi Azhad Jamal",
                "department": "Department Of Mathematics",
                "email": "qazi.jamal@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A107D"
            },
            {
                "name": "Rajan Vyas",
                "department": "Department Of Life Sciences",
                "email": "rajan.vyas@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A321M"
            },
            {
                "name": "Rana Nandi",
                "department": "Department Of Physics",
                "email": "rana.nandi@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A021C"
            },
            {
                "name": "Rohini Garg",
                "department": "Department Of Life Sciences",
                "email": "rohini.garg@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A321H"
            },
            {
                "name": "Sajal Kumar Ghosh",
                "department": "Department Of Physics",
                "email": "sajal.ghosh@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A017D"
            },
            {
                "name": "Samit Bhattacharyya",
                "department": "Department Of Mathematics",
                "email": "samit.b@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A111H"
            },
            {
                "name": "Sanjeev Agrawal",
                "department": "Department Of Mathematics",
                "email": "sanjeev.agrawal@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A109C"
            },
            {
                "name": "Santanu Ghosh",
                "department": "Department Of Chemistry",
                "email": "santanu.ghosh@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A321A"
            },
            {
                "name": "Santosh Kumar",
                "department": "Department Of Physics",
                "email": "santosh.kumar@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A023K"
            },
            {
                "name": "Santosh Kumar Singh",
                "department": "Department Of Chemistry",
                "email": "santoshk.singh@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A227G"
            },
            {
                "name": "Santosh Singh",
                "department": "Department Of Mathematics",
                "email": "santosh.singh@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A111I"
            },
            {
                "name": "Saritha Rajan",
                "department": "Department Of Chemistry",
                "email": "saritha.rajan@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A227.1"
            },
            {
                "name": "Satyanarayana Reddy",
                "department": "Department Of Mathematics",
                "email": "satya.a@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A111E"
            },
            {
                "name": "Sneh Lata",
                "department": "Department Of Mathematics",
                "email": "sneh.lata@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A111C"
            },
            {
                "name": "Sri Krishna Jayadev Magani",
                "department": "Department Of Life Sciences",
                "email": "jayadevmsk@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A321K"
            },
            {
                "name": "Subhabrata Sen",
                "department": "Department Of Chemistry",
                "email": "subhabrata.sen@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A227A"
            },
            {
                "name": "Subhra Sen Gupta",
                "department": "Department Of Physics",
                "email": "subhra.sengupta@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A023J"
            },
            {
                "name": "Sudeepto Bhattacharya",
                "department": "Department Of Mathematics",
                "email": "sudeepto.bhattacharya@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A111J"
            },
            {
                "name": "Susanta Sinha Roy",
                "department": "Department Of Physics",
                "email": "susanta.roy@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A021B/R006C"
            },
            {
                "name": "Tanvi Deora",
                "department": "Department Of Life Sciences",
                "email": "tanvi.deora@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A321D"
            },
            {
                "name": "Tatini Rakshit",
                "department": "Department Of Chemistry",
                "email": "tatini.rakshit@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A227F"
            },
            {
                "name": "Taduri Srinivasa Siva Rama Krishna Rao",
                "department": "Department Of Mathematics",
                "email": "tssrk.rao@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A109A"
            },
            {
                "name": "Syed Mohammad Kamil",
                "department": "Department of Physics",
                "email": "kamil.syed@snu.edu.in",
                "school": "school of natural sciences",
                "room": "A017B"
            }
        ],
    },
    "B": {
        "school of humanities and social sciences": [
            {
                "name": "Kamal Arora",
                "department": "Department Of Art, Media And Performance",
                "email": "kamal.arora@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "B006"
            }
        ],
        "school of natural sciences": [
            {
                "name": "Anil Kumar Challa",
                "department": "Department Of Life Sciences",
                "email": "anil.challa@snu.edu.in",
                "school": "school of natural sciences",
                "room": "B122D"
            },
            {
                "name": "Ashish Gupta",
                "department": "Department Of Life Sciences",
                "email": "ashish.gupta@snu.edu.in",
                "school": "school of natural sciences",
                "room": "B122F"
            },
            {
                "name": "Kamlesh Ganesh Pawar",
                "department": "Department Of Life Sciences",
                "email": "kamlesh.pawar@snu.edu.in",
                "school": "school of natural sciences",
                "room": "B122E"
            },
            {
                "name": "Sanjeev Galande",
                "department": "Department Of Life Sciences",
                "email": "sanjeev.galande@snu.edu.in",
                "school": "school of natural sciences",
                "room": "B122B"
            },
            {
                "name": "Tushar Debnath",
                "department": "Department of Chemistry",
                "email": "tushar.debnath@snu.edu.in",
                "school": "school of natural sciences",
                "room": "B222"
            },
            {
                "name": "Bidyut Sarkar",
                "department": "Department of Chemistry",
                "email": "bidyut.sarkar@snu.edu.in",
                "school": "school of natural sciences",
                "room": "B222F"
            },
            {
                "name": "Colin Jamora",
                "department": "Department of Life Sciences",
                "email": "colin.jamora@snu.edu.in",
                "school": "school of natural sciences",
                "room": "B122C"
            }
        ],
        "school of management and entrepreneurship": [
            {
                "name": "Aishna Sharma",
                "department": "Department Of Economics",
                "email": "aishna.sharma@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B222B"
            },
            {
                "name": "Ankur Mehra",
                "department": "Finance, Accounting and Control",
                "email": "ankur.mehra@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B220F"
            },
            {
                "name": "Arvind Shatdal",
                "department": "Organisational Behaviour and Human Resource Management",
                "email": "arvind.shatdal@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B022A"
            },
            {
                "name": "Atanu Rakshit",
                "department": "Strategy Management, Entrepreneurship And International Business",
                "email": "atanu.rakshit@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B318G"
            },
            {
                "name": "Avinash Samvedi",
                "department": "Decision Sciences, Operations Management, And Information Systems",
                "email": "avinash.samvedi@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B318H"
            },
            {
                "name": "Bikramjit Rishi",
                "department": "Marketing Management",
                "email": "bikramjit.rishi@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B218C"
            },
            {
                "name": "Debarati Basu",
                "department": "Finance, Accounting And Control",
                "email": "debarati.basu@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B220E"
            },
            {
                "name": "Jaideep Ghosh",
                "department": "Decision Sciences, Operations Management, And Information Systems",
                "email": "jaideep.ghosh@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B020B"
            },
            {
                "name": "Kareem Abdul Waheed",
                "department": "Marketing Management",
                "email": "abdul.waheed@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B318D"
            },
            {
                "name": "Kaushik Chaudhuri",
                "department": "Organisational Behaviour and Human Resource Management",
                "email": "kaushik.chaudhuri@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B020A"
            },
            {
                "name": "MB Ragupathy",
                "department": "Finance, Accounting And Control",
                "email": "mb.ragupathy@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B218D"
            },
            {
                "name": "Meenakshi Ghosh",
                "department": "Economics And Public Policy",
                "email": "meenakshi.ghosh@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B022C"
            },
            {
                "name": "NT Sudarshan Naidu",
                "department": "Marketing Management",
                "email": "sudarshan.naidu@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B222C"
            },
            {
                "name": "Paromita Goswami",
                "department": "Marketing Management",
                "email": "paromita.goswami@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B222E"
            },
            {
                "name": "Partha Sarathi Roy",
                "department": "Strategy Management, Entrepreneurship And International Business",
                "email": "ParthaSarathi.Roy@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B222D"
            },
            {
                "name": "Pradeep Mehra",
                "department": "Strategy Management, Entrepreneurship And International Business",
                "email": "pradeep.mehra@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B220H"
            },
            {
                "name": "Rashmi Aggarwal",
                "department": "Strategy Management, Entrepreneurship And International Business",
                "email": "rashmi.aggarwal@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B318F"
            },
            {
                "name": "Satyam Mukherjee",
                "department": "Decision Sciences, Operations Management, And Information Systems",
                "email": "satyam.mukherjee@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B220H"
            },
            {
                "name": "Shalu Kalra",
                "department": "Finance, Accounting And Control",
                "email": "shalu.kalra@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B220C"
            },
            {
                "name": "Simanti Bandyopadhyay",
                "department": "Economics And Public Policy",
                "email": "simanti.bandyopadhyay@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B022F"
            },
            {
                "name": "Surya Sarathi Majumdar",
                "department": "Decision Sciences, Operations Management, And Information Systems",
                "email": "surya.majumdar@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B218A"
            },
            {
                "name": "Utsav Pandey",
                "department": "Decision Sciences, Operations Management, And Information Systems",
                "email": "Utsav.pandey@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B218B"
            },
            {
                "name": "Vallurupalli Vamsi",
                "department": "Decision Sciences, Operations Management, And Information Systems",
                "email": "vallurupalli.vamsi@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B022D"
            },
            {
                "name": "Vijayta Fulzele",
                "department": "Decision Sciences, Operations Management, And Information Systems",
                "email": "vijayta.fulzele@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B220D"
            },
            {
                "name": "Vinita Krishna",
                "department": "General Management",
                "email": "vinita.krishna@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B020D"
            },
            {
                "name": "Vivek Khanna",
                "department": "Organisational Behaviour and Human Resource Management",
                "email": "vivek.khanna@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B022E"
            },
            {
                "name": "Arpita Bhattacharjee",
                "department": "Economics and Public Policy",
                "email": "arpita.bhattacharjee@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B318B"
            },
            {
                "name": "Sibani Mohapatra",
                "department": "Decision Sciences, Operations Management, and Information Systems",
                "email": "sibani.mohapatra@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B318E"
            },
            {
                "name": "Deepak Kumar Sinha",
                "department": "Strategy Management, Entrepreneurship and International Business",
                "email": "deepak.sinha@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B122G"
            },
            {
                "name": "Debmalya Biswas",
                "department": "General Management",
                "email": "debmalya.biswas@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B318"
            },
            {
                "name": "Ashish Vazirani",
                "department": "Finance, Accounting and Control",
                "email": "ashish.vazirani@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "B218B"
            }
        ]
    },
    "C": {
        "school of natural sciences": [
            {
                "name": "Jugal Das",
                "department": "Department of Life Sciences",
                "email": "jugal.das@snu.edu.in",
                "school": "school of natural sciences",
                "room": "CiTRES 03 (Animal Block , near A block)"
            },
            {
                "name": "Rudra Nayan Das",
                "department": "Department of Life Sciences",
                "email": "rudra.das@snu.edu.in",
                "school": "school of natural sciences",
                "room": "CiTRES02 (Animal Block , near A block)"
            }
        ],
        "school of engineering": [
            {
                "name": "Aakash Sinha",
                "department": "Department Of Electrical Engineering",
                "email": "aakash.sinha@snu.edu.in",
                "school": "school of engineering",
                "room": "C214G"
            },
            {
                "name": "Amit Bakshi",
                "department": "Department Of Electrical Engineering",
                "email": "Amit.Bakshi@snu.edu.in",
                "school": "school of engineering",
                "room": "C214E"
            },
            {
                "name": "Amitabh Chatterjee",
                "department": "Department Of Electrical Engineering",
                "email": "amitabh.chatterjee@snu.edu.in",
                "school": "school of engineering",
                "room": "C219M"
            },
            {
                "name": "Ankit Gupta",
                "department": "Department Of Mechanical Engineering",
                "email": "ankit.gupta1@snu.edu.in",
                "school": "school of engineering",
                "room": "C212F"
            },
            {
                "name": "Ashish Kumar Thokchom",
                "department": "Department Of Chemical Engineering",
                "email": "ashish.thokchom@snu.edu.in",
                "school": "school of engineering",
                "room": "C318G"
            },
            {
                "name": "Atri Nath",
                "department": "Department Of Civil Engineering",
                "email": "atri.nath@snu.edu.in",
                "school": "school of engineering",
                "room": "C322A"
            },
            {
                "name": "Atul Vir Singh",
                "department": "Department Of Electrical Engineering",
                "email": "atul.singh@snu.edu.in",
                "school": "school of engineering",
                "room": "C216D"
            },
            {
                "name": "Bhupender Kumar Verma",
                "department": "Department Of Mechanical Engineering",
                "email": "bhupender.verma@snu.edu.in",
                "school": "school of engineering",
                "room": "C121E.2"
            },
            {
                "name": "Dhiraj Kumar Garg",
                "department": "Department Of Chemical Engineering",
                "email": "dhiraj.garg@snu.edu.in",
                "school": "school of engineering",
                "room": "C320D"
            },
            {
                "name": "Divya Shrivastava",
                "department": "Department Of Mechanical Engineering",
                "email": "divya.shrivastava@snu.edu.in",
                "school": "school of engineering",
                "room": "C212D"
            },
            {
                "name": "Dolly Sharma",
                "department": "Department Of Computer Science And Engineering",
                "email": "dolly.sharma@snu.edu.in",
                "school": "school of engineering",
                "room": "C219G"
            },
            {
                "name": "Ellora Padhi",
                "department": "Department Of Civil Engineering",
                "email": "ellora.padhi@snu.edu.in",
                "school": "school of engineering",
                "room": "C322C"
            },
            {
                "name": "Ganeshthangaraj Ponniah",
                "department": "Department Of Mechanical Engineering",
                "email": "Ganeshthangaraj.Ponniah@snu.edu.in",
                "school": "school of engineering",
                "room": "C212C"
            },
            {
                "name": "Ghanshyam Pal",
                "department": "Department Of Civil Engineering",
                "email": "ghanshyam.pal@snu.edu.in",
                "school": "school of engineering",
                "room": "C121H"
            },
            {
                "name": "Gopal Das Singhal",
                "department": "Department Of Civil Engineering",
                "email": "gopal.singhal@snu.edu.in",
                "school": "school of engineering",
                "room": "C121J"
            },
            {
                "name": "Gurmail Singh Benipal",
                "department": "Department Of Civil Engineering",
                "email": "gurmail.benipal@snu.edu.in",
                "school": "school of engineering",
                "room": "C322E"
            },
            {
                "name": "Gyan Vikash",
                "department": "Department Of Civil Engineering",
                "email": "gyan.vikash@snu.edu.in",
                "school": "school of engineering",
                "room": "C121K"
            },
            {
                "name": "Harender Sinhmar",
                "department": "Department Of Mechanical Engineering",
                "email": "harender@snu.edu.in",
                "school": "school of engineering",
                "room": "C212E"
            },
            {
                "name": "Harpreet Singh",
                "department": "Department Of Mechanical Engineering",
                "email": "harpreet.arora@snu.edu.in",
                "school": "school of engineering",
                "room": "C121D"
            },
            {
                "name": "Harpreet Singh Grewal",
                "department": "Department Of Mechanical Engineering",
                "email": "harpreet.grewal@snu.edu.in",
                "school": "school of engineering",
                "room": "C121C"
            },
            {
                "name": "Himanshu Sekhar Sahu",
                "department": "Department Of Electrical Engineering",
                "email": "himanshu.sahu@snu.edu.in",
                "school": "school of engineering",
                "room": "C216H"
            },
            {
                "name": "Hitesh Upreti",
                "department": "Department Of Civil Engineering",
                "email": "hitesh.upreti@snu.edu.in",
                "school": "school of engineering",
                "room": "C121L"
            },
            {
                "name": "Jagabandhu Dixit",
                "department": "Department Of Civil Engineering",
                "email": "jagabandhu.dixit@snu.edu.in",
                "school": "school of engineering",
                "room": "C322H"
            },
            {
                "name": "Jitendra Prajapati",
                "department": "Department Of Electrical Engineering",
                "email": "jitendra.prajapati@snu.edu.in",
                "school": "school of engineering",
                "room": "C216A"
            },
            {
                "name": "Kamal Singh",
                "department": "Department Of Electrical Engineering",
                "email": "kamal.singh@snu.edu.in",
                "school": "school of engineering",
                "room": "C214A"
            },
            {
                "name": "Karan Gupta",
                "department": "Department Of Chemical Engineering",
                "email": "karan.gupta@snu.edu.in",
                "school": "school of engineering",
                "room": "C318C"
            },
            {
                "name": "Madhur Deo Upadhayay",
                "department": "Department Of Electrical Engineering",
                "email": "madhur.upadhayay@snu.edu.in",
                "school": "school of engineering",
                "room": "C216C"
            },
            {
                "name": "Manoj Kumar Singh",
                "department": "Department Of Civil Engineering",
                "email": "manoj.singh@snu.edu.in",
                "school": "school of engineering",
                "room": "C322B"
            },
            {
                "name": "Meha Bhogra",
                "department": "Department Of Mechanical Engineering",
                "email": "meha.bhogra@snu.edu.in",
                "school": "school of engineering",
                "room": "C121A"
            },
            {
                "name": "Naveen G Babu",
                "department": "Department Of Electrical Engineering",
                "email": "naveen.babu@snu.edu.in",
                "school": "school of engineering",
                "room": "C219H"
            },
            {
                "name": "Neeru Chhabra",
                "department": "Department Of Electrical Engineering",
                "email": "neeru.chhabra@snu.edu.in",
                "school": "school of engineering",
                "room": "C214C"
            },
            {
                "name": "Nitin Kumar",
                "department": "Department Of Computer Science And Engineering",
                "email": "nitin.kumar@snu.edu.in",
                "school": "school of engineering",
                "room": "C320G"
            },
            {
                "name": "Pooja Singh",
                "department": "Department Of Computer Science And Engineering",
                "email": "pooja.malik@snu.edu.in",
                "school": "school of engineering",
                "room": "C219J"
            },
            {
                "name": "Priyanka Katiyar",
                "department": "Department Of Chemical Engineering",
                "email": "priyanka@snu.edu.in",
                "school": "school of engineering",
                "room": "C318F"
            },
            {
                "name": "Priyanka Verma",
                "department": "Department Of Electrical Engineering",
                "email": "priyanka.verma@snu.edu.in",
                "school": "school of engineering",
                "room": "C212H"
            },
            {
                "name": "Rajeev Kumar Singh",
                "department": "Department Of Computer Science And Engineering",
                "email": "rajeev.kumar@snu.edu.in",
                "school": "school of engineering",
                "room": "C219E"
            },
            {
                "name": "Rajendra Prasad Chhabra",
                "department": "Department Of Chemical Engineering",
                "email": "rajendra.chhabra@snu.edu.in",
                "school": "school of engineering",
                "room": "C320B"
            },
            {
                "name": "Ramesh Gupta Burela",
                "department": "Department Of Mechanical Engineering",
                "email": "ramesh.gupta@snu.edu.in",
                "school": "school of engineering",
                "room": "C212E"
            },
            {
                "name": "Ranjit Kumar",
                "department": "Department of Chemical Engineering",
                "email": null,
                "school": "school of engineering",
                "room": "C320C"
            },
            {
                "name": "Rohit Singh",
                "department": "Department Of Electrical Engineering",
                "email": "rohit.singh@snu.edu.in",
                "school": "school of engineering",
                "room": "C214B"
            },
            {
                "name": "Sailesh N. Behera",
                "department": "Department Of Civil Engineering",
                "email": "sailesh.behera@snu.edu.in",
                "school": "school of engineering",
                "room": "C322F"
            },
            {
                "name": "Sandeep Kumar Soni",
                "department": "Department Of Electrical Engineering",
                "email": "sandeep.soni@snu.edu.in",
                "school": "school of engineering",
                "room": "C214F"
            },
            {
                "name": "Sanjay Krishna",
                "department": "Department Of Chemical Engineering",
                "email": "sanjay.krishna@snu.edu.in",
                "school": "school of engineering",
                "room": "C318B"
            },
            {
                "name": "Sanjeev Yadav",
                "department": "Department Of Chemical Engineering",
                "email": "sanjeev.yadav@snu.edu.in",
                "school": "school of engineering",
                "room": "C318E"
            },
            {
                "name": "Santanu Mitra",
                "department": "Department Of Mechanical Engineering",
                "email": "santanu.mitra@snu.edu.in",
                "school": "school of engineering",
                "room": "C121F"
            },
            {
                "name": "Sathi Rajesh Reddy",
                "department": "Department Of Mechanical Engineering",
                "email": "sathi.reddy@snu.edu.in",
                "school": "school of engineering",
                "room": "C212B"
            },
            {
                "name": "Saurabh Janardan Shigwan",
                "department": "Department Of Computer Science And Engineering",
                "email": "saurabh.shigwan@snu.edu.in",
                "school": "school of engineering",
                "room": "C219L"
            },
            {
                "name": "Shalini Rankavat",
                "department": "Department Of Civil Engineering",
                "email": "shalini.rankavat@snu.edu.in",
                "school": "school of engineering",
                "room": "C121M"
            },
            {
                "name": "Shankar Kumar Ghosh",
                "department": "Department Of Computer Science And Engineering",
                "email": "shankar.ghosh@snu.edu.in",
                "school": "school of engineering",
                "room": "C219A"
            },
            {
                "name": "Sheel Sindhu Manohar",
                "department": "Department Of Computer Science And Engineering",
                "email": "sheel.manohar@snu.edu.in",
                "school": "school of engineering",
                "room": "C320F"
            },
            {
                "name": "Shivani Bisht",
                "department": "Department Of Civil Engineering",
                "email": "shivani.bisht@snu.edu.in",
                "school": "school of engineering",
                "room": "C121E.1"
            },
            {
                "name": "Snehasis Mukherjee",
                "department": "Department Of Computer Science And Engineering",
                "email": "snehasis.mukherjee@snu.edu.in",
                "school": "school of engineering",
                "room": "C219K"
            },
            {
                "name": "Sonal Singhal",
                "department": "Department Of Electrical Engineering",
                "email": "Sonal.Singhal@snu.edu.in",
                "school": "school of engineering",
                "room": "C214D"
            },
            {
                "name": "Sonia Khetarpaul",
                "department": "Department Of Computer Science And Engineering",
                "email": "sonia.khetarpaul@snu.edu.in",
                "school": "school of engineering",
                "room": "C219D"
            },
            {
                "name": "Sumedha Moharana",
                "department": "Department Of Civil Engineering",
                "email": "sumedha.maharana@snu.edu.in",
                "school": "school of engineering",
                "room": "C121G"
            },
            {
                "name": "Sumit Tiwari",
                "department": "Department Of Mechanical Engineering",
                "email": "sumit.tiwari@snu.edu.in",
                "school": "school of engineering",
                "room": "C212G"
            },
            {
                "name": "Susant Kumar Padhi",
                "department": "Department Of Civil Engineering",
                "email": "susant.padhi@snu.edu.in",
                "school": "school of engineering",
                "room": "C322D"
            },
            {
                "name": "Swaminath Bharadwaj Gourishankar",
                "department": "Department Of Chemical Engineering",
                "email": "swaminath.bharadwaj@snu.edu.in",
                "school": "school of engineering",
                "room": "C318H"
            },
            {
                "name": "Sweta Mishra",
                "department": "Department Of Computer Science And Engineering",
                "email": "sweta.mishra@snu.edu.in",
                "school": "school of engineering",
                "room": "C219C"
            },
            {
                "name": "Upendra Kumar Pandey",
                "department": "Department Of Electrical Engineering",
                "email": "upendra.pandey@snu.edu.in",
                "school": "school of engineering",
                "room": "C216G"
            },
            {
                "name": "V M Rajesh",
                "department": "Department Of Chemical Engineering",
                "email": "vm.rajesh@snu.edu.in",
                "school": "school of engineering",
                "room": "C318D"
            },
            {
                "name": "Venkatnarayan Hariharan",
                "department": "Department Of Electrical Engineering",
                "email": "venkatnarayan.h@snu.edu.in",
                "school": "school of engineering",
                "room": "C214H"
            },
            {
                "name": "Venkatramani Jagadish",
                "department": "Department Of Mechanical Engineering",
                "email": "j.venkatramani@snu.edu.in",
                "school": "school of engineering",
                "room": "C212"
            },
            {
                "name": "Vijay kumar Chakka",
                "department": "Department Of Electrical Engineering",
                "email": "Vijay.Chakka@snu.edu.in",
                "school": "school of engineering",
                "room": "C216F"
            },
            {
                "name": "Vinod Sharma",
                "department": "Department Of Electrical Engineering",
                "email": "vinod.sharma@snu.edu.in",
                "school": "school of engineering",
                "room": "C216B"
            },
            {
                "name": "Visakh Vaikuntanathan",
                "department": "Department Of Mechanical Engineering",
                "email": "visakh.v@snu.edu.in",
                "school": "school of engineering",
                "room": "C2124"
            },
            {
                "name": "Vishnu Mishra",
                "department": "Department Of Chemical Engineering",
                "email": "vishnu.mishra1@snu.edu.in",
                "school": "school of engineering",
                "room": "C320H"
            },
            {
                "name": "Yamini Sudha Sistla",
                "department": "Department Of Chemical Engineering",
                "email": "yamini.sistla@snu.edu.in",
                "school": "school of engineering",
                "room": "C318A"
            },
            {
                "name": "Anupam Basu",
                "department": "Department of Computer Science and Engineering",
                "email": "anupam.basu@snu.edu.in",
                "school": "school of engineering",
                "room": "C219F.1"
            },
            {
                "name": "Archit Somani",
                "department": "Department of Computer Science and Engineering",
                "email": "archit.somani@snu.edu.in",
                "school": "school of engineering",
                "room": "C219B"
            },
            {
                "name": "Suchi Kumari",
                "department": "Department of Computer Science and Engineering",
                "email": "suchi.kumari@snu.edu.in",
                "school": "school of engineering",
                "room": "C219K"
            },
            {
                "name": "Kamal Agrawal",
                "department": "Department of Electrical Engineering",
                "email": "kamal.agrawal@snu.edu.in",
                "school": "school of engineering",
                "room": "C212H"
            },
            {
                "name": "Rakesh Palisetty",
                "department": "Department of Electrical Engineering",
                "email": "rakesh.palisetty@snu.edu.in",
                "school": "school of engineering",
                "room": "C121B"
            },
            {
                "name": "Subhendu Bikash Santra",
                "department": "Department of Electrical Engineering",
                "email": "subhendu.santra@snu.edu.in",
                "school": "school of engineering",
                "room": "C322G"
            },
            {
                "name": "Suneet Tuli",
                "department": "Department of Electrical Engineering",
                "email": "suneet.tuli@snu.edu.in",
                "school": "school of engineering",
                "room": "C238A"
            }
        ],
    },
    "D": {
        "school of humanities and social sciences": [
            {
                "name": "Aadya Kaktikar",
                "department": "Department Of Art, Media And Performance",
                "email": "aadya.kaktikar@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D130C"
            },
            {
                "name": "Aakriti Mandhwani",
                "department": "Department Of English",
                "email": "aakriti.mandhwani@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D236L"
            },
            {
                "name": "Abhimanyu Khan",
                "department": "Department Of Economics",
                "email": "abhimanyu.khan@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D132F"
            },
            {
                "name": "Aditi Singh",
                "department": "Department Of Economics",
                "email": "aditi.singh@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D116A"
            },
            {
                "name": "Ajay Dandekar",
                "department": "Department Of History And Archaeology",
                "email": "ajay.dandekar@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D207A"
            },
            {
                "name": "Amrita Ghosh Dastidar",
                "department": "Department Of Economics",
                "email": "amrita.dastidar@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D132P"
            },
            {
                "name": "Amritha Sruthi Radhakrishnan",
                "department": "Department Of Art, Media And Performance",
                "email": "amritha.r@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D207C"
            },
            {
                "name": "Anirban Ghosh",
                "department": "Department Of English",
                "email": "anirban.ghosh@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D236G"
            },
            {
                "name": "Anita Sharma",
                "department": "Department Of Sociology",
                "email": "anita.sharma@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D205B"
            },
            {
                "name": "Anubhuti Maurya",
                "department": "Department Of History And Archaeology",
                "email": "anubhuti.maurya@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D214B"
            },
            {
                "name": "Anup Pramanik",
                "department": "Department Of Economics",
                "email": "anup.pramanik@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D132E"
            },
            {
                "name": "Arka Roy Chaudhuri",
                "department": "Department Of Economics",
                "email": "arka.chaudhuri@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D116C"
            },
            {
                "name": "Ashokankur Datta",
                "department": "Department Of Economics",
                "email": "ashokankur.datta@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D132J"
            },
            {
                "name": "Ashwin Ramanathan",
                "department": "Department Of Design",
                "email": "ashwin.ramanathan@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D036K"
            },
            {
                "name": "Atul Mishra",
                "department": "Department Of International Relations And Governance Studies",
                "email": "atul.mishra@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D334C"
            },
            {
                "name": "Bahar Dutt",
                "department": "Department Of Art, Media And Performance",
                "email": "bahar.dutt@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D216A"
            },
            {
                "name": "Chen Tang",
                "department": "Department Of International Relations And Governance Studies",
                "email": "chen.tang@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D334P"
            },
            {
                "name": "Cheshta Grover",
                "department": "Department Of Economics",
                "email": "cg739@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D132B"
            },
            {
                "name": "Chinmay Sharma",
                "department": "Department Of English",
                "email": "chinmay.sharma@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D236E"
            },
            {
                "name": "Chinmaya Lal Thakur",
                "department": "Department Of English",
                "email": "chinmaya.thakur@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D236Q"
            },
            {
                "name": "Darryl William Reed",
                "department": "Department Of Economics",
                "email": "darryl.reed@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D334F"
            },
            {
                "name": "Deepika Sharma",
                "department": "Department Of History And Archaeology",
                "email": "deepika.sharma@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D214.4"
            },
            {
                "name": "Devika Bordia",
                "department": "Department Of Economics",
                "email": "devika.bordia@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D205A"
            },
            {
                "name": "Diviani Chaudhuri",
                "department": "Department Of English",
                "email": "diviani.chaudhuri@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D236C"
            },
            {
                "name": "Divya Kannan",
                "department": "Department Of History And Archaeology",
                "email": "divya.kannan@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D214A"
            },
            {
                "name": "Gatha Sharma",
                "department": "Department Of English",
                "email": "gatha.sharma@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D236K"
            },
            {
                "name": "Gautama Polanki",
                "department": "Department Of English",
                "email": "gautama.polanki@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D236D"
            },
            {
                "name": "George Nellickal",
                "department": "Department Of Sociology",
                "email": null,
                "school": "school of humanities and social sciences",
                "room": "D218.1"
            },
            {
                "name": "Gitanjali Sen",
                "department": "Department Of Economics",
                "email": "gitanjali.sen@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D132D"
            },
            {
                "name": "Hemanth Kadambi",
                "department": "Department Of History And Archaeology",
                "email": "hemanth.kadambi@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D216D"
            },
            {
                "name": "Hemant Sreekumar",
                "department": "Department Of Art, Media And Performance",
                "email": "hemant.sreekumar@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D036L"
            },
            {
                "name": "Iman Kumar Mitra",
                "department": "Department Of History And Archaeology",
                "email": "iman.mitra@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D216C"
            },
            {
                "name": "Jabin Thomas Jacob",
                "department": "Department Of International Relations And Governance Studies",
                "email": "jabin.jacob@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D334F"
            },
            {
                "name": "Kaustubh Mani Sengupta",
                "department": "Department Of History And Archaeology",
                "email": "kaustubh.sengupta@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D207B"
            },
            {
                "name": "Kurt Horner",
                "department": "Department Of Economics",
                "email": "kurt.horner@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D132M"
            },
            {
                "name": "Mamta Nagar",
                "department": "Department Of English",
                "email": "mamta.nagar@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D236.1"
            },
            {
                "name": "Mandar P. Oak",
                "department": "Department Of Economics",
                "email": "mandar.oak@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D120C"
            },
            {
                "name": "Manoj Pant",
                "department": "Department Of Economics",
                "email": "manoj.pant@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D132B"
            },
            {
                "name": "Medha",
                "department": "Department Of International Relations And Governance Studies",
                "email": "medha@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D334L"
            },
            {
                "name": "Meera Viswanathan",
                "department": "Department Of History And Archaeology",
                "email": "meera.visvanathan@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D214C"
            },
            {
                "name": "Megha Sharma",
                "department": "Department Of History And Archaeology",
                "email": "megha.sharma@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D207D"
            },
            {
                "name": "Partha Chatteriee",
                "department": "Department Of Economics",
                "email": "Partha.chatterjee@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D132G"
            },
            {
                "name": "Parul Gupta",
                "department": "Department Of Economics",
                "email": "parul.gupta@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D116B"
            },
            {
                "name": "Peilin lee",
                "department": "Department Of International Relations And Governance Studies",
                "email": "pielin.lee@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D334Q"
            },
            {
                "name": "Prakash Kumar",
                "department": "Department Of Design",
                "email": "prakash.kumar@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D036I"
            },
            {
                "name": "Priyanka Pandit",
                "department": "Department Of International Relations And Governance Studies",
                "email": "priyanka.pandit@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D334K"
            },
            {
                "name": "Punarjit Roychowdhury",
                "department": "Department Of Economics",
                "email": "punarjit.r@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D132H"
            },
            {
                "name": "Rajat Kathuria",
                "department": "Department Of Economics",
                "email": "rajat.kathuria@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D130A"
            },
            {
                "name": "Rajeswari Sarala Raina",
                "department": "Department Of International Relations And Governance Studies",
                "email": "rajeswari.raina@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D334J"
            },
            {
                "name": "Ram Ranjan",
                "department": "Department Of Economics",
                "email": "ram.ranjan@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D132K"
            },
            {
                "name": "Ravi Nandan Singh",
                "department": "Department Of Sociology",
                "email": "ravi.singh@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D220C"
            },
            {
                "name": "Sambudha Sen",
                "department": "Department Of English",
                "email": "sambudha.sen@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D236H"
            },
            {
                "name": "Sandro Brusco",
                "department": "Department Of Economics",
                "email": "sandro.brusco@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D132A"
            },
            {
                "name": "Sapna Sharma",
                "department": "Department Of Economics",
                "email": "sapna.sharma@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D132.6"
            },
            {
                "name": "Shabana Mitra",
                "department": "Department Of Economics",
                "email": "shabana.mitra@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D120B"
            },
            {
                "name": "Shahid Jamal",
                "department": "Department Of Art, Media And Performance",
                "email": "shahid.jamal@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D036L"
            },
            {
                "name": "Shampa Bhattacharjee",
                "department": "Department Of Economics",
                "email": "shampa.bhattacharjee@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D132I"
            },
            {
                "name": "Shraman Banerjee",
                "department": "Department Of Economics",
                "email": "shraman.banerjee@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D120A"
            },
            {
                "name": "Siddharth Mallavarapu",
                "department": "Department Of International Relations And Governance Studies",
                "email": "siddharth.m@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D334H"
            },
            {
                "name": "Siddiq Wahid",
                "department": "Department Of International Relations And Governance Studies",
                "email": "siddiq.wahid@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D334B"
            },
            {
                "name": "Snigdha Banerjee",
                "department": "Department Of Design",
                "email": "snigdha.banerjee@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D036J"
            },
            {
                "name": "Sreedeep Bhattacharya",
                "department": "Department Of Sociology",
                "email": "Sreedeep.Bhattacharya@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D036N"
            },
            {
                "name": "Sreejata Paul",
                "department": "Department Of English",
                "email": "sreejata.paul@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D236N"
            },
            {
                "name": "Sruthi Muraleedharan",
                "department": "Department Of International Relations And Governance Studies",
                "email": "sruthi.muraleedharan@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D334D"
            },
            {
                "name": "Subhajit Chandra",
                "department": "Department Of Design",
                "email": "subhajit.chandra@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D036H"
            },
            {
                "name": "Subhashim Goswami",
                "department": "Department Of Sociology",
                "email": "subhashim.goswami@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D220A"
            },
            {
                "name": "Suchismita Tarafdar",
                "department": "Department Of Economics",
                "email": "suchismita.tarafdar@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D132C"
            },
            {
                "name": "Sudeshna Guha",
                "department": "Department Of History And Archaeology",
                "email": "sudeshna.guha@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D216B"
            },
            {
                "name": "Teja Varma Pusapati",
                "department": "Department Of English",
                "email": "teja.pusapati@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D236F"
            },
            {
                "name": "Trishita Ray Barman",
                "department": "Department Of Economics",
                "email": "trishita.raybarman@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D132L"
            },
            {
                "name": "Tuhina Ganguly",
                "department": "Department Of Sociology",
                "email": "tuhina.ganguly@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D220B"
            },
            {
                "name": "Tulika Chandra",
                "department": "Department Of English",
                "email": "tulika.chandra@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D236J"
            },
            {
                "name": "Urmila Shripad Bhirdikar",
                "department": "Department Of Sociology",
                "email": "urmila.bhirdikar@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D220D"
            },
            {
                "name": "Vasundhara Bhojvaid",
                "department": "Department Of Sociology",
                "email": "vasundhara.bhojvaid@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D205C"
            },
            {
                "name": "Vikash Kumar",
                "department": "Department Of Design",
                "email": "vikash.kumar@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D036F"
            },
            {
                "name": "Vikram Kapur",
                "department": "Department Of English",
                "email": "Vikram.Kapur@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D236A"
            },
            {
                "name": "Vinayak Das Gupta",
                "department": "Department Of English",
                "email": "vinayak.dasgupta@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D236M"
            },
            {
                "name": "Yasmeen Arif",
                "department": "Department Of Sociology",
                "email": "yasmeen.arif@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D218A"
            },
            {
                "name": "Roma Chatterji",
                "department": "Department Of Sociology",
                "email": "roma.chatterji@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D220B"
            },
            {
                "name": "P. C. Saidalavi",
                "department": "Department Of Sociology",
                "email": "saidalavi.pc@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D218C"
            },
            {
                "name": "Shih Ting Lin",
                "department": "Department of International Relations and Governance Studies",
                "email": "shih.lin@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D334Q"
            },
            {
                "name": "Rajeswari S. Raina",
                "department": "Department of International Relations and Governance Studies",
                "email": "rajeswari.raina@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D334J"
            },
            {
                "name": "Kapil Patil",
                "department": "Department of International Relations and Governance Studies",
                "email": "Kapil.patil@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D334A"
            },
            {
                "name": "Iman Mitra",
                "department": "Department of History and Archaeology",
                "email": "iman.mitra@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "D216C"
            }
        ],
        "school of engineering": [
            {
                "name": "Dinkar Prasad",
                "department": "Department Of Electrical Engineering",
                "email": "dinkar.prasad@snu.edu.in",
                "school": "school of engineering",
                "room": "D216E"
            },
            {
                "name": "Sandeep Sen",
                "department": "Department Of Computer Science And Engineering",
                "email": "ssen@snu.edu.in",
                "school": "school of engineering",
                "room": "D126C"
            },
            {
                "name": "Sweta Kumari",
                "department": "Department of Computer Science and Engineering",
                "email": "sweta.kumari@snu.edu.in",
                "school": "school of engineering",
                "room": "D126B"
            }
        ],
        "school of management and entrepreneurship": [
            {
                "name": "Asish K Bhattacharyya",
                "department": "Finance, Accounting And Control",
                "email": "asish.bhattacharyya@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "D320B"
            },
            {
                "name": "Bibek Banerjee",
                "department": "Marketing Management",
                "email": "bibek.banerjee@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "D230A"
            },
            {
                "name": "Sundaravaradhan Venkatesh",
                "department": "Finance, Accounting And Control",
                "email": "sundaravaradhan.v@snu.edu.in",
                "school": "school of management and entrepreneurship",
                "room": "D320A"
            }
        ]
    },
    "F": {
        "school of humanities and social sciences": [
            {
                "name": "Anupam Roy",
                "department": "Department Of Art, Media and Performance",
                "email": "anupam.roy@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "F203"
            },
            {
                "name": "Anushka Rajendran",
                "department": "Department of Art, Media and Performance",
                "email": "anushka.rajendran@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "F201"
            },
            {
                "name": "Atul Bhalla",
                "department": "Department Of Art, Media And Performance",
                "email": "atul.bhalla@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "F202"
            },
            {
                "name": "Deepti Mulgund",
                "department": "Department Of Art, Media And Performance",
                "email": "deepti.mulgund@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "F204"
            },
            {
                "name": "Iram Ghufran",
                "department": "Department Of Art, Media And Performance",
                "email": "iram.ghufran@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "F205"
            },
            {
                "name": "Sonam Chaturvedi",
                "department": "Department Of Art, Media And Performance",
                "email": "sonam.chaturvedi@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "F201"
            },
            {
                "name": "Vasudha Thozhur",
                "department": "Department Of Art, Media And Performance",
                "email": "vasudha.thozhur@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "F201"
            }
        ],
    },
    "R": {
        "school of natural sciences": [
            {
                "name": "Bappaditya Gole",
                "department": "Department of Chemistry",
                "email": "bappaditya.gole@snu.edu.in",
                "school": "school of natural sciences",
                "room": "R118"
            },
            {
                "name": "Bimlesh Lochab",
                "department": "Department of Chemistry",
                "email": "bimlesh.lochab@snu.edu.in",
                "school": "school of natural sciences",
                "room": "R114"
            },
            {
                "name": "Debdas Ray",
                "department": "Department of Chemistry",
                "email": "debdas.ray@snu.edu.in",
                "school": "school of natural sciences",
                "room": "R110"
            },
            {
                "name": "Md. Mujahuddin Siddiqui",
                "department": "Department of Chemistry",
                "email": null,
                "school": "school of natural sciences",
                "room": "R108"
            },
            {
                "name": "Naiwrit Karmodak",
                "department": "Department of Chemistry",
                "email": "naiwrit.karmodak@snu.edu.in",
                "school": "school of natural sciences",
                "room": "R120"
            },
            {
                "name": "Nidhi Malhotra",
                "department": "Department of Chemistry",
                "email": "nidhi.malhotra@snu.edu.in",
                "school": "school of natural sciences",
                "room": "R112"
            },
            {
                "name": "Parthapratim Munshi",
                "department": "Department of Chemistry",
                "email": "parthapratim.munshi@snu.edu.in",
                "school": "school of natural sciences",
                "room": "R116"
            },
            {
                "name": "Koyeli Mapa",
                "department": "Department of Life Sciences",
                "email": "koyeli.mapa@snu.edu.in",
                "school": "school of natural sciences",
                "room": "R214"
            },
            {
                "name": "Geetanjali Chawla",
                "department": "Department of Life Sciences",
                "email": "geetanjali.chawla@snu.edu.in",
                "school": "school of natural sciences",
                "room": "R228"
            },
            {
                "name": "Prasun Kumar Roy",
                "department": "Department of Life Sciences",
                "email": "prasun.roy@snu.edu.in",
                "school": "school of natural sciences",
                "room": "R206"
            },
            {
                "name": "Puli Chandramouli Reddy",
                "department": "Department of Life Sciences",
                "email": "pc.reddy@snu.edu.in",
                "school": "school of natural sciences",
                "room": "R220"
            },
            {
                "name": "Richa Priyadarshini",
                "department": "Department of Life Sciences",
                "email": "richa.priyadarshini@snu.edu.in",
                "school": "school of natural sciences",
                "room": "R218"
            },
            {
                "name": "Sachin Deshmukh",
                "department": "Department of Life Sciences",
                "email": "sachin.deshmukh@snu.edu.in",
                "school": "school of natural sciences",
                "room": "R210"
            },
            {
                "name": "Soumya Pati",
                "department": "Department of Life Sciences",
                "email": null,
                "school": "school of natural sciences",
                "room": "R222"
            },
            {
                "name": "Binson Babu",
                "department": "Department of Physics",
                "email": "binson.babu@snu.edu.in",
                "school": "school of natural sciences",
                "room": "R004D"
            },
            {
                "name": "Hab. Ipsita Mandal",
                "department": "Department of Physics",
                "email": "ipsita.mandal@snu.edu.in",
                "school": "school of natural sciences",
                "room": "R004E"
            },
            {
                "name": "Mayukh Majumder",
                "department": "Department of Physics",
                "email": "mayukh.majumder@snu.edu.in",
                "school": "school of natural sciences",
                "room": "R004C"
            },
            {
                "name": "Samarendra Pratap Singh",
                "department": "Department of Physics",
                "email": "Samarendra.singh@snu.edu.in",
                "school": "school of natural sciences",
                "room": "R006E"
            },
            {
                "name": "Sucheta Mondal",
                "department": "Department of Physics",
                "email": "sucheta.mondal@snu.edu.in",
                "school": "school of natural sciences",
                "room": "R004E"
            },
            {
                "name": "Sujit K. Tandel",
                "department": "Department of Physics",
                "email": "sujit.tandel@snu.edu.in",
                "school": "school of natural sciences",
                "room": "R006D"
            }
        ],
    },
    'Online': {
        "school of humanities and social sciences": [
            {
                "name": "Monica Juneja",
                "department": "Department Of Art, Media And Performance",
                "email": "monica.juneja@snu.edu.in",
                "school": "school of humanities and social sciences",
                "room": "Online"
            }
        ],
        "school of engineering": [
            {
                "name": "Harish Karnick",
                "department": "Department Of Computer Science And Engineering",
                "email": "harish.karnick@snu.edu.in",
                "school": "school of engineering",
                "room": "Online"
            }
        ],
    }
}