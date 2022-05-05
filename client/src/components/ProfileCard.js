// could change this to cyber security info instead

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// {} is an empty object
// change what's within Profile card to better suit Phishy, this is just an example
export const ProfileCard = ({profile, score, username, status, date, imageUrl }) => {
  console.log(score)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
      //  component="img"
      //  alt="green iguana"
      //  height="140"
      //  image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {profile}
        </Typography>
        <Typography variant="body2" color="text.secondary">
      {/* delete/ rename whats useful  */}
          {username}
          {status}
          {date}
          {imageUrl}
          <ul>
            <li>
              Email Sent?<br/>
              {score.email_sent ? "Yes" : "No" }
            </li>
            <li>
              Email Opened?<br/>
              {score.email_opened ? "Yes" : "No" }
            </li>
            <li>
              Email Closed?<br/>
              {score.email_closed ? "Yes" : "No" }
            </li>
            <li>
              Clicked Link?<br/>
              {score.clinked_link ? "Yes" : "No" }
            </li>
            <li>
              Submitted Data?<br/>
              {score.submitted_data ? "Yes" : "No" }
            </li>
            <li>
              Total Time?<br/>
              {score.total_time ? "Yes" : "No" }
            </li>
          </ul>
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Update</Button>
        <Button size="small">See More</Button>
      </CardActions>
    </Card>
  );
}

