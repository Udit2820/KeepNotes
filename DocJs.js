const addButtton = document.querySelector('#add');

const updateLSdata=()=> {
    const textAreaData=document.querySelectorAll('textarea');
    const notes=[];

    textAreaData.forEach((note)=>{
       return notes.push(note.value);
    })

    localStorage.setItem('notes',JSON.stringify(notes));
}

const addNewNote = (text='')=> {
      const note=document.createElement('div');
      note.classList.add('note');

      const htmlData=`
      <div class="operation">
      <button class="Edit"><i class="fa-solid fa-pen-to-square"></i></button>
      <button class="Delete"><i class="fa-solid fa-trash"></i></button>
   </div>

   <div class ="main ${text ? "" : "hidden"}"></div>
      <textarea class=" text1 ${text ? "hidden" : ""}"></textarea>
    `;

   note.insertAdjacentHTML('afterbegin',htmlData);

   const editButton=note.querySelector('.Edit');
   const deleteButton=note.querySelector('.Delete');
   const mainDiv=note.querySelector('.main');
   const textArea=note.querySelector('textarea');

   deleteButton.addEventListener('click', ()=>{
    note.remove();
   });

   textArea.value=text;
   mainDiv.innerHTML=text;

   editButton.addEventListener('click', () => {
    mainDiv.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
});
 
   
   textArea.addEventListener('change',(event)=>{
     const value= event.target.value;
     mainDiv.innerHTML=value;

     updateLSdata();
   })

   document.body.appendChild(note);
}

const notes=JSON.parse(localStorage.getItem('notes'));
if(notes){
    notes.forEach((note)=>addNewNote(note))
};

addButtton.addEventListener('click',() =>{
    addNewNote()
});
