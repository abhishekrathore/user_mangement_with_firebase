import React from 'react';
const UserForm = (props) => {
    const { firstName, lastName, company, position, department, email } = props.formInfo;
        return (
            <div className="parent-div">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    props.onUserSave();
                }}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        
                        <input required type="text" className="form-control" id="firstName" placeholder="Enter First Name" name="firstName" value={firstName} onChange={(e) => props.handleUserFormInputs(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        
                        <input required type="text" className="form-control" id="lastName" placeholder="Enter Last Name" name="lastName" value={lastName} onChange={(e) => props.handleUserFormInputs(e)} />
                    </div>
                   
                    <div className="form-group">
                        <label htmlFor="company">Company:</label>
                        
                        <input required type="text" className="form-control" id="company" placeholder="Enter Company" name="company" value={company} onChange={(e) => props.handleUserFormInputs(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">Department:</label>
                        
                        <input required type="text" className="form-control" id="department" placeholder="Enter Department" name="department" value={department} onChange={(e) => props.handleUserFormInputs(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="position">Position:</label>
                        
                        <input required type="text" className="form-control" id="position" placeholder="Enter Position" name="position" value={position} onChange={(e) => props.handleUserFormInputs(e)} />
                    </div>
                   
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        
                        <input required type="email" className="form-control" id="email" placeholder="Enter Email" name="email" value={email} onChange={(e) => props.handleUserFormInputs(e)} />
                    </div>
                   
                    <div className="text-center">

                        <button type="submit" className="button-css"> Save </button>
                    </div>
                </form>
            </div>
        );
}

export default UserForm