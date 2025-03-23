export const Contact = () =>{
    const handerFormSubmit =(formData) =>{
        const formInputData=Object.fromEntries(formData.entries());
        console.log(formInputData);
    }


    return(
    <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>

        <div className="contact-wrapper container">
        <form action={handerFormSubmit}>
            <input className="form-control" type="text" required autoComplete="false" placeholder="Enter your name" name="Username" />
            <input className="form-control" type="email"  autoComplete="false" placeholder="Enter your email" required name="email"/>

            <textarea name="message"  className="form-control" rows="10"placeholder="Enter your massage" required autoComplete="false"></textarea>
            <button type="submit">Send</button>
        </form>
        </div>
        
    </section>
    )
}