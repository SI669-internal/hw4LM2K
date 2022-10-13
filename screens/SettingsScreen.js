import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View, Text, FlatList} from "react-native";
import { Input, Button } from '@rneui/themed';

import TagListItem from '../components/TagListItem';
import { SET_NICKNAME } from "../Reducer";

function SettingsScreen({navigation}) {

  let tags = useSelector(state=>state.tags);
  let nickname = useSelector(state=>state.nickname);
  let dispatch = useDispatch();

  const updateNickname = (text) => {
    console.log('updating nicknameL:', text);
    dispatch({
      type: SET_NICKNAME,
      payload: {
        nickname: text
      }
    });
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.settingsHeader}>Nickname:</Text>
        <Input 
          style={styles.textInput}
          value={nickname}
          onChangeText={(text)=>updateNickname(text)}
        />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.settingsHeader}>Tags:</Text>
        <FlatList
          data={tags}
          contentContainerStyle={{paddingLeft: '5%'}}
          renderItem={({item}) => {
            return (
              <TagListItem tag={item} navigation={navigation}/>
            )
          }}
        />
      </View>
      <Button
        title='Add Tag'
        onPress={()=>{
          navigation.navigate('TagDetails', {
            tag: {key: -1, tagName: '', color: colors[0]}
          });
        }}
      />
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
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingBottom: '5%',
    paddingHorizontal: '5%',
  },
  settingsHeader: {
    fontSize: 22
  },
  textInput: {
    fontSize: 18,
  },
  listContainer: {
    flex: 0.6,
    width: '100%',
    paddingLeft: '5%',
    paddingTop: '10%'
  },
});

export default SettingsScreen;
