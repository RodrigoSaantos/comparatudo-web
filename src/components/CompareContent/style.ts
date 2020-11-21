import styled from 'styled-components'

export const Container = styled.section`
width: 90%;
margin: auto;

.hide {
    display: none;
}

#selector-three {
    display: none;
}

div.select-content {
    width: 100%;
    margin: auto;
}

div div.selector-table {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
    text-align: center;
    position: sticky;
    z-index: 10;
    top: 0;
    padding-top: 10px;
    background: white;
}

form.selector-element {
    display: contents; 
}

select.selector-dropdown {
    height: 50px;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.295) ;
    padding: 0 15px;
    font-weight: 800;
    font-size: 1.5rem;
}

select.selector-dropdown:hover {
    border-bottom:1px solid var(--color-secondary);
    
    
}
select.selector-dropdown:focus {
    box-shadow: 0px 0px 8px 2px var(--color-secondary);
    transition: border 0.2s ease-out;
    outline: 0;
    border-radius: 0.8rem;
}



@media (min-width: 700px) {

    #selector-three {
        display: initial;
    }
    
    div.select-content {
        max-width: 980px;
    }
    
    div div.selector-table {
        grid-template-columns: 1fr 1fr 1fr;
    }
        
    select.selector-dropdown {
        max-width: 300px;
    }
    
    select.selector-dropdown:hover {
        border-bottom:1px solid var(--color-secondary);
        transition: border 0.5s ease-out;
    
    }
    
}
`