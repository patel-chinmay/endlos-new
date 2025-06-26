// const handleSubmit = async () => {
//   const { name, email, phone, message } = formData;

//   if (!name || !email || !phone || !message) {
//     toast.error("Please fill in all fields.");
//     return;
//   }

//   try {
//     const res = await fetch("/api/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, email, phone, message }),
//     });

//     const data = await res.json();
//     if (data.success) {
//       toast.success("Form submitted successfully!");
//       setFormData({ name: "", email: "", phone: "", message: "" });
//     } else {
//       toast.error("Error submitting form.");
//     }
//   } catch (error) {
//     toast.error("Failed to submit. Try again later.");
//   }
// };
