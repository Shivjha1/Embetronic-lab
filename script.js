import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const config = window.FIREBASE_CONFIG || {};
const configured = config.apiKey && !String(config.apiKey).includes("PASTE_") && config.projectId && !String(config.projectId).includes("PASTE_");
let db = null;
if (configured) {
  const app = initializeApp(config);
  db = getFirestore(app);
}

const form = document.getElementById('applicationForm');
const success = document.getElementById('success');
const typeInputs = document.querySelectorAll('input[name="type"]');
const teamBox = document.getElementById('teamBox');
const members = document.getElementById('members');
const addMember = document.getElementById('addMember');
let memberCount = 0;
function selectedType(){ return document.querySelector('input[name="type"]:checked')?.value || 'Individual'; }
function showMessage(msg, ok=false){ success.classList.remove('hidden'); success.innerHTML=msg; success.style.background=ok?'#083b2c':'#4b1d1d'; success.style.borderColor=ok?'#1c9a6a':'#d85b5b'; }
function updateType(){ const team=selectedType()==='Team'; teamBox.classList.toggle('hidden',!team); if(team&&!members.children.length)addMemberRow(); document.querySelectorAll('.choice').forEach(c=>c.classList.toggle('active',c.querySelector('input')?.checked)); }
function addMemberRow(){ memberCount++; const div=document.createElement('div'); div.className='member'; div.innerHTML=`<input required placeholder="Member ${memberCount} name" data-member-name><input required placeholder="Roll number" data-member-roll>`; members.appendChild(div); }
typeInputs.forEach(i=>i.addEventListener('change',updateType)); addMember?.addEventListener('click',addMemberRow);
function getData(){ return {type:selectedType(),name:document.getElementById('name').value.trim(),roll:document.getElementById('roll').value.trim(),year:document.getElementById('year').value,section:document.getElementById('section').value.trim(),phone:document.getElementById('phone').value.trim(),email:document.getElementById('email').value.trim().toLowerCase(),interest:document.getElementById('interest').value,reason:document.getElementById('reason').value.trim(),teamMembers:[...document.querySelectorAll('.member')].map(row=>({name:row.querySelector('[data-member-name]').value.trim(),roll:row.querySelector('[data-member-roll]').value.trim()}))}; }
form.addEventListener('submit',async e=>{
  e.preventDefault();
  if(!configured){showMessage('⚠️ The form is ready, but online student saving is not connected yet. Open <b>FIREBASE_SETUP.md</b>, add your Firebase Web App values, publish again, and submissions will appear in <b>admin.html</b>.');return;}
  const btn=form.querySelector('.submit');btn.disabled=true;btn.textContent='Submitting…';
  try{const data=getData();const ref=await addDoc(collection(db,'applications'),{...data,createdAt:serverTimestamp(),submittedAt:new Date().toISOString()});form.reset();members.innerHTML='';memberCount=0;updateType();showMessage(`✅ <b>Application submitted successfully!</b><br>Your Application ID is <b>${ref.id}</b>. Please save it.`,true);window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});}catch(err){showMessage(`❌ ${err.message}. Please check your Firebase setup and Firestore rules.`);}finally{btn.disabled=false;btn.innerHTML='Submit Application <span>→</span>';}
});
updateType();
