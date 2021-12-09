let coursesList = document.querySelector('.coursesList')
let coursesTemplate = document.querySelector('#coursesTemplate').content
let lists = document.querySelector('.coursesList')
let outbtn = document.querySelector(".out")
let loader = document.querySelector('.loadingWrapper')

window.addEventListener('load',function(){
    loader.style.display = 'none';
})

const Render = (array,list)=>{
    array.forEach(tracher => {
       let teacherItem = coursesTemplate.cloneNode(true)
       
       let CoursName = teacherItem.querySelector('.CoursName')
       let Courscost = teacherItem.querySelector('.cost')
       let teachers = teacherItem.querySelector('.teachers')
       CoursName.textContent = tracher.student_name
       Courscost.textContent = tracher.teacher_name
       teachers.textContent = tracher.group_name
       list.appendChild(teacherItem)
        let modal = document.querySelector('.modal')
       
        // teachers.addEventListener("click" , (evt)=>{
        //     evt.preventDefault()
        //      modal.classList.add('active')
        //      let teacherlist = document.querySelector('.teachersname')
        //      teacherlist.innerHTML = null
             
        //      console.log(tracher.course_name)
        
        //      outbtn.addEventListener('click' , (evt)=>{
        //          evt.preventDefault();
        //          modal.classList.remove("active")
        
        
              



                
        
        //      })
             
        //      tracher.student_name.forEach(ism=>{
        //         const newHeader = document.createElement('li')
        //         newHeader.setAttribute('class', 'names')
                

        //          newHeader.textContent = ism
        //          console.log(ism)
        //          teacherlist.appendChild(newHeader)
        //         //  console.log(ism)
           
                
        //     })
            
        // })
        
      

    });
}

Render(students,lists)
