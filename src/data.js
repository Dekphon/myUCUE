export const faculties = [
  {
    id: "computer",
    name: "วิศวกรรมคอมพิวเตอร์",
    short: "Computer Engineering",
    icon: "💻",
    color: "blue",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    description: "ผสมผสานการเขียนโปรแกรม ฮาร์ดแวร์ ระบบคอมพิวเตอร์ และการแก้ปัญหาเชิงวิศวกรรม",
    subjects: ["Programming", "Data Structures", "Computer Architecture", "Networks"],
    skills: ["คิดเป็นระบบ", "เขียนโปรแกรม", "แก้ปัญหา", "ออกแบบระบบ"],
    careers: ["Software Engineer", "AI Engineer", "System Engineer", "Embedded Engineer"],
    tuition: "ประมาณ 25,000–45,000 บาท/ภาคการศึกษา",
    pros: ["ต่อยอดเทคโนโลยีได้กว้าง", "มีสายอาชีพหลากหลาย", "เหมาะกับคนชอบสร้างของด้วยเทคโนโลยี"],
    considerations: ["ต้องฝึกเขียนโค้ดต่อเนื่อง", "มีวิชาคณิตและพื้นฐานวิศวกรรม"],
    tags: { math: 1, science: 1, technology: 1, creative: .5, solo: .7, group: .7, business: .2 }, universities: ["จุฬาลงกรณ์มหาวิทยาลัย", "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี", "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ"]
  },
  {
    id: "it",
    name: "เทคโนโลยีสารสนเทศ",
    short: "Information Technology",
    icon: "🧩",
    color: "green",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    description: "เน้นการนำเทคโนโลยีสารสนเทศมาออกแบบระบบและแก้ปัญหาให้ผู้ใช้และองค์กร",
    subjects: ["Web Development", "Database", "UX/UI", "Information Systems"],
    skills: ["พัฒนาเว็บ", "ออกแบบประสบการณ์ผู้ใช้", "จัดการข้อมูล", "วิเคราะห์ระบบ"],
    careers: ["Web Developer", "UX/UI Designer", "Business Analyst", "IT Consultant"],
    tuition: "ประมาณ 20,000–40,000 บาท/ภาคการศึกษา",
    pros: ["ประยุกต์ใช้ได้จริง", "เชื่อมทั้งเทคโนโลยีและผู้ใช้", "เหมาะกับงานดิจิทัล"],
    considerations: ["ต้องติดตามเทคโนโลยีใหม่", "บางสายงานต้องสื่อสารกับหลายฝ่าย"],
    tags: { math: .5, science: .2, technology: 1, creative: .8, solo: .6, group: .8, business: .7 }, universities: ["สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี", "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ", "มหาวิทยาลัยมหิดล"]
  },
  {
    id: "business",
    name: "บริหารธุรกิจ",
    short: "Business Administration",
    icon: "📈",
    color: "lime",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    description: "เรียนรู้การบริหารองค์กร การตลาด การเงิน และการวางแผนเพื่อสร้างคุณค่าให้ธุรกิจ",
    subjects: ["Marketing", "Finance", "Management", "Entrepreneurship"],
    skills: ["วางแผน", "สื่อสาร", "วิเคราะห์ธุรกิจ", "นำเสนอ"],
    careers: ["Marketing", "Product Manager", "Entrepreneur", "Business Development"],
    tuition: "ประมาณ 18,000–35,000 บาท/ภาคการศึกษา",
    pros: ["ต่อยอดธุรกิจได้หลายแบบ", "ใช้ได้กับแทบทุกอุตสาหกรรม", "เหมาะกับคนชอบสื่อสาร"],
    considerations: ["ต้องทำงานกับผู้คนค่อนข้างมาก", "การแข่งขันในสายงานสูง"],
    tags: { math: .4, science: 0, technology: .4, creative: .7, solo: .3, group: 1, business: 1 }
  },
  {
    id: "design",
    name: "นิเทศศิลป์ / ออกแบบดิจิทัล",
    short: "Digital Design",
    icon: "✦",
    color: "blue",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
    description: "ใช้ความคิดสร้างสรรค์เพื่อสื่อสารผ่านภาพ แบรนด์ อินเทอร์แอคชัน และสื่อดิจิทัล",
    subjects: ["Visual Design", "Typography", "Branding", "Motion Design"],
    skills: ["คิดสร้างสรรค์", "เล่าเรื่องด้วยภาพ", "ออกแบบ", "นำเสนอไอเดีย"],
    careers: ["Graphic Designer", "Brand Designer", "Motion Designer", "Creative"],
    tuition: "ประมาณ 20,000–45,000 บาท/ภาคการศึกษา",
    pros: ["ได้สร้างผลงานจริง", "เหมาะกับสายครีเอทีฟ", "ทำงาน freelance ได้"],
    considerations: ["ต้องมี portfolio", "ต้องฝึกฝนและรับ feedback สม่ำเสมอ"],
    tags: { math: .1, science: 0, technology: .5, creative: 1, solo: .7, group: .7, business: .5 }
  },
  {
    id: "psychology",
    name: "จิตวิทยา",
    short: "Psychology",
    icon: "🧠",
    color: "green",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
    description: "ศึกษาความคิด อารมณ์ และพฤติกรรมของมนุษย์ เพื่อนำไปใช้กับคนและสังคม",
    subjects: ["Cognitive Psychology", "Development", "Research Methods", "Counseling"],
    skills: ["ฟังและเข้าใจคน", "สังเกต", "วิจัย", "วิเคราะห์พฤติกรรม"],
    careers: ["HR", "People Development", "Researcher", "Counseling-related roles"],
    tuition: "ประมาณ 18,000–35,000 บาท/ภาคการศึกษา",
    pros: ["เข้าใจคนและการทำงานร่วมกัน", "ต่อยอดได้หลายอุตสาหกรรม"],
    considerations: ["งานเฉพาะทางบางสายต้องเรียนต่อ", "ต้องใช้ทักษะการสื่อสารสูง"],
    tags: { math: .2, science: .3, technology: .1, creative: .5, solo: .5, group: .9, business: .6 }
  },
  {
    id: "medicine",
    name: "แพทยศาสตร์",
    short: "Medicine",
    icon: "🩺",
    color: "green",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    description: "เรียนรู้วิทยาศาสตร์สุขภาพ การวินิจฉัย และการดูแลผู้ป่วยอย่างเป็นระบบและมีความรับผิดชอบ",
    subjects: ["Anatomy", "Physiology", "Pathology", "Clinical Practice"],
    skills: ["วิเคราะห์ข้อมูล", "ใส่ใจรายละเอียด", "สื่อสารกับผู้ป่วย", "รับผิดชอบสูง"],
    careers: ["Physician", "Medical Researcher", "Public Health Doctor", "Healthcare Administrator"],
    tuition: "ประมาณ 30,000–60,000 บาท/ภาคการศึกษา",
    pros: ["ได้ช่วยเหลือผู้คนโดยตรง", "มีเส้นทางอาชีพชัดเจน", "ต่อยอดเฉพาะทางได้หลากหลาย"],
    considerations: ["ใช้เวลาเรียนและฝึกปฏิบัติมาก", "ต้องรับมือกับความกดดันและความรับผิดชอบสูง"],
    tags: { math: .5, science: 1, technology: .3, creative: .2, solo: .5, group: .9, business: .2 }
  },
  {
    id: "nursing",
    name: "พยาบาลศาสตร์",
    short: "Nursing",
    icon: "🩹",
    color: "blue",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80",
    description: "ผสานความรู้สุขภาพกับการดูแลผู้คน เพื่อส่งเสริม ป้องกัน และฟื้นฟูสุขภาพในทุกช่วงวัย",
    subjects: ["Nursing Care", "Pharmacology", "Health Assessment", "Community Health"],
    skills: ["ดูแลผู้คน", "สังเกตอาการ", "ทำงานเป็นทีม", "สื่อสารอย่างเข้าใจ"],
    careers: ["Registered Nurse", "Community Nurse", "Nurse Educator", "Healthcare Coordinator"],
    tuition: "ประมาณ 25,000–50,000 บาท/ภาคการศึกษา",
    pros: ["มีโอกาสทำงานหลากหลายสถานพยาบาล", "ได้ใช้ทักษะกับผู้คนจริง", "เป็นอาชีพที่มีความต้องการสูง"],
    considerations: ["มีเวรและเวลาทำงานหลากหลาย", "ต้องมีความละเอียดและอดทน"],
    tags: { math: .2, science: .8, technology: .2, creative: .2, solo: .3, group: 1, business: .2 }
  },
  {
    id: "pharmacy",
    name: "เภสัชศาสตร์",
    short: "Pharmacy",
    icon: "⚕️",
    color: "green",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=900&q=80",
    description: "ศึกษายา การใช้ยาอย่างปลอดภัย และการพัฒนาผลิตภัณฑ์สุขภาพเพื่อดูแลผู้ป่วยและสังคม",
    subjects: ["Pharmacology", "Medicinal Chemistry", "Pharmaceutics", "Patient Care"],
    skills: ["จำและวิเคราะห์ข้อมูล", "ละเอียดรอบคอบ", "ให้คำแนะนำ", "วิทยาศาสตร์สุขภาพ"],
    careers: ["Pharmacist", "Drug Researcher", "Regulatory Affairs", "Medical Representative"],
    tuition: "ประมาณ 25,000–50,000 บาท/ภาคการศึกษา",
    pros: ["ต่อยอดได้ทั้งงานบริการและอุตสาหกรรม", "ใช้ความรู้วิทยาศาสตร์กับชีวิตจริง", "มีความเชี่ยวชาญเฉพาะทาง"],
    considerations: ["ต้องจำเนื้อหาจำนวนมาก", "ต้องรับผิดชอบต่อความปลอดภัยของผู้ใช้ยา"],
    tags: { math: .4, science: 1, technology: .2, creative: .1, solo: .7, group: .6, business: .4 }
  },
  {
    id: "architecture",
    name: "สถาปัตยกรรมศาสตร์",
    short: "Architecture",
    icon: "🏛️",
    color: "lime",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=80",
    description: "ออกแบบพื้นที่ อาคาร และสภาพแวดล้อมให้สวยงาม ใช้งานได้จริง และตอบโจทย์ผู้คน",
    subjects: ["Architectural Design", "Building Technology", "History of Architecture", "Urban Design"],
    skills: ["คิดเชิงพื้นที่", "วาดและนำเสนอ", "แก้ปัญหาออกแบบ", "ทำงานกับผู้คน"],
    careers: ["Architect", "Interior Designer", "Urban Designer", "Project Coordinator"],
    tuition: "ประมาณ 25,000–55,000 บาท/ภาคการศึกษา",
    pros: ["ได้สร้างผลงานที่เห็นได้จริง", "ผสานศิลปะกับเทคโนโลยี", "ทำงานได้ทั้งออกแบบและบริหารโครงการ"],
    considerations: ["มีงานสตูดิโอและ deadline ค่อนข้างหนัก", "ต้องพัฒนาทั้งความคิดและทักษะเทคนิค"],
    tags: { math: .5, science: .4, technology: .6, creative: 1, solo: .6, group: .8, business: .3 }
  },
  {
    id: "law",
    name: "นิติศาสตร์",
    short: "Law",
    icon: "⚖️",
    color: "blue",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=900&q=80",
    description: "ทำความเข้าใจกฎหมาย กระบวนการยุติธรรม และการใช้เหตุผลเพื่อคุ้มครองสิทธิของผู้คน",
    subjects: ["Civil Law", "Criminal Law", "Constitutional Law", "Legal Practice"],
    skills: ["อ่านและตีความ", "ใช้เหตุผล", "สื่อสารโน้มน้าว", "ค้นคว้าข้อมูล"],
    careers: ["Lawyer", "Legal Counsel", "Judge", "Compliance Officer"],
    tuition: "ประมาณ 15,000–35,000 บาท/ภาคการศึกษา",
    pros: ["ใช้ได้กับหลายอุตสาหกรรม", "พัฒนาการคิดอย่างมีเหตุผล", "มีสายงานทั้งภาครัฐและเอกชน"],
    considerations: ["ต้องอ่านและจำเนื้อหามาก", "เส้นทางใบอนุญาตบางอาชีพต้องสอบเพิ่มเติม"],
    tags: { math: .2, science: 0, technology: .2, creative: .4, solo: .7, group: .7, business: .8 }
  },
  {
    id: "communication",
    name: "นิเทศศาสตร์",
    short: "Communication Arts",
    icon: "🎙️",
    color: "lime",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=900&q=80",
    description: "สร้างสรรค์เนื้อหาและสื่อเพื่อสื่อสารกับผู้คนผ่านการเล่าเรื่อง ภาพ เสียง และแพลตฟอร์มดิจิทัล",
    subjects: ["Storytelling", "Media Production", "Public Relations", "Digital Content"],
    skills: ["เล่าเรื่อง", "สื่อสาร", "ทำงานโปรดักชัน", "เข้าใจผู้ชม"],
    careers: ["Content Creator", "Producer", "Public Relations", "Copywriter"],
    tuition: "ประมาณ 20,000–45,000 บาท/ภาคการศึกษา",
    pros: ["ได้ทดลองทำสื่อหลายรูปแบบ", "เหมาะกับโลกดิจิทัล", "ต่อยอดงานสร้างสรรค์ได้กว้าง"],
    considerations: ["ต้องสร้าง portfolio อย่างต่อเนื่อง", "งานบางช่วงมี deadline เร่งด่วน"],
    tags: { math: .1, science: 0, technology: .5, creative: 1, solo: .4, group: 1, business: .7 }
  },
  {
    id: "education",
    name: "ศึกษาศาสตร์ / ครุศาสตร์",
    short: "Education",
    icon: "📚",
    color: "green",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    description: "เรียนรู้การออกแบบการเรียนการสอนและพัฒนาผู้เรียนให้เติบโตอย่างมีศักยภาพ",
    subjects: ["Learning Psychology", "Curriculum Design", "Teaching Methods", "Educational Technology"],
    skills: ["อธิบายให้เข้าใจ", "วางแผนการเรียนรู้", "เข้าใจผู้เรียน", "สร้างแรงบันดาลใจ"],
    careers: ["Teacher", "Learning Designer", "Education Researcher", "Tutor"],
    tuition: "ประมาณ 15,000–35,000 บาท/ภาคการศึกษา",
    pros: ["ได้พัฒนาคนโดยตรง", "มีงานทั้งในโรงเรียนและองค์กร", "สร้างสื่อการเรียนรู้ได้หลากหลาย"],
    considerations: ["ต้องเตรียมการสอนและดูแลผู้เรียนสม่ำเสมอ", "บางเส้นทางต้องมีใบประกอบวิชาชีพ"],
    tags: { math: .3, science: .3, technology: .4, creative: .6, solo: .3, group: 1, business: .4 }
  },
  {
    id: "economics",
    name: "เศรษฐศาสตร์",
    short: "Economics",
    icon: "📊",
    color: "blue",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    description: "วิเคราะห์การตัดสินใจ ทรัพยากร ตลาด และนโยบายด้วยข้อมูลและกรอบคิดเชิงเหตุผล",
    subjects: ["Microeconomics", "Macroeconomics", "Statistics", "Economic Policy"],
    skills: ["วิเคราะห์ข้อมูล", "คิดเชิงระบบ", "อ่านแนวโน้ม", "อธิบายประเด็นซับซ้อน"],
    careers: ["Economic Analyst", "Data Analyst", "Policy Researcher", "Financial Planner"],
    tuition: "ประมาณ 18,000–35,000 บาท/ภาคการศึกษา",
    pros: ["ใช้ได้ทั้งธุรกิจและนโยบายสาธารณะ", "ต่อยอดงานข้อมูลและการเงิน", "ฝึกคิดอย่างเป็นระบบ"],
    considerations: ["มีคณิตศาสตร์และสถิติพอสมควร", "ต้องติดตามข่าวเศรษฐกิจและสังคม"],
    tags: { math: .9, science: .2, technology: .4, creative: .2, solo: .7, group: .6, business: .9 }
  },
  {
    id: "environmental",
    name: "วิทยาศาสตร์สิ่งแวดล้อม",
    short: "Environmental Science",
    icon: "🌿",
    color: "green",
    image: "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=900&q=80",
    description: "ศึกษาความสัมพันธ์ระหว่างธรรมชาติ มนุษย์ และการพัฒนาที่ยั่งยืนเพื่อแก้ปัญหาสิ่งแวดล้อม",
    subjects: ["Ecology", "Environmental Chemistry", "Climate Science", "Sustainability"],
    skills: ["ทำงานภาคสนาม", "เก็บและวิเคราะห์ข้อมูล", "คิดเชิงระบบ", "สื่อสารเพื่อสังคม"],
    careers: ["Environmental Scientist", "Sustainability Consultant", "Conservation Officer", "ESG Analyst"],
    tuition: "ประมาณ 18,000–40,000 บาท/ภาคการศึกษา",
    pros: ["ได้ทำงานกับประเด็นสำคัญของโลก", "มีทั้งงานวิจัยและงานองค์กร", "เชื่อมวิทยาศาสตร์กับสังคม"],
    considerations: ["บางวิชาต้องทำงานภาคสนาม", "ต้องเรียนรู้ข้อมูลหลายด้านร่วมกัน"],
    tags: { math: .4, science: 1, technology: .3, creative: .3, solo: .5, group: .8, business: .4 }
  },
  {
    id: "food-science",
    name: "วิทยาศาสตร์การอาหาร",
    short: "Food Science",
    icon: "🧪",
    color: "lime",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80",
    description: "ใช้วิทยาศาสตร์พัฒนาอาหารให้มีคุณภาพ ปลอดภัย อร่อย และตอบโจทย์ผู้บริโภคยุคใหม่",
    subjects: ["Food Chemistry", "Food Microbiology", "Product Development", "Quality Control"],
    skills: ["ทดลองและพัฒนา", "ควบคุมคุณภาพ", "วิเคราะห์ผล", "คิดสร้างสรรค์ผลิตภัณฑ์"],
    careers: ["Food Scientist", "Product Developer", "Quality Assurance", "Food Technologist"],
    tuition: "ประมาณ 18,000–40,000 บาท/ภาคการศึกษา",
    pros: ["ได้สร้างผลิตภัณฑ์ที่ใกล้ตัว", "มีงานในอุตสาหกรรมอาหารกว้างขวาง", "ผสานวิทยาศาสตร์กับความคิดสร้างสรรค์"],
    considerations: ["ต้องเรียนเคมีและจุลชีววิทยา", "การทดลองต้องละเอียดและทำซ้ำหลายครั้ง"],
    tags: { math: .4, science: 1, technology: .4, creative: .5, solo: .6, group: .7, business: .5 }
  }
];

const createFaculty = (faculty) => ({
  ...faculty,
  tuition: faculty.tuition || "ประมาณ 18,000–45,000 บาท/ภาคการศึกษา",
  pros: faculty.pros || ["ต่อยอดอาชีพได้หลากหลาย", "ได้ใช้ความรู้กับโจทย์จริง"],
  considerations: faculty.considerations || ["ควรฝึกทักษะอย่างต่อเนื่อง", "บางสายงานอาจต้องเรียนต่อเฉพาะทาง"]
});

faculties.push(...[
  {
    id: "civil-engineering", name: "วิศวกรรมโยธา", short: "Civil Engineering", icon: "🏗️", color: "blue",
    image: "https://images.unsplash.com/photo-1503387762-592da7b32d8a?auto=format&fit=crop&w=900&q=80",
    description: "ออกแบบและก่อสร้างอาคาร ถนน สะพาน และโครงสร้างพื้นฐานที่ผู้คนใช้ในชีวิตประจำวัน",
    subjects: ["Structural Engineering", "Construction", "Geotechnical Engineering", "Surveying"], skills: ["คิดเป็นระบบ", "คำนวณ", "วางแผนโครงการ", "ทำงานภาคสนาม"], careers: ["Civil Engineer", "Site Engineer", "Structural Engineer", "Project Manager"],
    tags: { math: 1, science: .7, technology: .6, creative: .3, solo: .5, group: .8, business: .4 }, universities: ["จุฬาลงกรณ์มหาวิทยาลัย", "มหาวิทยาลัยเกษตรศาสตร์", "มหาวิทยาลัยเชียงใหม่", "มหาวิทยาลัยขอนแก่น"]
  },
  {
    id: "mechanical-engineering", name: "วิศวกรรมเครื่องกล", short: "Mechanical Engineering", icon: "⚙️", color: "green",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
    description: "เรียนรู้การออกแบบเครื่องจักร ระบบพลังงาน และเทคโนโลยีการผลิตเพื่อสร้างสิ่งที่ใช้งานได้จริง",
    subjects: ["Mechanics", "Thermodynamics", "Machine Design", "Manufacturing"], skills: ["คำนวณ", "ออกแบบ", "แก้ปัญหา", "ทดลองสร้าง"], careers: ["Mechanical Engineer", "Automotive Engineer", "Robotics Engineer", "Maintenance Engineer"],
    tags: { math: 1, science: .8, technology: .7, creative: .4, solo: .6, group: .7, business: .3 }, universities: ["จุฬาลงกรณ์มหาวิทยาลัย", "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี", "มหาวิทยาลัยมหิดล", "มหาวิทยาลัยเทคโนโลยีสุรนารี"]
  },
  {
    id: "electrical-engineering", name: "วิศวกรรมไฟฟ้า", short: "Electrical Engineering", icon: "⚡", color: "lime",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80",
    description: "ศึกษาไฟฟ้า อิเล็กทรอนิกส์ ระบบควบคุม และพลังงาน เพื่อพัฒนาเทคโนโลยีที่ขับเคลื่อนโลก",
    subjects: ["Circuit Design", "Control Systems", "Power Systems", "Electronics"], skills: ["วิเคราะห์ระบบ", "คำนวณ", "เขียนโปรแกรมควบคุม", "ทดลอง"], careers: ["Electrical Engineer", "Control Engineer", "Power Engineer", "Automation Engineer"],
    tags: { math: 1, science: .8, technology: 1, creative: .3, solo: .6, group: .7, business: .3 }, universities: ["จุฬาลงกรณ์มหาวิทยาลัย", "มหาวิทยาลัยเกษตรศาสตร์", "มหาวิทยาลัยมหิดล", "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง"]
  },
  {
    id: "chemical-engineering", name: "วิศวกรรมเคมี", short: "Chemical Engineering", icon: "⚗️", color: "blue",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80",
    description: "ประยุกต์เคมีและวิศวกรรมเพื่อออกแบบกระบวนการผลิตยา อาหาร พลังงาน และวัสดุสมัยใหม่",
    subjects: ["Process Design", "Reaction Engineering", "Material Balance", "Chemical Safety"], skills: ["คำนวณ", "ทดลอง", "ควบคุมกระบวนการ", "ใส่ใจความปลอดภัย"], careers: ["Chemical Engineer", "Process Engineer", "R&D Engineer", "Production Engineer"],
    tags: { math: .9, science: 1, technology: .7, creative: .3, solo: .6, group: .7, business: .3 }, universities: ["จุฬาลงกรณ์มหาวิทยาลัย", "มหาวิทยาลัยเกษตรศาสตร์", "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี", "มหาวิทยาลัยสงขลานครินทร์"]
  },
  {
    id: "industrial-engineering", name: "วิศวกรรมอุตสาหการ", short: "Industrial Engineering", icon: "📐", color: "green",
    image: "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=900&q=80",
    description: "ออกแบบระบบงานและการผลิตให้มีประสิทธิภาพ ลดต้นทุน และสร้างคุณค่าให้กับองค์กร",
    subjects: ["Operations Research", "Quality Control", "Production Planning", "Supply Chain"], skills: ["วิเคราะห์ข้อมูล", "ปรับปรุงกระบวนการ", "วางแผน", "สื่อสารกับหลายฝ่าย"], careers: ["Industrial Engineer", "Supply Chain Analyst", "Quality Engineer", "Operations Manager"],
    tags: { math: .9, science: .4, technology: .7, creative: .4, solo: .6, group: .8, business: .8 }, universities: ["จุฬาลงกรณ์มหาวิทยาลัย", "มหาวิทยาลัยธรรมศาสตร์", "มหาวิทยาลัยเกษตรศาสตร์", "มหาวิทยาลัยเชียงใหม่"]
  },
  {
    id: "biomedical-engineering", name: "วิศวกรรมชีวการแพทย์", short: "Biomedical Engineering", icon: "🫀", color: "blue",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80",
    description: "ผสานวิศวกรรม ชีววิทยา และการแพทย์ เพื่อสร้างอุปกรณ์และนวัตกรรมดูแลสุขภาพ",
    subjects: ["Medical Devices", "Biomaterials", "Signal Processing", "Human Biology"], skills: ["วิจัย", "ออกแบบอุปกรณ์", "วิเคราะห์ข้อมูล", "ทำงานข้ามศาสตร์"], careers: ["Biomedical Engineer", "Medical Device Designer", "Clinical Engineer", "Health Tech Researcher"],
    tags: { math: .8, science: 1, technology: .9, creative: .5, solo: .6, group: .8, business: .3 }, universities: ["มหาวิทยาลัยมหิดล", "จุฬาลงกรณ์มหาวิทยาลัย", "มหาวิทยาลัยศรีนครินทรวิโรฒ", "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี"]
  },
  {
    id: "dentistry", name: "ทันตแพทยศาสตร์", short: "Dentistry", icon: "🦷", color: "green",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80",
    description: "ดูแลสุขภาพช่องปาก ตั้งแต่การป้องกัน วินิจฉัย ไปจนถึงการรักษาและฟื้นฟูรอยยิ้ม",
    subjects: ["Oral Anatomy", "Dental Materials", "Oral Surgery", "Clinical Dentistry"], skills: ["ละเอียดแม่นยำ", "ใช้มืออย่างคล่องแคล่ว", "สื่อสารกับผู้ป่วย", "รับผิดชอบสูง"], careers: ["Dentist", "Dental Researcher", "Dental Clinic Owner", "Public Health Dentist"],
    tags: { math: .3, science: 1, technology: .5, creative: .3, solo: .5, group: .7, business: .4 }, universities: ["จุฬาลงกรณ์มหาวิทยาลัย", "มหาวิทยาลัยมหิดล", "มหาวิทยาลัยเชียงใหม่", "มหาวิทยาลัยขอนแก่น"]
  },
  {
    id: "veterinary", name: "สัตวแพทยศาสตร์", short: "Veterinary Medicine", icon: "🐾", color: "lime",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=900&q=80",
    description: "ดูแลสุขภาพสัตว์ทั้งสัตว์เลี้ยง ปศุสัตว์ และสัตว์ป่า พร้อมความรู้ด้านสาธารณสุข",
    subjects: ["Animal Anatomy", "Veterinary Medicine", "Animal Surgery", "Public Health"], skills: ["สังเกตอาการ", "รักและเข้าใจสัตว์", "ลงมือปฏิบัติ", "ตัดสินใจ"], careers: ["Veterinarian", "Animal Health Researcher", "Livestock Consultant", "Zoo Veterinarian"],
    tags: { math: .3, science: 1, technology: .3, creative: .3, solo: .5, group: .8, business: .4 }, universities: ["จุฬาลงกรณ์มหาวิทยาลัย", "มหาวิทยาลัยเกษตรศาสตร์", "มหาวิทยาลัยเชียงใหม่", "มหาวิทยาลัยมหิดล"]
  },
  {
    id: "public-health", name: "สาธารณสุขศาสตร์", short: "Public Health", icon: "🏥", color: "green",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80",
    description: "ส่งเสริมสุขภาพ ป้องกันโรค และออกแบบระบบสุขภาพเพื่อยกระดับคุณภาพชีวิตของชุมชน",
    subjects: ["Epidemiology", "Health Promotion", "Community Health", "Health Policy"], skills: ["วิเคราะห์ข้อมูลสุขภาพ", "ทำงานชุมชน", "สื่อสาร", "วางแผนโครงการ"], careers: ["Public Health Officer", "Health Promotion Specialist", "Epidemiologist", "Healthcare Coordinator"],
    tags: { math: .5, science: .8, technology: .3, creative: .4, solo: .4, group: 1, business: .4 }, universities: ["มหาวิทยาลัยมหิดล", "มหาวิทยาลัยธรรมศาสตร์", "มหาวิทยาลัยเชียงใหม่", "มหาวิทยาลัยขอนแก่น"]
  },
  {
    id: "science", name: "วิทยาศาสตร์", short: "Science", icon: "🔬", color: "blue",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80",
    description: "ค้นหาคำตอบเกี่ยวกับธรรมชาติด้วยการทดลอง การสังเกต และการคิดอย่างเป็นเหตุเป็นผล",
    subjects: ["Research Methods", "Laboratory Practice", "Statistics", "Scientific Writing"], skills: ["ตั้งคำถาม", "ทดลอง", "วิเคราะห์หลักฐาน", "ค้นคว้า"], careers: ["Scientist", "Laboratory Analyst", "Researcher", "Science Communicator"],
    tags: { math: .7, science: 1, technology: .4, creative: .3, solo: .8, group: .6, business: .2 }, universities: ["จุฬาลงกรณ์มหาวิทยาลัย", "มหาวิทยาลัยมหิดล", "มหาวิทยาลัยเชียงใหม่", "มหาวิทยาลัยสงขลานครินทร์"]
  },
  {
    id: "biotechnology", name: "เทคโนโลยีชีวภาพ", short: "Biotechnology", icon: "🧬", color: "green",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80",
    description: "ใช้สิ่งมีชีวิตและกระบวนการทางชีวภาพสร้างนวัตกรรมด้านอาหาร สุขภาพ เกษตร และอุตสาหกรรม",
    subjects: ["Molecular Biology", "Genetics", "Bioprocess", "Bioinformatics"], skills: ["ทำงานห้องแล็บ", "วิเคราะห์ข้อมูล", "วิจัย", "คิดเชิงนวัตกรรม"], careers: ["Biotechnologist", "Research Scientist", "Quality Specialist", "Bioinformatics Analyst"],
    tags: { math: .6, science: 1, technology: .7, creative: .4, solo: .7, group: .6, business: .3 }, universities: ["มหาวิทยาลัยมหิดล", "จุฬาลงกรณ์มหาวิทยาลัย", "มหาวิทยาลัยเกษตรศาสตร์", "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี"]
  },
  {
    id: "agriculture", name: "เกษตรศาสตร์", short: "Agricultural Science", icon: "🌾", color: "lime",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80",
    description: "พัฒนาเกษตรสมัยใหม่ด้วยวิทยาศาสตร์ เทคโนโลยี และการจัดการทรัพยากรอย่างยั่งยืน",
    subjects: ["Crop Science", "Soil Science", "Smart Farming", "Agricultural Economics"], skills: ["ลงพื้นที่", "วิเคราะห์ระบบ", "ทดลอง", "จัดการโครงการ"], careers: ["Agricultural Scientist", "Smart Farm Specialist", "Agribusiness Manager", "Extension Officer"],
    tags: { math: .4, science: .8, technology: .5, creative: .4, solo: .5, group: .8, business: .7 }, universities: ["มหาวิทยาลัยเกษตรศาสตร์", "มหาวิทยาลัยเชียงใหม่", "มหาวิทยาลัยขอนแก่น", "มหาวิทยาลัยสงขลานครินทร์"]
  },
  {
    id: "political-science", name: "รัฐศาสตร์", short: "Political Science", icon: "🏛️", color: "blue",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=900&q=80",
    description: "ทำความเข้าใจอำนาจ การปกครอง นโยบายสาธารณะ และความสัมพันธ์ระหว่างประเทศ",
    subjects: ["Political Theory", "Public Policy", "International Relations", "Comparative Politics"], skills: ["อ่านและวิเคราะห์", "ถกเถียงด้วยเหตุผล", "ติดตามข่าวสาร", "สื่อสารสาธารณะ"], careers: ["Policy Analyst", "Diplomat", "Government Officer", "Political Researcher"],
    tags: { math: .2, science: .1, technology: .2, creative: .5, solo: .6, group: .8, business: .7 }, universities: ["จุฬาลงกรณ์มหาวิทยาลัย", "มหาวิทยาลัยธรรมศาสตร์", "มหาวิทยาลัยเชียงใหม่", "มหาวิทยาลัยสงขลานครินทร์"]
  },
  {
    id: "social-sciences", name: "สังคมวิทยาและมานุษยวิทยา", short: "Social Sciences", icon: "🌏", color: "green",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    description: "ศึกษาผู้คน วัฒนธรรม ความสัมพันธ์ และการเปลี่ยนแปลงของสังคมผ่านการวิจัยและการลงพื้นที่",
    subjects: ["Social Theory", "Cultural Studies", "Fieldwork", "Social Research"], skills: ["เข้าใจผู้คน", "สัมภาษณ์", "วิจัยภาคสนาม", "มองหลายมุม"], careers: ["Social Researcher", "Community Developer", "UX Researcher", "Social Development Officer"],
    tags: { math: .3, science: .1, technology: .2, creative: .6, solo: .6, group: .9, business: .5 }, universities: ["มหาวิทยาลัยธรรมศาสตร์", "จุฬาลงกรณ์มหาวิทยาลัย", "มหาวิทยาลัยเชียงใหม่", "มหาวิทยาลัยขอนแก่น"]
  },
  {
    id: "languages", name: "มนุษยศาสตร์และภาษา", short: "Humanities & Languages", icon: "🗣️", color: "lime",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=80",
    description: "พัฒนาทักษะภาษา การคิดวิเคราะห์ และความเข้าใจวัฒนธรรมเพื่อสื่อสารกับโลกที่หลากหลาย",
    subjects: ["Language Skills", "Translation", "Literature", "Intercultural Communication"], skills: ["สื่อสารภาษา", "แปลและเรียบเรียง", "วิเคราะห์ข้อความ", "เข้าใจวัฒนธรรม"], careers: ["Translator", "Content Writer", "Language Teacher", "International Coordinator"],
    tags: { math: .1, science: 0, technology: .2, creative: .8, solo: .7, group: .7, business: .6 }, universities: ["จุฬาลงกรณ์มหาวิทยาลัย", "มหาวิทยาลัยธรรมศาสตร์", "มหาวิทยาลัยศิลปากร", "มหาวิทยาลัยเชียงใหม่"]
  },
  {
    id: "accounting", name: "การบัญชี", short: "Accounting", icon: "🧾", color: "blue",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    description: "จัดทำและวิเคราะห์ข้อมูลทางการเงินเพื่อช่วยให้องค์กรตัดสินใจได้อย่างถูกต้อง",
    subjects: ["Financial Accounting", "Auditing", "Taxation", "Management Accounting"], skills: ["ละเอียดรอบคอบ", "วิเคราะห์ตัวเลข", "จัดระบบข้อมูล", "รักษาความถูกต้อง"], careers: ["Accountant", "Auditor", "Tax Consultant", "Financial Controller"],
    tags: { math: .8, science: 0, technology: .4, creative: .2, solo: .8, group: .6, business: 1 }, universities: ["มหาวิทยาลัยธรรมศาสตร์", "จุฬาลงกรณ์มหาวิทยาลัย", "มหาวิทยาลัยเกษตรศาสตร์", "มหาวิทยาลัยเชียงใหม่"]
  },
  {
    id: "finance", name: "การเงินและการธนาคาร", short: "Finance", icon: "💰", color: "green",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=80",
    description: "วิเคราะห์การลงทุน เงินทุน ความเสี่ยง และการวางแผนทางการเงินสำหรับบุคคลและองค์กร",
    subjects: ["Investment", "Financial Management", "Risk Management", "Financial Markets"], skills: ["วิเคราะห์ตัวเลข", "ประเมินความเสี่ยง", "ตัดสินใจ", "สื่อสารคำแนะนำ"], careers: ["Financial Analyst", "Investment Advisor", "Risk Analyst", "Banking Officer"],
    tags: { math: .9, science: .1, technology: .5, creative: .3, solo: .7, group: .7, business: 1 }, universities: ["มหาวิทยาลัยธรรมศาสตร์", "จุฬาลงกรณ์มหาวิทยาลัย", "มหาวิทยาลัยเกษตรศาสตร์", "มหาวิทยาลัยมหิดล"]
  },
  {
    id: "tourism", name: "การท่องเที่ยวและการโรงแรม", short: "Tourism & Hospitality", icon: "🧳", color: "lime",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    description: "ออกแบบประสบการณ์การเดินทางและบริการ พร้อมบริหารธุรกิจท่องเที่ยวในระดับสากล",
    subjects: ["Tourism Management", "Hotel Operations", "Event Planning", "Service Design"], skills: ["บริการ", "วางแผนงาน", "สื่อสารหลายภาษา", "แก้ปัญหาเฉพาะหน้า"], careers: ["Hotel Manager", "Tour Guide", "Event Planner", "Travel Consultant"],
    tags: { math: .2, science: 0, technology: .3, creative: .7, solo: .3, group: 1, business: .9 }, universities: ["มหาวิทยาลัยมหิดล", "มหาวิทยาลัยธรรมศาสตร์", "มหาวิทยาลัยศิลปากร", "มหาวิทยาลัยเชียงใหม่"]
  },
  {
    id: "sports-science", name: "วิทยาศาสตร์การกีฬา", short: "Sports Science", icon: "🏃", color: "blue",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    description: "ใช้วิทยาศาสตร์พัฒนาสมรรถภาพ การฝึกซ้อม และสุขภาพของนักกีฬาและคนทั่วไป",
    subjects: ["Exercise Physiology", "Sports Psychology", "Biomechanics", "Training Science"], skills: ["วางแผนการฝึก", "วัดผล", "ดูแลสุขภาพ", "ทำงานกับผู้คน"], careers: ["Sports Scientist", "Personal Trainer", "Strength Coach", "Fitness Manager"],
    tags: { math: .4, science: .8, technology: .4, creative: .4, solo: .4, group: .9, business: .5 }, universities: ["จุฬาลงกรณ์มหาวิทยาลัย", "มหาวิทยาลัยมหิดล", "มหาวิทยาลัยเกษตรศาสตร์", "มหาวิทยาลัยเชียงใหม่"]
  },
  {
    id: "fine-arts", name: "วิจิตรศิลป์และศิลปกรรมศาสตร์", short: "Fine Arts", icon: "🎨", color: "green",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01988f5?auto=format&fit=crop&w=900&q=80",
    description: "สำรวจการสร้างสรรค์ผ่านทัศนศิลป์ ดนตรี การแสดง และศิลปะร่วมสมัยเพื่อสื่อสารตัวตนและสังคม",
    subjects: ["Drawing", "Art Theory", "Studio Practice", "Exhibition Design"], skills: ["สร้างสรรค์", "สังเกต", "พัฒนาผลงาน", "นำเสนอแนวคิด"], careers: ["Artist", "Curator", "Art Director", "Creative Educator"],
    tags: { math: .1, science: 0, technology: .3, creative: 1, solo: .8, group: .5, business: .4 }, universities: ["มหาวิทยาลัยศิลปากร", "จุฬาลงกรณ์มหาวิทยาลัย", "มหาวิทยาลัยเชียงใหม่", "มหาวิทยาลัยมหาสารคาม"]
  },
  {
    id: "computer-science", name: "วิทยาการคอมพิวเตอร์", short: "Computer Science", icon: "🖥️", color: "blue",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
    description: "ศึกษาอัลกอริทึม ซอฟต์แวร์ ข้อมูล และทฤษฎีคอมพิวเตอร์ เพื่อสร้างเทคโนโลยีที่แก้ปัญหาได้จริง",
    subjects: ["Algorithms", "Operating Systems", "Artificial Intelligence", "Software Engineering"], skills: ["คิดเชิงคำนวณ", "เขียนโปรแกรม", "วิเคราะห์ข้อมูล", "เรียนรู้ด้วยตัวเอง"], careers: ["Software Developer", "Data Scientist", "AI Engineer", "Cybersecurity Analyst"],
    tags: { math: .9, science: .4, technology: 1, creative: .5, solo: .8, group: .6, business: .3 }, universities: ["จุฬาลงกรณ์มหาวิทยาลัย", "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี", "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ"]
  },
  {
    id: "data-science", name: "วิทยาการข้อมูล", short: "Data Science", icon: "📈", color: "green",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    description: "เปลี่ยนข้อมูลจำนวนมากให้เป็นข้อค้นพบและการตัดสินใจด้วยสถิติ โปรแกรม และการเรียนรู้ของเครื่อง",
    subjects: ["Statistics", "Machine Learning", "Data Visualization", "Database Systems"], skills: ["วิเคราะห์ข้อมูล", "เขียนโปรแกรม", "ตั้งคำถาม", "เล่าเรื่องด้วยข้อมูล"], careers: ["Data Scientist", "Data Analyst", "ML Engineer", "Business Intelligence Analyst"],
    tags: { math: 1, science: .4, technology: 1, creative: .5, solo: .8, group: .6, business: .7 }, universities: ["สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี", "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ", "มหาวิทยาลัยมหิดล"]
  },
  {
    id: "industrial-design", name: "ออกแบบผลิตภัณฑ์", short: "Industrial Design", icon: "🪑", color: "lime",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
    description: "ออกแบบผลิตภัณฑ์และประสบการณ์การใช้งานให้สวยงาม ผลิตได้จริง และตอบโจทย์ผู้ใช้",
    subjects: ["Product Design", "Materials", "Model Making", "Design Research"], skills: ["เข้าใจผู้ใช้", "สเก็ตช์ไอเดีย", "ทำต้นแบบ", "นำเสนอผลงาน"], careers: ["Product Designer", "Furniture Designer", "Design Researcher", "Brand Strategist"],
    tags: { math: .3, science: .3, technology: .5, creative: 1, solo: .7, group: .7, business: .6 }, universities: ["จุฬาลงกรณ์มหาวิทยาลัย", "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี", "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ"]
  },
  {
    id: "nutrition", name: "โภชนาการและการกำหนดอาหาร", short: "Nutrition and Dietetics", icon: "🥗", color: "green",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
    description: "ใช้วิทยาศาสตร์อาหารและสุขภาพวางแผนโภชนาการเพื่อป้องกันโรคและส่งเสริมคุณภาพชีวิต",
    subjects: ["Human Nutrition", "Food Science", "Clinical Nutrition", "Community Nutrition"], skills: ["วิเคราะห์อาหาร", "ให้คำปรึกษา", "วิจัยสุขภาพ", "สื่อสารอย่างเข้าใจ"], careers: ["Dietitian", "Nutritionist", "Health Content Creator", "Food Product Specialist"],
    tags: { math: .4, science: .9, technology: .2, creative: .4, solo: .5, group: .8, business: .4 }, universities: ["มหาวิทยาลัยมหิดล", "จุฬาลงกรณ์มหาวิทยาลัย", "มหาวิทยาลัยเชียงใหม่", "มหาวิทยาลัยสงขลานครินทร์"]
  },
  {
    id: "film", name: "ภาพยนตร์และสื่อดิจิทัล", short: "Film and Digital Media", icon: "🎬", color: "blue",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
    description: "สร้างสรรค์ภาพยนตร์ วิดีโอ และสื่อดิจิทัลตั้งแต่การพัฒนาเรื่องจนถึงการผลิตและเผยแพร่",
    subjects: ["Screenwriting", "Cinematography", "Editing", "Film Production"], skills: ["เล่าเรื่อง", "ทำงานกองถ่าย", "ตัดต่อ", "คิดคอนเทนต์"], careers: ["Director", "Producer", "Editor", "Video Content Creator"],
    tags: { math: .1, science: 0, technology: .6, creative: 1, solo: .4, group: 1, business: .6 }, universities: ["มหาวิทยาลัยกรุงเทพ", "มหาวิทยาลัยศิลปากร", "จุฬาลงกรณ์มหาวิทยาลัย", "มหาวิทยาลัยธรรมศาสตร์"]
  }
].map(createFaculty));

export const defaultUniversities = [
  "จุฬาลงกรณ์มหาวิทยาลัย",
  "มหาวิทยาลัยธรรมศาสตร์",
  "มหาวิทยาลัยมหิดล",
  "มหาวิทยาลัยเกษตรศาสตร์",
  "มหาวิทยาลัยเชียงใหม่",
  "มหาวิทยาลัยขอนแก่น",
  "มหาวิทยาลัยสงขลานครินทร์"
];

export const universities = {
  "จุฬาลงกรณ์มหาวิทยาลัย": { type: "มหาวิทยาลัยรัฐ", city: "กรุงเทพฯ", description: "มหาวิทยาลัยชั้นนำที่มีหลักสูตรหลากหลายทั้งวิทยาศาสตร์ สุขภาพ วิศวกรรม และมนุษยศาสตร์", website: "https://www.chula.ac.th" },
  "มหาวิทยาลัยธรรมศาสตร์": { type: "มหาวิทยาลัยรัฐ", city: "ปทุมธานี / กรุงเทพฯ", description: "โดดเด่นด้านสังคมศาสตร์ กฎหมาย ธุรกิจ เศรษฐศาสตร์ และหลักสูตรนานาชาติ", website: "https://tu.ac.th" },
  "มหาวิทยาลัยมหิดล": { type: "มหาวิทยาลัยรัฐ", city: "นครปฐม / กรุงเทพฯ", description: "มีความเชี่ยวชาญด้านสุขภาพ วิทยาศาสตร์ เทคโนโลยี และการวิจัยระดับนานาชาติ", website: "https://mahidol.ac.th" },
  "มหาวิทยาลัยเกษตรศาสตร์": { type: "มหาวิทยาลัยรัฐ", city: "กรุงเทพฯ", description: "ครอบคลุมเกษตร อาหาร วิทยาศาสตร์ วิศวกรรม ธุรกิจ และเทคโนโลยี", website: "https://www.ku.ac.th" },
  "มหาวิทยาลัยเชียงใหม่": { type: "มหาวิทยาลัยรัฐ", city: "เชียงใหม่", description: "มหาวิทยาลัยภูมิภาคขนาดใหญ่ที่มีหลักสูตรครบทั้งวิทย์ สุขภาพ สังคม และศิลปะ", website: "https://www.cmu.ac.th" },
  "มหาวิทยาลัยขอนแก่น": { type: "มหาวิทยาลัยรัฐ", city: "ขอนแก่น", description: "ศูนย์กลางการศึกษาและวิจัยของภาคตะวันออกเฉียงเหนือ มีหลักสูตรหลากหลาย", website: "https://www.kku.ac.th" },
  "มหาวิทยาลัยสงขลานครินทร์": { type: "มหาวิทยาลัยรัฐ", city: "สงขลา / ภูเก็ต", description: "มหาวิทยาลัยหลักของภาคใต้ เด่นด้านสุขภาพ วิทยาศาสตร์ วิศวกรรม และการบริการ", website: "https://www.psu.ac.th" },
  "มหาวิทยาลัยศิลปากร": { type: "มหาวิทยาลัยรัฐ", city: "กรุงเทพฯ / นครปฐม", description: "มีชื่อเสียงด้านศิลปะ การออกแบบ สถาปัตยกรรม อักษรศาสตร์ และโบราณคดี", website: "https://www.su.ac.th" },
  "มหาวิทยาลัยมหาสารคาม": { type: "มหาวิทยาลัยรัฐ", city: "มหาสารคาม", description: "มีหลักสูตรเด่นด้านมนุษยศาสตร์ ศิลปกรรม การศึกษา วิทยาศาสตร์ และสังคมศาสตร์", website: "https://www.msu.ac.th" },
  "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี": { type: "มหาวิทยาลัยรัฐ", city: "กรุงเทพฯ", focus: "วิศวกรรม วิทยาศาสตร์ เทคโนโลยี และนวัตกรรม", highlights: ["วิศวกรรมและเทคโนโลยีเข้มข้น", "งานวิจัยและนวัตกรรม", "การเรียนรู้จากโครงงานจริง"], description: "มหาวิทยาลัยเทคโนโลยีที่เน้นวิศวกรรม วิทยาศาสตร์ เทคโนโลยี และนวัตกรรมที่ใช้ได้จริง", website: "https://www.kmutt.ac.th", image: "https://www.kmutt.ac.th/wp-content/uploads/2020/08/%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%A1%E0%B8%94_%E0%B9%91%E0%B9%98%E0%B9%91%E0%B9%92%E0%B9%92%E0%B9%97_0068.jpg", logo: "https://download.kmutt.ac.th/images/KMUTT2_CI.png" },
  "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ": { type: "มหาวิทยาลัยรัฐ", city: "กรุงเทพฯ / ปราจีนบุรี", focus: "วิศวกรรม เทคโนโลยีอุตสาหกรรม และวิทยาศาสตร์ประยุกต์", highlights: ["วิศวกรรมและเทคโนโลยีอุตสาหกรรม", "การเรียนภาคปฏิบัติ", "เชื่อมโยงภาคอุตสาหกรรม"], description: "มหาวิทยาลัยสายเทคโนโลยีที่เด่นด้านวิศวกรรม อุตสาหกรรม วิทยาศาสตร์ประยุกต์ และการผลิตกำลังคนเชิงปฏิบัติ", website: "https://www.kmutnb.ac.th" },
  "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง": { type: "มหาวิทยาลัยรัฐ", city: "กรุงเทพฯ", focus: "วิศวกรรม เทคโนโลยีดิจิทัล สถาปัตยกรรม และการบิน", highlights: ["วิศวกรรมและเทคโนโลยีดิจิทัล", "อิเล็กทรอนิกส์และระบบอัจฉริยะ", "สถาปัตยกรรมและการออกแบบ"], description: "สถาบันเทคโนโลยีที่โดดเด่นด้านวิศวกรรม คอมพิวเตอร์ ดิจิทัล อิเล็กทรอนิกส์ สถาปัตยกรรม และนวัตกรรม", website: "https://www.kmitl.ac.th" },
  "มหาวิทยาลัยเทคโนโลยีสุรนารี": { type: "มหาวิทยาลัยรัฐ", city: "นครราชสีมา", description: "มหาวิทยาลัยวิจัยที่เน้นวิทยาศาสตร์ วิศวกรรม เทคโนโลยี และสหกิจศึกษา", website: "https://www.sut.ac.th" },
  "มหาวิทยาลัยศรีนครินทรวิโรฒ": { type: "มหาวิทยาลัยรัฐ", city: "กรุงเทพฯ / นครนายก", description: "เด่นด้านครุศาสตร์ สุขภาพ มนุษยศาสตร์ สังคมศาสตร์ และการพัฒนามนุษย์", website: "https://www.swu.ac.th" },
  "มหาวิทยาลัยกรุงเทพ": { type: "มหาวิทยาลัยเอกชน", city: "ปทุมธานี", description: "มีหลักสูตรสร้างสรรค์ นิเทศศาสตร์ ธุรกิจ การออกแบบ และดิจิทัลมีเดีย", website: "https://www.bu.ac.th" }
};

// One real campus image for every university profile (rather than a generic stock campus).
const universityImages = {
  "จุฬาลงกรณ์มหาวิทยาลัย": "https://smapse.ru/storage/2018/09/converted/825_585_chulalongkorn-university-cu-5.jpg",
  "มหาวิทยาลัยธรรมศาสตร์": "https://tu.ac.th/app/uploads/2024/04/tu-tha-pha-chan-campus.png",
  "มหาวิทยาลัยมหิดล": "https://sustainability.mahidol.ac.th/ckeditor/upload/files/1665138243_DSCF1248.jpg",
  "มหาวิทยาลัยเกษตรศาสตร์": "https://siamrath.co.th/media/qtyhJRjCJrZqKJUokvXVSN2xAi9qnRxspcIhPSG55bQnYXsl5GYu6a5.jpg",
  "มหาวิทยาลัยเชียงใหม่": "https://mpics.mgronline.com/pics/Images/565000006121901.JPEG",
  "มหาวิทยาลัยขอนแก่น": "https://us-fbcloud.net/picpost/data/265/265924-53822a4468e89.jpg",
  "มหาวิทยาลัยสงขลานครินทร์": "https://hr.psu.ac.th/images/2565/images/recruitment18.jpg",
  "มหาวิทยาลัยศิลปากร": "https://thaiuniversityblog.wordpress.com/wp-content/uploads/2016/02/20131025172440.jpg",
  "มหาวิทยาลัยมหาสารคาม": "https://building.msu.ac.th/wp-content/uploads/2022/11/MSU_4554.jpg",
  "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี": "https://www.kmutt.ac.th/wp-content/uploads/2020/08/%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%A1%E0%B8%94_%E0%B9%91%E0%B9%98%E0%B9%91%E0%B9%92%E0%B9%92%E0%B9%97_0068.jpg",
  "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ": "https://univerlist.com/media/images/university/King_Mongkuts_University_of_Technology_North_Bangkok-cover2.jpg",
  "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง": "https://www.kmitl.ac.th/sites/default/files/styles/banner_3_1/public/2022-03/banner-faculty-3.jpg?itok=5-GWhTPH",
  "มหาวิทยาลัยเทคโนโลยีสุรนารี": "https://www.sut.ac.th/2012/images/upload/editor/images/202207/08/SUT%2332_Scoop%2032%20%E0%B8%9B%E0%B8%B5%20%E0%B8%A1%E0%B8%97%E0%B8%AA__pic3.JPG",
  "มหาวิทยาลัยศรีนครินทรวิโรฒ": "https://photos.swu.ac.th/gallery/%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2/2568/1/%E0%B8%A1%E0%B8%A8%E0%B8%A7%20%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B2%E0%B8%99%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%A3/photos/1.jpg?download=1",
  "มหาวิทยาลัยกรุงเทพ": "https://image.bangkokbiznews.com/uploads/images/md/2023/02/KAsZF9zs7pkcorrb9aWs.webp?x-image-process=style%2FLG"
};

Object.entries(universities).forEach(([name, university]) => {
  university.image ||= universityImages[name];
});

const universityLogos = {
  "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง": "https://commons.wikimedia.org/wiki/Special:FilePath/KMITL%20Sublogo.svg",
  "มหาวิทยาลัยเกษตรศาสตร์": "https://commons.wikimedia.org/wiki/Special:FilePath/Kasetsart%20Sublogo-EN.svg"
};

Object.entries(universityLogos).forEach(([name, logo]) => {
  if (universities[name]) universities[name].logo = logo;
});

export function getPersonalityProfile(answers) {
  const totals = {};
  Object.values(answers || {}).forEach((answer) => {
    Object.entries(answer.scores).forEach(([key, value]) => {
      totals[key] = (totals[key] || 0) + value;
    });
  });

  const traits = [
    ["technology", "นักสร้างสรรค์ดิจิทัล", "ชอบทดลองเครื่องมือใหม่และเปลี่ยนไอเดียให้กลายเป็นผลงานที่ใช้งานได้จริง"],
    ["creative", "นักคิดสร้างสรรค์", "มองเห็นมุมใหม่ ๆ และสนุกกับการเล่าเรื่องหรือสร้างสิ่งที่มีเอกลักษณ์"],
    ["math", "นักแก้ปัญหาเชิงระบบ", "ชอบแยกปัญหาเป็นส่วน ๆ วิเคราะห์ข้อมูล และหาวิธีที่มีเหตุผล"],
    ["science", "นักค้นคว้า", "สนใจการทดลอง หลักฐาน และการทำความเข้าใจโลกอย่างลึกซึ้ง"],
    ["group", "นักประสานพลัง", "ทำงานร่วมกับผู้อื่นได้ดี รับฟัง และช่วยให้ทีมเดินหน้าไปด้วยกัน"],
    ["business", "นักขับเคลื่อนโอกาส", "มองเห็นคุณค่า วางแผน และสื่อสารเพื่อเปลี่ยนความคิดให้เกิดผลลัพธ์"]
  ];
  const ranked = traits.sort((a, b) => (totals[b[0]] || 0) - (totals[a[0]] || 0));
  const primary = ranked[0];
  const secondary = ranked[1];

  return {
    title: primary?.[1] || "นักสำรวจตัวตน",
    summary: primary && secondary
      ? `${primary[2]} คุณยังมีด้าน${secondary[1]}ที่ช่วยเติมเต็มสไตล์การเรียนรู้ของคุณ`
      : "ทำแบบประเมินเพื่อค้นพบจุดเด่นและรูปแบบการทำงานที่เหมาะกับคุณ",
    traits: ranked.slice(0, 3).map(([key, title]) => ({ key, title, score: totals[key] || 0 }))
  };
}

export const questions = [
  {
    id: 1,
    title: "วิชาไหนที่คุณรู้สึกสนุกหรือถนัดที่สุด?",
    options: [
      { label: "คณิตศาสตร์ / การแก้โจทย์", scores: { math: 3 } },
      { label: "วิทยาศาสตร์ / การทดลอง", scores: { science: 3 } },
      { label: "คอมพิวเตอร์ / เทคโนโลยี", scores: { technology: 3 } },
      { label: "ศิลปะ / ภาษา / การออกแบบ", scores: { creative: 3 } }
    ]
  },
  {
    id: 2,
    title: "ถ้ามีเวลาว่าง คุณอยากทำอะไร?",
    options: [
      { label: "ลองเขียนโค้ดหรือสร้างเว็บไซต์", scores: { technology: 3, solo: 1 } },
      { label: "วาดรูป ทำกราฟิก หรือตัดต่อ", scores: { creative: 3 } },
      { label: "ทำกิจกรรมกับเพื่อน / ชมรม", scores: { group: 2, business: 1 } },
      { label: "อ่านเรื่องคน จิตใจ หรือสังคม", scores: { group: 1, business: 1, creative: 1 } }
    ]
  },
  {
    id: 3,
    title: "คุณชอบทำงานแบบไหนมากกว่า?",
    options: [
      { label: "โฟกัสคนเดียวแบบลึก ๆ", scores: { solo: 3 } },
      { label: "ทำกับทีมและช่วยกันคิด", scores: { group: 3 } },
      { label: "สลับระหว่างเดี่ยวและทีม", scores: { solo: 1.5, group: 1.5 } }
    ]
  },
  {
    id: 4,
    title: "เวลามีปัญหายาก ๆ คุณมักจะ...",
    options: [
      { label: "แยกปัญหาเป็นส่วน ๆ แล้วค่อยแก้", scores: { math: 2, technology: 2 } },
      { label: "คิดวิธีใหม่ที่ไม่เหมือนใคร", scores: { creative: 3 } },
      { label: "ถามคนอื่นและช่วยกันหาคำตอบ", scores: { group: 3 } },
      { label: "มองจากความรู้สึกและมุมมองของคน", scores: { business: 1, creative: 1, group: 2 } }
    ]
  },
  {
    id: 5,
    title: "ข้อไหนตรงกับเป้าหมายอาชีพของคุณมากที่สุด?",
    options: [
      { label: "อยากสร้างเทคโนโลยีหรือซอฟต์แวร์", scores: { technology: 3, math: 2 } },
      { label: "อยากทำแบรนด์ / ธุรกิจ / การตลาด", scores: { business: 3, group: 2 } },
      { label: "อยากสร้างงานออกแบบและสื่อ", scores: { creative: 3, technology: 1 } },
      { label: "อยากทำงานที่เกี่ยวข้องกับผู้คน", scores: { group: 3, business: 1 } }
    ]
  },
  {
    id: 6,
    title: "คุณรู้สึกอย่างไรกับการเรียนรู้เครื่องมือใหม่ ๆ?",
    options: [
      { label: "ชอบมาก ยิ่งใหม่ยิ่งอยากลอง", scores: { technology: 3 } },
      { label: "ชอบถ้าเอาไปสร้างอะไรได้", scores: { technology: 2, creative: 1 } },
      { label: "เฉย ๆ ขอให้ใช้งานได้ก็พอ", scores: { business: 1 } },
      { label: "ชอบเรียนรู้เรื่องคนมากกว่าเครื่องมือ", scores: { group: 2 } }
    ]
  },
  {
    id: 7,
    title: "ถ้าต้องนำเสนองาน คุณอยากรับบทไหน?",
    options: [
      { label: "คิดโครงสร้างและข้อมูล", scores: { math: 2, technology: 1 } },
      { label: "ออกแบบสไลด์ / ภาพ / mood", scores: { creative: 3 } },
      { label: "เป็นคนพูดและเล่าเรื่อง", scores: { group: 2, business: 2 } },
      { label: "ช่วยวางแผนและแบ่งงานในทีม", scores: { business: 3, group: 1 } }
    ]
  },
  {
    id: 8,
    title: "อะไรทำให้คุณภูมิใจในผลงานมากที่สุด?",
    options: [
      { label: "มันแก้ปัญหาได้จริง", scores: { math: 2, technology: 2 } },
      { label: "มันสวยและมีเอกลักษณ์", scores: { creative: 3 } },
      { label: "คนอื่นชอบและใช้งานได้", scores: { group: 2, business: 1 } },
      { label: "มันช่วยให้คนเข้าใจหรือดีขึ้น", scores: { group: 3, business: 1 } }
    ]
  },
  {
    id: 9,
    title: "เมื่อเจอเรื่องที่ยังทำไม่เป็น คุณมักจะทำอย่างไร?",
    options: [
      { label: "ค้นคว้าและลองทำด้วยตัวเองจนเข้าใจ", scores: { solo: 3, technology: 1 } },
      { label: "หา mentor หรือถามคนที่มีประสบการณ์", scores: { group: 3 } },
      { label: "ทดลองหลายวิธีแล้วดูว่าอะไรเวิร์ก", scores: { science: 2, creative: 2 } },
      { label: "วางแผนเป็นขั้นตอนก่อนลงมือ", scores: { math: 2, business: 2 } }
    ]
  },
  {
    id: 10,
    title: "สภาพแวดล้อมการเรียนแบบไหนทำให้คุณมีพลังที่สุด?",
    options: [
      { label: "ห้องแล็บหรือพื้นที่ให้ทดลองจริง", scores: { science: 3, technology: 1 } },
      { label: "สตูดิโอที่เปิดให้สร้างผลงานอิสระ", scores: { creative: 3, solo: 1 } },
      { label: "โครงการกลุ่มที่แก้โจทย์จากชีวิตจริง", scores: { group: 3, business: 1 } },
      { label: "ห้องเงียบที่ได้อ่านและวิเคราะห์ลึก ๆ", scores: { solo: 3, math: 1 } }
    ]
  },
  {
    id: 11,
    title: "คุณรับมือกับงานที่ไม่มีคำตอบตายตัวอย่างไร?",
    options: [
      { label: "สนุก เพราะได้คิดทางเลือกใหม่ ๆ", scores: { creative: 3 } },
      { label: "หาหลักฐานและข้อมูลมาช่วยตัดสินใจ", scores: { science: 2, math: 2 } },
      { label: "คุยกับคนที่เกี่ยวข้องเพื่อเข้าใจโจทย์", scores: { group: 2, business: 2 } },
      { label: "กำหนดเกณฑ์และกรอบการทำงานให้ชัด", scores: { math: 2, solo: 1, business: 1 } }
    ]
  },
  {
    id: 12,
    title: "คุณอยากให้ผลงานของคุณสร้างผลกระทบแบบไหน?",
    options: [
      { label: "ทำให้ชีวิตคนสะดวกหรือปลอดภัยขึ้น", scores: { technology: 2, group: 2 } },
      { label: "สร้างความเข้าใจและความเปลี่ยนแปลงในสังคม", scores: { group: 3, creative: 1 } },
      { label: "สร้างธุรกิจหรือโอกาสใหม่", scores: { business: 3, creative: 1 } },
      { label: "ค้นพบความรู้หรือนวัตกรรมใหม่", scores: { science: 3, math: 1 } }
    ]
  },
  {
    id: 13,
    title: "งานแบบไหนที่คุณน่าจะทำต่อเนื่องได้นาน?",
    options: [
      { label: "แก้โจทย์ยาก ๆ ที่ท้าทายความคิด", scores: { math: 3, solo: 1 } },
      { label: "พบปะ ดูแล หรือสื่อสารกับผู้คน", scores: { group: 3, business: 1 } },
      { label: "สร้างชิ้นงานที่เห็นภาพและจับต้องได้", scores: { creative: 3, technology: 1 } },
      { label: "วิเคราะห์ ทดลอง และค้นหาคำตอบ", scores: { science: 3, solo: 1 } }
    ]
  },
  {
    id: 14,
    title: "เวลาทำงานเป็นทีม คุณมักรับบทบาทใด?",
    options: [
      { label: "วางแผนและจัดลำดับความสำคัญ", scores: { business: 2, math: 1 } },
      { label: "ลงมือทำส่วนที่ต้องใช้ความเชี่ยวชาญ", scores: { technology: 2, solo: 1 } },
      { label: "เชื่อมคนและทำให้ทุกคนสื่อสารกันได้", scores: { group: 3 } },
      { label: "เสนอแนวคิดและมุมมองใหม่", scores: { creative: 3 } }
    ]
  },
  {
    id: 15,
    title: "คุณให้ความสำคัญกับอะไรเมื่อเลือกเส้นทางอาชีพ?",
    options: [
      { label: "ได้พัฒนาความเชี่ยวชาญอย่างลึกซึ้ง", scores: { solo: 2, science: 1, technology: 1 } },
      { label: "ได้สร้างประโยชน์ให้คนและสังคม", scores: { group: 3 } },
      { label: "มีอิสระในการสร้างสรรค์และตัดสินใจ", scores: { creative: 2, business: 1 } },
      { label: "มีโอกาสเติบโตและสร้างผลลัพธ์ชัดเจน", scores: { business: 3 } }
    ]
  },
  {
    id: 16,
    title: "ข้อใดอธิบายตัวคุณได้ใกล้เคียงที่สุด?",
    options: [
      { label: "อยากรู้ว่าระบบต่าง ๆ ทำงานอย่างไร", scores: { technology: 2, science: 1, math: 1 } },
      { label: "สังเกตความรู้สึกและความต้องการของคนเก่ง", scores: { group: 2, creative: 1 } },
      { label: "เห็นภาพสิ่งที่ยังไม่มีและอยากสร้างมัน", scores: { creative: 3 } },
      { label: "ชอบทำให้เป้าหมายกลายเป็นแผนที่ทำได้จริง", scores: { business: 2, math: 2 } }
    ]
  }
];

export function calculateResults(answers) {
  const totals = {};
  Object.values(answers).forEach((answer) => {
    Object.entries(answer.scores).forEach(([key, value]) => {
      totals[key] = (totals[key] || 0) + value;
    });
  });

  const maxByDimension = Object.keys(totals).reduce((acc, key) => acc + totals[key], 0) || 1;

  return faculties
    .map((faculty) => {
      const dimensions = Object.entries(faculty.tags);
      const raw = dimensions.reduce((sum, [dimension, weight]) => {
        return sum + (totals[dimension] || 0) * weight;
      }, 0);

      // Blend a normalized weighted score with a small baseline so every
      // faculty remains discoverable instead of collapsing to 0%.
      const normalized = raw / (maxByDimension * 1.7);
      const percentage = Math.max(55, Math.min(98, Math.round(58 + normalized * 40)));
      return { ...faculty, match: percentage };
    })
    .sort((a, b) => b.match - a.match);
}
