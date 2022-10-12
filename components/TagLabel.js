import { View, Text, StyleSheet } from "react-native";


function tagNameFromId(tagId, tagList) {
  let theTag = tagList.find(item=>(item.key===tagId));
  return theTag ? theTag.tagName : '';
}

function TagLabel({itemTags, allTags}) {
  if (itemTags.length === 0) {
    return (
      <View/>
    );    
  } 
  if (itemTags.length >= 1) {
    return (
      <View style={styles.tagLabel}>
        <Text style={styles.tagLabelText}>{ tagNameFromId(itemTags[0], allTags) } 
          { itemTags.length > 1 ? (' +' + (itemTags.length - 1)) : '' }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tagLabel: {
    padding: 5,
    borderRadius: 6,
    backgroundColor: 'lightblue',
  },
  tagLabelText: {
    fontSize: 10
  }
});

export { TagLabel };