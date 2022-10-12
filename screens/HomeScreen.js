import { useState } from 'react';
import { useSelector } from "react-redux";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { FAB, Icon, BottomSheet } from "@rneui/base";

import ListItem from "../components/ListItem";

function HomeScreen(props) {
  
  const { navigation, route } = props;
  const listItems = useSelector((state) => state.listItems);
  const [ menuVisible, setMenuVisible ] = useState(false);

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ListMaker 2000</Text>
        <TouchableOpacity
          onPress={()=>{setMenuVisible(true)}}
        >
          <Icon 
            name="ellipsis-horizontal-circle-outline"
            type="ionicon"
            color="black"
            size={25}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={listItems}
          renderItem={({item})=>{
            return (
              <ListItem item={item} navigation={navigation} />
            );
          }}
        />
      </View>
      <FAB
        title='Add'
        color='darkblue'
        onPress={()=>{
          navigation.navigate('Details', {
            item: {key: -1, text: ''}
          });
        }}
      />
      <BottomSheet 
        modalProps={{}} 
        isVisible={menuVisible}
        containerStyle={styles.menuContainer}  
        onBackdropPress={()=>{setMenuVisible(false)}}
      >
        <TouchableOpacity>
          <Text style={styles.menuText}>Edit Tags</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{setMenuVisible(false)}}
          style={{backgroundColor: 'pink'}}
        >
          <Text  style={styles.menuText}>Cancel</Text>
        </TouchableOpacity>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    flex: 0.1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: '10%',
//    paddingBottom: '5%',
    paddingTop: '25%'
  },
  headerText: {
    fontSize: 32
  },
  listContainer: {
    flex: 0.6,
    width: '100%',
    paddingLeft: '10%',
    paddingTop: '10%'
  },
  menuContainer: {
    padding: '5%'
  },
  menuText: {
    fontSize: 32
  }
});

export default HomeScreen;