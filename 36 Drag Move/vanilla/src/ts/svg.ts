

export default function createSVGDOM(){
   const div =  document.createElement('div')
   div.classList.add("indicator")
   div.innerHTML = `
   <svg viewBox="0 0 32 32">
       <rect height="4" width="4" y="4" x="0"/>
       <rect height="4" width="4" y="12" x="0"/>
       <rect height="4" width="4" y="20" x="0"/>
       <rect height="4" width="4" y="28" x="0"/>
       <rect height="4" width="4" y="4" x="8"/>
       <rect height="4" width="4" y="12" x="8"/>
       <rect height="4" width="4" y="20" x="8"/>
       <rect height="4" width="4" y="28" x="8"/>
       <rect height="4" width="4" y="4" x="16"/>
       <rect height="4" width="4" y="12" x="16"/>
       <rect height="4" width="4" y="20" x="16"/>
       <rect height="4" width="4" y="28" x="16"/>
       <rect height="4" width="4" y="4" x="24"/>
       <rect height="4" width="4" y="12" x="24"/>
       <rect height="4" width="4" y="20" x="24"/>
       <rect height="4" width="4" y="28" x="24"/>
   </svg>
   
   `
   return div
}