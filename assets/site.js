'use strict';
(function(){
  const toggle=document.querySelector('[data-nav-toggle]');
  const nav=document.querySelector('[data-nav]');
  if(toggle&&nav){
    toggle.addEventListener('click',function(){const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
    nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');});});
  }
  const samples={
    qa:{name:'App experience verification',desc:'An approved tester checks a build on real Android hardware, reproduces issues, and attaches structured evidence.',steps:['Open client-authorized test build','Follow documented acceptance steps','Return evidence for QA review']},
    voice:{name:'Voice and usability review',desc:'An opt-in participant tests a consented voice interface for clarity, timing, and accessibility.',steps:['Receive approved test script','Record only authorized observations','Report usability findings']},
    commerce:{name:'Retail data verification',desc:'Authorized field participants check explicitly permitted product or inventory information.',steps:['Review task scope and location','Collect permitted facts or images','Submit an auditable observation']}}
  };
  const tabs=[...document.querySelectorAll('[data-work-tab]')];
  const panel=document.getElementById('work-preview');
  if(tabs.length&&panel){
    tabs.forEach(function(tab){tab.addEventListener('click',function(){
      const id=tab.getAttribute('data-work-tab');const item=samples[id];if(!item)return;
      tabs.forEach(function(x){x.setAttribute('aria-selected',String(x===tab));x.tabIndex=x===tab?0:-1;});
      panel.querySelector('[data-task-title]').textContent=item.name;
      panel.querySelector('[data-task-desc]').textContent=item.desc;
      panel.querySelectorAll('[data-step]').forEach(function(el,i){el.textContent=item.steps[i];});
    });});
  }
  document.querySelectorAll('[data-mailform]').forEach(function(form){
    form.addEventListener('submit',function(event){
      event.preventDefault();
      if(!form.reportValidity())return;
      const kind=form.getAttribute('data-mailform')==='business'?'Business project inquiry':'Mobile worker beta interest';
      const data=new FormData(form);
      const fields=[];
      for(const pair of data.entries()){const value=String(pair[1]).trim();if(value)fields.push(pair[0]+': '+value);}
      const subject='PhonesThatPay — '+kind;
      const body='Hello HDP,\n\nI would like to discuss the PhonesThatPay pilot.\n\n'+fields.join('\n')+'\n\nThank you.';
      const mailto='mailto:contact@highestdegreepriorities.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
      window.location.href=mailto;
      const note=form.querySelector('[data-form-status]');
      if(note)note.textContent='Your email app should open a draft. Please send it there; this webpage does not submit or store your information.';
    });
  });
})();
