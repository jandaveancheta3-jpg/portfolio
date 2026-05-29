function ContactPage() {
  return (
    <div>
      <h1>Contact Me</h1>
      
      <div>
        <h2>Get in Touch</h2>
        <p>Email: jandaveancheta24@gmail.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Location: [New york ,United states]</p>
      </div>
      
      <div>
        <h2>Social Media</h2>
        <p>🐦 Twitter: Detective</p>
        <p>💼 LinkedIn: James bond</p>
        <p>💻 GitHub: Senior Inspector</p>
        <p>📸 Instagram: Jandave</p>
      </div>
      
      <div>
        <h2>Send me a Message</h2>
        <form>
          <div>
            <label>Name:</label><br/>
            <input type="text" placeholder="Your Name" />
          </div>
          <div>
            <label>Email:</label><br/>
            <input type="email" placeholder="Your Email" />
          </div>
          <div>
            <label>Message:</label><br/>
            <textarea rows={5} placeholder="Your Message"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
export default ContactPage;