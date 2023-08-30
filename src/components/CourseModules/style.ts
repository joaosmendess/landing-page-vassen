import styled from 'styled-components';



export const Container = styled.div`

    
display: flex;

flex-direction: column;
background: none;


  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
     width: 350px;

        

    } 
`;

export const ModuleContainer = styled.div`
 padding: 1rem;

  margin-bottom: 20px;
 background: rgb(9, 16, 19);
 border: 1px solid rgb(62, 58, 74);
 border-radius: 4px 4px 0px 0px;


  

  
  `

export const ModuleTitle = styled.h3`
 font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  border-bottom: 3px solid #F2A81D;  // Amarelo do seu esquema
  padding-bottom: 0.5rem;
  font-family: Poppins, "Segoe UI", Verdana, Arial, sans-serif;
  color: #f8f8f8;
 background: rgb(9, 16, 19);

`;

export const ContentList = styled.ul`
 list-style-type: none;
  padding: 0;
 background: rgb(9, 16, 19);

  
`;

export const ContentItem = styled.li`
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  position: relative;
  font-family: Poppins, "Segoe UI", Verdana, Arial, sans-serif;
  color: #f8f8f8;
  background: rgb(9, 16, 19);
  >strong { 

background: rgb(9, 16, 19);

}

  ::before {
    content: '•';
  color: #F2A81D;  // Amarelo
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
 background: rgb(9, 16, 19);

  }
`;
