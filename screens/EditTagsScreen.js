import { useState } from 'react';
import { useSelector } from "react-redux";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { FAB, Icon, BottomSheet } from "@rneui/base";

function EditTagsScreen({navigation}) {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Edit Tags</Text>
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
              <ListItem appState={props.appState} item={item} navigation={navigation} />
            );
          }}
        />
      </View>
      <FAB
        title='Add'
        color='darkblue'
        onPress={()=>{
          navigation.navigate('Details', {
            itemKey:  -1
          });
        }}
      />
    </View>
  );
}

