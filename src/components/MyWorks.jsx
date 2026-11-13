import React from 'react';
import OtherProjects from './OtherProjects';
import WorkItem from './WorkItem';
import { WorkStyled } from '../Style';
import { works } from '../Data';

const MyWorks = ({mode}) => {
    

  return (
    <WorkStyled id='myworks' mode={mode}>
        <h2>My Works</h2>
        <div>
            {
                works.map((items, i)=>{
                    return(
                        <WorkItem image={items.image} name={items.name} description={items.description} livesite={items.livesite} type={items.type} github={items.github} items={items} key={i}/>
                    )
                })
            }
            <OtherProjects mode={mode}/>
        </div>
    </WorkStyled>
  )
}


export default MyWorks