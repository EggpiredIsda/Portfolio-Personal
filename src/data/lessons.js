// Complete lesson data structure extracted from HTML files
export const lessons = [
  {
    id: 1,
    number: "LESSON 1",
    title: "Data, Information, and Knowledge",
    subtitle: "From Raw Scores to Meaningful Insight",
    description: "Understand the transformation from raw data to meaningful knowledge through real-world examples",
    imageLeft: "/images/madoka-full.png",
    imageRight: "/images/homura-full.png",
    content: `<p>In today's digital age, we are constantly surrounded by data. From the moment we wake up and check our phones to the time we go to bed, we interact with countless pieces of information. But have you ever stopped to think about what differentiates raw data from meaningful knowledge? Understanding this transformation is fundamental to grasping how information systems work and how we make informed decisions in our daily lives.</p>

<h2>The Three Stages of Understanding</h2>

<h3>Data: The Raw Building Blocks</h3>
<p>Data represents the most basic level of facts and figures. It consists of raw, unprocessed elements that, by themselves, lack context or meaning. Think of data as individual puzzle pieces scattered on a table—each piece exists, but without arrangement, they tell no story. For example, consider a student's test scores: 85, 92, 78, 88, 95. These numbers are pure data—they exist as facts, but without context, they don't convey much meaning.</p>

<h3>Information: Adding Context and Meaning</h3>
<p>Information emerges when we organize and process data in a way that adds context and relevance. It's the result of answering questions like "what?" and "who?" about our data. Returning to our student scores example, when we organize those numbers and add context—such as identifying that these are Math quiz scores for Student A over five weeks—we've transformed data into information.</p>

<h3>Knowledge: Wisdom Through Experience</h3>
<p>Knowledge represents the highest level of understanding. It's what we gain when we apply information through experience, reflection, and analysis. Knowledge involves understanding patterns, making connections, and using information to make informed decisions.</p>`
  },
  {
    id: 2,
    number: "LESSON 2",
    title: "Artificial Intelligence & Cybersecurity",
    subtitle: "Two Key Areas of Computing",
    description: "Explore AI applications in healthcare, transport, and finance alongside essential cybersecurity principles",
    imageLeft: "/images/sayaka-full.png",
    imageRight: "/images/kyoko-full.png",
    content: `<p>Artificial Intelligence and Cybersecurity represent two of the most critical frontiers in modern computing. As our world becomes increasingly connected and data-driven, understanding both how to leverage AI and how to protect sensitive information is essential for any IT professional.</p>

<h2>Artificial Intelligence in Practice</h2>
<p>AI is revolutionizing industries across the globe. In healthcare, AI algorithms diagnose diseases with unprecedented accuracy. In transportation, self-driving vehicles are becoming reality. In finance, AI systems detect fraudulent transactions in milliseconds.</p>

<h2>Cybersecurity Essentials</h2>
<p>With increased connectivity comes increased risk. Cybersecurity protects our systems, networks, and data from malicious attacks. Understanding threats like phishing, malware, and ransomware is crucial for building secure systems.</p>`
  },
  {
    id: 3,
    number: "LESSON 3",
    title: "Computer Systems in Healthcare",
    subtitle: "Healthcare Technology Innovation",
    description: "Discover how computer systems revolutionize medical care through EHRs, imaging, and telemedicine",
    imageLeft: "/images/mami-full.png",
    imageRight: "/images/madoka-full.png",
    content: `<p>Healthcare is undergoing a digital transformation that is revolutionizing patient care, medical research, and hospital operations. Computer systems have become the backbone of modern medicine, enabling healthcare providers to deliver better care, faster diagnoses, and improved patient outcomes.</p>

<h2>Electronic Health Records (EHRs)</h2>
<p>EHRs have replaced traditional paper records, allowing doctors to instantly access patient history, medications, and test results. This accessibility reduces medical errors and enables better coordinated care across multiple healthcare providers.</p>

<h2>Medical Imaging Technology</h2>
<p>Advanced computer systems power medical imaging technologies like CT scans, MRI machines, and digital X-rays. These systems process millions of data points to create detailed images that aid in diagnosis and treatment planning.</p>

<h2>Telemedicine and Remote Care</h2>
<p>Computer networks enable patients to consult with doctors remotely, expanding access to healthcare in underserved regions and improving convenience for patients with chronic conditions.</p>`
  },
  {
    id: 4,
    number: "LESSON 4",
    title: "Vending Machine Algorithm",
    subtitle: "Algorithm Design and Flowcharting",
    description: "Learn algorithm design by creating logic for a vending machine transaction system",
    imageLeft: "/images/homura-witch.png",
    imageRight: "/images/kyoko-spear.png",
    content: `<p>Understanding algorithms is fundamental to computer science. An algorithm is a step-by-step procedure for solving a problem or accomplishing a task. Vending machines provide an excellent real-world example of algorithmic thinking in action.</p>

<h2>Vending Machine Process</h2>
<p>A vending machine follows a precise algorithm: accepting money, verifying the transaction, checking inventory, dispensing the product, and returning change. Each step depends on the previous one, and the machine must handle various scenarios and errors.</p>

<h2>Pseudocode Design</h2>
<p>Before writing actual code, programmers often write pseudocode—a human-readable description of the algorithm. This helps clarify logic before implementation and makes the algorithm easy to understand for other developers.</p>

<h2>Flowchart Development</h2>
<p>Flowcharts visually represent algorithms using standardized symbols. Diamond shapes represent decisions, rectangles represent processes, and arrows show the flow of control through the algorithm.</p>`
  },
  {
    id: 5,
    number: "LESSON 5",
    title: "Number Systems Conversion",
    subtitle: "Converting Base 10, Binary, and Hexadecimal",
    description: "Master number system conversion between decimal, binary, and hexadecimal representations",
    imageLeft: "/images/madoka-full.png",
    imageRight: "/images/mami-full.png",
    content: `<p>Computers fundamentally work with binary—sequences of 1s and 0s. However, programmers and computer scientists often work with decimal (base 10) and hexadecimal (base 16) numbers. Understanding how to convert between these number systems is essential for low-level programming, debugging, and understanding computer architecture.</p>

<h2>Understanding Number Bases</h2>
<p>Different number systems have different bases. Decimal has 10 digits (0-9), binary has 2 digits (0-1), and hexadecimal has 16 digits (0-9, A-F). Each position in a number represents a power of the base.</p>

<h2>Binary Conversion</h2>
<p>Converting from decimal to binary involves repeatedly dividing by 2 and tracking remainders. Converting from binary to decimal involves multiplying each digit by powers of 2 and summing the results.</p>

<h2>Hexadecimal Conversion</h2>
<p>Hexadecimal is particularly useful in programming because each hex digit represents exactly 4 binary digits. This makes hexadecimal an efficient way to represent binary numbers in code.</p>`
  },
  {
    id: 6,
    number: "LESSON 6",
    title: "General vs. Specific Purpose Software",
    subtitle: "Comparing Software Types and Applications",
    description: "Distinguish between general-purpose and specialized software, and understand when each is appropriate",
    imageLeft: "/images/kyoko-full.png",
    imageRight: "/images/homura-full.png",
    content: `<p>Software can be broadly categorized into two types: general-purpose software and specific-purpose software. Understanding the differences between these categories helps us choose the right tools for our needs and understand how software is developed and optimized.</p>

<h2>General-Purpose Software</h2>
<p>General-purpose software is designed to serve a wide range of users and applications. Microsoft Word, for example, is a word processing program that works for writing essays, reports, letters, and more. Excel is a spreadsheet program used for accounting, data analysis, and countless other tasks. These programs are flexible but may not be optimal for any single specialized task.</p>

<h2>Specific-Purpose Software</h2>
<p>Specific-purpose software is designed for a particular task or industry. A school information system, for example, is tailored specifically to track student grades, attendance, and course enrollments. Hospital management software is optimized for healthcare workflows. While these programs may be less flexible than general-purpose software, they often provide better features and efficiency for their intended purpose.</p>

<h2>The Trade-off</h2>
<p>The choice between general and specific software often involves trade-offs. General-purpose software offers flexibility and lower cost but may require workarounds. Specific-purpose software offers optimization and efficiency but may cost more and provide less flexibility.</p>`
  },
  {
    id: 7,
    number: "LESSON 7",
    title: "IPOS System Components",
    subtitle: "Input, Process, Output, and Storage",
    description: "Understand the fundamental IPOS model that describes how computer systems work",
    imageLeft: "/images/sayaka-peace.png",
    imageRight: "/images/mami-action.png",
    content: `<p>Every computer system follows the IPOS model—Input, Process, Output, and Storage. This fundamental framework helps us understand how computers work and how to design effective systems.</p>

<h2>Input</h2>
<p>Input devices and mechanisms allow data to enter the computer system. Examples include keyboards, mice, touchscreens, sensors, microphones, and network connections. Input can come from users, other computers, or automated systems.</p>

<h2>Process</h2>
<p>The CPU processes input data according to programmed instructions. Processing might involve calculations, data comparisons, logic operations, or data transformations. The processor executes millions or billions of instructions per second.</p>

<h2>Output</h2>
<p>Output devices and mechanisms communicate results to users or other systems. Common output devices include monitors, speakers, printers, and network connections. Output makes the results of processing accessible and useful to users.</p>

<h2>Storage</h2>
<p>Storage systems preserve data for future use. This includes both permanent storage (hard drives, SSDs) for long-term data retention and RAM for fast access to currently needed data. Storage is essential because input and processing alone would be useless without the ability to save results.</p>`
  },
  {
    id: 8,
    number: "LESSON 8",
    title: "Utility Applications Overview",
    subtitle: "System Maintenance and Optimization Tools",
    description: "Learn about utilities that keep computer systems running efficiently and securely",
    imageLeft: "/images/madokami-full.png",
    imageRight: "/images/homura-full.png",
    content: `<p>While general and specific-purpose software handle primary user tasks, utility applications work behind the scenes to maintain system health, security, and performance. Understanding these utilities helps users maintain optimally functioning computers.</p>

<h2>Antivirus Software</h2>
<p>Antivirus utilities detect, quarantine, and remove malicious software that could harm your computer or compromise security. Regular scans and real-time protection ensure your system stays protected from evolving threats.</p>

<h2>Disk Optimization Utilities</h2>
<p>Disk defragmentation tools reorganize data on hard drives to improve read/write performance. While less critical for SSDs, these utilities still help maintain optimal performance on traditional mechanical drives.</p>

<h2>System Monitoring Tools</h2>
<p>Utilities like Task Manager (Windows) and Activity Monitor (macOS) allow users to see running processes, CPU usage, memory consumption, and other system metrics. This helps identify problematic applications and optimize system resources.</p>

<h2>Backup and Recovery Utilities</h2>
<p>Backup software ensures that critical data is protected against accidental deletion, hardware failure, or ransomware attacks. Recovery utilities help restore systems after data loss or system failures.</p>`
  },
  {
    id: 9,
    number: "LESSON 9",
    title: "Student Information Database",
    subtitle: "Database Design Principles",
    description: "Design and understand database structures for managing educational institution data",
    imageLeft: "/images/kyoko-full.png",
    imageRight: "/images/sayaka-full.png",
    content: `<p>A student information system (SIS) is a complex database designed to track all aspects of student records, from enrollment and grades to attendance and behavior. Understanding how to design effective databases is crucial for IT professionals working in education and other industries.</p>

<h2>Database Tables</h2>
<p>An SIS typically includes tables for Students, Courses, Enrollments, Grades, and Teachers. Each table contains specific fields (columns) related to that entity. For example, the Students table might include StudentID, FirstName, LastName, DateOfBirth, and EnrollmentDate.</p>

<h2>Relationships</h2>
<p>The power of databases comes from relationships between tables. A student can be enrolled in multiple courses (one-to-many relationship), and each course can have multiple students. These relationships are defined using foreign keys that link records across tables.</p>

<h2>Data Integrity</h2>
<p>A well-designed database enforces data integrity through constraints and rules. For example, every enrollment must reference valid StudentID and CourseID values. This prevents invalid or inconsistent data from entering the system.</p>

<h2>Queries</h2>
<p>Databases provide powerful query languages (like SQL) to retrieve and manipulate data. A query might find all students taking a particular course, calculate average grades by subject, or identify students with perfect attendance.</p>`
  },
  {
    id: 10,
    number: "LESSON 10",
    title: "Network Topologies",
    subtitle: "Physical and Logical Network Structures",
    description: "Explore different network topologies and their advantages, disadvantages, and applications",
    imageLeft: "/images/madoka-full.png",
    imageRight: "/images/mami-full.png",
    content: `<p>Network topology describes how computers and devices are connected within a network. Different topologies have different characteristics, advantages, and disadvantages. Understanding these helps network administrators design systems that meet specific requirements.</p>

<h2>Star Topology</h2>
<p>In a star topology, all devices connect to a central hub or switch. This is the most common topology in modern networks. Advantages include ease of troubleshooting and fault isolation—if one link fails, only that device is affected. Disadvantages include the central point of failure and higher cabling costs.</p>

<h2>Bus Topology</h2>
<p>All devices connect to a single central cable called the bus. This topology was common in early networks but has largely been replaced. It's simple and inexpensive but has poor scalability and can experience severe performance degradation as devices are added.</p>

<h2>Mesh Topology</h2>
<p>In a mesh topology, every device connects to every other device. This provides redundancy and fault tolerance—if one link fails, data can take alternative paths. However, this topology requires many connections and is expensive to implement.</p>

<h2>Ring Topology</h2>
<p>Devices are connected in a circular pattern. Data travels around the ring in one direction. Token ring networks historically used this topology. While it provides equal access to all devices, a single break in the ring can disrupt the entire network.</p>`
  },
  {
    id: 11,
    number: "LESSON 11",
    title: "IT Ethics & Data Privacy",
    subtitle: "Ethical Considerations in Computing",
    description: "Examine ethical principles and privacy concerns that guide responsible IT practice",
    imageLeft: "/images/homura-full.png",
    imageRight: "/images/kyoko-full.png",
    content: `<p>As IT professionals collect, store, and process increasingly sensitive personal information, ethical practices become essential. IT ethics guide how we protect privacy, use data responsibly, and build systems that respect human rights and values.</p>

<h2>Privacy Rights</h2>
<p>Individuals have fundamental rights to control their personal information. This includes the right to know what data is collected, how it's used, who has access to it, and the ability to opt out or request deletion. Laws like GDPR enforce these rights.</p>

<h2>Data Security Responsibility</h2>
<p>Organizations that collect personal data have a responsibility to protect it from unauthorized access, loss, or misuse. This requires implementing strong security measures and maintaining ethical data handling practices.</p>

<h2>Informed Consent</h2>
<p>Collecting personal data without explicit informed consent raises ethical concerns. Users should understand what data is being collected and how it will be used before providing it. Transparent privacy policies and clear consent mechanisms are essential.</p>

<h2>IT Code of Ethics</h2>
<p>Professional organizations like ACM (Association for Computing Machinery) have established codes of ethics to guide IT professionals. These codes emphasize contributing to society, avoiding harm, being honest and trustworthy, and respecting privacy and intellectual property.</p>`
  },
  {
    id: 12,
    number: "LESSON 12",
    title: "HTML Personal Webpage Structure",
    subtitle: "Building Web Content with HTML",
    description: "Learn HTML fundamentals for creating well-structured web documents and semantic markup",
    imageLeft: "/images/sayaka-full.png",
    imageRight: "/images/madoka-full.png",
    content: `<p>HTML (HyperText Markup Language) is the foundational language of the web. It provides the structure and semantic meaning for web content. Understanding HTML is essential for web development and content creation.</p>

<h2>HTML Structure</h2>
<p>Every HTML document contains essential elements: the DOCTYPE declaration, html, head, and body tags. The head section contains metadata and styling information, while the body contains the visible content.</p>

<h2>Semantic Elements</h2>
<p>Modern HTML emphasizes semantic elements like header, nav, main, article, section, and footer that clearly describe the purpose of content. This improves accessibility, makes code more maintainable, and helps search engines understand content.</p>

<h2>Headings and Text</h2>
<p>Heading tags (h1-h6) provide structure and hierarchy to content. Paragraphs, lists, and other text elements organize information in ways that are easy for readers to understand and for programsystems to parse.</p>

<h2>Links and Images</h2>
<p>HTML provides ways to link to other pages and resources, and to embed images and media. These elements transform static text into interactive, multimedia-rich documents.</p>`
  },
  {
    id: 13,
    number: "LESSON 13",
    title: "CSS Style Sheet",
    subtitle: "Styling Web Content with CSS",
    description: "Master CSS for creating visually appealing, responsive web designs",
    imageLeft: "/images/kyoko-spear.png",
    imageRight: "/images/homura-witch.png",
    content: `<p>CSS (Cascading Style Sheets) separates content from presentation, allowing designers to create visually appealing and responsive web experiences. Understanding CSS is essential for modern web development.</p>

<h2>CSS Selectors</h2>
<p>CSS selectors target HTML elements to apply styling. Element selectors target all instances of a particular tag, class selectors target elements with specific class names, and ID selectors target unique elements by their ID.</p>

<h2>Box Model</h2>
<p>Every element is part of the CSS box model consisting of content, padding, border, and margin. Understanding the box model is crucial for controlling layout and spacing.</p>

<h2>Positioning and Layout</h2>
<p>CSS offers multiple layout approaches including inline, block, inline-block, flexbox, and grid. Flexbox and grid provide powerful tools for creating responsive layouts that adapt to different screen sizes.</p>

<h2>Responsive Design</h2>
<p>Media queries allow CSS to apply different styles based on device characteristics like screen width. This enables the same HTML to look great on phones, tablets, and desktop computers through responsive design principles.</p>`
  },
  {
    id: 14,
    number: "LESSON 14",
    title: "Generative AI Impact",
    subtitle: "The Future of Artificial Intelligence",
    description: "Understand the implications and applications of generative AI across industries",
    imageLeft: "/images/madokami-full.png",
    imageRight: "/images/madoka-full.png",
    content: `<p>Generative AI represents a revolutionary advancement in artificial intelligence, with the ability to create new content, assist in complex tasks, and transform how we work and create. Understanding its implications is crucial for anyone entering the IT field.</p>

<h2>What is Generative AI?</h2>
<p>Generative AI systems can create new text, code, images, music, and other content based on patterns learned from training data. Large language models like GPT can engage in human-like conversation and generate coherent written content.</p>

<h2>Applications in Healthcare</h2>
<p>Generative AI assists doctors by summarizing medical literature, analyzing patient data to suggest diagnoses, and even helping design personalized treatment plans. This augments human expertise rather than replacing it.</p>

<h2>Educational Transformation</h2>
<p>AI tutoring systems can provide personalized explanations and practice problems. However, questions about academic integrity and the appropriate use of AI in learning environments remain important considerations.</p>

<h2>Ethical Considerations</h2>
<p>Generative AI raises important questions about data privacy (what training data is used?), bias (does the AI perpetuate societal biases?), and misinformation (can AI-generated content be trustworthy?). Responsible development and deployment are essential.</p>`
  }
];

// Export lesson titles only for quick reference
export const lessonTitles = lessons.map(lesson => ({
  id: lesson.id,
  title: lesson.title,
  description: lesson.description
}));

// Get a single lesson by ID
export function getLessonById(id) {
  return lessons.find(lesson => lesson.id === parseInt(id));
}

// Get all lesson IDs for navigation
export function getAllLessonIds() {
  return lessons.map(lesson => lesson.id);
}

// Get next and previous lesson
export function getAdjacentLessons(id) {
  const lessonId = parseInt(id);
  return {
    previous: lessonId > 1 ? getLessonById(lessonId - 1) : null,
    next: lessonId < 14 ? getLessonById(lessonId + 1) : null
  };
}
