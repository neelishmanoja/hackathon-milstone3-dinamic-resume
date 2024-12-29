// get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement
const resumedisplayelement =document.getElementById('resume-display') as HTMLDivElement

// handle form element

form.addEventListener('submit', (event:Event)=>{
    event.preventDefault();  

    // collect input values
    const name =(document.getElementById('Name') as HTMLInputElement).value 
    const email =(document.getElementById('email') as HTMLInputElement).value 
    const phone =(document.getElementById('phone') as HTMLInputElement).value 
    const education =(document.getElementById('Education') as HTMLInputElement).value 
    const experience =(document.getElementById('Experience') as HTMLInputElement).value 
    const skills =(document.getElementById('Skills') as HTMLInputElement).value 
    
    //generate the resume and contant dynamicaly
    const resumehtml = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

     <h3>Experience</h3>
    <p>${experience}</p>

     <h3>Skills</h3>
    <p>${skills}</p>
    `;

    //display generated resume
    if(resumedisplayelement){
        resumedisplayelement.innerHTML = resumehtml;
    }else {
        console.error('The resume display element is missing');
    }
});