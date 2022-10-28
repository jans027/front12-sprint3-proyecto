import styled from 'styled-components'; 




export const Body = styled.body `
    color: #fff;
    background-color:  #1F233E;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const ButtonIntro = styled.button`
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size:14px;
    font-weight:500;
    border:none;
    width: 358px;
    height: 44px;
    margin-top:120px;
    color:rgba(75, 75, 75, 1);
    background: #B0C3FD;
    border-radius: 15px;
`

export const ButtonIntro2 = styled.button`
    font-size:14px;
    font-weight:500;
    border:none;
    text-align: center;
    justify-content: center;
    width: 358px;
    height: 44px;
    top: 200px;
    color:rgba(75, 75, 75, 1);
    background:  linear-gradient(92.67deg, #BFC3FC 0.11%, #A2C3FC 100%);
    border-radius: 15px;
    margin-left:0px;
`

export const ButtonIntro1 = styled.button`
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size:23px;
    font-weight:500;
    border:none;
    width: 358px;
    height: 44px;
    margin-top:20px;
    color:rgba(75, 75, 75, 1);
    background: var(--second-color);
    border-radius: 44px;
    position:relative;
    &:hover{
        color: rgba(255, 255, 255, 1) !important;
        box-shadow: 0 4px 16px rgba(49, 138, 172, 1);
        transition: all 0.2s ease;
        background: var(--second-color);
    }
`
export const ImgIntro = styled.div`
    background: url(${({Image}) => Image && Image});
    height:350px;
    width:350px;
    background-repeat: no-repeat;
    align-items: center;
    text-align:center;
    justify-content: center;
    margin-top:-100px;
    background-position: center;
`

export const TextIntro= styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    /* margin-top:-100px; */
    h2{ 
        text-align: center;
        justify-content: center;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
    }
    h5{   
        justify-content: center;
        top: 80%;
        bottom: 25.71%;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
    }
`

export const Singupfrm= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:0px;
`
export const Form= styled.form`
    margin-top:0px;
    text-align: center;
    justify-content: center;
`
export const InputContainer= styled.div`
    position:relative;
    height: 45px;
    width: 90%;
    margin-top: 1.5em;
    margin-bottom: 17px;
    text-align: center;
    
`

export const Input1= styled.input`
    width: 358px;
    height: 44px;
    border-radius: 44px;
    font-size: 16px;
    padding: 0 20px;
    outline: none;
    background-color: rgb(46, 53, 98);
    z-index: 1;
    position:relative;
    &:focus{ 
        border: 1px solid var(--second-color);
        z-index: 10;
        font-size: 14px;
        font-weight: 600;
        color:var(--second-color);
    }

`
export const Label= styled.label`
    position: absolute;
    text-align: center;
    margin-top: 7px;
    margin-left: 10px;
    padding: 0 4px;
    background-color:none;
    color: #B0C3FD;
    font-size: 16px;
    transition: 0.5s;
    z-index: 0;
    &:focus{ top: -7px;
        border-color:   #39ff14;
        left: 3px;
        z-index: 10;
        font-size: 14px;
        font-weight: 600;
        color:rgba(191, 195, 252, 1);
    }
    &:not(:placeholder-shown){top: -7px;
        left: 3px;
        z-index: 10;
        font-size: 14px;
        font-weight: 600;
    }
`


const Image = ({Image}) => {
    return(
        <ImgIntro Image={Image}></ImgIntro>
    )
    }
    
    export default Image;