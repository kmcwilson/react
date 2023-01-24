import React from 'react';

const Contact = () => {
    return (
        <div className="flex-item flex-column" style={{ display: 'flex', alignItems: 'center', minHeight: '60vh' }}>
            <form id="contact-form" >
                <div class="form-group" >
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Name</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button class="form-button" type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default Contact