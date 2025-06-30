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
        if (data.status === 200) {
          setBlog(data.data);
          console.log(" Hello", data);
        }
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
    if (
      typeof contentToRender === "string" &&
      contentToRender.includes("<img")
    ) {
      console.log("true: blog content contains <img>");
    }

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

    // return text.replace(lines.join("\n"), tableHTML);
    return text;
  };

  const contentToRender = isHTML
    ? blog.blogContent
    : convertPlainTextTableToHTML(blog.blogContent);

  return (
    <>
      {/* Blog Banner Image */}
      <div className="responsive-banner-wrapper">
        <div className="container-fluid p-0 ">
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
        <style jsx>{`
          .blog-content img {
            display: block;
            margin: 20px auto;
            max-width: 100%;
            height: auto;
            object-fit: contain;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
          .responsive-banner-wrapper {
            width: 100%;
          }

          @media (max-width: 576px) {
            .responsive-banner-wrapper {
              width: 275%;
            }
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
            max-width: 100%;
            overflow-x: auto;
            display: block;
          }

          .blog-content iframe {
            display: block;
            margin: 20px auto;
            max-width: 100%;
            width: 100%;
            height: auto;
          }
        `}</style>

        {/* Blog Content */}
        <div className=" my-5 px-3">
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
      </div>
    </>
  );
}

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
//         if (data.status === 200) {
//           setBlog(data.data);
//           console.log(" Hello", data);
//         }
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
//       {/* Blog Banner Image */}
//       <div className="container-fluid p-0">
//         {blog.image ? (
//           <img
//             src={blog.image}
//             alt="Blog Banner"
//             className="img-fluid w-100"
//             style={{ objectFit: "cover", maxHeight: "450px" }}
//           />
//         ) : (
//           <div
//             className="bg-secondary d-flex align-items-center justify-content-center text-white w-100"
//             style={{ height: "250px" }}
//           >
//             No Image Available
//           </div>
//         )}
//       </div>

//       {/* Custom Styles */}
//       <style jsx>{`
//         .blog-content {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         .blog-content img {
//           display: block;
//           margin: 20px auto;
//           max-width: 100%;
//           height: auto;
//           object-fit: contain;
//           border-radius: 8px;
//           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//         }

//         .blog-content p {
//           text-align: justify;
//           line-height: 1.6;
//           width: 100%;
//         }

//         .blog-content h1,
//         .blog-content h2,
//         .blog-content h3 {
//           text-align: center;
//           margin-top: 1.5rem;
//           margin-bottom: 1rem;
//         }

//         .blog-content table {
//           margin: 20px auto;
//           max-width: 100%;
//           overflow-x: auto;
//           display: block;
//         }

//         .blog-content iframe {
//           display: block;
//           margin: 20px auto;
//           max-width: 100%;
//           width: 100%;
//           height: auto;
//         }
//       `}</style>

//       {/* Blog Content */}
//       <div className="my-5 px-3">
//         <div className="row justify-content-center">
//           <div className="col-lg-10">
//             <div className="card shadow border-0">
//               <div className="card-body">
//                 <h2
//                   className="card-title text-center mb-4"
//                   style={{
//                     color: "#ff7722",
//                     fontSize: "calc(1.8rem + 1vw)",
//                   }}
//                 >
//                   {blog.title}
//                 </h2>

//                 <div
//                   className="card-text blog-content"
//                   style={{ fontSize: "1.05rem" }}
//                 >
//                   {parse(contentToRender)}
//                 </div>

//                 {/* Back Button */}
//                 <div className="text-center mt-5">
//                   <button
//                     className="btn btn-outline-secondary"
//                     onClick={() => router.back()}
//                   >
//                     ← Go Back
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
