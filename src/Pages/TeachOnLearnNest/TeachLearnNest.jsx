// import Container from "../../Components/Shared/Container";
// import SectionHeader from "../../Components/Shared/SectionHeader/SectionHeader";




// const TeachLearnNest = () => {
//     return (
//         <div>
//          <Container>
//         <SectionHeader  heading={'Apply as'} headingSpan={' Teacher'}></SectionHeader>
//          </Container>
//         </div>
//     );
// };

// export default TeachLearnNest;




import useAuth from "../../hooks/useAuth";


const TeachLearnNest = () => {
    const {user}=useAuth();
    // const email =user?email
    const handleAddBlog=e=>{
        e.preventDefault();
        const form =e.target
        const email=user?.email;
        const name =user?.name
        const title =form.title.value;
        const category =form.category_name.value;
        const experience =form.experience.value;
        
const joinTeacher={name,email,title,category,experience}
        console.log(joinTeacher)
        //send data server side
        fetch('https://localhost:5000/users',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(joinTeacher)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div>
          <div className="mb-10">
             <div className="text-center">
                <h2 className="text-4xl font-bold py-3">Join As a Teacher</h2>
                
            </div>
            <form  onSubmit={handleAddBlog}  className=" mx-auto md:w-3/4 lg:w-2/5">

            <div className="form-control ">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <input  type="text" name="title" defaultValue={user?.displayName}  required placeholder="Type your Blog Title" className="input input-bordered"  />
</div>
  <div className="form-control ">
  <label className="label">
    <span className="label-text">Title</span>
  </label>
  <input  type="text" name="title"  required placeholder="Type your  Title" className="input input-bordered"  />
</div>
  <div className="form-control ">
  <label className="label">
    <span className="label-text">Category Name</span>
  </label>
  <select name="category_name" className="select select-bordered w-full ">
  {/* <option disabled selected>Brand Name</option> */}
  <option>web development</option>
  <option>mobile app development</option>
  <option>data science </option>
  <option>Education_Learning</option>
  <option>Healing_Growth</option>
  <option>machine learning</option>

</select>
</div>
<div className="form-control ">
  <label className="label">
    <span className="label-text">Experience</span>
  </label>
  <select name="experience" className="select select-bordered w-full ">
  {/* <option disabled selected>Brand Name</option> */}
  <option>Beguines</option>
  <option>Expert</option>
  <option>Pro Expert </option>
</select>
</div>
<div className="form-control mt-6">
  <button className="btn btn-primary">Applied For Review</button>
  
</div>
  </form>
        </div>  
        </div>
    );
};

export default TeachLearnNest;