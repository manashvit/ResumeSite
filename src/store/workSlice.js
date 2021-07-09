import { createSlice } from "@reduxjs/toolkit";
import hondaImg from '../assets/images/honda.png';
import qssImg from '../assets/images/qss.png';
import serverguyImg from '../assets/images/serverguy.png';
import genpactImg from '../assets/images/genpact.png';
import satisfiedImg from '../assets/images/satisfied.png';
import certifiedImg from '../assets/images/certified.png';
import employeeImg from '../assets/images/employee.png';
import trainerImg from '../assets/images/trainer.png';
import successImg from '../assets/images/success.png';

const exp = { years: '5', clients: '12', projects: '45' },
    work = [
        { company: 'Honda Car Limited, Noida', img: hondaImg, role: 'Javascript Intern', duration: 'june-july 2014', desp: 'Worked as javascript developer and prepared utilities for logging hours of the employees in different departments and forwarding weekly report to the managers.' },
        { company: 'QSS Technsoft, Noida', img: qssImg, role: 'MERN Stack Developer', duration: 'oct-dec 2016', desp: 'Worked as MEAN Stack developer and made multiple  web applications from scratch using AngularJs and NodeJs with built in authentication  and authorization functionality along with handling data in mongoDb and deployed applications on the server using PM2 module.' },
        { company: 'ServerGuy, Delhi', img: serverguyImg, role: 'FULL Stack Developer', duration: 'Dec 2016 - DEC 2019', desp: "Started my role as MERN Stack developer and took responsibility of developing along with designing both Frontend and Backend of company internal products single-handedly using React, Nodejs, MySql, Docker Containers and GIT. Bagged promotion to become FULL Stack Engineer after developing my skills in the Cloud(AWS) and Dev-Ops technologies like Git CI/CD, Docker, Kubernetes, Rundeck, Ansible etc. Before my last day in office, I was able lead a team of 5 developers to design,develop,deploy and debug company's 3 major products."},
        { company: 'Genpact, Bangalore', img: genpactImg, role: 'Asst. Manager (FrontEnd)', duration: 'DEC 2019 - today', desp: 'Currently working as Asst. Manager is Genpact Sharepoint Team in Bangalore. Along with developing Modern Sharepont Applications on React and Nodejs for various Clients, my role comprises client-dealing, team-building, giving training sessions, codebase standardization and maintaining  agile flow during project execution. Currently bagged number of Genpact Recognition Awards and Rising Star of the quarter, Top learners of the month and Operational Excellence being most precious awards.' },
    ],
    achieve = [
        { title: 'Six Sigma Green Belt Certified', img: certifiedImg, desp: 'Prepaired a digital soultion for the client to save 1.5 FTE (USD 140400 ~ dollar equivalent)' },
        { title: 'Rising Star of the quarter (2020)', img: employeeImg, desp: 'Delivered a dozen projects in first quarter seamlessly with lowest UAT Bug Rate' },
        { title: 'Client-Feedback Excellence (2021)', img: satisfiedImg, desp: 'Received recognition from clients multiple times for hassle-free project deliveries' },
        { title: 'React Trainer (2021)', img: trainerImg, desp: 'Given sessions on UI Development with ReactJs and NodeJs to multiple departments personnel' },
        { title: 'Operational Excellence (2021)', img: successImg, desp: 'Received Award for uplifting Team Projects delivery quality and execution' },
    ];

const workSlice = createSlice({
    name: 'workData',
    initialState: { exp, work, achieve },
    reducers: {

    }
})

export default workSlice.reducer