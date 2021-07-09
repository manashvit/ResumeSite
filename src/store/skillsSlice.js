import { createSlice } from '@reduxjs/toolkit';
import cloudImg from '../assets/images/cloud.png';
import databaseImg from '../assets/images/database.png';
import deviceImg from '../assets/images/device.png';
import devopsImg from '../assets/images/devops.png';
import linuxImg from '../assets/images/linux.png';
import reactimg from '../assets/images/react.png';
import sharepointImg from '../assets/images/sharepoint.png';
import nodeImg from '../assets/images/node.png';

const commSkills=[
    {title:'Client Management',score:'70'},
    {title:'Team Management',score:'60'},
    {title:'Agile Development',score:'80'},
    {title:'Process Adaptability',score:'90'},
    {title:'Continuous Learning',score:'75'},
],
techSkills=[
    {icon:reactimg,title:'UI Development',desp:'Embracing ReactJs powers to build custom SPA websites with the help of CSS libraries like Bootstrap and Material UI and various React plugins like React-Router, React-Redux etc.'},
    {icon:nodeImg,title:'APIs Development',desp:'Built NodeJs server applications single-handedly along with UI to connect with database, manipulate files-system, exposing apis, authentication and authorization and much more.'},
    {icon:sharepointImg,title:'Sharepoint Development',desp:'Built a number of Sharepoint Websites for clients using cutting edge SPFX technology, which uses React and Typescript for UI and office365 for data and app hosting'},
    {icon:deviceImg,title:'Responsive Designs',desp:'Built products compatible with different handheld devices with seamless user experience and increase accessibility'},
    {icon:cloudImg,title:'Cloud Computing',desp:'Hands-on experience in AWS services like S3, Lambda, ECS, Cloud Watch, Media Services,SQS,SNS, EKS etc. and build various Nodejs workers to communicate with these services'},
    {icon:databaseImg,title:'Database',desp:'Hands-on experience on databases like MongoDb and MySql and exposing APIs with NodeJs to perform CRUD operations on collections or tables'},
    {icon:devopsImg,title:'Dev-Ops Technologies',desp:'Diverse Experience in Dev-Ops Technologies like Gitlab CI-CD for code deployment, Docker for app hosting, kubernetes for containers management and Bash-Scripting-Rundeck-Ansible for making automation scripts'},
    {icon:linuxImg,title:'Linux',desp:'Hands-on knowledge in server management, debugging and testing security'},
]


const skillsSlice = createSlice({
  name: 'skillsData',
  initialState: {commSkills,techSkills},
  reducers: {
    
  }
})

export default skillsSlice.reducer