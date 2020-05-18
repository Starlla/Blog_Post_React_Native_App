import React, {useReducer} from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
    // const [blogPosts, setBlogPosts] = useState([]);

    const blogReducer = (state, action) => {
        switch (action.type) {
            case 'add_blogpost':
                return [...state, {title:`Blog Post #${state.length + 1}`}]
            default:
                return state;
        }
    };

    const [blogPosts, dispatch] = useReducer(blogReducer,[]);

    // const addBlogPost = () => {
    //     setBlogPosts([...blogPosts, {title:`Blog Post #${blogPosts.length + 1}`}]);
    // };



    const addBlogPost = () => {
        dispatch({type: 'add_blogpost'});
    }


    return <BlogContext.Provider value={{data: blogPosts, addBlogPost: addBlogPost}}>
        {children}
    </BlogContext.Provider>;
};

export default  BlogContext;

