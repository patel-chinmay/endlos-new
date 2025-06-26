import Link from "next/link";
import { truncateString } from "../../utils";

export default function Blog({ blog }) {
    return (
        <div className="card">
            <div className="inline-block">
                <img
                    className="card-img-top"
                    src={blog.frontmatter.cover_image}
                    alt="img1"
                    height="220px"
                    width="500px"
                />
                <div className="card-body">

                    <h3>{truncateString(blog.frontmatter.title, 40)}</h3>
                    <p>{truncateString(blog.frontmatter.excerpt, 200)}</p>


                    <Link href={`/company/blog/${blog.slug}`}>
                        <button type="button" className="btn text-white bg-theme">
                            Read More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
