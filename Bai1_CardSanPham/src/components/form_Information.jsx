import { useState } from "react";

function FormInformation(){

    const [info, setInfo] = (
        {
            ten: '',
            email:'',
            tuoi: ''
        }
    )

    const [submittedData, setSubmittedData] = useState(null);

    const handle = (e) => {
        const [name, value] = e.target;

        setInfo({
            ...info
        })
    }
    const subm = (e) => {
        e.preventDefault();
        setInfo(info);
    }

    return(
        <>
            <form className="form-container">
            <h2 className="form-title">Đăng ký thông tin</h2>
            
            <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' id='name' placeholder="Nhập tên của bạn..."/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" name='email' id='email' placeholder="example@gmail.com"/>
            </div>

            <div className="form-group">
                <label htmlFor="age">Age: </label>
                <input type="number" name='age' id='age' placeholder="Tuổi"/>
            </div>

            <button onClick={click} type="button" id="btn" className="submit-btn">Submit</button>
        </form>

        <div>
            <p>Ten: </p> <span id="showName"></span>
            <p>Email:</p> <span id="showEmail"></span>
            <p>Tuoi:</p> <span id="showTuoi"></span>
        </div> 
        </>
    )

}

export default FormInformation;