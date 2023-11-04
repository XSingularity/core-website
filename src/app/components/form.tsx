import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import styles from './Form.module.css';

export interface FormProps {
    result: boolean
    isChecked: boolean
    callTime: {time: string, isChecked: boolean}[]

    loading: boolean
}

const Form: React.FC<FormProps> = () => {    

    const [loading, setLoading] = useState<boolean>(false)
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [mobile, setMobile] = useState<string | number | any>("");
    const [message, setMessage] = useState<string>("");

    console.log('NAme:', name, ', email', email, ', mobile', mobile, ', message', message);

    async function sendEmail(event: FormEvent) {
      event.preventDefault();
    
      setLoading(true);
    
      try {
        const formData = new FormData();
    
        if (!name.trim()) {
          throw new Error("Please provide a valid name.");
        }
    
        if (!email.trim()) {
          throw new Error("Please provide a valid email address.");
        }

        if (!mobile.trim()) {
          throw new Error("Please provide a valid mobile number.");
        }
    
        if (!message.trim()) {
          throw new Error("Please provide a valid message.");
        }
    
        formData.append("name", name);
        formData.append("email", email);
        formData.append("mobile", mobile);
        formData.append("message", message);

        console.log('form data', formData);
    
        const response = await fetch("/api/nodemailer", {
          method: "POST",
          body: formData,
        });
    
        const responseData = await response.json();
        console.log('form responseData', responseData);
    
        if (responseData.error) {
          throw new Error(responseData.error);
        }
    
        console.log("Thanks, we will be in touch soon!");
    
        setName("");
        setEmail("");
        setMobile("");
        setMessage("");
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }

      
      
    }
    
      console.log('send email', sendEmail);
    

    return (
        <>
            <div className={styles.wrapper}>
                <form 
                onSubmit={sendEmail} 
                className={styles.formContainer}>
                    <h3>Get <span>in</span> touch</h3>
                    <label>Full Name<span className={styles.required}>*</span></label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      value={name}
                      onChange={({ target }: ChangeEvent) => setName(( target as HTMLInputElement ).value)}
                    />
                    <div className={styles.twoInputs}>
                        <div className={styles.innerInputs}>
                            <label>Email</label>
                            <input 
                              type="email" 
                              name="email"
                              pattern=".+@.+\..+"
                              value={email}
                              onChange={({ target }: ChangeEvent) => setEmail(( target as HTMLInputElement ).value)}
                            />
                        </div>
                        <div className={styles.innerInputs}>
                            <label>Mobile<span className={styles.required}>*</span></label>
                            <input 
                              type="tel" 
                              name="tel" 
                              required
                              value={mobile}
                              onChange={({ target }: ChangeEvent) => setMobile((target as HTMLInputElement ).value)} />
                        </div>
                    </div>

                    <label>Message<span className={styles.required}>*</span></label>
                    <textarea 
                      name="message" 
                      rows={6} 
                      required 
                      value={message}
                      maxLength={1000}
                      onChange={({ target }: ChangeEvent) => setMessage(( target as HTMLInputElement ).value)}
                    />
                    <input type="submit" value="Send" />
                    <small><span className={styles.required}>*</span>Required</small>
                </form>
            </div>
            
        </>
    )
}

export default Form;