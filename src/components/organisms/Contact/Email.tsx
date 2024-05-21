import * as React from "react";
 
type EmailTemplateType = {
  name: string;
  businessName: string;
  industry: string;
  emailAddress: string;
  message: string;
};

export function Email({
  businessName,
  emailAddress,
  industry,
  message,
  name,
}: EmailTemplateType) {
  return (
    <html lang="en">
      <div style={styles.container}>
        <form>
          <div style={styles.formItem}>
            <label style={styles.formLabel}>Name</label>
            <div style={styles.formControl}>
              <input type="text" value={name} readOnly style={styles.input} />
            </div>
          </div>
          <div style={styles.formItem}>
            <label style={styles.formLabel}>Business name</label>
            <div style={styles.formControl}>
              <input
                type="text"
                value={businessName}
                readOnly
                style={styles.input}
              />
            </div>
          </div>
          <div style={styles.formItem}>
            <label style={styles.formLabel}>Industry</label>
            <div style={styles.formControl}>
              <input
                type="text"
                value={industry}
                readOnly
                style={styles.input}
              />
            </div>
          </div>
          <div style={styles.formItem}>
            <label style={styles.formLabel}>Email address</label>
            <div style={styles.formControl}>
              <input
                type="email"
                value={emailAddress}
                readOnly
                style={styles.input}
              />
            </div>
          </div>
          <div style={styles.formItem}>
            <label style={styles.formLabel}>Your message</label>
            <div style={styles.formControl}>
              <textarea readOnly style={styles.textarea}>
                {message}
              </textarea>
            </div>
          </div>
        </form>
      </div>
    </html>
  );
}

const styles = {
  container: {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  formItem: {
    marginBottom: "20px",
  },
  formLabel: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  formControl: {
    width: "100%",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #cccccc",
    borderRadius: "4px",
    fontSize: "16px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    border: "1px solid #cccccc",
    borderRadius: "4px",
    fontSize: "16px",
    height: "100px",
  },
  button: {
    display: "inline-block",
    padding: "10px 20px",
    color: "#ffffff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
  buttonDisabled: {
    backgroundColor: "#cccccc",
    cursor: "not-allowed",
  },
};
