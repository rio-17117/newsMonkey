import styled from 'styled-components';

export const SidebarWrapper = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 99;
max-width: 360px;
width: 100%;
height: 100%;
background-color: var(--color-2);
box-shadow: 0px 10px 20px -3px #000;
padding: 1rem;
overflow-x: hidden;
overflow-y: auto;
user-select: none;
pointer-events: none;
opacity: 0;
visibility: hidden;
transform: translateX(-100%);
transition: opacity 0.3s ease, visibility 0.2s ease, transform 0.3s ease;

    &.show {
        pointer-events: all;
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
    }
    
    .sidebar_head,
    .sidebar_body,
    .sidebar_foot {
        padding: 0.5vw 0;
    }
    .sidebar_head{
        color:white;
    }
    
    .sidebar_body {
        border-top: 1px dashed var(--color-3);
        border-bottom: 1px dashed var(--color-3);

        ul {
            display: grid;
            gap: 1.4rem;
            list-style:none;
            font-size:25px;

            a {
                opacity: 1;

                &:hover {
                    opacity: 1;
                }
            }
        }
    
        .dropdown {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
        }
    
        .dropdown_list {
            list-style-type: disc;
            margin-top: 2rem;
            margin-bottom: 1.5rem;
            padding-left: 1rem;
            font-size: 0.95rem;
        }
    }
    @media (max-width: 425px) {
        max-width:320px;
        .sidebar_head{
            color:white;
            font-size:20px;
        }
    }
    @media (max-width: 385px) {
        max-width:300px; 
        p.head{
            color:white;
            font-size:38px;
        }
    }
    @media (max-width: 358px) {
        max-width:270px; 
        p.head{
            color:white;
            font-size:30px;
        }
    }
    @media (max-width: 328px) {
        max-width:250px; 
        p.head{
            color:white;
            font-size:30px;
        }
    }
    
`;


export const SidebarToggler = styled.div`
position: fixed;
top: 4vh;
right: 4vw;
z-index: 99;
width: 1.8rem;
height: 1.3rem;
display: flex;
flex-direction: column;
justify-content: space-between;
cursor: pointer;
overflow: hidden;

    span {
        width: 100%;
        height: 2.4px;
        background-color: var(--color-3);
        opacity: 0.875;
        transition: all 0.3s ease;
    }

    &:hover span {
        opacity: 1;
    }


    /* Referring to "SidebarWrapper styled-component" & when they have the 'show' class then their adjacent-sibling (i.e., SidebarToggler) will... */

    ${SidebarWrapper}.show + &  {
        justify-content: center;

        span {
            margin-top: -1.2px;
            margin-bottom: -1.2px;
        }

        span:first-child {
            transform: rotate(45deg);
        }

        span:nth-child(2) {
            opacity: 0;
            transform: translateX(-100%);
        }

        span:last-child {
            transform: rotate(-45deg);
        }
}
`;