import React from 'react';
import styled from 'styled-components';
import { categories } from './data';
import { CategoryItem } from './CategoryItem';


const Container = styled.div`
             @media screen and (min-width: 700px) {
                 display: grid; 
                grid-template-columns: 1fr 1fr 1fr 1fr; 
                margin: 4rem; 
                
    
                
                
        }

      
                 
        `;
export const Categories = () => {
  return (
    
      <Container> 
        
        {categories.map(item=>(
          <CategoryItem item={item}/>
      ))}

      </Container>

  );
};

