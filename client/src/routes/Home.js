import { createTheProfile } from "../services/profileService"
export default function Home({setUser}) {
  function handleSubmit(event) {
    setUser("Test User")
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    console.log("Form has been Submitted", data)
    createTheProfile(data)
  }



    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Home</h2>
        <form action="#" onSubmit= {handleSubmit}>
        <div class="container">
            <header>
                Register for Phishy
            </header>
          <div className="input-field">
            <label>First Name</label>
            <input name="first_name" type="text" placeholder="Enter your first name" required/>
          </div>
          <div className="input-field">
            <label>Last Name</label>
            <input name="last_name" type="text" placeholder="Enter your last name" required/>
          </div>
          <div className="input-field">
            <label>Email Address</label>
            <input type="text" name="email_address" placeholder="Enter your email" required/>
          </div>

          <input type="submit" value="Dive In"/> 
          </div>  
        </form>
      </main>      
    );


  }