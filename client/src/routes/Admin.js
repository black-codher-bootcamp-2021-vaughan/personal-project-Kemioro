import React, { useState, useEffect } from "react";
import {ProfileCard} from "../components/ProfileCard"


// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllProfiles } from "../services/profileService";

function Admin() {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function getProfiles() {
      if (!profiles) {
        const response = await getAllProfiles();
        setProfiles(response);
      }
    }

    getProfiles();
  }, [profiles]);

  const renderProfile = (user) => {
    console.log(user)
    return (
      <ProfileCard profile={user.first_name} score={user.score} scoreTotal={"score"}></ProfileCard>
      
    )};

  return (
    <div>
     {/* <Button variant="text">Text</Button> */}
        <ul>
          {profiles && profiles.length > 0 ? (
            profiles.map((profile) => renderProfile(profile))
          ) : (
            <p>No profiles found</p>
          )}
        </ul>
      </div>
    );
  }

export default Admin;