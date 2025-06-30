// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import parse from "html-react-parser";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function BlogDetailsPage() {
//   const router = useRouter();
//   const { id } = router.query;

//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     if (!id) return;
//     fetch(`http://localhost:3002/api/blogs/public/view/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status === 200) setBlog(data.data);
//       })
//       .catch((err) => console.error("Failed to fetch blog details:", err));
//   }, [id]);

//   if (!blog) {
//     return (
//       <div className="container py-5 text-center">
//         <h3>Loading blog details...</h3>
//       </div>
//     );
//   }

//   const isHTML = /<\/?[a-z][\s\S]*>/i.test(blog.blogContent);

//   // Convert plain text tables to HTML table (basic detection)
//   const convertPlainTextTableToHTML = (text) => {
//     const lines = text.split("\n").filter((line) => line.trim() !== "");
//     if (lines.length < 2) return text; // not enough rows to be a table

//     const headers = lines[0].split(/\s{2,}|\t/);
//     const rows = lines.slice(1).map((line) => line.split(/\s{2,}|\t/));

//     const tableHTML = `
//       <table class="table table-bordered table-striped table-sm mt-3">
//         <thead class="table-light">
//           <tr>${headers.map((h) => `<th>${h.trim()}</th>`).join("")}</tr>
//         </thead>
//         <tbody>
//           ${rows
//             .map(
//               (row) =>
//                 `<tr>${row
//                   .map((cell) => `<td>${cell.trim()}</td>`)
//                   .join("")}</tr>`
//             )
//             .join("")}
//         </tbody>
//       </table>
//     `;

//     return text.replace(lines.join("\n"), tableHTML);
//   };

//   const contentToRender = isHTML
//     ? blog.blogContent
//     : convertPlainTextTableToHTML(blog.blogContent);

//   return (
//     <div className="container my-5">
//       <div className="row" style={{ marginTop: "70px" }}>
//         <div className="col-12 col-lg-10 mx-auto">
//           <div className="card shadow border-0">
//             {blog.image ? (
//               <img
//                 src={blog.image}
//                 alt="Blog Banner"
//                 className="card-img-top img-fluid"
//                 style={{ maxHeight: "100%", objectFit: "cover" }}
//               />
//             ) : (
//               <div
//                 className="bg-secondary d-flex align-items-center justify-content-center"
//                 style={{ height: "250px", color: "white" }}
//               >
//                 No Image Available
//               </div>
//             )}
//             <div className="card-body">
//               <h2 className="card-title text-primary text-center mb-3">
//                 {blog.title}
//               </h2>
//               {/* <p className="text-muted text-center">
//                 <strong>Category:</strong> {blog.categoryId?.name || "N/A"} |{" "}
//                 <strong>By:</strong> {blog.postedBy} | <strong>On:</strong>{" "}
//                 {new Date(blog.postedOn).toLocaleDateString()}
//               </p> */}
//               <hr />
//               <div
//                 className="card-text blog-content"
//                 style={{ fontSize: "1.1rem", textAlign: "left" }}
//               >
//                 {parse(contentToRender)}
//               </div>
//               <hr />
//               {/* <p className="text-muted text-center">
//                 <strong>Keywords:</strong> {blog.keywords} <br />
//                 <strong>Description:</strong> {blog.description}
//               </p> */}
//               <div className="text-center">
//                 <button
//                   className="btn btn-secondary mt-3"
//                   onClick={() => router.back()}
//                 >
//                   ← Go Back
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import parse from "html-react-parser";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function BlogDetailsPage() {
//   const router = useRouter();
//   const { id } = router.query;

//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     if (!id) return;
//     fetch(`http://localhost:3002/api/blogs/public/view/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status === 200) setBlog(data.data);
//       })
//       .catch((err) => console.error("Failed to fetch blog details:", err));
//   }, [id]);

//   if (!blog) {
//     return (
//       <div className="container py-5 text-center">
//         <h3>Loading blog details...</h3>
//       </div>
//     );
//   }

//   const isHTML = /<\/?[a-z][\s\S]*>/i.test(blog.blogContent);

//   const convertPlainTextTableToHTML = (text) => {
//     const lines = text.split("\n").filter((line) => line.trim() !== "");
//     if (lines.length < 2) return text;

//     const headers = lines[0].split(/\s{2,}|\t/);
//     const rows = lines.slice(1).map((line) => line.split(/\s{2,}|\t/));

//     const tableHTML = `
//       <table class="table table-bordered table-striped table-sm mt-3">
//         <thead class="table-light">
//           <tr>${headers.map((h) => `<th>${h.trim()}</th>`).join("")}</tr>
//         </thead>
//         <tbody>
//           ${rows
//             .map(
//               (row) =>
//                 `<tr>${row
//                   .map((cell) => `<td>${cell.trim()}</td>`)
//                   .join("")}</tr>`
//             )
//             .join("")}
//         </tbody>
//       </table>
//     `;

//     return text.replace(lines.join("\n"), tableHTML);
//   };

//   const contentToRender = isHTML
//     ? blog.blogContent
//     : convertPlainTextTableToHTML(blog.blogContent);

//   return (
//     <>
//       {/* Full-width Image */}
//       {blog.image ? (
//         <div style={{ width: "100%", marginTop: "58px" }}>
//           <img
//             src={blog.image}
//             alt="Blog Banner"
//             style={{
//               width: "100%",
//               height: "auto",
//               objectFit: "cover",
//               maxHeight: "450px",
//             }}
//           />
//         </div>
//       ) : (
//         <div
//           className="bg-secondary d-flex align-items-center justify-content-center"
//           style={{ height: "250px", color: "white", width: "100%" }}
//         >
//           No Image Available
//         </div>
//       )}

//       {/* Blog Content */}
//       <div className="container my-5 px-3">
//         <div
//           className="card shadow border-0 mx-auto w-100"
//           style={{ maxWidth: "100%" }}
//         >
//           <div className="card-body">
//             <h2
//               className="card-title text-center mb-3"
//               style={{
//                 color: "#ff7722",
//                 fontSize: "calc(2.325rem + .9vw)",
//               }}
//             >
//               {blog.title}
//             </h2>
//             {/* Blog Content */}
//             <div
//               className="card-text blog-content"
//               style={{ fontSize: "1.1rem" }}
//             >
//               {parse(contentToRender)}
//             </div>

//             {/* Back Button */}
//             <div className="text-center mt-4">
//               <button
//                 className="btn btn-secondary"
//                 onClick={() => router.back()}
//               >
//                 ← Go Back
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BlogDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:3002/api/blogs/public/view/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) setBlog(data.data);
      })
      .catch((err) => console.error("Failed to fetch blog details:", err));
  }, [id]);

  if (!blog) {
    return (
      <div className="container py-5 text-center">
        <h3>Loading blog details...</h3>
      </div>
    );
  }

  const isHTML = /<\/?[a-z][\s\S]*>/i.test(blog.blogContent);

  const convertPlainTextTableToHTML = (text) => {
    const lines = text.split("\n").filter((line) => line.trim() !== "");
    if (lines.length < 2) return text;

    const headers = lines[0].split(/\s{2,}|\t/);
    const rows = lines.slice(1).map((line) => line.split(/\s{2,}|\t/));

    const tableHTML = `
      <table class="table table-bordered table-striped table-sm mt-3">
        <thead class="table-light">
          <tr>${headers.map((h) => `<th>${h.trim()}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) =>
                `<tr>${row
                  .map((cell) => `<td>${cell.trim()}</td>`)
                  .join("")}</tr>`
            )
            .join("")}
        </tbody>
      </table>
    `;

    return text.replace(lines.join("\n"), tableHTML);
  };

  const contentToRender = isHTML
    ? blog.blogContent
    : convertPlainTextTableToHTML(blog.blogContent);

  return (
    <>
      {/* Blog Banner Image */}
      <div className="container-fluid p-0">
        {blog.image ? (
          <img
            src={blog.image}
            alt="Blog Banner"
            className="img-fluid w-100"
            style={{ objectFit: "cover", maxHeight: "450px" }}
          />
        ) : (
          <div
            className="bg-secondary d-flex align-items-center justify-content-center text-white w-100"
            style={{ height: "250px" }}
          >
            No Image Available
          </div>
        )}
      </div>

      {/* Blog Content */}
      <div className="container my-5 px-3">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow border-0">
              <div className="card-body">
                <h2
                  className="card-title text-center mb-4"
                  style={{
                    color: "#ff7722",
                    fontSize: "calc(1.8rem + 1vw)",
                  }}
                >
                  {blog.title}
                </h2>

                <div
                  className="card-text blog-content"
                  style={{ fontSize: "1.05rem" }}
                >
                  {parse(contentToRender)}
                </div>

                {/* Back Button */}
                <div className="text-center mt-5">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => router.back()}
                  >
                    ← Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Styling */}
      <style jsx>{`
        .blog-content img {
          display: block;
          margin: 20px auto;
          max-width: 100% !important;
          width: auto !important;
          height: auto !important;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .blog-content iframe {
          display: block;
          margin: 20px auto;
          max-width: 100%;
          width: 100%;
          height: auto;
        }

        .blog-content p {
          text-align: justify;
          line-height: 1.6;
        }

        .blog-content h1,
        .blog-content h2,
        .blog-content h3 {
          text-align: center;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
        }

        .blog-content table {
          margin: 20px auto;
        }
      `}</style>
    </>
  );
}
