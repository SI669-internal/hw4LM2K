import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View, Text, FlatList} from "react-native";
import { Input } from '@rneui/themed';

import TagListItem from '../components/TagListItem';
import { SET_NICKNAME } from "../Reducer";
import { useState } from "react";

function SettingsScreen({navigation}) {

  let tags = useSelector(state=>state.tags);
  let nickname = useSelector(state=>state.nickname);
  let dispatch = useDispatch();
  const [ inputText, setInputText ] = useState(nickname);

  const updateNickname = (text) => {
    console.log('updating nicknameL:', text);
    dispatch({
      type: SET_NICKNAME,
      payload: {
        nickname: text
      }
    });
    setInputText(text);
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={{fontSize: 18}}>Nickname:</Text>
        <Input 
          style={styles.textInput}
          value={inputText}
          onChangeText={(text)=>updateNickname(text)}
        />
      </View>
      <View style={styles.listContainer}>
        <Text>Tags:</Text>
        <FlatList
          data={tags}
          renderItem={({item}) => {
            return (
              <TagListItem tag={item} navigation={navigation}/>
            )
          }}
        />
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: '20%'
  }, 
  header: {
    flex: 0.1,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '5%'
  },
  headerText: {
    fontSize: 32
  },
  inputContainer: {
    flex: 0.1,
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '5%',
    paddingHorizontal: '5%',
    backgroundColor: 'pink'
  },
  textInput: {
    fontSize: 18,
    backgroundColor: 'tan'
  },
  listContainer: {
    flex: 0.6,
    width: '100%',
    paddingLeft: '10%',
    paddingTop: '10%'
  },
});

export default SettingsScreen;
