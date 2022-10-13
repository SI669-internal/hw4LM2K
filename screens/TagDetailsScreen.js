import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Input, Button } from '@rneui/themed';
import { useSelector, useDispatch } from 'react-redux';

function TagDetailsScreen(props) {

  const listItems = useSelector(state=>state.listItems);
  const allTags = useSelector(state=>state.tags);
  const dispatch = useDispatch();

  const { navigation, route } = props;
  const { tag } = route.params;

  const [inputText, setInputText] = useState(tag.tagName);
  const color = 'gray';

  const addTag = (tagName, tagColor) => {

  }

  const updateTag = (tag, tagName=tag.tagName, tagColor=tag.color) => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Edit Tag
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder='New Tag'
          value={inputText}
          onChangeText={(text)=>setInputText(text)}
          style={styles.inputStyle}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title='Cancel'
          onPress={()=>{
            navigation.navigate('SettingsHome');
          }}
        />
        <Button
          title='Save'
          onPress={()=>{
            if (item.key === -1) {
              addTag(inputText, color);
            } else {
              updateTag(tag, inputText, color);
            }
            navigation.navigate('SettingsHome');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingTop: '20%'
  }, 
  header: {
    flex: 0.1,
    justifyContent: 'flex-end',
    paddingBottom: '5%'
  },
  headerText: {
    fontSize: 32
  },
  inputContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%'
  },
  tagContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  tagLabel: {
    margin: 3,
    padding: 3, 
    backgroundColor: 'lightgray',
    borderRadius: 6,
    borderWidth: 0
  },
  buttonContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%'
  }
});

export default TagDetailsScreen;