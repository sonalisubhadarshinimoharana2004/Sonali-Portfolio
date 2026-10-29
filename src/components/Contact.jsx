import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Send, CheckCircle2, AlertCircle } from "lucide-react";
import SectionTitle from "./SectionTitle";
const EMAIL = "moharanas912@gmail.com";
export default function Contact() {
  const [form, setForm] = useState({name:"",email:"",subject:"",message:""});
  const [feedback,setFeedback] = useState(null);
  const update = e => setForm({...form,[e.target.name]:e.target.value});
  const submit = e => {
    e.preventDefault();
    if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.subject.trim() || !form.message.trim()) {
      setFeedback({type:"error",text:"Please complete every field and enter a valid email address."}); return;
    }
    const body = `Name: ${form.name}\nReply email: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setFeedback({type:"info",text:"Your email app should open with the message prepared. Send it from your email app to complete delivery."});
    window.location.href = mailto;
  };
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setFeedback({type:"success",text:"Email address copied."}); }
    catch { setFeedback({type:"info",text:`Email: ${EMAIL}`}); }
  };
  const details = [
    {Icon:Mail,label:"Email",value:EMAIL,href:`mailto:${EMAIL}`},
    {Icon:Phone,label:"Phone",value:"8093956716",href:"tel:+918093956716"},
    {Icon:MapPin,label:"Location",value:"Khordha, Odisha, India"}
  ];
  return <section id="contact" className="section"><div className="container-page"><SectionTitle eyebrow="Get in touch" title={<>Let's build something <span className="gradient-text">together</span></>} description="Have an opportunity, a project idea, or a collaboration in mind? I’d love to connect."/>
    <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
      <div className="glass rounded-3xl p-6 sm:p-8"><h3 className="text-xl font-bold">Contact details</h3><p className="muted mt-2 text-sm leading-6">The best way to reach me is by email. I’m happy to discuss projects, internships, and learning opportunities.</p>
        <div className="mt-7 grid gap-5">{details.map(({Icon,label,value,href})=><div key={label} className="flex items-center gap-4"><span className="rounded-xl bg-violet-400/10 p-3 text-violet-200"><Icon size={19}/></span><div><p className="text-xs text-slate-500">{label}</p>{href?<a className="mt-1 block break-all text-sm font-medium hover:text-cyan-200" href={href}>{value}</a>:<p className="mt-1 text-sm font-medium">{value}</p>}</div></div>)}</div>
        <button onClick={copyEmail} className="btn-secondary mt-7 !rounded-xl text-sm"><Copy size={15}/> Copy email</button>
        <div className="mt-7 flex gap-3 border-t border-white/10 pt-6"><a className="btn-secondary !rounded-xl !p-3" aria-label="LinkedIn" href="https://linkedin.com/in/sonali-subhadarshini-mohana" target="_blank" rel="noreferrer"><Linkedin size={18}/></a><a className="btn-secondary !rounded-xl !p-3" aria-label="GitHub" href="https://github.com/sonalisubhadarshinimoharana2004" target="_blank" rel="noreferrer"><Github size={18}/></a></div>
      </div>
      <form onSubmit={submit} className="glass rounded-3xl p-6 sm:p-8"><h3 className="text-xl font-bold">Send a message</h3><p className="muted mt-2 text-sm">This form uses your device's default email app; no message is sent automatically by the website.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[{name:"name",label:"Your name",placeholder:"Enter your name",type:"text"},{name:"email",label:"Your email",placeholder:"you@example.com",type:"email"},{name:"subject",label:"Subject",placeholder:"What would you like to discuss?",type:"text"}].map(f=><label key={f.name} className={`grid gap-2 text-sm font-medium ${f.name==="subject"?"sm:col-span-2":""}`}>{f.label}<input required name={f.name} type={f.type} value={form[f.name]} onChange={update} placeholder={f.placeholder} className="w-full rounded-xl border border-white/10 bg-[#080b16]/70 px-4 py-3 text-white placeholder:text-slate-600 focus:border-violet-300/60 focus:outline-none"/></label>)}
          <label className="grid gap-2 text-sm font-medium sm:col-span-2">Message<textarea required minLength={10} name="message" value={form.message} onChange={update} rows="5" placeholder="Tell me a little about your idea..." className="w-full resize-y rounded-xl border border-white/10 bg-[#080b16]/70 px-4 py-3 text-white placeholder:text-slate-600 focus:border-violet-300/60 focus:outline-none"/></label>
        </div>
        {feedback && <div role="status" className={`mt-4 flex items-start gap-2 rounded-xl border p-3 text-sm ${feedback.type==="error"?"border-rose-300/20 bg-rose-300/[.06] text-rose-200":"border-cyan-300/20 bg-cyan-300/[.06] text-cyan-100"}`}>{feedback.type==="error"?<AlertCircle size={17}/>:<CheckCircle2 size={17}/>}<span>{feedback.text}</span></div>}
        <button type="submit" className="btn-primary mt-5 w-full sm:w-auto">Prepare email <Send size={16}/></button>
      </form>
    </div>
  </div></section>;
}