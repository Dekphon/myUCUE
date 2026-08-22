import { useMemo, useState } from "react";
import {
  ArrowLeft, ArrowRight, BarChart3, BookOpen, BriefcaseBusiness,
  Check, ChevronRight, CircleHelp, GraduationCap, Heart, Home,
  ExternalLink, Lightbulb, LogIn, LogOut, Menu, RotateCcw, Settings, Sparkles, Target, UserRound, Users, X
} from "lucide-react";
import { defaultUniversities, faculties, questions, universities, calculateResults, getPersonalityProfile } from "./data";

const navItems = [
  ["home", "หน้าแรก"],
  ["assessment", "แบบประเมิน"],
  ["results", "ผลลัพธ์"],
  ["compare", "เปรียบเทียบ"]
];

function Logo({ onClick }) {
  return (
    <button onClick={onClick} className="flex items-center gap-3 group" aria-label="กลับหน้าแรก">
      <img src="/myUCUE.png" alt="myUCUE" className="h-9 w-auto object-contain" />
    </button>
  );
}

function AuthModal({ onClose, onLogin }) {
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (event) => {
    event.preventDefault();
    setError(""); // Clear any previous error messages
    const users = JSON.parse(localStorage.getItem("myucue-users") || "[]");
    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail || password.length < 6 || (mode === "signup" && !name.trim())) {
      setError(mode === "signup" ? "กรุณากรอกชื่อ อีเมล และรหัสผ่านอย่างน้อย 6 ตัวอักษร" : "กรุณากรอกอีเมลและรหัสผ่านให้ครบ");
      return;
    }
    if (mode === "signup") {
      if (users.some((account) => account.email === normalizedEmail)) {
        setError("อีเมลนี้มีบัญชีอยู่แล้ว กรุณาเข้าสู่ระบบ");
        return;
      }
      const account = { id: crypto.randomUUID(), name: name.trim(), email: normalizedEmail };
      localStorage.setItem("myucue-users", JSON.stringify([...users, { ...account, password } ]));
      onLogin(account);
      return;
    }
    const account = users.find((item) => item.email === normalizedEmail && item.password === password);
    if (!account) {
      setError("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
      return;
    }
    onLogin({ id: account.id, name: account.name, email: account.email });
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/40 px-5 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-md rounded-[2rem] bg-white p-7 shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <div><p className="text-xs font-extrabold tracking-[.18em] text-[#5E9C2A]">MYUCUE ACCOUNT</p><h2 className="mt-2 text-2xl font-extrabold">{mode === "signup" ? "สร้างบัญชี myUCUE" : "เข้าสู่ระบบ myUCUE"}</h2></div>
          <button onClick={onClose} className="rounded-xl p-2 text-slate-400 hover:bg-slate-100" aria-label="ปิด"><X size={18}/></button>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-500">บันทึกบัญชีและผลแบบประเมินไว้ใน browser เครื่องนี้</p>
        <form onSubmit={submit} className="mt-6 grid gap-3">
          {mode === "signup" && <input value={name} onChange={(event) => setName(event.target.value)} placeholder="ชื่อที่แสดง" className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#4A90D9]" />}
          <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="อีเมล" type="email" autoComplete="email" className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#4A90D9]" />
          <input value={password} onChange={(event) => setPassword(event.target.value)} placeholder="รหัสผ่านอย่างน้อย 6 ตัวอักษร" type="password" autoComplete={mode === "signup" ? "new-password" : "current-password"} className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#4A90D9]" />
          <button type="submit" className="mt-2 rounded-xl bg-gradient-to-r from-[#4A90D9] to-[#5E9C2A] py-3 text-sm font-bold text-white">{mode === "signup" ? "สมัครสมาชิก" : "เข้าสู่ระบบ"}</button>
        </form>
        {error && <p className="mt-4 rounded-xl bg-red-50 p-3 text-center text-xs font-semibold leading-5 text-red-600">{error}</p>}
        <button onClick={() => { setMode(mode === "signup" ? "login" : "signup"); setError(""); }} className="mt-5 w-full text-center text-xs font-bold text-[#1F5C99]">{mode === "signup" ? "มีบัญชีแล้ว? เข้าสู่ระบบ" : "ยังไม่มีบัญชี? สมัครสมาชิก"}</button>
      </div>
    </div>
  );
}

function Header({ page, setPage, user, onLogin, onLogout }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#dbe5ec] bg-white shadow-[0_2px_12px_rgba(20,58,84,.06)]">
      <div className="relative mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5">
        <Logo onClick={() => { setPage("home"); setOpen(false); }} />
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {navItems.map(([id, label]) => (
            <button key={id} onClick={() => setPage(id)}
              className={`border-b-2 px-3 py-5 text-sm font-semibold transition ${page === id ? "border-[#5E9C2A] text-[#1F5C99]" : "border-transparent text-slate-600 hover:border-slate-200 hover:text-[#1F5C99]"}`}>
              {label}
            </button>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          {page !== "assessment" && <button onClick={() => setPage("assessment")} className="rounded-xl bg-[#378add]/10 px-3 py-2 text-xs font-extrabold text-[#1f5fa5] hover:bg-[#378add]/15">ทำแบบประเมิน</button>}
          {user ? <button onClick={() => setPage("profile")} className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"><span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-[#4A90D9]/10 text-sm font-extrabold text-[#1F5C99]">{user.avatar ? <img src={user.avatar} alt="รูปโปรไฟล์" className="h-full w-full object-cover" /> : user.name.charAt(0)}</span>{user.name}</button> : <Button onClick={onLogin}><LogIn size={16}/> เข้าสู่ระบบ</Button>}
        </div>
        <button className="rounded-xl p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="เมนู">
          {open ? <X/> : <Menu/>}
        </button>
      </div>
      {open && (
        <div className="border-t bg-white px-5 py-4 md:hidden">
          {navItems.map(([id, label]) => (
            <button key={id} onClick={() => {setPage(id); setOpen(false);}}
              className="block w-full rounded-xl px-3 py-3 text-left text-sm font-medium hover:bg-slate-50">{label}</button>
          ))}
          <Button className="mt-2 w-full justify-center" onClick={() => {setPage("assessment"); setOpen(false);}}>เริ่มทำแบบประเมิน</Button>
          {user ? <button onClick={() => {setPage("profile"); setOpen(false);}} className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-bold"><span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-[#4A90D9]/10 text-xs font-extrabold text-[#1F5C99]">{user.avatar ? <img src={user.avatar} alt="รูปโปรไฟล์" className="h-full w-full object-cover" /> : user.name.charAt(0)}</span>{user.name}</button> : <button onClick={() => {onLogin(); setOpen(false);}} className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 py-3 text-sm font-bold text-white"><LogIn size={16}/> เข้าสู่ระบบ</button>}
        </div>
      )}
    </header>
  );
}

function Button({ children, onClick, variant="primary", className="", type="button", disabled=false }) {
  const base = "inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold shadow-sm transition active:scale-[.98] hover:-translate-y-0.5 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-45 disabled:shadow-none";
  const styles = variant === "secondary"
    ? "border border-slate-200 bg-white text-slate-700 hover:border-[#4A90D9]/40 hover:text-[#1F5C99]"
    : "bg-gradient-to-r from-[#4A90D9] to-[#5E9C2A] text-white shadow-lg shadow-blue-500/10 hover:brightness-105";
  return <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${styles} ${className}`}>{children}</button>;
}

function FacultyCard({ faculty, onDetail, selected, onToggleCompare }) {
  return (
    <article className="card-hover overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-36 overflow-hidden">
        <img src={faculty.image} alt="" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent"/>
        <span className="absolute bottom-3 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">{faculty.icon} {faculty.short}</span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-bold text-slate-900">{faculty.name}</h3>
          {selected && <span className="rounded-full bg-[#9ACD5C]/20 p-1 text-[#5E9C2A]"><Check size={15}/></span>}
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">{faculty.description}</p>
        <div className="mt-5 flex gap-2">
          <button onClick={() => onDetail(faculty)} className="flex-1 rounded-xl border border-slate-200 py-2.5 text-sm font-semibold hover:border-[#4A90D9]/40 hover:text-[#1F5C99]">ดูรายละเอียด</button>
          {onToggleCompare && (
            <button onClick={() => onToggleCompare(faculty.id)} className={`rounded-xl px-3 py-2.5 text-sm font-semibold ${selected ? "bg-[#5E9C2A] text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}>
              {selected ? "เลือกแล้ว" : "เปรียบเทียบ"}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

function HomePage({ setPage, onDetail }) {
  return (
    <div>
      <section className="hero-grid relative overflow-hidden border-b border-slate-200/70">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-16 md:grid-cols-[1.1fr_.9fr] md:pb-28 md:pt-24">
          <div className="animate-in">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#9ACD5C]/50 bg-[#9ACD5C]/10 px-3 py-1.5 text-xs font-bold text-[#5E9C2A]">
              <Sparkles size={14}/> Discover your edge
            </div>
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
              ยังไม่รู้จะเข้าคณะไหน?
              <span className="mt-2 block gradient-text">ให้ myUCUE ช่วยค้นหาตัวคุณ</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              ทำแบบประเมินสั้น ๆ จากความถนัด ความสนใจ และสไตล์การทำงาน
              แล้วค้นพบคณะที่อาจเหมาะกับคุณมากที่สุด
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => setPage("assessment")}>เริ่มทำแบบประเมิน <ArrowRight size={18}/></Button>
              <Button variant="secondary" onClick={() => document.getElementById("how").scrollIntoView()}>ดูวิธีการทำงาน</Button>
            </div>
            <div className="mt-7 flex items-center gap-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5"><Check size={14} className="text-[#5E9C2A]"/> ใช้เวลาไม่กี่นาที</span>
              <span className="flex items-center gap-1.5"><Check size={14} className="text-[#5E9C2A]"/> ไม่มีคำตอบผิด</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md animate-in [animation-delay:.1s]">
            <div className="gradient-bg surface-shadow rounded-[2rem] p-[1px]">
              <div className="rounded-[calc(2rem-1px)] bg-white/95 p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-extrabold tracking-[.14em] text-slate-400">YOUR PATH</p>
                    <p className="mt-1.5 text-2xl font-extrabold tracking-tight text-slate-900">เส้นทางของคุณ</p>
                  </div>
                  <div className="rounded-2xl bg-[#9ACD5C]/15 p-3.5 text-[#5E9C2A]"><Target size={23}/></div>
                </div>
                <div className="mt-7 space-y-3">
                  {[
                    ["01", "รู้จักตัวเอง", "ความถนัด + ความสนใจ"],
                    ["02", "ค้นหาคณะที่ใช่", "จับคู่กับข้อมูลของคุณ"],
                    ["03", "วางเส้นทางต่อ", "เปรียบเทียบและตัดสินใจ"]
                  ].map(([n,t,d], i) => (
                    <div key={n} className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-4.5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-extrabold text-[#4A90D9] shadow-sm">{n}</span>
                      <div><p className="text-[17px] font-extrabold leading-tight text-slate-800">{t}</p><p className="mt-1.5 text-[13px] font-medium leading-snug text-slate-500">{d}</p></div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl bg-gradient-to-r from-[#4A90D9]/10 to-[#9ACD5C]/15 p-4">
                  <div className="flex items-center gap-3.5">
                    <div className="rounded-xl bg-white p-2.5 text-[#4A90D9]"><Lightbulb size={19}/></div>
                    <p className="text-[15px] font-bold leading-snug text-slate-800">Your edge starts with knowing yourself.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="border-y border-slate-200/70 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <SectionHeading eyebrow="HOW IT WORKS" title="เริ่มจากตัวคุณ แล้วค่อยไปถึงคณะที่ใช่" />
          <div className="mt-11 grid gap-5 md:grid-cols-3">
            {[
              [CircleHelp, "ทำแบบประเมิน", "ตอบคำถาม 16 ข้อเกี่ยวกับความถนัด ความสนใจ แรงจูงใจ และสไตล์การทำงาน"],
              [Sparkles, "ดูผลลัพธ์", "ระบบคำนวณคะแนนแบบ weighted scoring และจัดอันดับคณะที่เข้ากับคุณ"],
              [BarChart3, "เปรียบเทียบคณะ", "เลือกคณะที่สนใจเพื่อดูค่าเทอม จุดเด่น และเส้นทางอาชีพแบบ side-by-side"]
            ].map(([Icon,title,desc],i)=>(
              <div key={title} className="card-hover relative overflow-hidden rounded-3xl border border-slate-200 bg-[#FAFAFA] p-7 md:p-8">
                <span className="absolute right-6 top-5 text-4xl font-black tracking-tighter text-[#378add]/[.08]">0{i+1}</span>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4A90D9]/15 to-[#9ACD5C]/20 text-[#1F5C99] shadow-sm">
                  <Icon size={25}/>
                </div>
                <div className="text-[13px] font-extrabold tracking-[.14em] text-[#4A90D9]">STEP 0{i+1}</div>
                <h3 className="mt-2 text-xl font-extrabold tracking-tight text-slate-900">{title}</h3>
                <p className="mt-3 text-[15px] font-medium leading-7 text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/70 bg-[#F3F7F3]">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-8 sm:grid-cols-3">
          {[[faculties.length, "คณะและสาขา", "ครอบคลุมสายเรียนหลากหลาย"] ,[15, "มหาวิทยาลัย", "มีเว็บไซต์ทางการให้สำรวจต่อ"], [16, "คำถามเชิงลึก", "รู้จักตัวเองมากกว่าคะแนนวิชา"]].map(([value, title, detail]) => <div key={title} className="rounded-2xl bg-white/75 px-5 py-4"><p className="text-3xl font-extrabold text-[#1F5C99]">{value}+</p><p className="mt-1 text-sm font-extrabold text-slate-800">{title}</p><p className="mt-1 text-xs text-slate-500">{detail}</p></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionHeading eyebrow="เส้นทางที่น่าสนใจ" title="เริ่มสำรวจจากความสนใจของคุณ" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-slate-500">ไม่มีเส้นทางไหนดีที่สุดสำหรับทุกคน ลองดูภาพรวมของแต่ละสาย แล้วใช้แบบประเมินช่วยเชื่อมความสนใจกับคณะที่เหมาะกับคุณ</p>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[['เทคโนโลยี', 'สร้างระบบ ซอฟต์แวร์ และนวัตกรรม', 'วิทยาการคอมพิวเตอร์', 'computer-science'], ['วิศวกรรม', 'ออกแบบ แก้ปัญหา และสร้างของจริง', 'วิศวกรรมคอมพิวเตอร์', 'computer'], ['สุขภาพ', 'ดูแลผู้คนด้วยวิทยาศาสตร์', 'แพทยศาสตร์', 'medicine'], ['สร้างสรรค์', 'เล่าเรื่อง ออกแบบ และสร้างประสบการณ์', 'นิเทศศิลป์ / ออกแบบดิจิทัล', 'design']].map(([title, detail, example, facultyId]) => { const image = faculties.find((faculty) => faculty.id === facultyId)?.image; return <div key={title} className="card-hover overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="relative h-32"><img src={image} alt="" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent" /></div><div className="p-5"><h3 className="text-lg font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{detail}</p><p className="mt-4 border-t border-slate-100 pt-3 text-xs font-bold text-[#1F5C99]">ตัวอย่าง: {example}</p></div></div>; })}
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[.8fr_1.2fr] md:items-center md:py-20">
          <div><SectionHeading eyebrow="A BETTER START" title="เลือกคณะโดยเห็นทั้งตัวเองและโลกการทำงาน" align="left"/><p className="mt-4 text-sm leading-7 text-slate-500">ข้อมูลคณะช่วยให้คุณเห็นภาพการเรียน ทักษะ และอาชีพ ส่วนคำตอบของคุณช่วยสะท้อนวิธีคิดและแรงจูงใจ เมื่อนำสองส่วนมาดูด้วยกัน การตัดสินใจก็มีเหตุผลและเป็นตัวคุณมากขึ้น</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{[["01", "อย่าเลือกจากชื่อคณะอย่างเดียว", "ดูวิชาที่ต้องเรียน งานที่ทำ และทักษะที่ต้องใช้จริง"], ["02", "ความถนัดพัฒนาได้", "ผลลัพธ์เป็นจุดเริ่มต้น ไม่ใช่กรอบจำกัดอนาคต"], ["03", "เปิดดูหลายทางเลือก", "คณะที่คล้ายกันอาจนำไปสู่อาชีพเดียวกันได้หลายแบบ"], ["04", "ตรวจสอบข้อมูลล่าสุด", "ค่าเทอมและการรับสมัครควรเช็กกับเว็บไซต์มหาวิทยาลัย"]].map(([number, title, detail]) => <div key={number} className="rounded-2xl border border-slate-200 p-4"><span className="text-xs font-extrabold text-[#4A90D9]">{number}</span><h3 className="mt-2 text-sm font-extrabold">{title}</h3><p className="mt-1 text-xs leading-6 text-slate-500">{detail}</p></div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading eyebrow="คณะที่คุณอาจค้นพบ" title="ตัวอย่างคณะที่คุณอาจค้นพบ" align="left"/>
          <button onClick={() => setPage("assessment")} className="hidden text-sm font-bold text-[#1F5C99] md:flex md:items-center md:gap-1">เริ่มค้นหา <ChevronRight size={16}/></button>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {faculties.slice(0,4).map(f=><FacultyCard key={f.id} faculty={f} onDetail={onDetail}/>)}
        </div>
      </section>
    </div>
  );
}

function SectionHeading({ eyebrow, title, align="center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-[12px] font-extrabold tracking-[.18em] text-[#5E9C2A]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
    </div>
  );
}

function AssessmentPage({ onFinish, setPage }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const q = questions[current];
  const progress = ((current + 1) / questions.length) * 100;
  const answeredCount = Object.keys(answers).length;

  const choose = (option) => setAnswers(prev => ({ ...prev, [q.id]: option }));
  const next = () => {
    if (!answers[q.id]) return;
    if (current === questions.length - 1) onFinish(answers);
    else setCurrent(v => v + 1);
  };

  return (
    <div className="mx-auto min-h-[calc(100vh-64px)] max-w-3xl px-5 py-10 md:py-16">
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500">
          <span>แบบประเมิน myUCUE</span><span>{current+1} / {questions.length}</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
          <div className="assessment-progress h-full rounded-full transition-all duration-500" style={{width:`${progress}%`}}/>
        </div>
      </div>
      <div className="animate-in rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-9">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4A90D9]/10 text-[#1F5C99]"><CircleHelp/></div>
        <div className="mt-7 flex items-center justify-between gap-3"><p className="text-sm font-bold text-[#4A90D9]">คำถามข้อที่ {current+1}</p><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">ตอบแล้ว {answeredCount}/{questions.length}</span></div>
        <h1 className="mt-2 text-2xl font-extrabold leading-relaxed md:text-3xl">{q.title}</h1>
        <div className="mt-8 grid gap-3">
          {q.options.map((option, i) => {
            const selected = answers[q.id] === option;
            return (
              <button key={i} onClick={() => choose(option)}
                className={`group flex items-center gap-4 rounded-2xl border p-4 text-left transition ${selected ? "border-[#4A90D9] bg-[#4A90D9]/5 ring-2 ring-[#4A90D9]/10" : "border-slate-200 hover:border-[#4A90D9]/40 hover:bg-slate-50"}`}>
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${selected ? "bg-[#4A90D9] text-white" : "bg-slate-100 text-slate-500 group-hover:bg-[#4A90D9]/10 group-hover:text-[#1F5C99]"}`}>
                  {selected ? <Check size={17}/> : String.fromCharCode(65+i)}
                </span>
                <span className="text-sm font-semibold leading-6">{option.label}</span>
              </button>
            );
          })}
        </div>
        <div className="mt-9 flex items-center justify-between gap-3">
          <Button variant="secondary" onClick={() => current === 0 ? setPage("home") : setCurrent(v=>v-1)}>
            <ArrowLeft size={16}/> ย้อนกลับ
          </Button>
          <Button onClick={next} disabled={!answers[q.id]}>
            {current === questions.length-1 ? "ดูผลลัพธ์" : "ถัดไป"} <ArrowRight size={16}/>
          </Button>
        </div>
      </div>
      <p className="mt-5 text-center text-xs text-slate-400">ไม่มีคำตอบที่ผิด — เลือกสิ่งที่ใกล้เคียงกับตัวคุณที่สุด</p>
    </div>
  );
}

function ResultsPage({ results, setPage, onDetail, compareIds, toggleCompare, restart }) {
  const shown = results?.length ? results : calculateResults({});
  const selectedCount = compareIds.length;
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 md:py-16">
      <div className="rounded-[2rem] gradient-bg p-[1px] shadow-lg shadow-blue-500/10">
        <div className="rounded-[calc(2rem-1px)] bg-white p-7 md:p-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#9ACD5C]/15 px-3 py-1.5 text-xs font-bold text-[#5E9C2A]"><Sparkles size={14}/> Your results</div>
              <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">คณะที่เหมาะกับคุณ</h1>
              <p className="mt-4 max-w-2xl text-[15px] font-medium leading-7 text-slate-500 md:text-base">คะแนนนี้เป็นแนวทางจากคำตอบของคุณ ไม่ใช่คำตัดสินสุดท้าย ลองใช้เพื่อค้นหาและเปรียบเทียบสิ่งที่สนใจต่อได้เลย</p>
            </div>
            <Button variant="secondary" onClick={restart}><RotateCcw size={16}/> ทำแบบประเมินใหม่</Button>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5">
        {shown.map((f, i) => (
          <div key={f.id} className="card-hover rounded-3xl border border-slate-200 bg-white p-5 md:p-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-center">
              <div className="flex items-center gap-4 md:w-[42%]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-[15px] font-extrabold text-slate-500">#{i+1}</span>
                <div>
                  <h2 className="text-lg font-extrabold tracking-tight text-slate-900">{f.name}</h2>
                  <p className="mt-1 text-[13px] font-medium text-slate-500">{f.short}</p>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-[13px] font-bold">
                  <span className="text-slate-500">ความเหมาะสม</span><span className="text-[#5E9C2A]">{f.match}%</span>
                </div>
                <div className="mt-2 h-2.5 rounded-full bg-slate-100">
                  <div className="match-progress h-full rounded-full" style={{width:`${f.match}%`}}/>
                </div>
                <p className="mt-2 line-clamp-1 text-[13px] font-medium text-slate-500">{f.description}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => onDetail(f)} className="rounded-xl border border-slate-200 px-3.5 py-2.5 text-[13px] font-bold hover:border-[#4A90D9]/40 hover:text-[#1F5C99]">รายละเอียด</button>
                <button onClick={() => toggleCompare(f.id)} disabled={!compareIds.includes(f.id) && selectedCount >= 3} className={`rounded-xl px-3.5 py-2.5 text-[13px] font-bold disabled:cursor-not-allowed disabled:opacity-45 ${compareIds.includes(f.id) ? "bg-[#5E9C2A] text-white" : "bg-slate-100 hover:bg-slate-200"}`}>
                  {compareIds.includes(f.id) ? "✓ เลือกแล้ว" : "+ เปรียบเทียบ"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-4 z-20 mt-8 flex flex-col items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-xl backdrop-blur md:flex-row">
        <div><p className="text-sm font-semibold text-slate-700">เลือกไว้แล้ว <span className="text-[#5E9C2A]">{selectedCount}</span> คณะ</p><p className="mt-0.5 text-xs text-slate-400">{selectedCount < 2 ? "เลือกอีกอย่างน้อย 1 คณะเพื่อเปรียบเทียบ" : selectedCount >= 3 ? "เลือกได้สูงสุด 3 คณะ" : "พร้อมเปรียบเทียบรายละเอียดแบบ side-by-side"}</p></div>
        <Button onClick={() => setPage("compare")} disabled={selectedCount < 2}>เปรียบเทียบคณะที่เลือก <BarChart3 size={16}/></Button>
      </div>
    </div>
  );
}

function DetailPage({ faculty, onBack, toggleCompare, selected }) {
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  if (!faculty) return null;
  const universityNames = faculty.universities || defaultUniversities;
  return (
    <div className="mx-auto max-w-6xl px-5 py-8 md:py-12">
      <button onClick={onBack} className="mb-6 flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#1F5C99]"><ArrowLeft size={16}/> กลับไปผลลัพธ์</button>
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
        <div className="relative h-56 md:h-80">
          <img src={faculty.image} alt="" className="h-full w-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"/>
          <div className="absolute bottom-6 left-6 right-6 text-white md:bottom-8 md:left-9">
            <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-700">{faculty.icon} {faculty.short}</span>
            <h1 className="mt-3 text-3xl font-extrabold md:text-4xl">{faculty.name}</h1>
          </div>
        </div>
        <div className="grid gap-8 p-6 md:grid-cols-[1.2fr_.8fr] md:p-9">
          <div>
            <h2 className="text-xl font-extrabold">เกี่ยวกับคณะ</h2>
            <p className="mt-3 text-sm leading-8 text-slate-600">{faculty.description}</p>
            <InfoBlock icon={BookOpen} title="รายวิชาหลักที่ต้องเรียน" items={faculty.subjects}/>
            <InfoBlock icon={Sparkles} title="ทักษะที่ได้" items={faculty.skills}/>
            <InfoBlock icon={BriefcaseBusiness} title="อาชีพที่ไปได้" items={faculty.careers}/>
            <UniversityList names={universityNames} onSelect={setSelectedUniversity}/>
          </div>
          <aside className="h-fit rounded-3xl soft-gradient p-5">
            <p className="text-xs font-bold tracking-wider text-[#5E9C2A]">ESTIMATED TUITION</p>
            <p className="mt-2 text-lg font-extrabold">{faculty.tuition}</p>
            <p className="mt-2 text-xs leading-6 text-slate-500">ค่าใช้จ่ายจริงขึ้นอยู่กับมหาวิทยาลัย หลักสูตร และปีการศึกษา ควรตรวจสอบกับสถาบันอีกครั้ง</p>
            <button onClick={() => toggleCompare(faculty.id)} className={`mt-5 w-full rounded-2xl py-3 text-sm font-bold ${selected ? "bg-[#5E9C2A] text-white" : "bg-white text-[#1F5C99] shadow-sm"}`}>
              {selected ? "✓ เพิ่มในรายการเปรียบเทียบแล้ว" : "+ เพิ่มไปเปรียบเทียบ"}
            </button>
          </aside>
        </div>
      </div>
      {selectedUniversity && <UniversityModal name={selectedUniversity} onClose={() => setSelectedUniversity(null)}/>} 
    </div>
  );
}

function UniversityLogo({ university, name, className = "h-11 w-11" }) {
  const [failed, setFailed] = useState(false);
  const logo = university?.logo || (university?.website
    ? `https://www.google.com/s2/favicons?sz=128&domain_url=${encodeURIComponent(university.website)}`
    : "");
  return <span className={`flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-1 shadow-sm ring-1 ring-slate-200 ${className}`}>
    {!failed && logo ? <img src={logo} alt={`ตราสัญลักษณ์ ${name}`} className="h-full w-full object-contain" onError={() => setFailed(true)} /> : <GraduationCap size={18} className="text-[#3972e6]" />}
  </span>;
}

function UniversityList({ names, onSelect }) {
  return <div className="mt-8"><div className="flex items-center gap-2 text-sm font-extrabold"><GraduationCap size={17} className="text-[#4A90D9]"/>มหาวิทยาลัยที่มีหลักสูตรใกล้เคียง</div><div className="mt-3 grid gap-3 sm:grid-cols-2">{names.map((name) => { const university = universities[name]; return <div key={name} className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"><div className="flex items-center gap-3"><UniversityLogo university={university} name={name}/><p className="text-xs font-bold leading-5 text-slate-700">{name}</p></div><div className="mt-3 flex gap-2"><button type="button" onClick={() => onSelect(name)} className="university-detail-action flex flex-1 items-center justify-center gap-1 rounded-lg px-2 py-2 text-[11px] font-bold">ดูรายละเอียด <ChevronRight size={13}/></button>{university && <a href={university.website} target="_blank" rel="noreferrer" aria-label={`เว็บไซต์ ${name}`} className="university-website-action flex items-center justify-center rounded-lg px-2"><ExternalLink size={14}/></a>}</div></div>; })}</div></div>;
}

function UniversityModal({ name, onClose }) {
  const university = universities[name] || { type: "มหาวิทยาลัย", city: "ประเทศไทย", focus: "ตรวจสอบจากเว็บไซต์ทางการ", highlights: [], description: "ตรวจสอบรายละเอียดหลักสูตรและการรับสมัครจากเว็บไซต์ทางการของมหาวิทยาลัย", website: "https://www.mytcas.com" };
  const focus = university.focus || "ตรวจสอบกลุ่มหลักสูตรจากเว็บไซต์ทางการ";
  const highlights = university.highlights || [];
  const campusImage = university.image || "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85";
  return <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-slate-950/45 px-5 py-5 backdrop-blur-sm" onClick={onClose}><div className="w-full max-w-lg overflow-hidden rounded-[2rem] bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}><div className="relative h-48"><img src={campusImage} alt={`ภาพประกอบ ${name}`} className="h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent"/><button onClick={onClose} className="absolute right-4 top-4 rounded-xl bg-white/90 p-2 text-slate-500 shadow-sm hover:bg-white" aria-label="ปิด"><X size={18}/></button><div className="absolute inset-x-6 bottom-5 flex items-end gap-3 text-white"><UniversityLogo university={university} name={name} className="h-14 w-14"/><div><p className="text-[10px] font-extrabold tracking-[.18em] text-white/75">UNIVERSITY PROFILE</p><h2 className="mt-1 text-xl font-extrabold leading-tight">{name}</h2></div></div></div><div className="p-6"><div className="grid gap-4 text-sm"><p><span className="font-bold text-slate-400">ประเภท / สถานที่</span><br/>{university.type} · {university.city}</p><p><span className="font-bold text-slate-400">กลุ่มหลักสูตรเด่น</span><br/>{focus}</p><p className="leading-7"><span className="font-bold text-slate-400">เกี่ยวกับ</span><br/>{university.description}</p>{highlights.length > 0 && <div><span className="font-bold text-slate-400">จุดเด่นที่ควรสำรวจ</span><div className="mt-2 flex flex-wrap gap-2">{highlights.map((highlight) => <span key={highlight} className="rounded-lg bg-[#4A90D9]/10 px-2.5 py-1.5 text-xs font-semibold text-[#1F5C99]">{highlight}</span>)}</div></div>}</div><a href={university.website} target="_blank" rel="noreferrer" className="university-website-primary mt-6 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white">เว็บไซต์มหาวิทยาลัย <ExternalLink size={16}/></a><p className="mt-3 text-center text-[11px] text-slate-400">ตรวจสอบชื่อหลักสูตร คุณสมบัติ ค่าเทอม และกำหนดการรับสมัครจากเว็บไซต์ทางการอีกครั้ง</p></div></div></div>;
}

function InfoBlock({icon:Icon,title,items}) {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 text-sm font-extrabold"><Icon size={17} className="text-[#4A90D9]"/>{title}</div>
      <div className="mt-3 flex flex-wrap gap-2">{items.map(x=><span key={x} className="rounded-xl bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-600">{x}</span>)}</div>
    </div>
  );
}

function ComparePage({ compareIds, setPage, toggleCompare }) {
  const selected = compareIds.map(id => faculties.find(f => f.id === id)).filter(Boolean);
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 md:py-16">
      <SectionHeading eyebrow="COMPARE" title="เปรียบเทียบคณะที่คุณสนใจ" />
      {selected.length < 2 ? (
        <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <BarChart3 className="mx-auto text-[#4A90D9]" size={36}/>
          <h2 className="mt-4 text-xl font-extrabold">เลือกอย่างน้อย 2 คณะ</h2>
          <p className="mt-2 text-sm text-slate-500">กลับไปผลลัพธ์แล้วกด “เปรียบเทียบ” ในคณะที่อยากนำมาเทียบ</p>
          <Button className="mt-6" onClick={() => setPage("results")}>กลับไปผลลัพธ์</Button>
        </div>
      ) : (
        <>
          <div className="mt-8 hidden overflow-x-auto rounded-3xl border border-slate-200 bg-white md:block">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="w-44 border-b border-slate-200 p-5 text-left text-xs font-bold uppercase tracking-wider text-slate-400">ข้อมูล</th>
                  {selected.map(f=><th key={f.id} className="border-b border-slate-200 p-5 text-left"><div className="font-extrabold">{f.name}</div><div className="mt-1 text-xs text-slate-400">{f.short}</div></th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ["ค่าเทอม", f => f.tuition],
                  ["จุดเด่น", f => f.pros.join(" • ")],
                  ["ควรพิจารณา", f => f.considerations.join(" • ")],
                  ["สายอาชีพ", f => f.careers.join(" • ")]
                ].map(([label,get])=>(
                  <tr key={label}>
                    <td className="border-b border-slate-100 p-5 font-bold text-slate-500">{label}</td>
                    {selected.map(f=><td key={f.id} className="border-b border-slate-100 p-5 leading-7 text-slate-600">{get(f)}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid gap-4 md:hidden">
            {selected.map(f=>(
              <div key={f.id} className="rounded-3xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-extrabold">{f.name}</h2>
                  <button onClick={() => toggleCompare(f.id)} className="rounded-lg p-1 text-slate-400"><X size={17}/></button>
                </div>
                <div className="mt-5 space-y-4 text-sm">
                  <CompareRow label="ค่าเทอม" value={f.tuition}/>
                  <CompareRow label="จุดเด่น" value={f.pros.join(" • ")}/>
                  <CompareRow label="ควรพิจารณา" value={f.considerations.join(" • ")}/>
                  <CompareRow label="สายอาชีพ" value={f.careers.join(" • ")}/>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center"><Button variant="secondary" onClick={() => setPage("results")}>← กลับไปเลือกคณะ</Button></div>
        </>
      )}
    </div>
  );
}
function CompareRow({label,value}) {
  return <div><p className="text-xs font-bold text-slate-400">{label}</p><p className="mt-1 leading-6 text-slate-600">{value}</p></div>;
}

function AvatarUpload({ user, onSave }) {
  const upload = (event) => {
    const file = event.target.files?.[0];
    if (!file || !file.type.startsWith("image/") || file.size > 2 * 1024 * 1024) return;
    const reader = new FileReader();
    reader.onload = () => {
      const avatar = String(reader.result);
      const users = JSON.parse(localStorage.getItem("myucue-users") || "[]");
      localStorage.setItem("myucue-users", JSON.stringify(users.map((account) => account.id === user.id ? { ...account, avatar } : account)));
      onSave({ ...user, avatar });
    };
    reader.readAsDataURL(file);
  };
  return <label className="group relative block h-16 w-16 shrink-0 cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-[#4A90D9] to-[#9ACD5C] text-2xl font-extrabold text-white"><span className="flex h-full w-full items-center justify-center">{user.avatar ? <img src={user.avatar} alt="รูปโปรไฟล์" className="h-full w-full object-cover" /> : user.name.charAt(0)}</span><span className="absolute inset-x-0 bottom-0 bg-slate-950/65 py-1 text-center text-[9px] opacity-0 transition group-hover:opacity-100">เปลี่ยนรูป</span><input type="file" accept="image/png,image/jpeg,image/webp" onChange={upload} className="sr-only" /></label>;
}

function ProfilePage({ user, savedProfile, setPage, onLogout, onSave }) {
  const personality = savedProfile?.personality || getPersonalityProfile({});
  return (
    <div className="mx-auto max-w-5xl px-5 py-10 md:py-16">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <AvatarUpload user={user} onSave={onSave}/>
            <div><p className="text-xs font-bold uppercase tracking-wider text-slate-400">{user.provider || "สมาชิกทั่วไป"}</p><h1 className="mt-1 text-2xl font-extrabold">{user.name}</h1><p className="mt-1 text-sm text-slate-500">{user.email}</p></div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row"><button onClick={() => setPage("settings")} className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-600 hover:border-[#4A90D9] hover:text-[#1F5C99]"><Settings size={16}/> ตั้งค่าบัญชี</button><button onClick={onLogout} className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-600 hover:border-red-200 hover:text-red-600"><LogOut size={16}/> ออกจากระบบ</button></div>
        </div>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_.9fr]">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-7">
          <p className="text-xs font-extrabold tracking-[.18em] text-[#5E9C2A]">YOUR PERSONALITY</p>
          <h2 className="mt-2 text-2xl font-extrabold">{personality.title}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-500">{personality.summary}</p>
          <div className="mt-6 space-y-3">{personality.traits.map((trait, index) => <div key={trait.key} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4A90D9]/10 text-xs font-extrabold text-[#1F5C99]">0{index + 1}</span><span className="text-sm font-bold">{trait.title}</span></div>)}</div>
        </section>
        <section className="rounded-[2rem] border border-slate-200 bg-white p-7">
          <p className="text-xs font-extrabold tracking-[.18em] text-[#5E9C2A]">SAVED JOURNEY</p>
          <h2 className="mt-2 text-2xl font-extrabold">ข้อมูลของฉัน</h2>
          <div className="mt-6 space-y-4 text-sm"><div className="flex justify-between border-b border-slate-100 pb-3"><span className="text-slate-500">สถานะการทำแบบประเมิน</span><b>{savedProfile?.answers ? "ทำแล้ว" : "ยังไม่ได้ทำ"}</b></div><div className="flex justify-between border-b border-slate-100 pb-3"><span className="text-slate-500">ผลคณะที่บันทึกไว้</span><b>{savedProfile?.results?.length || 0} คณะ</b></div></div>
          <Button className="mt-7 w-full justify-center" onClick={() => setPage(savedProfile?.results?.length ? "results" : "assessment")}>{savedProfile?.results?.length ? "ดูผลลัพธ์ของฉัน" : "เริ่มทำแบบประเมิน"} <ArrowRight size={16}/></Button>
        </section>
      </div>
    </div>
  );
}

function AccountSettingsPage({ user, setPage, onSave }) {
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [avatar, setAvatar] = useState(user.avatar || "");
  const [avatarFile, setAvatarFile] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const chooseAvatar = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/") || file.size > 2 * 1024 * 1024) {
      setError("กรุณาเลือกไฟล์รูปภาพขนาดไม่เกิน 2 MB");
      event.target.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = () => { setAvatarFile(String(reader.result)); setAvatar(""); setError(""); };
    reader.readAsDataURL(file);
  };

  const save = (event) => {
    event.preventDefault();
    setError("");
    setMessage("");
    const users = JSON.parse(localStorage.getItem("myucue-users") || "[]");
    const account = users.find((item) => item.id === user.id);
    const nextEmail = email.trim().toLowerCase();
    if (!name.trim() || !nextEmail) return setError("กรุณากรอกชื่อและอีเมลให้ครบ");
    if (users.some((item) => item.id !== user.id && item.email === nextEmail)) return setError("อีเมลนี้ถูกใช้แล้ว");
    if (newPassword && (currentPassword !== account?.password || newPassword.length < 6)) return setError("รหัสผ่านเดิมไม่ถูกต้อง หรือรหัสผ่านใหม่สั้นกว่า 6 ตัวอักษร");
    if (newPassword && newPassword !== confirmPassword) return setError("รหัสผ่านใหม่ไม่ตรงกัน");
    const updated = { ...account, name: name.trim(), email: nextEmail, avatar: avatarFile || avatar.trim() };
    if (newPassword) updated.password = newPassword;
    localStorage.setItem("myucue-users", JSON.stringify(users.map((item) => item.id === user.id ? updated : item)));
    onSave({ id: updated.id, name: updated.name, email: updated.email, avatar: updated.avatar });
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setMessage("บันทึกการตั้งค่าแล้ว");
  };

  return <div className="mx-auto max-w-3xl px-5 py-10 md:py-16"><button onClick={() => setPage("profile")} className="mb-6 flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#1F5C99]"><ArrowLeft size={16}/> กลับไปโปรไฟล์</button><div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-9"><div><p className="text-xs font-extrabold tracking-[.18em] text-[#5E9C2A]">ACCOUNT SETTINGS</p><h1 className="mt-2 text-3xl font-extrabold">ตั้งค่าบัญชี</h1><p className="mt-3 text-sm leading-7 text-slate-500">แก้ไขข้อมูลที่ใช้แสดงในโปรไฟล์และจัดการรหัสผ่านของคุณ</p></div><form onSubmit={save} className="mt-8 grid gap-8"><section><h2 className="text-lg font-extrabold">ข้อมูลส่วนตัว</h2><div className="mt-4 grid gap-4"><label className="grid gap-2 text-sm font-bold text-slate-700">ชื่อที่แสดง<input value={name} onChange={(event) => setName(event.target.value)} className="border border-slate-200 px-4 py-3 font-normal outline-none focus:border-[#4A90D9]" /></label><label className="grid gap-2 text-sm font-bold text-slate-700">อีเมล<input value={email} onChange={(event) => setEmail(event.target.value)} type="email" className="border border-slate-200 px-4 py-3 font-normal outline-none focus:border-[#4A90D9]" /></label><label className="grid gap-2 text-sm font-bold text-slate-700">ลิงก์รูปโปรไฟล์<span className="text-xs font-normal text-slate-400">ใส่ URL รูปภาพที่ต้องการใช้ หรือเว้นว่างเพื่อใช้ตัวอักษรแทน</span><input value={avatar} onChange={(event) => setAvatar(event.target.value)} type="url" placeholder="https://..." className="border border-slate-200 px-4 py-3 font-normal outline-none focus:border-[#4A90D9]" /></label></div></section><section className="border-t border-slate-100 pt-7"><h2 className="text-lg font-extrabold">เปลี่ยนรหัสผ่าน</h2><p className="mt-2 text-xs leading-6 text-slate-500">เว้นว่างไว้หากยังไม่ต้องการเปลี่ยนรหัสผ่าน</p><div className="mt-4 grid gap-4"><input value={currentPassword} onChange={(event) => setCurrentPassword(event.target.value)} type="password" placeholder="รหัสผ่านเดิม" autoComplete="current-password" className="border border-slate-200 px-4 py-3 outline-none focus:border-[#4A90D9]" /><input value={newPassword} onChange={(event) => setNewPassword(event.target.value)} type="password" placeholder="รหัสผ่านใหม่อย่างน้อย 6 ตัวอักษร" autoComplete="new-password" className="border border-slate-200 px-4 py-3 outline-none focus:border-[#4A90D9]" /><input value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} type="password" placeholder="ยืนยันรหัสผ่านใหม่" autoComplete="new-password" className="border border-slate-200 px-4 py-3 outline-none focus:border-[#4A90D9]" /></div></section>{error && <p className="rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-600">{error}</p>}{message && <p className="rounded-xl bg-green-50 p-3 text-sm font-semibold text-green-700">{message}</p>}<div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end"><button type="button" onClick={() => setPage("profile")} className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50">ยกเลิก</button><Button type="submit">บันทึกการตั้งค่า <Check size={16}/></Button></div></form></div></div>;
}

function Footer({setPage}) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo onClick={() => setPage("home")}/>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">Understand yourself, choose your university, find your edge.</p>
        </div>
        <div>
          <p className="font-extrabold">สำรวจ</p>
          <div className="mt-3 space-y-2 text-sm text-slate-500">
            <button onClick={()=>setPage("assessment")} className="block hover:text-[#1F5C99]">แบบประเมิน</button>
            <button onClick={()=>setPage("results")} className="block hover:text-[#1F5C99]">ผลลัพธ์</button>
            <button onClick={()=>setPage("compare")} className="block hover:text-[#1F5C99]">เปรียบเทียบคณะ</button>
          </div>
        </div>
        <div>
          <p className="font-extrabold">ติดต่อ</p>
          <p className="mt-3 text-sm leading-7 text-slate-500">hello@myucue.com<br/>myucue.com</p>
        </div>
      </div>
      <div className="border-t border-slate-100 py-5 text-center text-xs text-slate-400">© 2026 myUCUE. Built to help you find your edge.</div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("myucue-user") || "null"));
  const [savedProfile, setSavedProfile] = useState(() => {
    const activeUser = JSON.parse(localStorage.getItem("myucue-user") || "null");
    const stored = activeUser?.id && localStorage.getItem(`myucue-profile-${activeUser.id}`);
    return stored ? JSON.parse(stored) : null;
  });
  const [results, setResults] = useState(() => savedProfile?.results || []);
  const [detail, setDetail] = useState(null);
  const [compareIds, setCompareIds] = useState([]);
  const [authOpen, setAuthOpen] = useState(false);

  const navigate = (nextPage) => {
    if (nextPage !== "home" && !user) {
      setAuthOpen(true);
      return;
    }
    setPage(nextPage);
  };

  const login = (profile) => {
    setUser(profile);
    localStorage.setItem("myucue-user", JSON.stringify(profile));
    const stored = localStorage.getItem(`myucue-profile-${profile.id}`);
    if (stored) {
      const restored = JSON.parse(stored);
      setSavedProfile(restored);
      setResults(restored.results || []);
    } else {
      setSavedProfile(null);
      setResults([]);
    }
    setAuthOpen(false);
    setPage("profile");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("myucue-user");
    setSavedProfile(null);
    setResults([]);
    setCompareIds([]);
    setPage("home");
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem("myucue-user", JSON.stringify(updatedUser));
    setPage("profile");
  };

  const toggleCompare = (id) => setCompareIds(prev => prev.includes(id) ? prev.filter(x=>x!==id) : prev.length >= 3 ? prev : [...prev,id]);

  const finishAssessment = (answers) => {
    if (!user) {
      setAuthOpen(true);
      return;
    }
    const nextResults = calculateResults(answers);
    setResults(nextResults);
    const profile = { answers, results: nextResults, personality: getPersonalityProfile(answers) };
    setSavedProfile(profile);
    localStorage.setItem(`myucue-profile-${user.id}`, JSON.stringify(profile));
    setPage("results");
    window.scrollTo({top:0,behavior:"smooth"});
  };

  const openDetail = (faculty) => {
    if (!user) {
      setAuthOpen(true);
      return;
    }
    setDetail(faculty);
    setPage("detail");
    window.scrollTo({top:0,behavior:"smooth"});
  };

  const restart = () => {
    setPage("assessment");
    setResults([]);
    window.scrollTo({top:0,behavior:"smooth"});
  };

  const content = useMemo(() => {
    if (page === "home") return <HomePage setPage={navigate} onDetail={openDetail}/>;
    if (page === "assessment") return <AssessmentPage onFinish={finishAssessment} setPage={navigate}/>;
    if (page === "results") return <ResultsPage results={results} setPage={navigate} onDetail={openDetail} compareIds={compareIds} toggleCompare={toggleCompare} restart={restart}/>;
    if (page === "profile" && user) return <ProfilePage user={user} savedProfile={savedProfile} setPage={navigate} onLogout={logout} onSave={updateUser}/>;
    if (page === "settings" && user) return <AccountSettingsPage user={user} setPage={navigate} onSave={updateUser}/>;
    if (page === "detail") return <DetailPage faculty={detail} onBack={() => navigate(results.length ? "results" : "home")} toggleCompare={toggleCompare} selected={detail ? compareIds.includes(detail.id) : false}/>;
    if (page === "compare") return <ComparePage compareIds={compareIds} setPage={navigate} toggleCompare={toggleCompare}/>;
    return null;
  }, [page, results, detail, compareIds, user, savedProfile]);

  return (
    <div className="min-h-screen bg-transparent text-[#1A1A1A]">
      <Header page={page} setPage={navigate} user={user} onLogin={() => setAuthOpen(true)} onLogout={logout}/>
      <main key={page} className="page-enter">{content}</main>
      {page !== "assessment" && <Footer setPage={navigate}/>} 
      {authOpen && <AuthModal onClose={() => setAuthOpen(false)} onLogin={login}/>} 
    </div>
  );
}
