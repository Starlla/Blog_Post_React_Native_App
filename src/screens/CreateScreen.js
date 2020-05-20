import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import IndexScreen from "./IndexScreen";
import {Context} from "../context/BlogContext";

const CreateScreen = ({navigation}) => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {addBlogPost} = useContext(Context);


    navigation.getParam('id');
    return(
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText ={(text) => setTitle(text)}/>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText ={(content) => setContent(content)}/>
            <Button title="ADD BLOG POST" onPress={() => addBlogPost(title, content, () =>{
                navigation.navigate('Index');
            })} />
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding:5,
        margin:5,
    },
    label:{
        fontSize: 20,
        marginBottom: 5,
        marginLeft:5
    }
});
export default CreateScreen;