import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a Mechanical Engineer and technology entrepreneur with a strong foundation in research, product development, and full stack software engineering. As the founder and Lead Engineer at Project Antarikshya, I oversee a diverse range of projects that bridge the gap between engineering and IT solutions. My experience spans across aerospace research, including hybrid rocket engines and multi-element airfoil studies, as well as sustainable technologies like biochar production systems. I leverage my skills in CAD, simulation tools, and technical writing to develop innovative solutions for complex engineering challenges.`;

export const ABOUT_TEXT = `I am Sunil Belbase, a Mechanical Engineer passionate about design, innovation, and sustainable energy solutions. I hold a Bachelor of Engineering in Mechanical Engineering from Kathmandu University, with extensive experience in propulsion systems, fluid mechanics, and structural analysis. I have worked on diverse projects, including the design and testing of hybrid rocket engines, aerodynamic analysis of multi-element airfoils, and biochar production using portable biokilns.

Currently, as the Founder and Lead Engineer at Project Antarikshya, I lead cross-disciplinary efforts in design, simulation, and project management. My proficiency spans CAD tools (SolidWorks, Siemens NX), simulation software (ANSYS), and machine learning applications in Python. I thrive in fast-paced, challenging environments and am driven by a commitment to advancing engineering solutions.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Design Engineer",
    company: "Project Antarikshya",
    description: `Responsible for overseeing all operations, including design, simulation analysis, and project management, ensuring seamless execution and high-quality outcomes. This role involves extensive collaboration across IT and engineering disciplines to integrate diverse expertise and deliver innovative, cutting-edge projects. Emphasis is placed on effective team coordination, strategic planning, and aligning technical efforts to achieve project goals while maintaining operational efficiency.`,
    technologies: ["Operation", "Simulation", "Design", "Innovation"],
  },
  {
    year: "Feb 2023 - May 2023",
    role: "Nepal Airlines",
    company: "Intern",
    description: `Assisted in the Engineering Department within the hangar, participating in aircraft maintenance procedures and gaining hands-on experience. Additionally, acquired knowledge of documentation processes related to aircraft maintenance and regulatory compliance.`,
    technologies: ["Maintenance", "Operations", "Documentation", "Hands-on Experience"],
  },
  {
    year: "Jan 2022 - Sept 2022",
    role: "Researcher",
    company: "Energy laboratory, Kathmandu University",
    description: `
    Contributions include technical writings such as proposals and review papers, along with organizing and managing workshops hosted by ESTRL. A workshop on clean cooking technologies was conducted, focusing on challenges and solutions for transitioning to cleaner cooking methods.`,
    technologies: ["Transist", "Research", "Sustainability", "Clean cooking"],
  },
  {
    year: "2021 - 2022",
    role: "Research and Design",
    company: "National Innovation Center",
    description: `Researched, designed, and developed new products for various applications. Utilized advanced digital manufacturing machines, including laser cutters, lathes, CNC machines, 3D printers, and PCB printers to improve functionality and efficiency`,
    technologies: ["Solidworks", "Ansys", "Machines", "Research"],
  },
];

export const PROJECTS = [
  {
    title: "Comparison of thrust to weight ratio of an Aerospike nozzle with CD nozzle",
    image: project1,
    description:
      "Aerospike nozzle is a preferable alternative nozzle system considered for its prominent and altitude compensating features. Among rockets with bell shaped nozzles, a significant amount of energy and potential momentum is wasted as a result of sideways component losses. Aerospike nozzles resolve those problems faced in conventional converging diverging (CD) nozzles, completely eliminating the need of moving parts or multi stage propulsion systems otherwise employed to maintain a steady thrust with varying altitude. The prime objective of this research is to compare the differences in thrust between aerospike nozzle and CD nozzle. This is achieved through a) flow simulation of exhaust using ANSYS 2021 in first phase and b) real time data collection from an actual scaled down propulsion system in second phase. Data from both the methods conclude higher magnitude of thrust for aerospike nozzle, but however, when thrust to weight ratio is considered, CD nozzle seems more effective.",
    technologies: ["SolidWorks", "Ansys", "MATLAB"],
  },
  {
    title: "Computational and experimental study of flow over multi-element airfoils",
    image: project2,
    description:
      "An airfoil is a structure designed to maximize lift and minimize drag, commonly used in wings and stabilizers. Asymmetric airfoils generate lift at zero angle of attack, while symmetric ones need a specific angle. Multi-element airfoils, composed of multiple segments, increase lift by managing flow separation but also introduce more drag.This study focuses on a double-element Clark Y airfoil with a 5mm gap and 6mm overhang. Simulations and experiments were conducted to analyze flow behavior at different orientations. Results indicated that flap angles exceeding 5 degrees caused stall, confirmed through pressure measurements and flow visualization techniques.",
    technologies: ["SolidWorks", "Ansys", "MATLAB", "Wind Tunnel"],
  },
  {
    title: "Chassis and assembly design of an e-scooter",
    image: project3,
    description:
      "Motorized Electric Scooter is simply a longboard that has two wheels, and a rechargeable battery that can be recharged from any external source of electricity, Batteries made of lithium-ion provide power to a hub motor to attain movement. The speed of this e-scooter is limited to (0-30km/h). However, the major focus has been on the entire scooter rather than the battery life only, so the scooter has been designed as a part of academic requirement rather than a market seeking product.  This scooter provides all the controls for driving it with ease. It is provided with simple framework covered with base plate on which the rider can stand comfortably. The scooter is also equipped with braking system, so that one has to immediately stop the vehicle and cut off the power supply to the motor. The report contains various information has been accumulated regarding the scooter itself and components required for it, along with the desired dimensions and accurate budget estimation with minimal offsets. Certain design related calculations have also been included so that readers would know how design conclusions were made.",
    technologies: ["SolidWorks", "Ansys", "MATLAB"],
  },
  {
    title: " From Concept to Flight: Development and Testing of an Experimental Sounding Rocket",
    image: project4,
    description:
      "From the initial stages of single-stage liquid propellant rockets to the development of multi-stage hybrid engines, sounding rockets have driven significant technological advancements. Experimental sounding rockets, equipped with solid motors and tailored payloads, serve specific research purposes. Detailed studies of the troposphere and stratosphere, along with geographic observations, are vital for understanding environmental changes. Research conducted in various gravitational fields enables optimization of design and processes at low costs using sounding rockets. This paper presents a comprehensive design, testing, and analysis of an 89-inch-tall, 6-inch diameter solid sounding rocket. Designed to carry a 4 kg payload equipped with a camera, the rocket aims to capture synoptic geographic views at an altitude of 10,000 ft. Constructed with fiberglass, the rocket weighs 22.6 kg and includes an active flight control system for precise apogee achievement and dual parachute deployments for safe touchdown. The study emphasizes the rocket's design and development along with efficiency in conducting environmental research. ",
    technologies: ["SolidWorks", "Ansys", "MATLAB", "Wind Tunnel", "Fabrication"],
  },
];

export const CONTACT = {
  address: "Kathmandu, Nepal ",
  phoneNo: "+977 9843807770",
  email: "sunilbelbase@gmail.com",
};
