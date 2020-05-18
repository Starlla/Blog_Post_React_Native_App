import React, {useReducer} from 'react';
import createDataContext from "./createDataContext";

// const BlogContext = React.createContext();

const addBlogPost = (dispatch) => {
    return () =>{
        dispatch({type: 'add_blogpost'});
    };

};

const deleteBlogPost = (dispatch) => {
    return (id) =>{
        dispatch({type: 'delete_blogpost', payload: id});
    };

};

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, {id: Math.floor(Math.random() * 99999), title:`Blog Post #${state.length + 1}`}];
        case 'delete_blogpost':
            return state.filter((blogPost)=> blogPost.id !== action.payload);
        default:
            return state;
    };
};
//
// export const BlogProvider = ({children}) => {
    // const [blogPosts, setBlogPosts] = useState([]);


    //
    // const [blogPosts, dispatch] = useReducer(blogReducer,[]);

    // const addBlogPost = () => {
    //     setBlogPosts([...blogPosts, {title:`Blog Post #${blogPosts.length + 1}`}]);
    // };


    //
    // return <BlogContext.Provider value={{data: blogPosts, addBlogPost: addBlogPost}}>
    //     {children}
    // </BlogContext.Provider>;
// };

export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost, deleteBlogPost}, []);

