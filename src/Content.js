import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function TabPanel(props) {
  const { children, value, index, quote, page, description, image, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Stack sx={{ width: '90%' }} spacing={4}>
          <Alert icon={false} severity="info">
       {quote}——Page {page}
      </Alert>
      <Alert icon={false} severity="success">
       {description}
      </Alert>
     
      
        <ImageListItem>
          <img
            src={image}
             alt='image for history'
            loading="lazy"
          />
        </ImageListItem>
      
 
          </Stack>
        </Box>
      )}
    </div>
  );
}





export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Apperance (Mentally)"  />
          <Tab label="Equipment (Physically)"  />
          <Tab label="Conflicts (Mentally)"  />
          <Tab label="Evolution (Mentally)"  />
          <Tab label="Qualities (Mentally)"  />
          <Tab label="Thoughts (Mentally)"  />
          <Tab label="Ups and downs (Mentally)"  />
        </Tabs>
      </Box>
      
      <TabPanel value={value} index={0} page={26} 
      image={'https://ts1.cn.mm.bing.net/th/id/R-C.2b36ee234dc5c3147ce6dbc03a168ca1?rik=%2bSMGZ3ZlQCNYtw&pid=ImgRaw&r=0' }
      quote={'He was scared stiff, thought a ghastly mistake had been made...'} 
      description={' Bills inner-self was scared and his voice is resonant which paints a peaceful scene that would exist if there was no war, showing his deep hate on fighting and his wish for a better world to live in'} > </TabPanel>
      
      <TabPanel value={value} index={1} page={67} 
      image={'https://ts1.cn.mm.bing.net/th/id/R-C.5901628b46d68260a0d5d71cd3295fad?rik=1rby8B1zwR7KFA&pid=ImgRaw&r=0'}
      quote={'Billy, curled in his azure nest, found himself staring at Cinderellas silver boots '} 
      description={'Billy sadly wear a pair of shoes , so that in this way he can walk properly. From this image, i can discern that Billy was in a chaotic environment and he couldnot manager to alter it'}>
       
      </TabPanel>
      <TabPanel value={value} index={2} page={38} 
      image={'https://ts1.cn.mm.bing.net/th/id/R-C.c2e9b4c073866dd720740cfe5729f0ee?rik=LdoLshx5wJI1Yw&riu=http%3a%2f%2fstatic.guim.co.uk%2fsys-images%2fGuardian%2fPix%2fmaps_and_graphs%2f2012%2f12%2f4%2f1354657929299%2fBritish-soldier-010.jpg&ehk=Wu6dnrbJLkM1qK1naWhoY4xVp8M%2bOKHcq6fJ87fpHJM%3d&risl=&pid=ImgRaw&r=0'}
      quote={'Billy let himself dow oh so gradueling now...'} 
      description={'The other soldiers dont want to stay except billy since he has sleepwall sympton, which makes others to comntempt and stay away from him. It is apperant that Billy lost both freedom and friendship during this period.'}>
       
      </TabPanel>

      <TabPanel value={value} index={3} page={78} 
      image={'https://tse1-mm.cn.bing.net/th/id/OIP-C.sfOMLY_HY9IkgnDi7Q-nHgHaFq?pid=ImgDet&rs=1'}
      quote={'He was a alet to a preacher, expected no promotions or medals, bore no arms'} 
      description={'Before Billy devoted himself to the war, he was innocuous and denible for fighting. This indirectly shows how much the war has reshaped this poor man.'}>
      
      </TabPanel>
     

      <TabPanel value={value} index={4} page={70} 
      image={'https://ts1.cn.mm.bing.net/th/id/R-C.6862a5bff766c6dd0d7a4d94be227dac?rik=TMqJUM%2brqtE%2b4g&riu=http%3a%2f%2fchriscastaldo.com%2fwp-content%2fuploads%2f2013%2f05%2f00shirakkarepetyanmilshteynasoldiersprayer2007.jpg&ehk=e8F1Jhn2zj7r1aqEe1JVTJmaJGd6g2OxJh7BeoeSGBM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1'}
      quote={'Billy toowed at him vaguely. Billy had lost trule...'} 
      description={'One of Billys characteristic that made him succesfully survive during the war is he is always protective, aware of things going around him, which helps him avoid unnecessary dangers'}>

      </TabPanel>

     
      <TabPanel value={value} index={5} page={14} 
      image={'https://tse3-mm.cn.bing.net/th/id/OIP-C.ucvixaZFAjk7dhV_r5UHagHaEK?pid=ImgDet&rs=1'}
      quote={'His father died in a hunting accident during the war. So it goes '} 
      description={'This shows that bad things are going to occur when "so it goes" is used by the author, and this "so it goes" mindset helps Billy cross the mental chasm and stay away from being desperate.'}>
        
      </TabPanel>

      <TabPanel value={value} index={6} page={89} 
      image={'https://ts1.cn.mm.bing.net/th/id/R-C.4650bd70e5b413e8fc65b0dfddbbf5c9?rik=nNTWz6rc3ioTHg&riu=http%3a%2f%2fstatic.businessinsider.com%2fimage%2f4b6c8b550000000000b30406%2fsad-clown.jpg&ehk=F4syiDs0paCJF%2fLFWRxX1QWw0Ukf0F9mwN32CqUNcZY%3d&risl=&pid=ImgRaw&r=0'}
      quote={'They tried porish on Billy Pilgrim since he was dressed so clownishing... '} 
      description={'Billy was treated by peers with no respect at all. He dressed like a clown because he was forced to do it, which marks the darkest moment in his life and implicitly informs the readers how terrible he felt during the war'}> 
      </TabPanel>


    </Box>
  );
}
