import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Contact from './contact';
export const Reviews = () => {
    return(
       <>
       <div className={'container'} style={{backgroundColor:'#121212'}}>
           <Tabs
               defaultActiveKey="profile"
               id="uncontrolled-tab-example"
               className="mb-3"
           >
               <Tab eventKey="home" title="Buyer Review">
                   <Contact />
               </Tab>
               <Tab eventKey="profile" title="Seller Reviews">
                  <Contact />
               </Tab>
           </Tabs>
       </div>
       </>
    );
}