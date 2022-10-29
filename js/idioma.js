let check = document.querySelector(".check");
let spanEn = [], spanEs = [];
let h2En=[], h2Es=[];
let h3En=[], h3Es=[];
let h4En=[], h4Es=[];
let pEn=[], pEs=[]; 
let liEn=[],liEs=[];
let buttonEn=[],buttonEs=[];
var phone = window.matchMedia('(max-width:480px)').matches;
function LanguageEs()
{
    Toggle('Es');
    MenuSize('Es');
    Language('span',spanEs);
    Language('h2',h2Es);
    Language('h3',h3Es);
    Language('h4',h4Es);
    Language('p',pEs);
    Language('li',liEs);
    Language('button',buttonEs);
}
function LanguageEn()
{
    Toggle('En');
    MenuSize('En');
    Language('span',spanEn);
    Language('h2',h2En);
    Language('h3',h3En);
    Language('h4',h4En);
    Language('p',pEn);
    Language('li',liEn);
    Language('button',buttonEn);
    
}
check.addEventListener('click', ()=>{
    if(check.checked)
        LanguageEs();
    else 
        LanguageEn();
    addIcons();
});
function Language(etiqueta, arreglo)
{
    let lang = document.querySelectorAll(etiqueta);
    for(let i = 0;i<lang.length;i++) 
        lang[i].innerHTML = arreglo[i];
}
function MenuSize(l){
    let buttonMenu = document.querySelectorAll('.buttonMenu');
    for(let i=0;i<buttonMenu.length;i++)
    {
        if(phone)
        {
            buttonMenu[i].style.fontSize='var(--fontSizeMenu'+l+'Mov)';
        } 
        else
        {
            buttonMenu[i].style.fontSize='var(--fontSizeMenu'+l+')';
        }
    }
}
function Toggle(l){
    let fondoElegir = document.querySelector('.fondoElegir');
    let circuloElegir = document.querySelector('.circuloElegir');
    fondoElegir.style.background= "var(--color" + l + ")";
    circuloElegir.style.left = "var(--leftLang" + l + ")";
    circuloElegir.style.border = "var(--border" + l + ")";
    circuloElegir.style.rotate ="var(--angle" + l + ")";
}

spanEn.push(
    'ENGLISH',
    'SPANISH'
);
spanEs.push(
    'INGLÉS',
    'ESPAÑOL'
);
h2En.push(
    '<i></i>SUMMARY',
    'KNOWLEDGE',
    'CONTACT',
    '<i></i>WORK EXPERIENCE',
    '<i></i>PROJECTS',
    '<i></i>EDUCATION',
    '<i></i>REFERENCE',
    '<i></i>LINKS'
);
h2Es.push(
    '<i></i>RESUMEN',
    'HABILIDADES PRINCIPALES',
    'CONTACTO',
    '<i></i>EXPERIENCIA LABORAL',
    '<i></i>PROYECTOS',
    '<i></i>FORMACIÓN ACADÉMICA',
    '<i></i>REFERENCIAS',
    '<i></i>ENLACES'
);
h3En.push(
    'SOFTWARE DEVELOPER',
    '<i></i>Kiev Asociados | December 2018-June 2019',
    '<i></i>Zytrust S.A. | December 2019-2020',
    '<i></i>CTIC UNI | 2020-2021',
    '<i></i>ITO Ingenieros | 2021',
    '<i></i>Ruway Tec | December 2021-January 2022',
    '<i></i>Electro Dunas S.A.A. | April 2022-July 2022',
    '<i></i>FéniX Project',
    '<i></i>Fondecyt Project 112',
    '<i></i>Kamayuc Team 2020-2021',
    '<i></i>Experimental Rockets',
    '<i></i>Schedule Generator',
    '<i></i>NATIONAL UNIVERSITY OF ENGINEERING',
    '<i></i>INFOUNI',
    '<i></i>OWN TRAINING',
    '<i></i>Job Reference',
    '<i></i>Research Reference'
);
h3Es.push(
    'DESARROLLADOR DE SOFTWARE',
    '<i></i>Kiev Asociados | Diciembre 2018-Junio 2019',
    '<i></i>Zytrust S.A. | Diciembre 2019-2020',
    '<i></i>CTIC UNI | 2020-2021',
    '<i></i>ITO Ingenieros | 2021',
    '<i></i>Ruway Tec | Diciembre 2021-Enero 2022',
    '<i></i>Electro Dunas S.A.A. | Abril 2022-Julio 2022',
    '<i></i>Proyecto FéniX',
    '<i></i>Proyecto Fondecyt 112',
    '<i></i>Kamayuc Team 2020-2021',
    '<i></i>Cohetes Experimentales',
    '<i></i>Generador de Horarios',
    '<i></i>UNIVERSIDAD NACIONAL DE INGENIERÍA',
    '<i></i>INFOUNI',
    '<i></i>FORMACIÓN PROPIA',
    '<i></i>Referencias Laborales',
    '<i></i>Referencias en Investigación'
);
h4En.push(
    'Invasive Mechanical Ventilator for patients with Covid-19 | March 2020',
    'Bacheler of Electrical Mechanical Engineering',
    'Faculty of Mechanical Engineering - UNI',
    'Eng. Fredy Saravia Poicón',
    'Eng. José Fernández',
    'CTO Juan Eduardo Miranda Salas',
    'Phd. José Luis Mantari Laureano',
    'Dr. Modesto Montoya',
    'Dr. Jorge Mirez'
);
h4Es.push(
    'Ventilador Mecánico Invasivo para pacientes con Covid-19 | Marzo 2020 - actualidad',
    'Bachiller en Ingeniería Mecánica Eléctrica',
    'Facultad de ingeniería Mecánica - UNI',
    'Ing. Fredy Saravia Poicón',
    'Ing. José Fernández',
    'Grte. Juan Eduardo Miranda Salas',
    'Phd. José Luis Mantari Laureano',
    'Dr. Modesto Montoya',
    'Dr. Jorge Mirez'
);
pEn.push(
    'Software Developer, Bachelor of Science with a Major in Electrical Mechanics from the National University of Engineering, passionate about Software Development, with research capacity, and with knowledge and skills for problem solving and project development.',
    'Executive Director, Kiev Asociados',
    'Operations Manager, Zytrust S.A.',
    'IT Area Manager, Electro Dunas S.A.A.',
    '+51 991 885 990',
    '+51 970 030 394'
);
pEs.push(
    'Desarrollador de software, investigador y bachiller en Ingeniería Mecánica Eléctrica egresado de la Universidad Nacional de Ingeniería, me apasiona el desarrollo de aplicaciones digitales, y poder integrarlos a la sociedad para un uso común.',
    'Director Ejecutivo, Kiev Asociados',
    'Gerente de Operaciones, Zytrust S.A.',
    'Gerente del Área de TI, Electro Dunas S.A.A.',
    '+51 991 885 990',
    '+51 970 030 394'
);
liEn.push(
    'In charge of programming Python scripts for automatic simulations in Power Factory Digsilent software for capacitor bank sizing based on stability graphs. Teamwork with SIEMENS and ISA REP.',
    'Development of services for biometric modules.',
    'Development of web portal with MVC architecture using Angular and Java.',
    'Development of a Graphical Interface for a mechanical ventilator to monitor ventilation parameters.',
    'Development of a Graphical Interface with Virtual and Augment Reality for real-time control and monitoring of a Rover (Robot for space exploration).',
    'Development of intelligent software for the recognition of geometric elements(pipes, beams, walls and others) of mining plants for the generation of 3D models.',
    'Development of a Software in .NET for the Sales Management of a Pharmacy.',
    'Software development in .NET for local management and administration of the company\'s related services.',
    'In charge of the development of the Medical Graphic Interface - Ventilator.',
    'Development in Python and C# to model structures using meshing tools such as Spline and Extrude',
    'Development of a Graphical Interface with Virtual and Augmented Reality for real-time control and monitoring of a Space Exploration Robot using Javascript and Node js.(2020)',
    'General manager of the project. (2021)- Project proposals for AESA company',
    'Development of an experimental rocket | September 2017 - January 2018',
    'In charge of the graphical interface with LabVIEW.',
    'Development and implementation putting into production) of a time load management system for enrollments: Generator of Official Schedules for the UNI Faculty and Mechanical Engineering. It operates on its official statistics page.',
    'Acquisition of knowledge about science and engineering.',
    'MS Windows, MS Word, MS Excel, AutoCAD and SOLIDWORKS.',
    'Full-Stack Developer, working as a Freelance and/or on projects, mainly using Object Oriented Programming (OOP) and Functional Software Architecture (MVC, Multilayers, Microservices), for the maintainability and scalability of the applications.',
    'English at Intermediate Level.',
    'CGTN international chain: "Engineers build the first nationally manufactured fan in Peru"',
    'TV Perú: "Mechanical fans made in Peru"',
    'Panamericana: "Mechanical Fan made in UNI"',
    'El Comercio: "FéniX Mechanical Ventilator"'
);
liEs.push(
    'A cargo de la programación de scripts en Python para simulaciones automáticas en el software Power Factory Digsilent para el dimensionamiento de los bancos de capacitores en base a las gráficas de estabilidad. Trabajo en equipo con SIEMENS e ISA REP.',
    'Desarrollo de servicios para módulos biométricos.',
    'Desarrollo de portal web con arquitectura MVC usando Angular y Java.',
    'Desarrollo de Interfaz Gráfica para Ventilador mecánico Fénix para monitoreo de parámetros de ventilación.',
    'Desarrollo de Interfaz Gráfica con Realidad Virtual y Aumentada para control y monitoreo en tiempo real de un Rover (Robot de exploración espacial).',
    'Desarrollo de un Software inteligente de reconocimiento de elementos geométricos (tuberías, vigas , muros y otros) de plantas mineras para la generación de modelos 3D.',
    'Desarrollo de un Software en .NET para la Gestión de Ventas de una Farmacia.',
    'Desarrollo de Softwares en .NET para la gestión y administración local de los servicios afines de la empresa.',
    'A cargo del desarrollo de la Interfaz gráfica Médico - ventilador.',
    'Desarrollo en Python y C# para modelar estructuras usando herramientas de mallado como Spline y Extrude.',
    'Desarrollo de Interfaz Gráfica con Realidad Virtual y Aumentada para control y monitoreo en tiempo real de un Robot de exploración espacial usando Javascript y Node js. (2020).',
    'Director general del proyecto. (2021)- Propuestas de proyectos para empresa AESA.',
    'Desarrollo de un cohete experimental | Septiembre 2017 - Enero 2018.',
    'A cargo de la interfaz gráfica con LabView.',
    'Desarrollo e implementación (puesta en producción) de un Sistema de gestión de carga horaria para las matrículas: Generador de Horarios Oficial para la Facultad e ingeniería Mecánica de la UNI. Opera en su página oficial de estadística.',
    'Adquisición de conocimientos sobre ciencia e ingeniería.',
    'MS Windows, MS Word, MS Excel, AutoCAD y SOLIDWORKS.',
    'Desarrollador Full-Stack, trabajando como Freelance y/o en proyectos, usando mayormente Programación Orientada a Objetos (POO) y Funcional, Arquitectura de software (MVC, Multicapas, Microservicios), para la mantenibilidad y escalabilidad de las aplicaciones.',
    'Inglés a Nivel Intermedio.',
    'Cadena internacional CGTN: "Ingenieros construyen el primer ventilador de fabricación nacional en Perú"',
    'TV Perú: "Ventiladores Mecánicos hechos en el Perú"',
    'Panamericana: "Ventilator Mecánica hecho en la UNI"',
    'El Comercio: "Ventilador Mecánico FéniX"'
);
buttonEn.push(
    '<i></i>SUMMARY',
    '<i></i>WORK EXPERIENCE',
    '<i></i>PROJECTS',
    '<i></i>EDUCATION',
    '<i></i>REFERENCE',
    '<i></i>LINKS',
    '←',
    '→'
);
buttonEs.push(
    '<i></i>RESUMEN',
    '<i></i>EXPERIENCIA LABORAL',
    '<i></i>PROYECTOS',
    '<i></i>FORMACIÓN',
    '<i></i>REFERENCIAS',
    '<i></i>ENLACES',
    '←',
    '→'
);
