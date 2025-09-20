import React, {useState} from 'react';
import { motion } from 'framer-motion';

export default function App(){
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    setSent(true);
    setTimeout(()=>{ setSent(false); setEmail(''); setMessage(''); }, 2200);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100 font-sans">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-wide">Kev Developer</h1>
        <nav className="hidden md:flex gap-6 items-center text-sm text-slate-200">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <motion.div initial={{opacity:0, x:-30}} animate={{opacity:1, x:0}} transition={{duration:0.45}}>
            <h2 className="text-4xl font-extrabold leading-tight">Hello, I'm Kev — Fivem Developer</h2>
            <p className="mt-4 text-slate-300">I specialize in building responsive, scalable web applications with Python, and modern web technologies.</p>
            <div className="mt-6 flex gap-3">
              <a className="inline-block px-5 py-3 bg-indigo-500 rounded-md font-medium" href="#projects">View Projects</a>
              <a className="inline-block px-5 py-3 border border-slate-600 rounded-md text-slate-200" href="#contact">Hire Me</a>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="flex justify-center">
            <div className="w-48 h-48 rounded-full bg-indigo-500 flex items-center justify-center text-white text-3xl font-bold">KD</div>
          </motion.div>
        </section>

        <section id="about" className="py-12">
          <h3 className="text-2xl font-semibold">About Me</h3>
          <p className="mt-2 text-slate-300 max-w-2xl">I'm a developer passionate about crafting modern digital experiences. With strong foundations in Python, Fivem, .lua, and databases, I enjoy solving problems and building applications that scale. Outside of coding, I contribute to open-source projects and write dev blogs And Im 13 Years Old Making Custom Scripts Email Me For Price's.</p>
        </section>

        <section id="projects" className="py-12">
          <h3 className="text-2xl font-semibold">Featured Projects</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProjectCard title="Portfolio Website" desc="A responsive personal site built with React, Tailwind, and Framer Motion." />
            <ProjectCard title="Task Manager" desc="Love Deving." />
            <ProjectCard title="Real-time Chat" desc="Chat app powered by Socket.io and Express with live messaging." />
          </div>
        </section>

        <section id="skills" className="py-12">
          <h3 className="text-2xl font-semibold">Servers That Im Deving For</h3>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <SkillTile name="Central Valley WL" />
            <SkillTile name="RizzleWorld NYC" />
            <SkillTile name="WestBrook Valley Roleplay" />
          </div>
        </section>

        <section id="contact" className="py-12">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <p className="mt-2 text-slate-300">Interested in Hiring Me? Reach me at <a className="underline" href="mailto:kevisdev000@gmail.com">kev@example.com</a> or send a quick message below.</p>

          <form onSubmit={handleSubmit} className="mt-6 max-w-xl">
            <label className="block text-sm text-slate-300">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@example.com" className="mt-1 w-full rounded-md p-2 bg-slate-800 border border-slate-700 outline-none" />

            <label className="block mt-4 text-sm text-slate-300">Message</label>
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows={4} placeholder="Your message" className="mt-1 w-full rounded-md p-2 bg-slate-800 border border-slate-700 outline-none" />

            <div className="mt-4 flex items-center gap-3">
              <button type="submit" className="px-4 py-2 bg-indigo-500 rounded-md">Send</button>
            </div>

            {sent && <div className="mt-3 text-sm text-green-300">Message sent ✨ (simulated)</div>}
          </form>
        </section>

        <footer className="mt-12 border-t border-slate-700 pt-6 text-slate-400 text-sm">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
            <div>© {new Date().getFullYear()} Kev Developer</div>
            <div className="mt-3 md:mt-0">Built with React, Tailwind & Framer Motion</div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function ProjectCard({title, desc}){
  return (
    <div className="p-4 bg-slate-900/40 rounded-lg hover:bg-slate-900/60 transition">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-slate-300 text-sm">{desc}</p>
    </div>
  );
}

function SkillTile({name}){
  return (
    <div className="p-4 bg-slate-900/40 rounded-lg text-slate-200 font-medium">{name}</div>
  );
}
