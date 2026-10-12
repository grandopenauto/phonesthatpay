'use strict';
(function(){
 const form=document.getElementById('ptp-brief');
 const preview=document.getElementById('brief-preview');
 const status=document.getElementById('brief-status');
 const state=document.getElementById('brief-state');
 const copy=document.getElementById('brief-copy');
 const email=document.getElementById('brief-email');
 if(!form||!preview||!copy||!email)return;
 let result='';
 const title='PhonesThatPay / HDP — Mobile pilot discovery brief';
 function build(){
  const data=new FormData(form);
  const fields=['Name','Work email','Organization','Work category','Success outcome','Coverage','Timeline','Evidence','Data access','Planning budget','Constraints'];
  let lines=[title,'','Status: UNAPPROVED REQUEST — NO WORK AUTHORIZED','','Requested by: '+String(data.get('Name')||'').trim(),''];
  for(const k of fields.slice(1)){
   let val=String(data.get(k)||'').trim();
   if(val)lines.push(k+': '+val,'');
  }
  lines.push('Next: HDP discovery → scope and risk review → written approval → defined pilot.','No customer agreement, device work or payments are created by this draft.');
  return lines.join('\n').trim();
 }
 form.addEventListener('submit',function(event){
  event.preventDefault();
  if(!form.reportValidity())return;
  result=build();
  preview.textContent=result;
  state.textContent='READY TO REVIEW';
  status.textContent='Brief generated locally. Copy it or open a draft in your email app. This page has not sent anything.';
  copy.disabled=false;email.disabled=false;
  preview.focus({preventScroll:true});
 });
 form.addEventListener('input',function(){if(result){state.textContent='OUTDATED';status.textContent='Your inputs changed. Generate the brief again before sending.';email.disabled=true;copy.disabled=true;}});
 copy.addEventListener('click',function(){
  if(!result||copy.disabled)return;
  if(navigator.clipboard&&navigator.clipboard.writeText){
   navigator.clipboard.writeText(result).then(function(){status.textContent='Brief copied. You can paste it into an email to HDP.';}).catch(function(){status.textContent='Clipboard access is unavailable. Select and copy the text in the brief preview.';});
  }else{status.textContent='Clipboard access is unavailable. Select and copy the text in the brief preview.';}
 });
 email.addEventListener('click',function(){
  if(!result||email.disabled)return;
  const subject='PhonesThatPay — Scoping a first paid QA pilot';
  const href='mailto:contact@highestdegreepriorities.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(result);
  if(href.length>6000){status.textContent='This brief is long for a mailto link. Please copy it and paste it into your email application.';return;}
  window.location.href=href;
  status.textContent='Your email application should open a draft. Review it and press Send there; this webpage has not transmitted your information.';
 });
})();
