let coursesList = document.querySelector('.coursesList')
let coursesTemplate = document.querySelector('#coursesTemplate').content
let lists = document.querySelector('.coursesList')
let outbtn = document.querySelector(".out")
let loader = document.querySelector('.loadingWrapper')
let ractive = document.querySelector('.ractive')
let register = document.querySelector('.registration')
let off = document.querySelector('.off')

ractive.addEventListener('click',(evt)=>{
    evt.preventDefault()
    register.classList.add('rActive')
})
off.addEventListener('click',(evt)=>{
    evt.preventDefault()
    register.classList.remove('rActive')
})


window.addEventListener('load',function(){
    loader.style.display = 'none';
})



const Render = (array,list)=>{
    array.forEach(tracher => {
       let teacherItem = coursesTemplate.cloneNode(true)
       
       let CoursName = teacherItem.querySelector('.oursName')
       let Courscost = teacherItem.querySelector('.cost')
       CoursName.textContent = tracher.teacher_name
       Courscost.textContent = 'Age '+ tracher.teacher_age
       let teachers = teacherItem.querySelector('.teachers')
       let groups = teacherItem.querySelector('.groups')
       list.appendChild(teacherItem)
       let modal1 = document.querySelector('.modal1')
        let modal = document.querySelector('.modal')
        let header = document.querySelector('.teachersNameHeader')
        
       
        teachers.addEventListener("click" , (evt)=>{
            evt.preventDefault()
             modal.classList.add('active')
             let teacherlist = document.querySelector('.teachersname')
             header.textContent = 'Courses'
             teacherlist.innerHTML = null
             
             console.log(tracher.course_name)
        
             outbtn.addEventListener('click' , (evt)=>{
                 evt.preventDefault();
                 modal.classList.remove("active")
             })
             
             tracher.course_name.forEach(ism=>{
                const newHeader = document.createElement('li')
                newHeader.setAttribute('class', 'names')
                

                 newHeader.textContent = ism
                 console.log(ism)
                 teacherlist.appendChild(newHeader)
                //  console.log(ism)
            
                
            })
            
        })
        groups.addEventListener("click" , (evt)=>{
            evt.preventDefault()
             modal.classList.add('active')
             let teacherlist = document.querySelector('.teachersname')
             header.textContent = 'Groups name'
             teacherlist.innerHTML = null
             
             
        
             outbtn.addEventListener('click' , (evt)=>{
                 evt.preventDefault();
                 modal.classList.remove("active")
             })
             
             tracher.group_name.forEach(ism=>{
                const newHeader = document.createElement('li')
                newHeader.setAttribute('class', 'names')
                

                 newHeader.textContent = ism
                 console.log(ism)
                 teacherlist.appendChild(newHeader)
                //  console.log(ism)
           
                
            })
            
        })
        
      

    });
        
      

    
}

Render(teachers,lists)