import { useState } from "react";
// import './contact-us-form.css'
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company: "",
    interested: "",
    country: "",
    city: "",
    email: "",
    message: "",
    phone_number: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (formData) => {
    // const Email_Api_Url = "https://seo-api.endlos.live/send-email";
    // const myHeaders = new Headers({
    //   "Content-Type": "application/json",
    // });
    // const requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: JSON.stringify(formData),
    //   redirect: "follow",
    // };
    // fetch(Email_Api_Url, requestOptions).then((response) => response.text());
  };
  const handleSubmit = () => {
    try {
      const isFormValid = Object.values(formData)
        .filter((e) => typeof e == "string")
        .every((value) => value.trim() !== "");

      if (!formData.agreed) {
        throw new Error("Please agree to the terms and conditions");
      } else if (!isFormValid) {
        throw new Error("Please fill in all fields");
      } else {
        sendEmail(formData);
        toast.success("Thanks For Choosing us!!");

        // Set all form data values to empty strings
        const formDataEmptyStrings = Object.fromEntries(
          Object.entries(formData).map(([key]) => [key, ""])
        );
        formDataEmptyStrings.agreed = false;

        // Update the form data state with empty strings
        setFormData(formDataEmptyStrings);
      }
    } catch (error) {
      toast.error(
        error.message ? error.message : "Something went wrong pls retry"
      );
    }
  };
  return (
    <div className="contact-us-section pt-5">
      <h3 className="text-center opacity-75">Contact Us</h3>
      <div className="container px-lg-5">
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={formData.gender}
          onChange={handleChange}
          className="d-flex flex-row flex-lg-row "
        >
          <FormControlLabel
            name="gender"
            value="mr."
            control={<Radio />}
            label="Mr."
          />
          <FormControlLabel
            name="gender"
            value="ms"
            control={<Radio />}
            label="Ms."
          />
          <FormControlLabel
            name="gender"
            value="mrs"
            control={<Radio />}
            label="Mrs."
          />
        </RadioGroup>
        <div className="form-grid my-4">
          <TextField
            fullWidth
            label="First name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            variant="filled"
          />
          <TextField
            fullWidth
            value={formData.last_name}
            onChange={handleChange}
            label="Last name"
            name="last_name"
            variant="filled"
          />
          <TextField
            value={formData.company}
            onChange={handleChange}
            name="company"
            fullWidth
            label="Company"
            variant="filled"
          />

          <TextField
            fullWidth
            name="city"
            value={formData.city}
            onChange={handleChange}
            label="City"
            variant="filled"
          />
          <TextField
            fullWidth
            name="country"
            value={formData.country}
            onChange={handleChange}
            label="Country"
            variant="filled"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="filled"
          />
          <Grid container>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  value={formData.phone_number}
                  name="phone_number"
                  onChange={handleChange}
                  label="Phone"
                  variant="filled"
                />
              </Grid>
            </Grid>
          </Grid>
          <FormControl variant="filled">
            <InputLabel id="demo-simple-select-filled-label">
              I am Interested In Following Group
            </InputLabel>
            <Select
              name="interested"
              value={formData.interested}
              onChange={handleChange}
            >
              <MenuItem value="RVM">RVM</MenuItem>
              <MenuItem value="OWC">OWC</MenuItem>
              <MenuItem value="Other">Other Products and Services</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Grid item sm={6}>
          <TextField
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            multiline
            label="Your Enquiry"
            InputProps={{
              rows: 10,
            }}
          />
        </Grid>
        <FormGroup className="py-2">
          <FormControlLabel
            control={
              <Checkbox
                name="agreed"
                checked={formData.agreed}
                onChange={() =>
                  setFormData((prevData) => ({
                    ...prevData,
                    agreed: !prevData.agreed,
                  }))
                }
              />
            }
            label="I Agree"
          />
          <FormLabel>
            I hereby consent to the data collected above being processed in
            accordance with the Privacy Policy for processing my request. This
            consent may be withdrawn at any time with future effect.
          </FormLabel>
          <strong className="my-2">Consent*</strong>
        </FormGroup>
        <button onClick={() => handleSubmit()} className="form-btn rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
