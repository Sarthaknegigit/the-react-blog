import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const[title, setTitle] = useState('hello');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('Sarthak');
    const[isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handelSubmit = (e) => {
        e.preventDefault();

        setIsPending(true);
        const blog = { title, body, author};

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers:{"Content-Type": 'application/json'},
            body: JSON.stringify(blog)
        }).then(()=> {

            console.log('new blog added');
            setIsPending(false);
            history.push('/');
        })

    }
    return (

        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handelSubmit}>
                <label> Blog Title</label>
                <input 
                    type="text"
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Author</label>
                <input 
                    type='text'
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding... Blog</button> }

            </form>
        </div>

     );
}

export default Create;