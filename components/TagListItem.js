
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';


function TagListItem(props) {

  const { tag, navigation } = props;

  const deleteTag = (tag) => {

  }

  return (
    <View style={styles.listItemContainer}>
      <TouchableOpacity 
        style={styles.li1}
        onPress={()=>{
          navigation.navigate('TagDetails', { 
            tag: tag 
          });
        }}  
      >
        <Text style={styles.listItemText}>{tag.tagName}</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.li3}
        onPress={()=>{
          deleteTag(tag);
        }}  
      >
        <Icon 
          name="trash"
          type="font-awesome"
          color="black"
          size={25}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    //padding: '1%',
  },
  li1: {
    flex: 0.8, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: '3%'
  },
  li2: {
    flex: 0.2,
    backgroundColor: 'white'
  },
  listItemText: {
    fontSize: 24
  },
});

export default TagListItem;