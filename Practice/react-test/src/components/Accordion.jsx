import React, { useEffect, useState } from 'react';

const Accordion = () => {
    const [posts, setPosts] = useState([]);
    const [open, setOpen] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.log(error);
            };
        };
        fetchData();
    }, []);

    const toggleAccordion = (index) => {
        setOpen(index === open ? null : index);
    };

  return (
    <div>
      <div>
        {posts.map((post, index) => (
            <div key={post.id}>
                <div onClick={() => toggleAccordion(index)}>
                    <h2>{post.title}</h2>
                </div>
                {open === index && (
                    <div>
                        <p>{post.body}</p>
                    </div>
                )}
            </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
